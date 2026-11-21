import { vi } from 'vitest'
import { range } from '../arr/range'
import { makeRand, randGen, randSeed, randSeedAdv } from '../rand/make'
import {
  choiceSeed,
  randRangeSeed,
  sampleSeed,
  shuffleSeed,
} from '../rand/seed'

test('rand', () => {
  const paralels = range(10).map((n) => randSeed(String(n)))

  expect(randSeed(1)).toMatchInlineSnapshot(`0.10763363190926611`)
  expect(randSeed('1')).toMatchInlineSnapshot(`0.10763363190926611`)
  expect(paralels).toMatchInlineSnapshot(`
    [
      0.6223415364511311,
      0.10763363190926611,
      0.6173454828094691,
      0.20114491414278746,
      0.24068244267255068,
      0.20162321394309402,
      0.9460829121526331,
      0.5788793119136244,
      0.8480006165336818,
      0.4771780197042972,
    ]
  `)
})
test('seedRandAdvance', () => {
  const res = randSeedAdv('abc')

  expect(res.num).toMatchInlineSnapshot(`0.8435336351394653`)
  expect(res.seed).toMatchInlineSnapshot(`"abc"`)
})

test('randRange', () => {
  expect(randRangeSeed(20, 30, 'a1')).toMatchInlineSnapshot(`20`)
})

test('shuffle', () => {
  const res = shuffleSeed([1, 2, 3, 4, 5], 'b')

  expect(res).toMatchInlineSnapshot(`
    [
      1,
      5,
      4,
      2,
      3,
    ]
  `)
})

test('sample', () => {
  const res3 = sampleSeed([1, 2, 3, 4, 5], 3, 'a')

  expect(res3).toMatchInlineSnapshot(`
    [
      2,
      3,
      5,
    ]
  `)
})
test('choice', () => {
  const res = choiceSeed([1, 2, 3, 4, 5], 'a')

  expect(res).toMatchInlineSnapshot(`4`)
})
test('randGen', () => {
  const r = randGen('a')
  const res = [r.next(), r.next(), r.next()].map((v) => v.value)

  expect(res).toMatchInlineSnapshot(`
    [
      0.7485405690968037,
      0.418858892749995,
      0.5615106110926718,
    ]
  `)
})

describe('makeRand', () => {
  beforeEach(() => {
    vi.spyOn(global.Date, 'now').mockReturnValue(123456)
  })

  afterEach(() => {
    vi.spyOn(global.Math, 'random').mockRestore()
  })
  it('basic', () => {
    const { fn: random, seed } = makeRand('a')
    const res = [random(), random(), random()]

    expect(seed).toBe('a')
    expect(res).toMatchInlineSnapshot(`
      [
        0.7485405690968037,
        0.418858892749995,
        0.5615106110926718,
      ]
    `)
  })
  it('seed by Date', () => {
    const { fn: random, seed } = makeRand()
    const res = [random(), random(), random()]

    expect(seed).toBe('123456')
    expect(res).toMatchInlineSnapshot(`
      [
        0.7604905155021697,
        0.44230703148059547,
        0.3832429426256567,
      ]
    `)
  })
})

describe('distribution', () => {
  const SAMPLE_SIZE = 10000
  // 10 bins x 1000 expected; ±15% is far outside sfc32 noise but catches broken mixing
  const BIN_TOLERANCE = 150

  it('stays in [0, 1) and is roughly uniform', () => {
    const { fn } = makeRand('dist')
    const bins = Array(10).fill(0)

    for (let i = 0; i < SAMPLE_SIZE; i++) {
      const v = fn()

      expect(v).toBeGreaterThanOrEqual(0)
      expect(v).toBeLessThan(1)
      bins[Math.floor(v * 10)]++
    }
    bins.forEach((count) => {
      expect(Math.abs(count - SAMPLE_SIZE / 10)).toBeLessThan(BIN_TOLERANCE)
    })
  })

  it('different seeds give different streams', () => {
    expect(randSeed('a')).not.toBe(randSeed('b'))
    expect(randSeed('')).not.toBe(randSeed('a'))
  })
})

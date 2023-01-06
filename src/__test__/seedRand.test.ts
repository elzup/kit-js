import {
  choiseSeed,
  makeRand,
  randGen,
  randRangeSeed,
  randSeed,
  randSeedAdv,
  randSeedBuf,
  range,
  sampleSeed,
  shuffleSeed,
} from '../index'

test('rand', () => {
  const paralels = range(10).map((n) => randSeed(String(n)))

  expect(randSeed(1)).toMatchInlineSnapshot(`0.4519428262831776`)
  expect(randSeed('1')).toMatchInlineSnapshot(`0.4519428262831776`)
  expect(paralels).toMatchInlineSnapshot(`
    Array [
      0.402037404151159,
      0.4519428262831776,
      0.22800373001303437,
      0.5205082477721134,
      0.466661589810005,
      0.48855864594491233,
      0.06935065401034647,
      0.6070710700920152,
      0.19632543153215073,
      0.15280676466580323,
    ]
  `)
})
test('seedRandBuf', () => {
  const resBuf = randSeedBuf('abc')

  expect(resBuf.toString('base64')).toMatchInlineSnapshot(
    `"ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0="`
  )
})
test('seedRandAdvance', () => {
  const res = randSeedAdv('abc')

  expect(res.num).toMatchInlineSnapshot(`0.7464366390494545`)
  expect(res.seed).toMatchInlineSnapshot(`"abc"`)
  expect(res.buf.toString('base64')).toMatchInlineSnapshot(
    `"ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0="`
  )
})

test('randRange', () => {
  expect(randRangeSeed(20, 30, 'a1')).toMatchInlineSnapshot(`23`)
})

test('shuffle', () => {
  const res = shuffleSeed([1, 2, 3, 4, 5], 'b')

  expect(res).toMatchInlineSnapshot(`
    Array [
      3,
      4,
      2,
      1,
      5,
    ]
  `)
})

test('sample', () => {
  const res3 = sampleSeed([1, 2, 3, 4, 5], 3, 'a')

  expect(res3).toMatchInlineSnapshot(`
    Array [
      2,
      3,
      5,
    ]
  `)
})
test('choise', () => {
  const res = choiseSeed([1, 2, 3, 4, 5], 'a')

  expect(res).toMatchInlineSnapshot(`5`)
})
test('randGen', () => {
  const r = randGen('a')
  const res = [r.next(), r.next(), r.next()].map((v) => v.value)

  expect(res).toMatchInlineSnapshot(`
    Array [
      0.873368340806717,
      0.4372768375470124,
      0.28616679732544187,
    ]
  `)
})

describe('makeRand', () => {
  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockReturnValue(123456)
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })
  it('basic', () => {
    const { fn: random, seed } = makeRand('a')
    const res = [random(), random(), random()]

    expect(seed).toBe('a')
    expect(res).toMatchInlineSnapshot(`
          Array [
            0.873368340806717,
            0.4372768375470124,
            0.28616679732544187,
          ]
      `)
  })
  it('seed by Date', () => {
    const { fn: random, seed } = makeRand()
    const res = [random(), random(), random()]

    expect(seed).toBe('123456')
    expect(res).toMatchInlineSnapshot(`
      Array [
        0.41013306719015047,
        0.11510874444732705,
        0.8396802631114423,
      ]
    `)
  })
})

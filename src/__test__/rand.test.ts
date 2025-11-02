import { choice } from '../rand/choice'
import { randRange } from '../rand/range'
import { sample } from '../rand/sample'
import { shuffle } from '../rand/shuffle'
import {
  choiceSeed,
  randRangeSeed,
  sampleSeed,
  shuffleSeed,
} from '../rand/seed'

describe('randnext', () => {
  describe('use Math.random', () => {
    beforeEach(() => {
      jest
        .spyOn(global.Math, 'random')
        .mockReturnValueOnce(0.333)
        .mockReturnValueOnce(0.111)
        .mockReturnValueOnce(0.444)
        .mockReturnValueOnce(0.555)
        .mockReturnValueOnce(0.999)
        .mockReturnValue(0.123456789)
    })

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore()
    })
    it('randRange', () => {
      const v1 = randRange(10)
      const v2 = randRange(20, 30)

      expect(v1).toMatchInlineSnapshot(`3`)
      expect(v2).toMatchInlineSnapshot(`21`)
    })

    it('shuffle', () => {
      const res = shuffle([1, 2, 3, 4, 5])

      expect(res).toStrictEqual([2, 1, 3, 4, 5])
    })

    it('sample', () => {
      const res3 = sample([1, 2, 3, 4, 5], 3)

      expect(res3).toStrictEqual([1, 2, 5])
    })
    it('choice', () => {
      const res = choice([1, 2, 3, 4, 5])

      expect(res).toMatchInlineSnapshot(`2`)
    })
  })

  it('randRange', () => {
    const v1 = randRange(10, () => 0.42)
    const v2 = randRange(20, 30, () => 0.5)

    expect(v1).toMatchInlineSnapshot(`4`)
    expect(v2).toMatchInlineSnapshot(`25`)
  })
  it('shuffle', () => {
    let i = 0
    const res = shuffle([1, 2, 3, 4, 5], () => i--)

    expect(res).toStrictEqual([5, 4, 3, 2, 1])
  })

  it('sample', () => {
    const res3 = sample([1, 2, 3, 4, 5], 3, () => 0.5)

    expect(res3).toStrictEqual([1, 3, 5])
  })
  it('choice', () => {
    const res = choice([1, 2, 3, 4, 5], () => 0.3)

    expect(res).toMatchInlineSnapshot(`2`)
  })
})

describe('rand seed', () => {
  it('randRangeSeed', () => {
    const v1 = randRangeSeed(0, 10, 'a1')
    const v2 = randRangeSeed(20, 30, 'a1')

    expect(v1).toMatchInlineSnapshot(`3`)
    expect(v2).toMatchInlineSnapshot(`23`)
  })

  it('shuffleSeed', () => {
    const res = shuffleSeed([1, 2, 3, 4, 5], 'b')

    expect(res).toMatchInlineSnapshot(`
      [
        3,
        4,
        2,
        1,
        5,
      ]
    `)
  })

  it('sampleSeed', () => {
    const res1 = sampleSeed([1, 2, 3, 4, 5], 1, 'a')
    const res3 = sampleSeed([1, 2, 3, 4, 5], 3, 'a')

    expect(res1).toMatchInlineSnapshot(`
      [
        3,
      ]
    `)
    expect(res3).toMatchInlineSnapshot(`
      [
        2,
        3,
        5,
      ]
    `)
  })
  it('choiceSeed', () => {
    const res = choiceSeed([1, 2, 3, 4, 5], 'a')

    expect(res).toMatchInlineSnapshot(`5`)
  })
})

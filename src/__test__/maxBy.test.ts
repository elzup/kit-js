import { farBy, maxBy, minBy, nearBy } from '../index'

describe('minBy', () => {
  it('order', () => {
    const firstMin = minBy([1, 2, 3, 4, 5], (v) => v)
    const lastMin = minBy([7, 8, 9, 10, 1], (v) => v)
    const middleMin = minBy([2, 3, 1, 5, 4], (v) => v)

    expect(firstMin).toBe(1)
    expect(lastMin).toBe(1)
    expect(middleMin).toBe(1)
  })

  it('by', () => {
    expect(minBy([5, 30, 91, 22], (v) => v % 10)).toBe(30)
    expect(
      minBy([{ v: 3 }, { v: 4 }, { v: 1 }, { v: 2 }], (item) => item.v)
    ).toStrictEqual({ v: 1 })
  })
})

describe('maxBy', () => {
  it('order', () => {
    const firstMin = maxBy([10, 9, 8, 7, 6], (v) => v)
    const lastMin = maxBy([6, 7, 8, 9, 10], (v) => v)
    const middleMin = maxBy([2, 3, 10, 5, 4], (v) => v)

    expect(firstMin).toBe(10)
    expect(lastMin).toBe(10)
    expect(middleMin).toBe(10)
  })

  it('by', () => {
    expect(maxBy([5, 39, 91, 22], (v) => v % 10)).toBe(39)
    expect(
      maxBy([{ v: 3 }, { v: 4 }, { v: 1 }, { v: 2 }], (item) => item.v)
    ).toStrictEqual({ v: 4 })
  })
})

describe('nearBy', () => {
  it('by', () => {
    expect(nearBy([3, 8, 11, 15], (v) => v, 10)).toBe(11)
  })
})

describe('farBy', () => {
  it('by', () => {
    expect(farBy([3, 8, 11, 19], (v) => v, 10)).toBe(19)
    expect(farBy([0, 8, 11, 15], (v) => v, 10)).toBe(0)
  })
})

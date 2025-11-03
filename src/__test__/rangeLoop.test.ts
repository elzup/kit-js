import { rangeLoop } from '../arr/rangeLoop'

describe('rangeLoop', () => {
  it('basic circular range with default step', () => {
    expect(rangeLoop(0, 10, 15)).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
    ])
  })

  it('clock hours pattern (0-12)', () => {
    expect(rangeLoop(0, 12, 8, 3)).toStrictEqual([0, 3, 6, 9, 0, 3, 6, 9])
  })

  it('custom range with larger step', () => {
    expect(rangeLoop(5, 15, 6, 4)).toStrictEqual([5, 9, 13, 7, 11, 5])
  })

  it('small range wrapping multiple times', () => {
    expect(rangeLoop(0, 3, 10, 1)).toStrictEqual([0, 1, 2, 0, 1, 2, 0, 1, 2, 0])
  })

  it('step larger than range', () => {
    expect(rangeLoop(0, 5, 8, 7)).toStrictEqual([0, 2, 4, 1, 3, 0, 2, 4])
  })

  it('returns empty array when len is 0', () => {
    expect(rangeLoop(0, 10, 0)).toStrictEqual([])
  })

  it('returns empty array when len is negative', () => {
    expect(rangeLoop(0, 10, -5)).toStrictEqual([])
  })

  it('returns empty array when range width is 0', () => {
    expect(rangeLoop(5, 5, 10)).toStrictEqual([])
  })

  it('throws error when step is 0', () => {
    expect(() => {
      rangeLoop(0, 10, 5, 0)
    }).toThrowErrorMatchingInlineSnapshot(`"step cannot be zero"`)
  })

  it('single element range', () => {
    expect(rangeLoop(0, 1, 5)).toStrictEqual([0, 0, 0, 0, 0])
  })

  it('negative step wraps backward', () => {
    expect(rangeLoop(0, 10, 8, -3)).toStrictEqual([
      0, -3, -6, -9, -2, -5, -8, -1,
    ])
  })

  it('works with negative starting values', () => {
    expect(rangeLoop(-5, 5, 6, 3)).toStrictEqual([-5, -2, 1, 4, -3, 0])
  })

  it('large step size creates sparse pattern', () => {
    expect(rangeLoop(0, 10, 5, 17)).toStrictEqual([0, 7, 4, 1, 8])
  })
})

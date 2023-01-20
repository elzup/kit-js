import { rowspan } from '../index'

describe('rowspan', () => {
  it('basic', () => {
    const rows = [
      ['a', 1, true],
      ['a', 2, false],
      ['a', 2, true],
      ['b', 1, false],
    ]
    const expected = [
      [true, true, true],
      [false, true, true],
      [false, false, true],
      [true, true, true],
    ]

    expect(rowspan(rows)).toBe(expected)
  })
  it('straddle', () => {
    const rows = [
      ['a', 'a'],
      ['a', 'b'],
      ['b', 'b'],
    ]
    const expected = [
      [true, true],
      [false, true],
      [true, true],
    ]

    expect(rowspan(rows)).toBe(expected)
  })

  it('oneline', () => {
    const rows = [['a'], ['a'], ['b'], ['c'], ['a']]
    const expected = [[true], [false], [true], [true], [true]]

    expect(rowspan(rows)).toBe(expected)
  })
})

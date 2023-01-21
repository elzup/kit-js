import { rowspan, rowspanPos } from '../index'

describe('rowspan', () => {
  it('basic', () => {
    const rows = [
      ['a', 1, true],
      ['a', 2, false],
      ['a', 2, true],
      ['a', 2, true],
      ['b', 1, false],
    ]
    const expected = [
      [true, true, true],
      [false, true, true],
      [false, false, true],
      [false, false, false],
      [true, true, true],
    ]

    expect(rowspan(rows)).toStrictEqual(expected)
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

    expect(rowspan(rows)).toStrictEqual(expected)
  })

  it('oneline', () => {
    const rows = [['a'], ['a'], ['b'], ['c'], ['a']]
    const expected = [[true], [false], [true], [true], [true]]

    expect(rowspan(rows)).toStrictEqual(expected)
  })
  it('empty', () => {
    expect(rowspan([])).toStrictEqual([])
    expect(rowspan([[1]])).toStrictEqual([[true]])
  })
})

describe('rowspanPos', () => {
  it('basic', () => {
    const rows = [
      ['a', 1, true],
      ['a', 2, false],
      ['a', 2, true],
      ['a', 2, true],
      ['b', 1, false],
    ]
    const expected = [0, 1, 2, Infinity, 0]

    expect(rowspanPos(rows)).toStrictEqual(expected)
  })
  it('straddle', () => {
    const rows = [
      ['a', 'a'],
      ['a', 'b'],
      ['b', 'b'],
    ]
    const expected = [0, 1, 0]

    expect(rowspanPos(rows)).toStrictEqual(expected)
  })

  it('oneline', () => {
    const rows = [['a'], ['a'], ['b'], ['c'], ['a']]
    const expected = [0, Infinity, 0, 0, 0]

    expect(rowspanPos(rows)).toStrictEqual(expected)
  })
  it('empty', () => {
    expect(rowspanPos([])).toStrictEqual([])
    expect(rowspanPos([[1]])).toStrictEqual([0])
  })
})

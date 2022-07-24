import { encodeDigits, incstr, parseDigits } from '../index'

describe('incstr', () => {
  it('parseDigits', () => {
    const abcLib = { a: 0, b: 1, c: 2, d: 3, e: 4 }

    expect(parseDigits('abcee', abcLib)).toStrictEqual([0, 1, 2, 4, 4])
    expect(parseDigits('', abcLib)).toMatchInlineSnapshot(`Array []`)
  })

  it('encodeDigits', () => {
    expect(encodeDigits([3, 2, 1, 4, 5], 'abcdefg')).toStrictEqual('dcbef')
  })

  it('diff', () => {
    expect(incstr('100', 1, '0123')).toStrictEqual('101')
    expect(incstr('333', -1, '0123')).toStrictEqual('332')
    expect(incstr('aaa', 1, '0abc')).toStrictEqual('aab')
  })
  it('empty', () => {
    expect(incstr('', 0, '0abc')).toBe('')
    expect(incstr('a', -1, '0abc')).toBe('')
    expect(incstr('0', 0, '0ab')).toBe('')
    expect(incstr('0', -100, '0ab')).toBe('')
  })

  it('change digits', () => {
    expect(incstr('ccc', 1, '0abc')).toStrictEqual('a000')
    expect(incstr('a000', -2, '0abc')).toStrictEqual('ccb')
  })

  it('validation', () => {
    expect(() => incstr('00a', 1, '0abc')).toThrowErrorMatchingInlineSnapshot(
      `"left end is zero padding by '0'"`
    )
    expect(() => incstr('0', 1, '')).toThrowErrorMatchingInlineSnapshot(
      `"tableStr is empty"`
    )
    expect(() => incstr('z', 1, '0abc')).toThrowErrorMatchingInlineSnapshot(
      `"'z' is not a digit char"`
    )
  })
})

import { encodeDigits, incstr, parseDigits } from '../index'

describe('incstr', () => {
  it('parseDigits', () => {
    const abcLib = { a: 0, b: 1, c: 2, d: 3, e: 4 }

    expect(parseDigits('abcee', abcLib)).toStrictEqual([0, 1, 2, 4, 4])
  })

  it('encodeDigits', () => {
    expect(encodeDigits([3, 2, 1, 4, 5], 'abcdefg')).toStrictEqual('dcbef')
  })

  // it('diff', () => {
  //   expect(incstr('aaa', 1, 'abc')).toStrictEqual('aab')
  //   expect(incstr('acc', -1, 'abc')).toStrictEqual('baa')
  // })

  // it('change digits', () => {
  //   expect(incstr('aaa', -1, 'abc')).toStrictEqual('cc')
  //   expect(incstr('ccc', 1, 'abc')).toStrictEqual('aaaa')
  // })
})

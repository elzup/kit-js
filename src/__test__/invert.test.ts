import { expectType } from 'tsd'
import { invert, swap, swapKeyValue } from '../index'

test('swap', () => {
  expect(swap(['a', 1])).toStrictEqual([1, 'a'])
})
describe('invert', () => {
  it('basic', () => {
    const res = invert({ a: 1, 2: 'b' })

    expect(res).toStrictEqual({
      '1': 'a',
      b: '2',
    })
    expectType<Record<string, 1 | 'b'>>(res)
  })
  it('alias', () => {
    expect(swapKeyValue({ a: 'alias' })).toStrictEqual({ alias: 'a' })
  })
  it('string or array format', () => {
    expect(invert('ab')).toStrictEqual({ a: '0', b: '1' })
    expect(invert(['c', 'd'])).toStrictEqual({ c: '0', d: '1' })
  })

  it('after callback', () => {
    const res = invert('ab', (v) => Number(v))

    expectType<Record<string, number>>(res)
    expect(res).toMatchInlineSnapshot(`
      Object {
        "a": 0,
        "b": 1,
      }
    `)
  })
})

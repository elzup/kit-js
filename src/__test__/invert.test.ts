import { invert, swap, swapKeyValue } from '../index'

test('swap', () => {
  expect(swap(['a', 1])).toStrictEqual([1, 'a'])
})
test('invert', () => {
  expect(invert({ a: 1, 2: 'b' })).toMatchInlineSnapshot(`
    Object {
      "1": "a",
      "b": "2",
    }
  `)
  expect(swapKeyValue({ a: 'alias' })).toMatchInlineSnapshot(`
    Object {
      "alias": "a",
    }
  `)

  expect(invert('ab')).toMatchInlineSnapshot(`
    Object {
      "a": "0",
      "b": "1",
    }
  `)
  expect(invert(['c', 'd'])).toMatchInlineSnapshot(`
    Object {
      "c": "0",
      "d": "1",
    }
  `)
})

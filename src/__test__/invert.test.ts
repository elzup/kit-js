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
})

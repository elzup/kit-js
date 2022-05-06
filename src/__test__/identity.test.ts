import { identity, pass } from '../index'

test('identity', () => {
  expect(identity('abc')).toMatchInlineSnapshot(`"abc"`)
  expect(identity(undefined)).toMatchInlineSnapshot(`undefined`)
  expect(identity([1, 2, '3'])).toMatchInlineSnapshot(`
Array [
  1,
  2,
  "3",
]
`)
  expect(identity({ a: 1 })).toMatchInlineSnapshot(`
Object {
  "a": 1,
}
`)
  expect(pass('alias')).toMatchInlineSnapshot(`"alias"`)
})

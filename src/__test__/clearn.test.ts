import { clean } from '../index'

test('clean', () => {
  expect(clean({})).toMatchInlineSnapshot(`Object {}`)
  expect(clean({ a: 1, b: undefined, c: 'c' })).toMatchInlineSnapshot(`
    Object {
      "a": 1,
      "c": "c",
    }
  `)
})

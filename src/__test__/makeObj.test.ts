import { makeObj } from '../index'

test('makeObj', () => {
  expect(makeObj(['a', 'b'])).toMatchInlineSnapshot(`
Object {
  "a": null,
  "b": null,
}
`)
  expect(makeObj(['a', 'b'], 'c')).toMatchInlineSnapshot(`
Object {
  "a": "c",
  "b": "c",
}
`)
  expect(makeObj(['a', 'b'], 0)).toMatchInlineSnapshot(`
Object {
  "a": 0,
  "b": 0,
}
`)
})

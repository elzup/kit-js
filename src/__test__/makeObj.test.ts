import { makeObj } from '../obj/makeObj'

test('makeObj', () => {
  expect(makeObj(['a', 'b'])).toMatchInlineSnapshot(`
    {
      "a": null,
      "b": null,
    }
  `)
  expect(makeObj(['a', 'b'], 'c')).toMatchInlineSnapshot(`
    {
      "a": "c",
      "b": "c",
    }
  `)
  expect(makeObj(['a', 'b'], 0)).toMatchInlineSnapshot(`
    {
      "a": 0,
      "b": 0,
    }
  `)
})

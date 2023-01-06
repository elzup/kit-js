import { clean, clone } from '../index'

test('clean', () => {
  expect(clean({})).toMatchInlineSnapshot(`{}`)
  expect(clean({ a: 1, b: undefined, c: 'c' })).toMatchInlineSnapshot(`
    {
      "a": 1,
      "c": "c",
    }
  `)
  expect(clean({ a: new Date(0), b: null, c: new RegExp('^a$') }))
    .toMatchInlineSnapshot(`
    {
      "a": "1970-01-01T00:00:00.000Z",
      "b": null,
      "c": {},
    }
  `)
})

test('clone', () => {
  expect(clone).toBeDefined()
})

import noop from '../noop'
import getOne from '../getOne'
import clean from '../clean'

test('noop', () => {
  const a = noop()

  expect(a).toMatchInlineSnapshot(`undefined`)
  expect(noop(1, 2, 'three')).toMatchInlineSnapshot(`undefined`)
})

test('getOne', () => {
  expect(getOne(undefined)).toMatchInlineSnapshot(`""`)
  expect(getOne('ab')).toMatchInlineSnapshot(`"ab"`)
  expect(getOne(['ab', 'cd'])).toMatchInlineSnapshot(`"ab"`)
})

test('clean', () => {
  expect(clean({})).toMatchInlineSnapshot(`Object {}`)
  expect(clean({ a: 1, b: undefined, c: 'c' })).toMatchInlineSnapshot(`
    Object {
      "a": 1,
      "c": "c",
    }
  `)
})

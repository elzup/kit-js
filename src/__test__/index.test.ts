import noop from '../noop'
import getOne from '../getOne'

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

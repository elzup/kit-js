import getOne from '../lib/getOne'

test('getOne', () => {
  expect(getOne(undefined)).toMatchInlineSnapshot(`""`)
  expect(getOne('ab')).toMatchInlineSnapshot(`"ab"`)
  expect(getOne(['ab', 'cd'])).toMatchInlineSnapshot(`"ab"`)
})

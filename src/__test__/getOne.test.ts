import { getOne, unarray } from '../index'

test('getOne', () => {
  expect(getOne(undefined)).toMatchInlineSnapshot(`""`)
  expect(getOne('ab')).toMatchInlineSnapshot(`"ab"`)
  expect(getOne(['ab', 'cd'])).toMatchInlineSnapshot(`"ab"`)

  expect(unarray(['alias'])).toMatchInlineSnapshot(`"alias"`)
})

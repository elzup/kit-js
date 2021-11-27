import { getEnv } from '../getEnv'

test('getEnv', () => {
  process.env.GET_ENV_TEST_KEY = 'GET_ENV_TEST_VALUE'

  expect(getEnv('NONE_ENV', 'development')).toMatchInlineSnapshot(
    `"development"`
  )
  expect(getEnv('GET_ENV_TEST_KEY', 'development')).toMatchInlineSnapshot(
    `"GET_ENV_TEST_VALUE"`
  )

  expect(() => {
    getEnv('NONE_ENV', 'development', true)
  }).toThrowErrorMatchingInlineSnapshot(`"env NONE_ENV is required"`)
  expect(() => {
    getEnv('NONE_ENV', 'development', true, () => {
      throw new Error('custom exception')
    })
  }).toThrowErrorMatchingInlineSnapshot(`"custom exception"`)
})

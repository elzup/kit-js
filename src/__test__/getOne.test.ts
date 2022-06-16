import { getOne, unarray } from '../index'

test('getOne', () => {
  expect(getOne(undefined)).toBe(undefined)
  expect(getOne('ab')).toBe('ab')
  expect(unarray(['ab', 'cd'])).toBe(undefined)

  expect(unarray(['alias'])).toBe(undefined)
})

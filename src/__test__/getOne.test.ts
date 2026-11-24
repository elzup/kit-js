import { getOne, unarray } from '../niche/getOne'

test('getOne', () => {
  expect(getOne(undefined)).toBe(undefined)
  expect(getOne('ab')).toBe('ab')
  expect(unarray(['ab', 'cd'])).toBe(undefined)

  expect(unarray(['alias'])).toBe(undefined)
})

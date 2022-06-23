import { last } from '../index'

test('last', () => {
  expect(last([1, 2, 3])).toBe(3)
  expect(last([])).toBe(undefined)
})

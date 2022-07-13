import { shiftChar } from '../index'

test('shiftChar', () => {
  expect(shiftChar('b', 1)).toBe('c')
  expect(shiftChar('b', -1)).toBe('a')
})

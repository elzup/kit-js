import { shift as shiftChar } from '../char/shift'

test('shiftChar', () => {
  expect(shiftChar('b', 1)).toBe('c')
  expect(shiftChar('b', -1)).toBe('a')
})

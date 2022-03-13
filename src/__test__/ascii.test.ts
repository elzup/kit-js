import { asciify, isAscii } from '../index'

test('isAscii', () => {
  expect(isAscii('a')).toBeTruthy()
  expect(isAscii('あ')).toBeFalsy()
  expect(isAscii('A \n)-.')).toBeFalsy()
})
test('pickAscii', () => {
  expect(asciify('a')).toBe('a')
  expect(asciify('いaあ b　')).toBe('a b')
})

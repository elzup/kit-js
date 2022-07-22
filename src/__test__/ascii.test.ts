import { trimNonAscii } from '../ascii'
import { asciify, isAscii } from '../index'

test('isAscii', () => {
  expect(isAscii('a')).toBeTruthy()
  expect(isAscii('あ')).toBeFalsy()
  expect(isAscii('A \n)-.')).toBeFalsy()
})

test('isAscii num', () => {
  expect(isAscii(0x19)).toBeFalsy()
  expect(isAscii(0x20)).toBeTruthy()
  expect(isAscii(0x7e)).toBeTruthy()
  expect(isAscii(0x7f)).toBeFalsy()
  expect(isAscii(Infinity)).toBeFalsy()
})

test('trimNonAscii', () => {
  expect(trimNonAscii('a')).toBe('a')
  expect(trimNonAscii('a')).toBe('a')
  expect(trimNonAscii('いaあ b　')).toBe('a b')
  expect(asciify('いaあ b　')).toBe('a b')
})

import { trimQuote, trimParenOut } from '../index'

test('trimQuote', () => {
  expect(trimQuote('"abc"')).toBe('abc')
  expect(trimQuote('"')).toBe('')
  expect(trimQuote('a')).toBe('a')
  expect(trimQuote('"a')).toBe('a')
})

test('trim', () => {
  expect(trimParenOut('(abc)')).toBe('abc')
  expect(trimParenOut('a(b')).toBe('b')
  expect(trimParenOut('a((b))c')).toBe('b')
  expect(trimParenOut('a)b(c')).toBe('c')
})

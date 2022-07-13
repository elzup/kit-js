import { fullWidth, halfWidth } from '../index'

test('fullWidth', () => {
  expect(fullWidth('AbcＡｂ')).toBe('ＡｂｃＡｂ')
  expect(fullWidth('123１２３')).toBe('１２３１２３')
})

test('halfWidth', () => {
  expect(halfWidth('abcＡｂ')).toBe('abcAb')
  expect(halfWidth('123１２３')).toBe('123123')
})

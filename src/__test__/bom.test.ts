import { BOM, hasBom, trimBom } from '../char/bom'

test('trimBom', () => {
  expect(trimBom(BOM + 'abc ')).toBe('abc ')
  expect(trimBom('abc ')).toBe('abc ')
})

test('hasBom', () => {
  expect(hasBom(BOM + 'abc')).toBe(true)
  expect(hasBom('abc')).toBe(false)
})

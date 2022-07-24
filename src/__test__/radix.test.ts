import { decToRadix, radixToDec } from '../index'

test('decToRadix', () => {
  expect(decToRadix(100, 2)).toStrictEqual([1, 1, 0, 0, 1, 0, 0])
  expect(decToRadix(4321, 10)).toStrictEqual([4, 3, 2, 1])
  expect(decToRadix(12345, 7)).toStrictEqual([5, 0, 6, 6, 4])
})

test('decToRadix error', () => {
  expect(() => {
    decToRadix(100, 0)
  }).toThrowErrorMatchingInlineSnapshot(`"base must be > 0"`)
  expect(() => {
    decToRadix(-1, 100)
  }).toThrowErrorMatchingInlineSnapshot(`"n must be >= 0"`)
})

test('radixToDec', () => {
  expect(radixToDec([1, 1, 0, 0, 1, 0, 0], 2)).toBe(100)
  expect(radixToDec([4, 3, 2, 1], 10)).toBe(4321)
  expect(radixToDec([5, 0, 6, 6, 4], 7)).toBe(12345)
  expect(radixToDec([], 2)).toBe(0)
})

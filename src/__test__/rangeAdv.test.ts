import { rangeAdv } from '../index'

test('range', () => {
  expect(rangeAdv(0)).toStrictEqual([])
  expect(rangeAdv(5)).toStrictEqual([0, 1, 2, 3, 4])
  expect(rangeAdv(1, 4)).toStrictEqual([1, 2, 3])
  expect(rangeAdv(4, 1)).toStrictEqual([4, 3, 2])
  expect(rangeAdv(0, 8, 2)).toStrictEqual([0, 2, 4, 6])
  expect(rangeAdv(8, 0, -2)).toStrictEqual([8, 6, 4, 2])
  expect(rangeAdv(3, -3, -1)).toStrictEqual([3, 2, 1, 0, -1, -2])
})

test('range arg error', () => {
  expect(() => {
    rangeAdv(-10)
  }).toThrowErrorMatchingInlineSnapshot(`"start cannot be negative"`)

  expect(() => {
    rangeAdv(10, 20, -1)
  }).toThrowErrorMatchingInlineSnapshot(`"step cannot be negative"`)

  expect(() => {
    rangeAdv(20, 0, 1)
  }).toThrowErrorMatchingInlineSnapshot(`"step cannot be positive"`)

  expect(() => {
    rangeAdv(1, 10, 0)
  }).toThrowErrorMatchingInlineSnapshot(`"step cannot be zero"`)
})

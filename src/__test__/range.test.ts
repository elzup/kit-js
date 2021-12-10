import { range } from '../range'

test('range', () => {
  expect(range(0)).toStrictEqual([])
  expect(range(5)).toStrictEqual([0, 1, 2, 3, 4])
  expect(range(1, 4)).toStrictEqual([1, 2, 3])
  expect(range(0, 8, 2)).toStrictEqual([0, 2, 4, 6])
  expect(range(8, 0, -2)).toStrictEqual([8, 6, 4, 2])
  expect(range(3, -3, -1)).toStrictEqual([3, 2, 1, 0, -1, -2])
})

test('range arg error', () => {
  expect(() => {
    range(-10)
  }).toThrowErrorMatchingInlineSnapshot(`"start cannot be negative"`)

  expect(() => {
    range(10, 20, -1)
  }).toThrowErrorMatchingInlineSnapshot(`"step cannot be negative"`)

  expect(() => {
    range(20, 0, 1)
  }).toThrowErrorMatchingInlineSnapshot(`"step cannot be positive"`)

  expect(() => {
    range(1, 10, 0)
  }).toThrowErrorMatchingInlineSnapshot(`"step cannot be zero"`)
})

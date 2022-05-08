import { range } from '../index'

test('range', () => {
  expect(range(0)).toStrictEqual([])
  expect(range(5)).toStrictEqual([0, 1, 2, 3, 4])

  expect(() => {
    range(-10)
  }).toThrowErrorMatchingInlineSnapshot(`"Invalid array length"`)
})

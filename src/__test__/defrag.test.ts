import { defrag } from '../index'

test('defrag', () => {
  expect(defrag([])).toStrictEqual([])
  expect(defrag([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
    { start: 1, end: 10 },
  ])

  expect(defrag([1, 5])).toStrictEqual([
    { start: 1, end: 1 },
    { start: 5, end: 5 },
  ])

  expect(defrag([2, 3, 4, 5, 6, 10, 21, 22, 23])).toStrictEqual([
    { start: 2, end: 6 },
    { start: 10, end: 10 },
    { start: 21, end: 23 },
  ])

  expect(defrag([1, 2, 4, 10, 12], (a, b) => b - a <= 2)).toStrictEqual([
    { start: 1, end: 4 },
    { start: 10, end: 12 },
  ])
})

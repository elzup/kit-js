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
  expect(defrag([1, 2, 5, 6, 7])).toStrictEqual([
    { start: 1, end: 2 },
    { start: 5, end: 7 },
  ])
})

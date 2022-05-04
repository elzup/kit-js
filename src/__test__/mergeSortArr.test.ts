import { mergeSortArr } from '../index'

test('mergeSortArr', () => {
  expect(mergeSortArr([1, 2, 2, 4], [2, 3, 5, 6], (v) => v)).toStrictEqual([
    1, 2, 2, 2, 3, 4, 5, 6,
  ])

  expect(
    mergeSortArr([{ v: 1 }, { v: 3 }], [{ v: 2 }], (v) => v.v)
  ).toStrictEqual([{ v: 1 }, { v: 2 }, { v: 3 }])
})

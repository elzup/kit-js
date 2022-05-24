import { sortBy, sortByHo } from '..'

test('sortBy', () => {
  const a = [3, 1, 2, 4]

  sortBy(a, (v) => -v)

  expect(a).toStrictEqual([4, 3, 2, 1])

  expect([3, 1, 2, 4].sort(sortByHo((v) => -v))).toStrictEqual([4, 3, 2, 1])
})

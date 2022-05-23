import { sortBy, sortByHoc } from '../sortBy'

test('sortBy', () => {
  const a = [3, 1, 2, 4]

  sortBy(a, (v) => -v)

  expect(a).toStrictEqual([4, 3, 2, 1])

  expect([3, 1, 2, 4].sort(sortByHoc((v) => -v))).toStrictEqual([4, 3, 2, 1])
})

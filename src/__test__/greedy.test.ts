import { greedy } from '../index'

test('greedy', () => {
  expect(
    greedy(66666, [10000, 5000, 1000, 500, 100, 50, 10, 5, 1])
  ).toStrictEqual([[6, 1, 1, 1, 1, 1, 1, 1, 1], 0])
  expect(greedy(12345, [1000, 500, 100, 50, 10])).toStrictEqual([
    [12, 0, 3, 0, 4],
    5,
  ])
})

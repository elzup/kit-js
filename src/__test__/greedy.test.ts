import { greedy, greedyStrict } from '../index'

test('greedy', () => {
  expect(
    greedy(66666, [10000, 5000, 1000, 500, 100, 50, 10, 5, 1])
  ).toStrictEqual([[6, 1, 1, 1, 1, 1, 1, 1, 1], 0])
  expect(greedy(12345, [1000, 500, 100, 50, 10])).toStrictEqual([
    [12, 0, 3, 0, 4],
    5,
  ])
  expect(greedy(100, [70, 5, 3])).toStrictEqual([[1, 6, 0], 1])
})

test('greedyStrict', () => {
  expect(
    greedyStrict(66666, [10000, 5000, 1000, 500, 100, 50, 10, 5, 1])
  ).toStrictEqual([[6, 1, 1, 1, 1, 1, 1, 1, 1], 0])
  expect(greedyStrict(12345, [1000, 500, 100, 50, 10])).toStrictEqual([
    [12, 0, 3, 0, 4],
    5,
  ])
})

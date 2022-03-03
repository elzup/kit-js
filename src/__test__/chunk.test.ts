import { chunk } from '../index'

test('chunk', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toMatchObject([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10],
  ])

  expect(chunk([1, 2], 1)).toMatchObject([[1], [2]])
  expect(chunk([1, 2], 0)).toMatchObject([])
  expect(chunk([1, 2, 3, 4], 2)).toMatchObject([
    [1, 2],
    [3, 4],
  ])
  expect(chunk([], 3)).toMatchObject([])
  expect(chunk([1, 2], 3)).toMatchObject([[1, 2]])
})

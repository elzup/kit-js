import { chunk } from '../chunk'

test('chunk', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toMatchObject([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10],
  ])
})

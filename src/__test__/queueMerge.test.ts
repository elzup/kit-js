import { queueMerge, range } from '../index'

test('queueMerge', () => {
  expect(
    queueMerge(
      [
        [1, 2],
        [3, 5],
        [4, 6],
      ],
      (v) => v
    )
  ).toStrictEqual([1, 2, 3, 4, 5, 6])

  expect(queueMerge([[], []], () => 0)).toMatchInlineSnapshot(`Array []`)

  expect(
    queueMerge(
      [
        [-1, 0],
        [-2, 0, 1],
        [0, 2],
      ],
      (v) => v
    )
  ).toStrictEqual([-2, -1, 0, 0, 0, 1, 2])
})

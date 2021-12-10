import { queueMerge } from '../queueMerge'
import { range } from '../range'

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
  const t = Date.now()

  queueMerge(
    range(20).map(() => range(60 * 24 * 30).map((i) => ({ i }))),
    (v) => v.i
  )
  expect(Date.now() - t).toBeLessThan(100)
})

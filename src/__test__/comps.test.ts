import { comps } from '../comps'

test('comps', () => {
  expect(comps([1, 2])).toStrictEqual([[1, 2]])
  expect(comps([1, 2, 3])).toStrictEqual([
    [1, 2],
    [2, 3],
  ])
  expect(comps([])).toStrictEqual([])
  expect(comps([1])).toStrictEqual([])
})

test('comps more 2', () => {
  expect(comps([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
  ])
})

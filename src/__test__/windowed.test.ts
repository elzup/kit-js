import { comps, slideWindow, windowed, windowed2 } from '../index'

test('windowed', () => {
  expect(windowed([1, 2])).toStrictEqual([[1, 2]])
  expect(windowed([1, 2, 3])).toStrictEqual([
    [1, 2],
    [2, 3],
  ])
  expect(windowed([])).toStrictEqual([])
  expect(windowed([1])).toStrictEqual([])
})

test('comps more 2', () => {
  expect(windowed([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
  ])
})

test('windowed2', () => {
  expect(windowed2([])).toStrictEqual([])
  expect(windowed2([1])).toStrictEqual([])
})

test('comps', () => {
  expect(comps).toBeDefined()
})

test('slideWindow', () => {
  expect(slideWindow).toBeDefined()
})

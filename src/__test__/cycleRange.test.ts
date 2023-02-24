import { cycleRangeIn } from '../index'

test('cycleRange', () => {
  expect(cycleRangeIn({ start: 5, end: 15 }, 3)).toBe(false)
  expect(cycleRangeIn({ start: 5, end: 15 }, 5)).toBe(true)
  expect(cycleRangeIn({ start: 5, end: 15 }, 10)).toBe(true)
  expect(cycleRangeIn({ start: 5, end: 15 }, 15)).toBe(false)

  expect(cycleRangeIn({ start: 15, end: 5 }, 15)).toBe(true)
  expect(cycleRangeIn({ start: 15, end: 5 }, 20)).toBe(true)
  expect(cycleRangeIn({ start: 15, end: 5 }, 1)).toBe(true)
  expect(cycleRangeIn({ start: 15, end: 5 }, 5)).toBe(false)
  expect(cycleRangeIn({ start: 15, end: 5 }, 10)).toBe(false)
})

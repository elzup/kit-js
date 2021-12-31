import { formatHms, formatTime, formatYmd } from '../formatTime'

import { times, timesNow } from '../times'

beforeAll(() => jest.useFakeTimers('modern'))
afterAll(jest.useRealTimers)

test('times', () => {
  const date = new Date(2022, 1 - 1, 2, 3, 44, 55, 666)

  jest.setSystemTime(date)

  expect(timesNow()).toMatchInlineSnapshot(`
Object {
  "day": 2,
  "hour": 3,
  "minute": 44,
  "month": 1,
  "second": 55,
  "year": 2022,
}
`)

  expect(times(new Date(2123, 4, 5, 6, 7, 8))).toMatchInlineSnapshot(`
Object {
  "day": 5,
  "hour": 6,
  "minute": 7,
  "month": 5,
  "second": 8,
  "year": 2123,
}
`)
})

test('formatTime', () => {
  const date = new Date(2123, 4, 5, 6, 7, 8)

  expect(formatTime(date)).toMatchInlineSnapshot(`"2123-05-05 06:07:08"`)
  expect(formatYmd(date)).toMatchInlineSnapshot(`"2123-05-05"`)
  expect(formatHms(date)).toMatchInlineSnapshot(`"06:07:08"`)
})

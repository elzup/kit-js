import { formatHms, formatTime, formatYmd } from '../formatTime'

import { times, timesNow, jpDate, shiftDate } from '../times'

beforeAll(() => jest.useFakeTimers('modern'))
afterAll(jest.useRealTimers)

const date = new Date(4836348428000)
// "2123-04-05 06:07:08"

test('times', () => {
  jest.setSystemTime(date)

  expect(timesNow()).toMatchInlineSnapshot(`
Object {
  "day": 5,
  "hour": 15,
  "minute": 7,
  "month": 4,
  "second": 8,
  "year": 2123,
}
`)

  expect(times(date)).toMatchInlineSnapshot(`
Object {
  "day": 5,
  "hour": 15,
  "minute": 7,
  "month": 4,
  "second": 8,
  "year": 2123,
}
`)
})

test('formatTime', () => {
  expect(formatTime(date)).toMatchInlineSnapshot(`"2123-04-05 15:07:08"`)
  expect(formatYmd(date)).toMatchInlineSnapshot(`"2123-04-05"`)
  expect(formatHms(date)).toMatchInlineSnapshot(`"15:07:08"`)
})

test('shiftDate', () => {
  expect(shiftDate(date, 0)).toMatchInlineSnapshot(`2123-04-04T21:07:08.000Z`)
  expect(shiftDate(date, -6)).toMatchInlineSnapshot(`2123-04-04T15:07:08.000Z`)
  expect(shiftDate(date, 5)).toMatchInlineSnapshot(`2123-04-05T02:07:08.000Z`)
})
test('jpDate', () => {
  expect(jpDate(date)).toMatchInlineSnapshot(`2123-04-05T06:07:08.000Z`)
})

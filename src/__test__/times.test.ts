import { formatHms, formatTime, formatYmd } from '../formatTime'

import { times, timesNow, jpDate, shiftDate } from '../times'

beforeAll(() => jest.useFakeTimers('modern'))
afterAll(jest.useRealTimers)

const date = new Date(4836348428000)
// "2123-04-05 06:07:08"
const localDate = new Date('2123-04-05 06:07:08')

test('times', () => {
  jest.setSystemTime(localDate)

  expect(times(localDate)).toMatchInlineSnapshot(`
    Object {
      "day": 5,
      "hour": 6,
      "minute": 7,
      "month": 4,
      "second": 8,
      "year": 2123,
    }
  `)
})

test('formatTime', () => {
  jest.setSystemTime(localDate)
  expect(formatTime(localDate)).toMatchInlineSnapshot(`"2123-04-05 06:07:08"`)
  expect(formatYmd(localDate)).toMatchInlineSnapshot(`"2123-04-05"`)
  expect(formatHms(localDate)).toMatchInlineSnapshot(`"06:07:08"`)
})

test('shiftDate', () => {
  jest.setSystemTime(date)
  expect(+shiftDate(date, 0)).toMatchInlineSnapshot(`4836316028000`)
  expect(+shiftDate(date, -6)).toMatchInlineSnapshot(`4836294428000`)
  expect(+shiftDate(date, 5)).toMatchInlineSnapshot(`4836334028000`)
})
test('jpDate', () => {
  jest.setSystemTime(date)
  expect(+jpDate(date)).toMatchInlineSnapshot(`4836348428000`)
})

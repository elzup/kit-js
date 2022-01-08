import { formatHms, formatTime, formatYmd } from '../formatTime'
import { jpDate, shiftDate, times } from '../times'

beforeAll(() => jest.useFakeTimers('modern'))
afterAll(jest.useRealTimers)

const date = new Date(4836380828000)
// "2123-04-05 06:07:08"
const lDate = new Date('2123-04-05 06:07:08')

test('times', () => {
  jest.setSystemTime(lDate)

  expect(times(lDate)).toMatchInlineSnapshot(`
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
  jest.setSystemTime(lDate)
  expect(formatTime(lDate)).toMatchInlineSnapshot(`"2123-04-05 06:07:08"`)
  expect(formatYmd(lDate)).toMatchInlineSnapshot(`"2123-04-05"`)
  expect(formatHms(lDate)).toMatchInlineSnapshot(`"06:07:08"`)
})

test('shiftDate', () => {
  console.log(+date)
  console.log(date.getTimezoneOffset())

  expect(shiftDate(date, 0)).toMatchInlineSnapshot(`2123-04-05T06:07:08.000Z`)
  expect(shiftDate(date, -6)).toMatchInlineSnapshot(`2123-04-05T00:07:08.000Z`)
  expect(shiftDate(date, 5)).toMatchInlineSnapshot(`2123-04-05T11:07:08.000Z`)
})
test('jpDate', () => {
  expect(jpDate(date)).toMatchInlineSnapshot(`2123-04-05T15:07:08.000Z`)
})

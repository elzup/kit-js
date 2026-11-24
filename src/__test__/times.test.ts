import { vi } from 'vitest'
import {
  formatHms,
  formatTime,
  formatYmd,
  hm,
  isoJp,
  timePartsStr,
  ymd,
  ymdNum,
} from '../time/format'
import { jpDate, shiftDate, timeParts, timesNow } from '../time/utils'

beforeAll(() => vi.useFakeTimers())
afterAll(() => vi.useRealTimers())

const date = new Date(4836380828000)
// "2123-04-05 06:07:08"
const lDate = new Date('2123-04-05 06:07:08')

test('timeParts', () => {
  vi.setSystemTime(lDate)

  expect(timeParts(lDate)).toMatchInlineSnapshot(`
    {
      "date": 5,
      "hour": 6,
      "minute": 7,
      "month": 4,
      "second": 8,
      "year": 2123,
    }
  `)
})
test('timesNow', () => {
  expect(timesNow()).toMatchInlineSnapshot(`
    {
      "date": 5,
      "hour": 6,
      "minute": 7,
      "month": 4,
      "second": 8,
      "year": 2123,
    }
  `)
})
test('timePartsStr', () => {
  expect(timePartsStr(lDate)).toMatchInlineSnapshot(`
    {
      "dd": "05",
      "hh": "06",
      "mn": "07",
      "mo": "04",
      "ss": "08",
      "yyyy": "2123",
    }
  `)
})
test('hm', () => {
  expect(hm(lDate)).toMatchInlineSnapshot(`"0607"`)
})
test('isoJp', () => {
  // absolute instant: lDate is local time, so its ISO string depends on the runner TZ
  const utc = new Date('2123-04-04T21:07:08.000Z')

  expect(isoJp(utc)).toBe('2123-04-05T06:07:08.000+09:00')
})

test('formatTime', () => {
  vi.setSystemTime(lDate)
  expect(formatTime(lDate)).toMatchInlineSnapshot(`"2123-04-05 06:07:08"`)
  expect(formatYmd(lDate)).toMatchInlineSnapshot(`"2123-04-05"`)
  expect(formatHms(lDate)).toMatchInlineSnapshot(`"06:07:08"`)
})

test('shiftDate', () => {
  expect(shiftDate(date).getHours()).toMatchInlineSnapshot(`15`)
  expect(shiftDate(date, 0).getHours()).toMatchInlineSnapshot(`15`)
  expect(shiftDate(date, -6).getHours()).toMatchInlineSnapshot(`9`)
  expect(shiftDate(date, 5).getHours()).toMatchInlineSnapshot(`20`)
})
test('jpDate', () => {
  expect(jpDate(date).getHours()).toMatchInlineSnapshot(`0`)
})

test('ymd', () => {
  vi.setSystemTime(lDate)

  expect(ymd(lDate)).toMatchInlineSnapshot(`"21230405"`)
  expect(ymdNum(lDate)).toMatchInlineSnapshot(`21230405`)
})

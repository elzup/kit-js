import { min } from './constants'

/**
 * Extract time components from a Date object.
 *
 * Returns an object containing year, month (1-12), date, hour,
 * minute, and second from the given Date.
 *
 * @param d - Date object to extract parts from
 * @returns Object with time components
 *
 * @example
 * timeParts(new Date('2024-03-15T10:30:45'))
 * // => { year: 2024, month: 3, date: 15, hour: 10, minute: 30, second: 45 }
 */
export const timeParts = (d: Date) => {
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()

  return { year, month, date, hour, minute, second }
}

/**
 * Get current time components.
 *
 * Convenience function that returns timeParts for the current moment.
 *
 * @returns Object with current time components
 *
 * @example
 * timesNow()
 * // => { year: 2024, month: 3, date: 15, hour: 10, minute: 30, second: 45 }
 */
export const timesNow = () => timeParts(new Date())

const JP_SHIFT_HOUR = 9

/**
 * Shift a Date by timezone offset and additional hours.
 *
 * Adjusts date by the timezone offset plus additional hours.
 * Useful for converting between timezones.
 *
 * @param date - Date to shift
 * @param hour - Additional hours to shift (default: 0)
 * @returns New Date shifted by timezone and hours
 *
 * @example
 * shiftDate(new Date('2024-03-15T10:00:00Z'), 9)
 * // Shifts by timezone offset + 9 hours
 */
export const shiftDate = (date: Date, hour = 0) =>
  new Date(+date + (date.getTimezoneOffset() + Math.floor(hour * 60)) * min)

/**
 * Convert Date to Japan Standard Time (JST).
 *
 * Shifts the date to JST timezone (UTC+9).
 *
 * @param date - Date to convert
 * @returns Date in JST timezone
 *
 * @example
 * jpDate(new Date('2024-03-15T00:00:00Z'))
 * // => Date representing 09:00:00 JST
 */
export const jpDate = (date: Date) => shiftDate(date, JP_SHIFT_HOUR)

import { pad02 } from '../str/format'

/**
 * Extract date/time components as zero-padded strings.
 *
 * Breaks down a Date object into individual components (year, month, day,
 * hour, minute, second) with zero-padding for consistent formatting.
 *
 * @param date - Date to extract parts from
 * @returns Object with yyyy, mo, dd, hh, mn, ss string properties
 *
 * @example
 * timePartsStr(new Date('2024-03-15 14:05:08'))
 * // => { yyyy: '2024', mo: '03', dd: '15', hh: '14', mn: '05', ss: '08' }
 */
export const timePartsStr = (date: Date) => {
  const yyyy = String(date.getFullYear())
  const mo = pad02(String(date.getMonth() + 1))
  const dd = pad02(date.getDate())
  const hh = pad02(date.getHours())
  const mn = pad02(date.getMinutes())
  const ss = pad02(date.getSeconds())

  return { yyyy, mo, dd, hh, mn, ss }
}

/**
 * Format date as YYYY-MM-DD.
 *
 * @param date - Date to format
 * @returns ISO 8601 date string
 *
 * @example
 * formatYmd(new Date('2024-03-15'))
 * // => '2024-03-15'
 */
export const formatYmd = (date: Date) =>
  (({ yyyy, mo, dd }) => `${yyyy}-${mo}-${dd}`)(timePartsStr(date))

/**
 * Format date as YYYYMMDD (compact, no separators).
 *
 * @param date - Date to format
 * @returns Compact date string
 *
 * @example
 * ymd(new Date('2024-03-15'))
 * // => '20240315'
 */
export const ymd = (date: Date) =>
  (({ yyyy, mo, dd }) => `${yyyy}${mo}${dd}`)(timePartsStr(date))

/**
 * Format date as YYYYMMDD number.
 *
 * @param date - Date to format
 * @returns Date as number for comparisons
 *
 * @example
 * ymdNum(new Date('2024-03-15'))
 * // => 20240315
 */
export const ymdNum = (date: Date) => Number(ymd(date))

/**
 * Format time as HH:MM:SS.
 *
 * @param date - Date to format
 * @returns Time string with colons
 *
 * @example
 * formatHms(new Date('2024-03-15 14:05:08'))
 * // => '14:05:08'
 */
export const formatHms = (date: Date) =>
  (({ hh, mn, ss }) => `${hh}:${mn}:${ss}`)(timePartsStr(date))

/**
 * Format time as HHMM (compact, no separators).
 *
 * @param date - Date to format
 * @returns Compact time string
 *
 * @example
 * hm(new Date('2024-03-15 14:05:08'))
 * // => '1405'
 */
export const hm = (date: Date) =>
  (({ hh, mn }) => `${hh}${mn}`)(timePartsStr(date))

/**
 * Format date and time as YYYY-MM-DD HH:MM:SS.
 *
 * Combines date and time formatting into a single human-readable string.
 * Common format for logs, databases, and display.
 *
 * @param date - Date to format
 * @returns Full datetime string
 *
 * @example
 * formatTime(new Date('2024-03-15 14:05:08'))
 * // => '2024-03-15 14:05:08'
 */
export const formatTime = (date: Date) =>
  `${formatYmd(date)} ${formatHms(date)}`

/**
 * Convert date to ISO 8601 string in JST timezone (UTC+09:00).
 *
 * Adjusts the date to Japan Standard Time and formats as ISO string
 * with +09:00 timezone suffix. Useful for Japanese applications.
 *
 * @param date - Date to convert
 * @returns ISO 8601 string with JST timezone
 *
 * @example
 * isoJp(new Date('2024-03-15T00:00:00Z'))
 * // => '2024-03-15T09:00:00.000+09:00'
 */
export const isoJp = (date: Date) =>
  new Date(date.getTime() + 9 * 60 * 60 * 1000)
    .toISOString()
    .replace('Z', '+09:00')

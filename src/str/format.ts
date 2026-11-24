/**
 * Pad a number or string with leading zeros to specified length.
 *
 * @param v - Value to pad (number or string)
 * @param d - Desired total length
 * @returns String padded with leading zeros
 *
 * @example
 * pad(123, 5)
 * // => '00123'
 *
 * @example
 * pad(123, 2)
 * // => '123' (no padding if already longer)
 *
 * @example
 * pad(12, 4)
 * // => '0012'
 */
export const pad = (v: number | string, d: number) => `${v}`.padStart(d, '0')

/**
 * Pad a number or string with leading zeros to length 2.
 *
 * Convenient shorthand for common case of 2-digit padding (hours, minutes, days, etc.)
 *
 * @param v - Value to pad
 * @returns String padded to 2 digits
 *
 * @example
 * pad02(1)
 * // => '01'
 *
 * @example
 * pad02(12)
 * // => '12'
 */
export const pad02 = (v: number | string) => pad(v, 2)

/**
 * Round a number to specified decimal places.
 *
 * @param v - Number to round
 * @param d - Number of decimal places
 * @returns Rounded number
 *
 * @example
 * round(1.234, 1)
 * // => 1.2
 *
 * @example
 * round(1.234, 3)
 * // => 1.234
 *
 * @example
 * round(1.567, 2)
 * // => 1.57
 */
export const round = (v: number, d: number) => Math.round(v * 10 ** d) / 10 ** d

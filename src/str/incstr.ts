import { base62, base90, char123abcABC } from '../char/constants'
import { invert } from '../obj/invert'
import { decToRadix, radixToDec } from '../math/radix'

type TableMap = { [key: string]: number }

export const parseDigits = (str: string, table: TableMap): number[] =>
  str.split('').map((c) => {
    if (table[c] === undefined) throw new Error(`'${c}' is not a digit char`)
    return table[c]
  })
export const encodeDigits = (digits: number[], tableStr: string): string =>
  digits.map((n) => tableStr[n] ?? '').join('')

/**
 * Increment string-encoded number by specified amount.
 *
 * Treats string as a number in custom base (defined by tableStr) and
 * increments it. Useful for alphanumeric counters and ID generation.
 *
 * @param s - String-encoded number
 * @param add - Amount to add (default: 1)
 * @param tableStr - Character table defining the base (default: char123abcABC)
 * @returns Incremented string
 *
 * @example
 * incstr('1')    // => '2'
 * incstr('9')    // => 'a'
 * incstr('z')    // => 'A'
 * incstr('Z')    // => '21'
 *
 * @example
 * incstr('abc', 2)  // => 'abe'
 * incstr('zz', 1)   // => 'zA'
 */
export const incstr = (
  s: string,
  add = 1,
  tableStr = char123abcABC
): string => {
  if (tableStr.length === 0) throw new Error('tableStr is empty')
  if (s.length >= 2 && s.startsWith(tableStr[0]))
    throw new Error(`left end is zero padding by '${tableStr[0]}'`)

  const radix = tableStr.length
  const table: TableMap = invert(tableStr, Number)

  const digits = parseDigits(s, table)
  const d = radixToDec(digits, radix)
  const nextD = d + add

  if (nextD < 0) return ''

  return encodeDigits(decToRadix(nextD, radix), tableStr)
}

/**
 * Increment string in base90 encoding.
 *
 * @param s - Base90 string
 * @param add - Amount to add (default: 1)
 * @returns Incremented base90 string
 *
 * @example
 * incstrBase90('abc')  // => 'abd'
 */
export const incstrBase90 = (s: string, add = 1) => incstr(s, add, base90)

/**
 * Increment string in base62 encoding.
 *
 * @param s - Base62 string
 * @param add - Amount to add (default: 1)
 * @returns Incremented base62 string
 *
 * @example
 * incstrBase62('abc')  // => 'abd'
 */
export const incstrBase62 = (s: string, add = 1) => incstr(s, add, base62)

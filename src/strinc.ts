import { char123abcABC } from './constants'
import { invert } from './invert'
import { decToRadix, radixToDec } from './radix'

type TableMap = { [key: string]: number }

export const parseDigits = (str: string, table: TableMap): number[] =>
  str.split('').map((c) => table[c])
export const encodeDigits = (digits: number[], tableStr: string): string =>
  digits.map((n) => tableStr[n] ?? '').join('')

export const incstr = (
  s: string,
  add = 1,
  tableStr = char123abcABC
): string => {
  const radix = tableStr.length
  const table: TableMap = invert(tableStr, Number)
  const d = radixToDec(parseDigits(s, table), radix) + add

  return encodeDigits(decToRadix(d, radix), tableStr)
}

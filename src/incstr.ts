import { base62, base90, char123abcABC } from './char/constants'
import { invert } from './obj/invert'
import { decToRadix, radixToDec } from './radix'

type TableMap = { [key: string]: number }

export const parseDigits = (str: string, table: TableMap): number[] =>
  str.split('').map((c) => {
    if (table[c] === undefined) throw new Error(`'${c}' is not a digit char`)
    return table[c]
  })
export const encodeDigits = (digits: number[], tableStr: string): string =>
  digits.map((n) => tableStr[n] ?? '').join('')

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

export const incstrBase90 = (s: string, add = 1) => incstr(s, add, base90)
export const incstrBase62 = (s: string, add = 1) => incstr(s, add, base62)

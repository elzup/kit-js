type StringifyFunc = (v: unknown) => false | string

const stringifyTrans = (v: unknown, funcs: StringifyFunc[]): string => {
  const res = funcs.map((f) => f(v)).find((v) => v !== false)

  return typeof res === 'string' ? res : String(v)
}

/**
 * Convert value to string with custom converters.
 *
 * Provides customizable string conversion for different types.
 * Falls back to String(v) if no converter matches.
 *
 * @param v - Value to stringify
 * @param converter - Object with optional converters for each type
 * @returns String representation
 *
 * @example
 * stringify(null, { nul: () => 'NULL' })
 * // => 'NULL'
 *
 * @example
 * stringify(42, { num: (n) => `Number: ${n}` })
 * // => 'Number: 42'
 *
 * @example
 * stringify([1, 2], { arr: (a) => a.join('-') })
 * // => '1-2'
 */
export const stringify = (
  v: unknown,
  converter: {
    nul?: () => string
    obj?: (obj: object) => string
    num?: (n: number) => string
    arr?: (a: unknown[]) => string
  }
): string => {
  const funcs: StringifyFunc[] = []

  funcs.push((v) => v === null && (converter.nul?.() ?? false))
  funcs.push(
    (v) => typeof v === 'object' && v !== null && (converter.obj?.(v) ?? false)
  )
  funcs.push((v) => typeof v === 'number' && (converter.num?.(v) ?? false))
  funcs.push((v) => Array.isArray(v) && (converter.arr?.(v) ?? false))

  return stringifyTrans(v, funcs)
}

// const escapeMmd = (s: string) => zen2han(s.replace(/[()（） ・]/g, ''))

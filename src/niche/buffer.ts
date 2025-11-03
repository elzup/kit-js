const fromCodePoint = (n: number) => String.fromCodePoint(n)
/* istanbul ignore next */
const toCodePoint = (s: string) => s.codePointAt(0) ?? NaN

/**
 * Repartition buffer bits into different-sized chunks as string.
 *
 * Converts buffer to binary, then repartitions into chunks of specified
 * bit size and encodes as Unicode code points.
 *
 * @param buf - Input buffer
 * @param bn - Bit chunk size
 * @returns String encoded from repartitioned bits
 *
 * @example
 * repartitionBits(new Uint8Array([255, 0]), 6)
 * // Splits bits into 6-bit chunks and encodes
 */
export const repartitionBits = (buf: Uint8Array, bn: number): string => {
  const bits = Array.from(buf)
    .map((b) => b.toString(2).padStart(8, '0'))
    .join('')
  const bps = bits.match(new RegExp(`.{${bn}}`, 'g')) || []

  return Array.from(bps)
    .map((b) => b.padEnd(bn, '0'))
    .map((b) => fromCodePoint(parseInt(b, 2)))
    .join('')
}

/**
 * Reverse repartitionBits operation to recover original buffer.
 *
 * Decodes string back to buffer by reversing the bit repartitioning.
 *
 * @param str - Encoded string from repartitionBits
 * @param bits - Original bit chunk size
 * @returns Recovered buffer
 *
 * @example
 * const encoded = repartitionBits(buf, 6)
 * const decoded = unRepartitionBits(encoded, 6)
 * // decoded === buf
 */
export const unRepartitionBits = (str: string, bits: number): Uint8Array => {
  const u8s = (
    [...str]
      .map((v) => toCodePoint(v))
      .map((b) => b.toString(2).padStart(bits, '0'))
      .join('')
      .match(/.{8}/g) || []
  ).map((b) => parseInt(b, 2))

  return new Uint8Array(Array.from(u8s))
}

/**
 * Shift all characters in string by code point offset.
 *
 * Adds a constant value to each character's Unicode code point.
 * Simple character shifting/Caesar cipher operation.
 *
 * @param str - String to shift
 * @param shift - Code point offset to add
 * @returns Shifted string
 *
 * @example
 * shiftCodePoint('abc', 1)  // => 'bcd'
 * shiftCodePoint('xyz', -1) // => 'wxy'
 */
export const shiftCodePoint = (str: string, shift: number): string =>
  [...str].map((v) => fromCodePoint(toCodePoint(v) + shift)).join('')

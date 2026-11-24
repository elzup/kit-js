/**
 * Convert single hex character to binary string.
 *
 * @param c - Hex character (0-9, a-f)
 * @returns 4-bit binary string
 *
 * @example
 * hexCharToBin('a')  // => '1010'
 * hexCharToBin('f')  // => '1111'
 */
export const hexCharToBin = (c: string) =>
  Number(`0x${c}`).toString(2).padStart(4, '0')

/**
 * Convert hex string to binary string.
 *
 * @param s - Hex string
 * @returns Binary string representation
 *
 * @example
 * hex2bin('ff')  // => '11111111'
 * hex2bin('a0')  // => '10100000'
 */
export const hex2bin = (s: string) => s.split('').map(hexCharToBin).join('')

/**
 * Convert Buffer to binary string representation.
 *
 * @param buf - Buffer to convert
 * @returns Binary string of buffer contents
 *
 * @example
 * binstr(Buffer.from([255]))  // => '11111111'
 * binstr(Buffer.from([0, 15])) // => '0000000000001111'
 */
export const binstr = (buf: Buffer) => hex2bin(buf.toString('hex'))

/**
 * Convert decimal number to array of digits in given base.
 *
 * Converts a base-10 number to its representation in another base.
 * Returns array of digit values.
 *
 * @param n - Decimal number to convert (must be >= 0)
 * @param base - Target base (must be > 0)
 * @returns Array of digits in target base
 *
 * @example
 * decToRadix(10, 2)   // => [1, 0, 1, 0] (binary)
 * decToRadix(255, 16) // => [15, 15] (hex: FF)
 * decToRadix(8, 8)    // => [1, 0] (octal)
 */
export const decToRadix = (n: number, base: number): number[] => {
  if (n < 0) throw new Error('n must be >= 0')
  if (base <= 0) throw new Error('base must be > 0')

  const digits: number[] = []
  let nn: number = n

  while (nn > 0) {
    const d = nn % base

    digits.unshift(d)

    nn = Math.floor(nn / base)
  }
  return digits
}

/**
 * Convert array of digits in given base to decimal number.
 *
 * Converts a number representation in any base back to base-10.
 *
 * @param digits - Array of digit values
 * @param base - Base of the input digits
 * @returns Decimal number
 *
 * @example
 * radixToDec([1, 0, 1, 0], 2)   // => 10 (from binary)
 * radixToDec([15, 15], 16)      // => 255 (from hex)
 * radixToDec([1, 0], 8)         // => 8 (from octal)
 */
export const radixToDec = (digits: number[], base: number): number =>
  digits
    .map((d, i) => d * base ** (digits.length - i - 1))
    .reduce((a, b) => a + b, 0)

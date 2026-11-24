/**
 * Count occurrences of each value in an array.
 *
 * Creates a frequency map showing how many times each value appears.
 * Returns a Map for efficient lookups and to preserve insertion order.
 *
 * @param arr - Array of strings or numbers to count
 * @returns Map where keys are unique values and values are occurrence counts
 *
 * @example
 * // Count string and number occurrences
 * countup(['a', 'b', 'a', 1, 0, 0, 0])
 * // => Map {
 * //   'a' => 2,
 * //   'b' => 1,
 * //   1 => 1,
 * //   0 => 3
 * // }
 *
 * @example
 * // Count letters in a word
 * countup('hello'.split(''))
 * // => Map {
 * //   'h' => 1,
 * //   'e' => 1,
 * //   'l' => 2,
 * //   'o' => 1
 * // }
 */
export const countup = (arr: (string | number)[]) => {
  const m = new Map<string | number, number>()

  arr.forEach((v) => {
    m.set(v, (m.get(v) ?? 0) + 1)
  })
  return m
}

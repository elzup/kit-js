/**
 * Transpose a 2D array (swap rows and columns).
 *
 * Converts rows to columns and columns to rows. Similar to matrix transpose
 * in linear algebra. Returns empty array for empty input.
 *
 * @param a - 2D array to transpose
 * @returns Transposed 2D array
 *
 * @example
 * // Transpose 2x3 matrix to 3x2
 * transpose([
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ])
 * // => [[1, 4], [2, 5], [3, 6]]
 *
 * @example
 * // Convert rows to columns
 * transpose([['a', 'b'], ['c', 'd'], ['e', 'f']])
 * // => [['a', 'c', 'e'], ['b', 'd', 'f']]
 *
 * @example
 * // Single row becomes single column
 * transpose([[1, 2, 3]])
 * // => [[1], [2], [3]]
 */
export const transpose = <T>(a: T[][]) => {
  if (a.length === 0) return []
  return a[0].map((_, i) => a.map((_, j) => a[j][i]))
}

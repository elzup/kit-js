import { range } from './range'

/**
 * Split an array into chunks of specified size.
 *
 * Divides an array into smaller arrays (chunks) of equal size. The last chunk
 * may contain fewer elements if the array length is not evenly divisible.
 *
 * @param arr - Input array to split
 * @param size - Size of each chunk (must be positive)
 * @returns Array of chunks, each containing up to `size` elements
 *
 * @example
 * // Basic chunking
 * chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
 * // => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
 *
 * @example
 * // Chunk size of 1
 * chunk([1, 2], 1)
 * // => [[1], [2]]
 *
 * @example
 * // Size 0 or negative returns empty array
 * chunk([1, 2], 0)
 * // => []
 *
 * @example
 * // Empty array
 * chunk([], 3)
 * // => []
 *
 * @example
 * // Chunk size larger than array
 * chunk([1, 2], 3)
 * // => [[1, 2]]
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size < 1) return []
  return range(Math.ceil(arr.length / size)).map((i) =>
    arr.slice(i * size, (i + 1) * size)
  )
}

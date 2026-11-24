/**
 * Get the last element of an array.
 *
 * A simple utility to access the last element without manually calculating
 * the index. Returns undefined for empty arrays.
 *
 * @param a - Input array
 * @returns The last element, or undefined if array is empty
 *
 * @example
 * // Get last element
 * last([1, 2, 3])
 * // => 3
 *
 * @example
 * // Empty array returns undefined
 * last([])
 * // => undefined
 *
 * @example
 * // Works with any type
 * last(['a', 'b', 'c'])
 * // => 'c'
 */
export const last = <T>(a: T[]): T | undefined => a[a.length - 1]

/**
 * Generate an array of numbers from 0 to n-1.
 *
 * This is one of the most commonly used utility functions for creating
 * sequential number arrays, similar to Python's range() or JavaScript's
 * Array.from({length: n}, (_, i) => i).
 *
 * @param n - Length of the array (exclusive upper bound)
 * @returns Array of numbers [0, 1, 2, ..., n-1]
 *
 * @throws {RangeError} If n is negative
 *
 * @example
 * // Basic usage
 * range(5)
 * // => [0, 1, 2, 3, 4]
 *
 * @example
 * // Empty array
 * range(0)
 * // => []
 *
 * @example
 * // Common use case: iterate N times
 * range(3).map(i => `Item ${i}`)
 * // => ['Item 0', 'Item 1', 'Item 2']
 */
export const range = (n: number) => [...Array(n).keys()]

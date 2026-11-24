/**
 * Remove duplicate values from an array.
 *
 * Uses Set for efficient deduplication. Preserves the order of first occurrence.
 * Works with primitive values and object references.
 *
 * @param arr - Input array with potential duplicates
 * @returns New array with only unique values
 *
 * @example
 * // Remove duplicate numbers
 * uniq([1, 2, 3, 3, 2])
 * // => [1, 2, 3]
 *
 * @example
 * // Remove duplicate strings
 * uniq(['a', 'A', 1, 'b', 'b'])
 * // => ['a', 'A', 1, 'b']
 *
 * @example
 * // Empty array
 * uniq([])
 * // => []
 */
export const uniq = <T>(arr: T[]) => [...new Set(arr)]

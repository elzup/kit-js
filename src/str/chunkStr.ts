import { range } from '../arr/range'

/**
 * Create sliding windows of characters from a string.
 *
 * Generates all substrings of specified length by sliding a window
 * across the string. Similar to n-grams in NLP.
 *
 * @param s - Input string
 * @param size - Window size (number of characters per chunk)
 * @returns Array of all substrings of the specified size
 *
 * @example
 * chunkStr('hello', 2)
 * // => ['he', 'el', 'll', 'lo']
 *
 * @example
 * // Create trigrams
 * chunkStr('abcde', 3)
 * // => ['abc', 'bcd', 'cde']
 *
 * @example
 * // Window size larger than string returns empty
 * chunkStr('ab', 3)
 * // => []
 */
export const chunkStr = (s: string, size: number): string[] =>
  range(s.length - size + 1).map((i) => s.substring(i, i + size))

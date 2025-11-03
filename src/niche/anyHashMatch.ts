import { chunkStr } from '../str/chunkStr'
import { sha512Hex } from '../node/hash'

const hashMatch = (
  hash: string,
  hashFunc: (s: string) => string,
  plain: string
): boolean => hashFunc(plain) === hash

/**
 * Check if any substring of given length matches a hash.
 *
 * Slides a window of specified length across the plain text and checks
 * if any window's hash matches the target hash. Useful for finding
 * substrings that hash to a specific value.
 *
 * @param plain - Plain text to search in
 * @param hash - Target hash to match
 * @param len - Window length for substring matching
 * @param salt - Optional salt for hashing (default: '')
 * @param hashFunc - Hash function to use (default: sha512Hex)
 * @returns true if any substring matches the hash
 *
 * @example
 * anyHashMatch('hello world', targetHash, 5)
 * // Checks if hash of any 5-char substring matches targetHash
 */
export const anyHashMatch = (
  plain: string,
  hash: string,
  len: number,
  salt = '',
  hashFunc: (s: string) => string = sha512Hex
): boolean => {
  if (len === 0) throw new Error('len must be greater than 0')

  const match = hashMatch.bind(null, hash, (s) => hashFunc(salt + s))

  return chunkStr(plain, len).some(match)
}

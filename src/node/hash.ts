import { hashDigest } from './crypto'

/**
 * Generate hash string with specified encoding.
 *
 * Creates cryptographic hash and encodes it as a string using the
 * specified encoding (hex, base64, etc.).
 *
 * @param s - String to hash
 * @param algorithm - Hash algorithm (e.g., 'sha256', 'md5')
 * @param enc - Output encoding (e.g., 'hex', 'base64')
 * @returns Encoded hash string
 *
 * @example
 * hash('hello', 'sha256', 'hex')
 * // => '2cf24dba5fb0a...' (SHA256 in hex)
 */
export const hash = (s: string, algorithm: string, enc: BufferEncoding) =>
  hashDigest(s, algorithm).toString(enc)

/**
 * Create reusable hash function with fixed algorithm and encoding.
 *
 * Returns a function that hashes strings using the specified algorithm
 * and encoding. Useful for creating specialized hash functions.
 *
 * @param algorithm - Hash algorithm to use
 * @param enc - Output encoding
 * @returns Hash function
 *
 * @example
 * const sha256hex = makeHash('sha256', 'hex')
 * sha256hex('hello')  // => '2cf24dba5fb0a...'
 * sha256hex('world')  // => '486ea46224d1bb...'
 */
export const makeHash =
  (algorithm: string, enc: BufferEncoding) => (s: string) =>
    hash(s, algorithm, enc)

/**
 * SHA512 hash function with hex encoding.
 *
 * Pre-configured hash function for SHA512 algorithm.
 *
 * @example
 * sha512Hex('hello')
 * // => '9b71d224bd62f...' (SHA512 hash in hex)
 */
export const sha512Hex = makeHash('sha512', 'hex')

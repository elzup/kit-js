import { createHash } from 'crypto'

/**
 * Generate hash digest buffer using Node.js crypto.
 *
 * Creates a cryptographic hash of the input string using the specified
 * algorithm. Returns raw Buffer instead of string encoding.
 *
 * @param s - String to hash
 * @param algorithm - Hash algorithm (e.g., 'sha256', 'md5', 'sha512')
 * @returns Buffer containing hash digest
 *
 * @example
 * hashDigest('hello', 'sha256')
 * // => Buffer with SHA256 hash
 *
 * @example
 * hashDigest('password', 'md5')
 * // => Buffer with MD5 hash
 */
export const hashDigest = (s: string, algorithm: string) =>
  createHash(algorithm).update(String(s)).digest()

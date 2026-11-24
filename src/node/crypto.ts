import { createHash } from 'node:crypto'
import type { Algorithm } from '../crypto/digest.js'

export type { Algorithm }

/**
 * Generate hash digest synchronously (Node.js only).
 *
 * Web Crypto has no sync digest, so sync hashing is Node.js-only.
 * For browsers use `crypto/digest` (async).
 *
 * @param s - String to hash
 * @param algorithm - Hash algorithm
 * @returns Uint8Array containing hash digest
 *
 * @example
 * hashDigest('hello', 'sha256')
 * // => Uint8Array(32)
 */
export function hashDigest(s: string, algorithm: Algorithm): Uint8Array {
  return new Uint8Array(createHash(algorithm).update(s).digest())
}

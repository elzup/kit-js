// Polyfill: Get Node.js crypto or null
const nodeCrypto = (() => {
  try {
    return require('crypto')
  } catch {
    return null
  }
})()

export type Algorithm = 'sha256' | 'sha384' | 'sha512' | 'sha1'
export type AlgorithmWebCrypto = 'SHA-256' | 'SHA-384' | 'SHA-512' | 'SHA-1'
const ALGORITHM_MAP: Record<Algorithm, AlgorithmWebCrypto> = {
  sha256: 'SHA-256',
  sha384: 'SHA-384',
  sha512: 'SHA-512',
  sha1: 'SHA-1',
}

/**
 * Generate hash digest buffer using Node.js crypto (synchronous, Node.js only).
 *
 * Creates a cryptographic hash of the input string using the specified
 * algorithm. Returns raw Buffer instead of string encoding.
 *
 * Note: This function only works in Node.js. For browser compatibility,
 * use hashDigestAsync instead.
 *
 * @param s - String to hash
 * @param algorithm - Hash algorithm (e.g., 'sha256', 'md5', 'sha512')
 * @returns Uint8Array containing hash digest
 *
 * @example
 * hashDigest('hello', 'sha256')
 * // => Uint8Array with SHA256 hash
 *
 * @example
 * hashDigest('password', 'md5')
 * // => Uint8Array with MD5 hash
 */
export function hashDigest(s: string, algorithm: Algorithm): Uint8Array {
  if (!nodeCrypto) {
    throw new Error(
      'crypto.createHash is Node.js only. Use hashDigestAsync for browser compatibility.'
    )
  }
  const hash = nodeCrypto.createHash(algorithm).update(String(s)).digest()
  return new Uint8Array(hash)
}

/**
 * Generate hash digest buffer (asynchronous, works in both Node.js and browser).
 *
 * Creates a cryptographic hash of the input string using the specified
 * algorithm. Uses Web Crypto API when available, falls back to Node.js crypto.
 *
 * @param s - String to hash
 * @param algorithm - Hash algorithm (e.g., 'sha256', 'sha384', 'sha512')
 * @returns Promise<Uint8Array> containing hash digest
 *
 * @example
 * await hashDigestAsync('hello', 'sha256')
 * // => Uint8Array with SHA256 hash
 *
 * @example
 * await hashDigestAsync('password', 'sha512')
 * // => Uint8Array with SHA512 hash
 */
export async function hashDigestAsync(
  s: string,
  algorithm: 'sha256' | 'sha384' | 'sha512' | 'sha1'
): Promise<Uint8Array> {
  // Try Web Crypto API first (modern browsers and Node.js 15+)
  if (globalThis.crypto?.subtle?.digest) {
    try {
      const webAlgo = ALGORITHM_MAP[algorithm]
      const encoder = new TextEncoder()
      const data = encoder.encode(String(s))
      const hashBuffer = await globalThis.crypto.subtle.digest(webAlgo, data)
      return new Uint8Array(hashBuffer)
    } catch {
      // Fall through to Node.js crypto if algorithm not supported
    }
  }

  // Fallback to Node.js crypto (reuse hashDigest logic)
  return hashDigest(s, algorithm)
}

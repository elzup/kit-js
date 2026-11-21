export type Algorithm = 'sha256' | 'sha384' | 'sha512' | 'sha1'
type WebCryptoAlgorithm = 'SHA-256' | 'SHA-384' | 'SHA-512' | 'SHA-1'

const ALGORITHM_MAP: Record<Algorithm, WebCryptoAlgorithm> = {
  sha256: 'SHA-256',
  sha384: 'SHA-384',
  sha512: 'SHA-512',
  sha1: 'SHA-1',
}

/**
 * Hash a string with Web Crypto (async, works in Node.js 22+ and browsers).
 *
 * Browsers expose `crypto.subtle` only in secure contexts (https / localhost).
 *
 * @param s - String to hash (UTF-8 encoded)
 * @param algorithm - Hash algorithm
 * @returns Promise<Uint8Array> containing hash digest
 *
 * @example
 * await digest('hello', 'sha256')
 * // => Uint8Array(32)
 */
export async function digest(
  s: string,
  algorithm: Algorithm
): Promise<Uint8Array> {
  const subtle = globalThis.crypto?.subtle

  if (subtle === undefined) {
    throw new Error(
      'crypto.subtle is unavailable (insecure context?). Use node/crypto hashDigest on Node.js.'
    )
  }
  const data = new TextEncoder().encode(s)
  const buf = await subtle.digest(ALGORITHM_MAP[algorithm], data)

  return new Uint8Array(buf)
}

/**
 * Encode bytes as lowercase hex string.
 *
 * @example
 * toHex(new Uint8Array([0, 255])) // => '00ff'
 */
export const toHex = (bytes: Uint8Array): string =>
  Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')

/**
 * Hash a string and return hex (async, universal).
 *
 * @example
 * await digestHex('abc', 'sha256')
 * // => 'ba7816bf8f01cfea...'
 */
export const digestHex = async (s: string, algorithm: Algorithm) =>
  toHex(await digest(s, algorithm))

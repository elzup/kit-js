/**
 * Non-cryptographic PRNG primitives (pure JS, sync, works in any runtime).
 *
 * For reproducible randomness only. Do NOT use for secrets/tokens;
 * use `crypto/random` instead.
 */

export type Sfc32State = readonly [number, number, number, number]

const UINT32_RANGE = 2 ** 32

/**
 * Hash a string into a 128-bit seed (4 x uint32) with cyrb128.
 *
 * sfc32 needs 128 bits of well-mixed state; a short string seed
 * like 'a' would otherwise give correlated first outputs.
 *
 * @example
 * cyrb128('a') // => [n1, n2, n3, n4]
 */
export const cyrb128 = (str: string): Sfc32State => {
  let h1 = 1779033703
  let h2 = 3144134277
  let h3 = 1013904242
  let h4 = 2773480762

  for (let i = 0; i < str.length; i++) {
    const k = str.charCodeAt(i)

    h1 = h2 ^ Math.imul(h1 ^ k, 597399067)
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233)
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213)
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179)
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067)
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233)
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213)
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179)
  h1 ^= h2 ^ h3 ^ h4
  h2 ^= h1
  h3 ^= h1
  h4 ^= h1

  return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0]
}

/**
 * Advance sfc32 by one step (pure: returns value and next state).
 *
 * @returns [value in [0, 1), next state]
 */
export const sfc32Step = ([a, b, c, d]: Sfc32State): [number, Sfc32State] => {
  const t = (((a + b) | 0) + d) | 0
  const rotated = (c << 21) | (c >>> 11)

  return [
    (t >>> 0) / UINT32_RANGE,
    [b ^ (b >>> 9), (c + (c << 3)) | 0, (rotated + t) | 0, (d + 1) | 0],
  ]
}

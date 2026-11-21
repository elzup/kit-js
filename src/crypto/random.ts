const UINT32_RANGE = 2 ** 32

/**
 * Cryptographically secure random number in [0, 1).
 *
 * Drop-in replacement for Math.random when unpredictability matters
 * (tokens, lottery, shuffle of secrets). Works in Node.js 22+ and browsers.
 * Can be passed to `rand/shuffle`, `rand/choice`, etc. as `rand`.
 *
 * @example
 * shuffle(cards, randSecure)
 */
export const randSecure = (): number =>
  globalThis.crypto.getRandomValues(new Uint32Array(1))[0] / UINT32_RANGE

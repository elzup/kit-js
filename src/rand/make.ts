import { hashDigest } from '../node/crypto'

const MAX = 2 ** 32
const ALGORITHM = 'sha256'

type Seed = number | string
/**
 * Generate a hash buffer from a seed value.
 *
 * Creates a SHA256 hash buffer from the given seed (number or string).
 * Used as base for deterministic random number generation.
 *
 * @param seed - Seed value (number or string)
 * @returns Buffer containing hash digest
 *
 * @example
 * randSeedBuf(12345)
 * // => Buffer with SHA256 hash of "12345"
 */
export const randSeedBuf = (seed: Seed) => hashDigest(String(seed), ALGORITHM)

/**
 * Generate random number with detailed information from seed.
 *
 * Returns object containing the seed, generated random number (0-1),
 * and the hash buffer used for generation.
 *
 * @param seed - Seed value (number or string)
 * @returns Object with seed, num (0-1), and buffer
 *
 * @example
 * randSeedAdv(12345)
 * // => { seed: 12345, num: 0.123456, buf: Buffer(...) }
 */
export const randSeedAdv = (seed: Seed) => {
  const buf = randSeedBuf(seed)
  const num = buf.readUInt32LE() / (MAX + 1) // 0 <= num < 1

  return { seed, num, buf }
}

/**
 * Generate deterministic random number from seed.
 *
 * Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)
 * that is deterministic based on the seed.
 *
 * @param seed - Seed value (number or string)
 * @returns Random number between 0 and 1
 *
 * @example
 * randSeed(12345)
 * // => 0.123456 (always same for same seed)
 *
 * @example
 * randSeed('hello')
 * // => 0.789012 (deterministic)
 */
export const randSeed = (seed: Seed) => randSeedAdv(seed).num

/**
 * Create infinite generator of deterministic random numbers.
 *
 * Yields an infinite sequence of pseudo-random numbers based on
 * the seed string, incrementing a counter for each value.
 *
 * @param seed - Base seed string
 * @returns Generator yielding random numbers 0-1
 *
 * @example
 * const gen = randGen('my-seed')
 * gen.next().value  // => 0.123...
 * gen.next().value  // => 0.456...
 * gen.next().value  // => 0.789...
 */
export function* randGen(seed: string): Generator<number, number, number> {
  for (let i = 0; ; i++) {
    yield randSeed(seed + `${i}`)
  }
}

/**
 * Create deterministic random number generator function.
 *
 * Returns an object with a function that generates sequential
 * pseudo-random numbers and the seed used.
 *
 * @param seed - Seed string (default: current timestamp)
 * @returns Object with fn() function and seed
 *
 * @example
 * const rng = makeRand('my-seed')
 * rng.fn()  // => 0.123...
 * rng.fn()  // => 0.456...
 * rng.seed  // => 'my-seed'
 *
 * @example
 * // Auto-generated seed from timestamp
 * const rng = makeRand()
 * rng.fn()  // => random value
 */
export function makeRand(seed = String(Date.now())) {
  const rand = randGen(seed)

  return { fn: () => rand.next().value, seed }
}

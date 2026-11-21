import { cyrb128, sfc32Step } from './prng'

type Seed = number | string

/**
 * Generate random number with detailed information from seed.
 *
 * @param seed - Seed value (number or string)
 * @returns Object with seed and num (0 <= num < 1)
 *
 * @example
 * randSeedAdv('abc')
 * // => { seed: 'abc', num: 0.123456 }
 */
export const randSeedAdv = (seed: Seed) => {
  const [num] = sfc32Step(cyrb128(String(seed)))

  return { seed, num }
}

/**
 * Generate deterministic random number from seed.
 *
 * Pure JS (no crypto), works in Node.js and browsers.
 * Same seed always returns the same value; `1` and `'1'` are equal.
 *
 * @param seed - Seed value (number or string)
 * @returns Random number between 0 (inclusive) and 1 (exclusive)
 *
 * @example
 * randSeed('hello')
 * // => 0.789012 (deterministic)
 */
export const randSeed = (seed: Seed) => randSeedAdv(seed).num

/**
 * Create infinite generator of deterministic random numbers.
 *
 * @param seed - Base seed string
 * @returns Generator yielding random numbers 0-1
 *
 * @example
 * const gen = randGen('my-seed')
 * gen.next().value  // => 0.123...
 * gen.next().value  // => 0.456...
 */
export function* randGen(seed: string): Generator<number, number, number> {
  let state = cyrb128(seed)

  while (true) {
    const [value, next] = sfc32Step(state)

    state = next
    yield value
  }
}

/**
 * Create deterministic random number generator function.
 *
 * @param seed - Seed string (default: current timestamp)
 * @returns Object with fn() function and seed
 *
 * @example
 * const rng = makeRand('my-seed')
 * rng.fn()  // => 0.123...
 * rng.fn()  // => 0.456...
 * rng.seed  // => 'my-seed'
 */
export function makeRand(seed = String(Date.now())) {
  const rand = randGen(seed)

  return { fn: () => rand.next().value, seed }
}

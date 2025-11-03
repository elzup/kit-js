import { makeRand } from './make'
import { choice } from './choice'
import { shuffle } from './shuffle'
import { sample } from './sample'
import { randRange } from './range'

/**
 * Shuffle array with deterministic seed.
 *
 * Shuffles array using a seeded random number generator for
 * reproducible results.
 *
 * @param a - Array to shuffle
 * @param seed - Seed string for deterministic shuffling
 * @returns New shuffled array
 *
 * @example
 * shuffleSeed([1, 2, 3, 4], 'seed1')
 * // => [3, 1, 4, 2] (always same for same seed)
 */
export const shuffleSeed = <T>(a: T[], seed: string) =>
  shuffle(a, makeRand(seed).fn)

/**
 * Pick random element from array with deterministic seed.
 *
 * Selects a random element using a seeded random number generator
 * for reproducible results.
 *
 * @param a - Array to pick from
 * @param seed - Seed string for deterministic selection
 * @returns Randomly selected element
 *
 * @example
 * choiceSeed(['a', 'b', 'c'], 'seed1')
 * // => 'b' (always same for same seed)
 */
export const choiceSeed = <T>(a: T[], seed: string) =>
  choice(a, makeRand(seed).fn)

/**
 * Sample n random elements with deterministic seed.
 *
 * Samples n elements using a seeded random number generator
 * for reproducible results.
 *
 * @param a - Array to sample from
 * @param n - Number of elements to sample
 * @param seed - Seed string for deterministic sampling
 * @returns Array of sampled elements
 *
 * @example
 * sampleSeed([1, 2, 3, 4, 5], 3, 'seed1')
 * // => [2, 4, 5] (always same for same seed)
 */
export const sampleSeed = <T>(a: T[], n: number, seed: string) =>
  sample(a, n, makeRand(seed).fn)

/**
 * Generate random number in range with deterministic seed.
 *
 * Generates a random number between min and max using a seeded
 * random number generator for reproducible results.
 *
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (exclusive)
 * @param seed - Seed string for deterministic generation
 * @returns Random number in range
 *
 * @example
 * randRangeSeed(1, 10, 'seed1')
 * // => 7 (always same for same seed)
 */
export const randRangeSeed = (min: number, max: number, seed: string) =>
  randRange(min, max, makeRand(seed).fn)

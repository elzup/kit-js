/**
 * Randomly select one element from an array.
 *
 * Picks a random element with uniform distribution. Returns undefined
 * for empty arrays. Allows custom random number generator for
 * deterministic or seeded randomness.
 *
 * @param arr - Array to choose from
 * @param rand - Random number generator function (defaults to Math.random)
 * @returns Random element from array, or undefined if array is empty
 *
 * @example
 * // Pick random fruit
 * choice(['apple', 'banana', 'orange'])
 * // => 'banana' (random)
 *
 * @example
 * // Pick random number
 * choice([1, 2, 3, 4, 5])
 * // => 3 (random)
 *
 * @example
 * // Empty array returns undefined
 * choice([])
 * // => undefined
 *
 * @example
 * // Custom random function (seeded)
 * import { randSeed } from '@elzup/kit/rand/seed'
 * const myRand = randSeed('my-seed')
 * choice(['a', 'b', 'c'], myRand)
 * // => Always same result for same seed
 *
 * @example
 * // Random boolean
 * choice([true, false])
 */
export const choice = <T>(arr: T[], rand = Math.random): T | undefined =>
  arr[Math.floor(rand() * arr.length)]

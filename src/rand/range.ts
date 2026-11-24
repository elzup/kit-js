const randRangeHit = (low: number, high: number, v: number) =>
  low + Math.floor(v * (high - low))

type RandFunc = () => number

type RandRange = {
  (max: number): number
  (max: number, randFn: RandFunc): number
  (min: number, max: number): number
  (min: number, max: number, randFn: RandFunc): number
}

/**
 * Generate a random integer within a range.
 *
 * Flexible function with multiple call signatures. Returns a random integer
 * between min (inclusive) and max (exclusive). Supports custom random number
 * generator for deterministic or seeded randomness.
 *
 * @param minOrMax - If only arg: max (0 to max-1). If two args: min value
 * @param maxOrFn - Max value (exclusive) or custom random function
 * @param fn - Optional custom random function
 * @returns Random integer in specified range
 *
 * @example
 * // Random from 0 to 9
 * randRange(10)
 * // => 7 (random between 0-9)
 *
 * @example
 * // Random from 5 to 9
 * randRange(5, 10)
 * // => 8 (random between 5-9)
 *
 * @example
 * // Random dice roll (1-6)
 * randRange(1, 7)
 * // => 4 (random between 1-6)
 *
 * @example
 * // With custom random function
 * import { randSeed } from '@elzup/kit/rand/seed'
 * const myRand = randSeed('seed123')
 * randRange(1, 100, myRand)
 * // => Deterministic result for same seed
 *
 * @example
 * // Single argument with custom random
 * randRange(50, myRand)
 * // => Random 0-49 with custom generator
 */
export const randRange: RandRange = (
  minOrMax: number,
  maxOrFn?: number | RandFunc,
  fn?: RandFunc
): number => {
  const [min, max] =
    typeof maxOrFn === 'number' ? [minOrMax, maxOrFn] : [0, minOrMax]
  const randFunc = fn ?? (typeof maxOrFn === 'function' ? maxOrFn : Math.random)

  return randRangeHit(min, max, randFunc())
}

/**
 * Randomly shuffle an array.
 *
 * Creates a new array with elements in random order. Does not modify
 * the original array. Uses a sort-based approach with random values
 * for shuffling. Supports custom random number generator.
 *
 * @param arr - Array to shuffle (not modified)
 * @param rand - Random number generator function (defaults to Math.random)
 * @returns New shuffled array
 *
 * @example
 * // Shuffle numbers
 * shuffle([1, 2, 3, 4, 5])
 * // => [3, 1, 5, 2, 4] (random order)
 *
 * @example
 * // Shuffle deck of cards
 * const deck = ['A', 'K', 'Q', 'J', '10']
 * shuffle(deck)
 * // => ['Q', 'A', '10', 'K', 'J'] (random)
 *
 * @example
 * // Original array unchanged
 * const original = [1, 2, 3]
 * const shuffled = shuffle(original)
 * console.log(original)  // => [1, 2, 3] (unchanged)
 *
 * @example
 * // Deterministic shuffle with seed
 * import { randSeed } from '@elzup/kit/rand/seed'
 * const myRand = randSeed('seed123')
 * shuffle([1, 2, 3, 4, 5], myRand)
 * // => Always same order for same seed
 *
 * @example
 * // Shuffle quiz questions
 * const questions = ['Q1', 'Q2', 'Q3', 'Q4']
 * const randomized = shuffle(questions)
 */
export const shuffle = <T>(arr: readonly T[], rand = Math.random): T[] => {
  const a = arr.map((v) => ({ v, r: rand() }))

  a.sort((a, b) => a.r - b.r)
  return a.map(({ v }) => v)
}

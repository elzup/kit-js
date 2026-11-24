/**
 * Randomly sample n elements from an array.
 *
 * Uses reservoir sampling algorithm to select n random elements
 * from the array. Accepts custom random function for deterministic sampling.
 *
 * @param arr - Array to sample from
 * @param n - Number of elements to sample
 * @param rand - Random function (default: Math.random)
 * @returns Array of n randomly selected elements
 *
 * @example
 * sample([1, 2, 3, 4, 5], 3)
 * // => [2, 4, 5] (random selection)
 *
 * @example
 * // Deterministic sampling
 * const myRand = () => 0.5
 * sample(['a', 'b', 'c', 'd'], 2, myRand)
 * // => ['b', 'c'] (deterministic)
 */
export const sample = <T>(arr: T[], n: number, rand = Math.random): T[] => {
  const b: T[] = []

  arr.forEach((v, i) => {
    const all = arr.length - i
    const least = n - b.length

    if (rand() < least / all) b.push(v)
  })
  return b
}

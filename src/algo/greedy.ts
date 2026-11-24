/**
 * Greedy algorithm for breaking down a number into units.
 *
 * Decomposes a number using the largest units first (greedy approach).
 * Units array should be in descending order. Returns count for each unit.
 *
 * @param n - Number to decompose
 * @param a - Array of unit sizes (descending order recommended)
 * @returns Array of counts for each unit (including remainder as last element)
 *
 * @example
 * // Convert cents to coins (100, 25, 10, 5, 1)
 * greedy(187, [100, 25, 10, 5])
 * // => [1, 3, 1, 0, 2]  // 1×100 + 3×25 + 1×10 + 0×5 + 2×1
 *
 * @example
 * // Convert seconds to time units
 * greedy(3665, [3600, 60])
 * // => [1, 1, 5]  // 1 hour, 1 minute, 5 seconds
 */
export const greedy = (n: number, a: readonly number[]) =>
  [...a, 1].map((u, i) => Math.floor((n % (a[i - 1] ?? Infinity)) / u))

/**
 * Strict greedy algorithm with explicit remainder.
 *
 * Similar to greedy() but returns remainder explicitly as last element.
 * More predictable behavior when units don't evenly divide the number.
 *
 * @param n - Number to decompose
 * @param units - Array of unit sizes (any order)
 * @returns Array of counts for each unit, with remainder as last element
 *
 * @example
 * // Convert 187 cents to bills/coins
 * greedyStrict(187, [100, 25, 10, 5, 1])
 * // => [1, 3, 1, 0, 1, 2]
 *
 * @example
 * // Time decomposition
 * greedyStrict(7384, [3600, 60, 1])
 * // => [2, 3, 4, 0]  // 2h 3m 4s, 0 remainder
 */
export const greedyStrict = (n: number, units: readonly number[]) => {
  let k = n

  const a = units.map((u) => {
    const v = Math.floor(k / u)

    k -= v * u
    return v
  })

  return [...a, k]
}

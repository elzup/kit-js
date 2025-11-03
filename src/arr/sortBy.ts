type ScoreFunc<T> = (v: T) => number

/**
 * Sort an array in-place by a scoring function.
 *
 * Sorts the array based on numeric scores calculated by the provided function.
 * Lower scores come first. Modifies the original array.
 *
 * @param a - Array to sort (will be mutated)
 * @param f - Function that calculates a numeric score for each element
 * @returns void (modifies array in place)
 *
 * @example
 * // Sort objects by property
 * const users = [{ age: 30 }, { age: 20 }, { age: 25 }]
 * sortBy(users, u => u.age)
 * // users is now [{ age: 20 }, { age: 25 }, { age: 30 }]
 *
 * @example
 * // Sort by string length
 * const words = ['apple', 'pie', 'banana']
 * sortBy(words, w => w.length)
 * // words is now ['pie', 'apple', 'banana']
 *
 * @example
 * // Sort by negative value (descending order)
 * const nums = [1, 5, 3, 9, 2]
 * sortBy(nums, n => -n)
 * // nums is now [9, 5, 3, 2, 1]
 */
export const sortBy = <T>(a: T[], f: ScoreFunc<T>) => {
  a.sort((a, b) => f(a) - f(b))
}

/**
 * Higher-order function that creates a comparison function for sorting.
 *
 * Returns a comparator function that can be passed to Array.sort().
 * Useful when you need to reuse the same scoring logic.
 *
 * @param f - Function that calculates a numeric score for each element
 * @returns Comparison function for Array.sort()
 *
 * @example
 * // Create reusable comparator
 * const byAge = sortByHo((user: { age: number }) => user.age)
 * users1.sort(byAge)
 * users2.sort(byAge)
 */
export const sortByHo =
  <T>(f: ScoreFunc<T>) =>
  (a: T, b: T) =>
    f(a) - f(b)

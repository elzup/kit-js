// referenced by https://qiita.com/higuma/items/5af4e62bdf4df42ce673 thanks

/**
 * Base recursive function for generating permutations (internal use).
 *
 * @internal
 */
export const permutationBase = <T>(
  post: T[],
  n: number = post.length,
  pre: T[] = [],
  perm: T[][] = []
) => {
  if (n === 0) {
    perm.push(pre)
    return
  }
  for (let i = 0, len = post.length; i < len; ++i) {
    const rest = post.slice(0)

    permutationBase(rest, n - 1, pre.concat(rest.splice(i, 1)), perm)
  }
  return perm
}

/**
 * Generate all permutations of an array.
 *
 * Creates all possible arrangements of n elements from the array.
 * Returns an array of arrays, each containing one permutation.
 *
 * @param post - Array of elements to permute
 * @param n - Number of elements to select (defaults to all)
 * @param pre - Initial prefix for permutations (defaults to empty)
 * @returns Array of all permutations
 *
 * @example
 * // All permutations of 3 elements
 * permutation([1, 2, 3])
 * // => [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 *
 * @example
 * // 2-element permutations from 3 elements
 * permutation(['A', 'B', 'C'], 2)
 * // => [['A','B'], ['A','C'], ['B','A'], ['B','C'], ['C','A'], ['C','B']]
 *
 * @example
 * // Single element permutations
 * permutation([1, 2, 3], 1)
 * // => [[1], [2], [3]]
 */
export const permutation = <T>(
  post: T[],
  n: number = post.length,
  pre: T[] = []
) => {
  const perm: T[][] = []

  permutationBase(post, n, pre, perm)
  return perm
}

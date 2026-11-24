type Tuple<
  T,
  N extends number,
  R extends unknown[] = [],
> = R['length'] extends N ? R : Tuple<T, N, [...R, T]>

export function* windowedGen<T, N extends number>(
  a: readonly T[],
  n: N
): Generator<Tuple<T, N>> {
  if (a.length < n) return

  for (let i = 0; i <= a.length - n; i++) {
    yield a.slice(i, i + n) as Tuple<T, N>
  }
}

/**
 * Create sliding windows of specified size over an array.
 *
 * Generates all consecutive sub-arrays of length n. Each window slides
 * one position at a time. Similar to Python's itertools or Kotlin's windowed().
 *
 * @param a - Input array
 * @param n - Window size (default: 2)
 * @returns Array of windows, each containing n consecutive elements
 *
 * @example
 * // Sliding windows of size 3
 * windowed([1, 2, 3, 4, 5], 3)
 * // => [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *
 * @example
 * // Calculate moving average
 * windowed([10, 20, 30, 40], 3)
 *   .map(win => win.reduce((a, b) => a + b) / win.length)
 * // => [20, 30]
 *
 * @example
 * // Default window size 2
 * windowed(['a', 'b', 'c', 'd'])
 * // => [['a', 'b'], ['b', 'c'], ['c', 'd']]
 */
export const windowed = <T, N extends number = 2>(
  a: readonly T[],
  n: N = 2 as N
): Tuple<T, N>[] => Array.from(windowedGen(a, n))

export const windowed2Gen = <T>(a: readonly T[]) => windowedGen(a, 2)
export const windowed2 = <T>(a: readonly T[]) => windowed(a, 2)

/**
 * Alias for windowed function.
 * @see windowed
 */
export const slideWindow = windowed

/**
 * Alias for windowed function.
 * @see windowed
 */
export const comps = windowed

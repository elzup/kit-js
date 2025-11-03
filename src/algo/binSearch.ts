type Range = { dw: number; up: number }

/**
 * Generic binary search algorithm.
 *
 * Performs binary search with a custom middle-point evaluation function.
 * Repeatedly narrows down the search range until finished.
 *
 * @param range - Search range with dw (down/lower bound) and up (upper bound)
 * @param nextMiddle - Function that evaluates the middle point and returns search state
 * @returns The lower bound value when search completes
 *
 * @example
 * // Find insertion point in sorted array
 * binSearch({ dw: 0, up: 10 }, ({ dw, up }) => {
 *   const mid = Math.floor((dw + up) / 2)
 *   return { isOver: mid > 5, mid, isFinish: up - dw <= 1 }
 * })
 * // => 5
 */
export const binSearch = (
  range: Range,
  nextMiddle: (range: Range) => {
    isOver: boolean
    mid: number
    isFinish: boolean
  }
) => {
  let up = range.up,
    dw = range.dw

  while (true) {
    const { isOver, mid, isFinish } = nextMiddle({ dw, up })

    if (isFinish) break
    if (isOver) up = mid
    else dw = mid
  }
  return dw
}

/**
 * Binary search in a sorted array.
 *
 * Finds the largest index where the value is less than or equal to target.
 * Array must be sorted in ascending order.
 *
 * @param a - Sorted array of numbers
 * @param target - Value to search for
 * @returns Index of largest element ≤ target
 *
 * @example
 * binSearchArr([1, 3, 5, 7, 9], 6)
 * // => 2 (index of 5, largest value ≤ 6)
 *
 * @example
 * binSearchArr([1, 3, 5, 7, 9], 5)
 * // => 2 (exact match)
 */
export const binSearchArr = (a: readonly number[], target: number) =>
  binSearch({ dw: 0, up: a.length }, ({ dw, up }) => {
    const mid = Math.floor((dw + up) / 2)

    return { isOver: a[mid] > target, mid, isFinish: 1 >= up - dw }
  })

/**
 * Binary search for floating-point values.
 *
 * Searches for the boundary point in a continuous range where a condition
 * changes from false to true. Useful for numerical optimization.
 *
 * @param range - Search range with dw and up bounds
 * @param overFn - Function that returns true if value is "over" the target
 * @param resolution - Stop when range is smaller than this
 * @returns The lower bound of the final range
 *
 * @example
 * // Find square root of 10 (value where x² > 10)
 * binSearchFloat({ dw: 0, up: 10 }, (x) => x * x > 10, 0.001)
 * // => ~3.162 (√10)
 *
 * @example
 * // Find threshold value
 * binSearchFloat({ dw: 0, up: 100 }, (x) => expensiveCheck(x), 0.01)
 */
export const binSearchFloat = (
  range: Range,
  overFn: (v: number) => boolean,
  resolution: number
) =>
  binSearch(range, ({ dw, up }) => {
    const mid = (dw + up) / 2

    return { mid, isOver: overFn(mid), isFinish: resolution >= up - dw }
  })

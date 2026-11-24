/**
 * Returns the element in the array that yields the maximum value from the provided function.
 *
 * @param a - The array to search
 * @param compareFn - The function to determine the value to compare
 * @returns The element with the maximum value, or undefined if the array is empty
 */
export const maxBy = <T>(
  a: readonly T[],
  compareFn: (t: T) => number
): T | undefined =>
  a.length === 0
    ? undefined
    : a
        .map((v) => [v, compareFn(v)] as const)
        .reduce((a, b) => (a[1] > b[1] ? a : b))[0]

/**
 * Returns the element in the array that yields the minimum value from the provided function.
 *
 * @param a - The array to search
 * @param compareFn - The function to determine the value to compare
 * @returns The element with the minimum value, or undefined if the array is empty
 */
export const minBy = <T>(
  a: readonly T[],
  compareFn: (t: T) => number
): T | undefined => maxBy(a, (t) => -compareFn(t))

/**
 * Find the element in the array closest to the target value based on the comparison function.
 * @param a - The array to search
 * @param compareFn - The function to determine the value to compare
 * @param target - The target value to find the closest match for
 * @returns The element closest to the target value, or undefined if the array is empty
 */
export const nearBy = <T>(
  a: readonly T[],
  compareFn: (t: T) => number,
  target: number
): T | undefined => maxBy(a, (t) => -Math.abs(target - compareFn(t)))

/**
 * Find the element in the array farthest from the target value based on the comparison function.
 * @param a - The array to search
 * @param compareFn - The function to determine the value to compare
 * @param target - The target value to find the farthest match for
 * @returns The element farthest from the target value, or undefined if the array is empty
 */
export const farBy = <T>(
  a: readonly T[],
  compareFn: (t: T) => number,
  target: number
): T | undefined => maxBy(a, (t) => Math.abs(target - compareFn(t)))

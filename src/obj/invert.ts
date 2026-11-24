export const swap = <T, U>([k, v]: [T, U]): [U, T] => [v, k]

type Entryable<T> = string[] | string | Record<string, T>

type InvertFn = {
  <T extends PropertyKey>(obj: Entryable<T>): Record<string, T>
  <T extends PropertyKey, V>(
    obj: Entryable<T>,
    after: (v: string) => V
  ): Record<string, V>
}

/**
 * Invert keys and values of an object.
 *
 * Swaps keys and values, creating a new object where the original values
 * become keys and original keys become values. Supports optional transform
 * function for values.
 *
 * @param obj - Object, array, or string to invert
 * @param after - Optional function to transform the resulting values
 * @returns Inverted object
 *
 * @example
 * invert({ a: '1', b: '2', c: '3' })
 * // => { '1': 'a', '2': 'b', '3': 'c' }
 *
 * @example
 * // With transform function
 * invert({ a: '1', b: '2' }, (v) => Number(v))
 * // => { '1': 0, '2': 1 }  // values are indices
 *
 * @example
 * // Invert array (index becomes value)
 * invert(['x', 'y', 'z'])
 * // => { 'x': '0', 'y': '1', 'z': '2' }
 */
export const invert: InvertFn = <T extends PropertyKey, V = T>(
  obj: Entryable<T>,
  after?: (v: string) => V
) =>
  Object.fromEntries(
    Object.entries(obj)
      .map(swap)
      .map(([k, v]) => [k, after ? after(v) : v])
  )

/**
 * Alias for invert function.
 * @see invert
 */
export const swapKeyValue = invert

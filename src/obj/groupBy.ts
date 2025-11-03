/**
 * Group array elements by a key function.
 *
 * Creates an object where each key contains an array of elements that
 * share that key value. Similar to SQL's GROUP BY or lodash's groupBy.
 *
 * @param a - Array of items to group
 * @param fieldFn - Function that extracts the grouping key from each item
 * @returns Object mapping keys to arrays of items
 *
 * @example
 * // Group users by age
 * const users = [
 *   { name: 'Alice', age: 20 },
 *   { name: 'Bob', age: 30 },
 *   { name: 'Charlie', age: 20 }
 * ]
 * groupByFunc(users, u => String(u.age))
 * // => {
 * //   '20': [{ name: 'Alice', age: 20 }, { name: 'Charlie', age: 20 }],
 * //   '30': [{ name: 'Bob', age: 30 }]
 * // }
 *
 * @example
 * // Group by first letter
 * const words = ['apple', 'apricot', 'banana', 'blueberry']
 * groupByFunc(words, w => w[0])
 * // => {
 * //   'a': ['apple', 'apricot'],
 * //   'b': ['banana', 'blueberry']
 * // }
 *
 * @example
 * // Group by category
 * const items = [
 *   { name: 'shirt', type: 'clothing' },
 *   { name: 'pants', type: 'clothing' },
 *   { name: 'apple', type: 'food' }
 * ]
 * groupByFunc(items, item => item.type)
 * // => {
 * //   'clothing': [{ name: 'shirt', type: 'clothing' }, { name: 'pants', type: 'clothing' }],
 * //   'food': [{ name: 'apple', type: 'food' }]
 * // }
 */
export const groupByFunc = <T, K extends string>(
  a: readonly T[],
  fieldFn: (t: T) => K
): Record<K, T[]> => {
  const groups = {} as Record<K, T[]>

  a.forEach((item) => {
    const key = fieldFn(item)

    if (groups[key] === undefined) groups[key] = [] as T[]

    groups[key].push(item)
  })

  return groups
}

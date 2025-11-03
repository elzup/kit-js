/**
 * Convert an array to an object indexed by a key function.
 *
 * Creates a lookup object where each item is stored by its key.
 * If multiple items have the same key, later items overwrite earlier ones.
 * Similar to lodash's keyBy.
 *
 * @param a - Array of items to index
 * @param fieldFn - Function that extracts the unique key from each item
 * @returns Object mapping keys to items
 *
 * @example
 * // Create user lookup by ID
 * const users = [
 *   { id: 'a1', name: 'Alice' },
 *   { id: 'b2', name: 'Bob' },
 *   { id: 'c3', name: 'Charlie' }
 * ]
 * keyBy(users, u => u.id)
 * // => {
 * //   'a1': { id: 'a1', name: 'Alice' },
 * //   'b2': { id: 'b2', name: 'Bob' },
 * //   'c3': { id: 'c3', name: 'Charlie' }
 * // }
 *
 * @example
 * // Index items by name (duplicates overwrite)
 * const items = [
 *   { name: 'apple', price: 100 },
 *   { name: 'banana', price: 80 },
 *   { name: 'apple', price: 120 }
 * ]
 * keyBy(items, item => item.name)
 * // => {
 * //   'apple': { name: 'apple', price: 120 },  // Later item overwrites
 * //   'banana': { name: 'banana', price: 80 }
 * // }
 *
 * @example
 * // Create lookup by first letter
 * const words = ['apple', 'apricot', 'banana']
 * keyBy(words, w => w[0])
 * // => {
 * //   'a': 'apricot',  // Last item with 'a'
 * //   'b': 'banana'
 * // }
 */
export const keyBy = <T, K extends string>(
  a: T[],
  fieldFn: (t: T) => K
): Record<K, T> => {
  const byId = {} as Record<K, T>

  a.forEach((item) => {
    const key = fieldFn(item)

    byId[key] = item
  })

  return byId
}

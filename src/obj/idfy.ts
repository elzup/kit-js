/**
 * Add sequential ID property to each element in an array.
 *
 * Creates a new array where each object has an added `id` property
 * corresponding to its index. Useful for adding identifiers to data.
 *
 * @param arr - Array of objects to add IDs to
 * @returns New array with id property added to each element
 *
 * @example
 * idfy([{ name: 'Alice' }, { name: 'Bob' }])
 * // => [{ name: 'Alice', id: 0 }, { name: 'Bob', id: 1 }]
 *
 * @example
 * // Add IDs to list items
 * const items = ['apple', 'banana', 'cherry'].map(name => ({ name }))
 * idfy(items)
 * // => [{ name: 'apple', id: 0 }, { name: 'banana', id: 1 }, { name: 'cherry', id: 2 }]
 */
export const idfy = <T>(arr: T[]) => arr.map((v, id) => ({ ...v, id }))

/**
 * Alias for idfy function.
 * @see idfy
 */
export const mapId = idfy

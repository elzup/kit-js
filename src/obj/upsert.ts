type Key = string | number | symbol

/**
 * Insert key-value pair into Map only if key doesn't exist.
 *
 * Sets the value only when the key is not already present in the Map.
 * Does nothing if key exists (update prevented).
 *
 * @param m - Map to insert into
 * @param k - Key to insert
 * @param v - Value to insert
 *
 * @example
 * const map = new Map([['a', 1]])
 * upsertMap(map, 'b', 2)  // Sets 'b' => 2
 * upsertMap(map, 'a', 99) // Does nothing ('a' already exists)
 * // map is now Map { 'a' => 1, 'b' => 2 }
 */
export const upsertMap = <K, V>(m: Map<K, V>, k: K, v: V) => {
  if (m.has(k)) return
  m.set(k, v)
  return
}

/**
 * Insert key-value pair into object only if key doesn't exist.
 *
 * Sets the property only when the key is not already present.
 * Does nothing if property exists (update prevented).
 *
 * @param o - Object to insert into
 * @param k - Key to insert
 * @param v - Value to insert
 *
 * @example
 * const obj = { a: 1 }
 * upsert(obj, 'b', 2)  // Sets b: 2
 * upsert(obj, 'a', 99) // Does nothing ('a' already exists)
 * // obj is now { a: 1, b: 2 }
 */
export const upsert = <K extends Key, V>(o: Record<K, V>, k: K, v: V) => {
  if (k in o) return
  o[k] = v
}

/**
 * Create a Map with specified keys and default value.
 *
 * Initializes a Map where all keys have the same default value.
 * Useful for creating lookup tables or counters.
 *
 * @param keys - Array of keys for the Map
 * @param defaultValue - Value to assign to all keys (default: null)
 * @returns Map with all keys set to default value
 *
 * @example
 * makeMap(['a', 'b', 'c'], 0)
 * // => Map { 'a' => 0, 'b' => 0, 'c' => 0 }
 *
 * @example
 * // Create counter map
 * const counter = makeMap(['views', 'clicks', 'shares'], 0)
 * counter.set('views', counter.get('views')! + 1)
 *
 * @example
 * // Initialize with default object
 * makeMap(['user1', 'user2'], { score: 0, level: 1 })
 */
export const makeMap = <T>(
  keys: readonly string[],
  defaultValue: T = null as any
) => new Map(keys.map((k) => [k, defaultValue]))

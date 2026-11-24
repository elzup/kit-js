/**
 * Create an object with specified keys and default value.
 *
 * Initializes an object where all keys have the same default value.
 * Similar to makeMap but returns a plain object instead of Map.
 *
 * @param keys - Array of keys for the object
 * @param defaultValue - Value to assign to all keys (default: null)
 * @returns Object with all keys set to default value
 *
 * @example
 * makeObj(['a', 'b', 'c'], 0)
 * // => { a: 0, b: 0, c: 0 }
 *
 * @example
 * // Initialize form fields
 * const formData = makeObj(['username', 'email', 'password'], '')
 * // => { username: '', email: '', password: '' }
 *
 * @example
 * // Create flags object
 * makeObj(['isActive', 'isVerified', 'isAdmin'], false)
 * // => { isActive: false, isVerified: false, isAdmin: false }
 */
export const makeObj = <T>(
  keys: readonly string[],
  defaultValue: T = null as any
) => Object.fromEntries(keys.map((key) => [key, defaultValue]))

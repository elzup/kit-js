/**
 * Identity function that returns its argument unchanged.
 *
 * A fundamental functional programming utility. Returns the same value
 * passed to it. Useful as a default function, in functional composition,
 * or when you need a function that does nothing.
 *
 * @param v - Value to return
 * @returns The same value unchanged
 *
 * @example
 * // Basic usage
 * identity(42)
 * // => 42
 *
 * @example
 * // Filter out falsy values
 * [0, 1, false, 2, '', 3].filter(identity)
 * // => [1, 2, 3]
 *
 * @example
 * // Default mapping function
 * const items = [1, 2, 3]
 * items.map(identity)
 * // => [1, 2, 3]
 *
 * @example
 * // Functional composition
 * const getValue = (obj: { value: number }) => obj.value
 * const processOrPass = shouldProcess ? getValue : identity
 * processOrPass({ value: 42 })
 */
export const identity = <T>(v: T): T => v

/**
 * Alias for identity function.
 *
 * @see identity
 */
export const pass = identity

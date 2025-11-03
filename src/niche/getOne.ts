/**
 * Extract string value from possibly array or unknown type.
 *
 * Returns the value if it's a string, otherwise returns undefined.
 * Useful for handling query parameters that may be arrays or single values.
 *
 * @param v - Value that might be string, array, or undefined
 * @returns String value or undefined
 *
 * @example
 * getOne('hello')
 * // => 'hello'
 *
 * @example
 * getOne(['a', 'b'])
 * // => undefined
 *
 * @example
 * // Useful for query params
 * getOne(req.query.id)  // handles both '123' and ['123', '456']
 */
export const getOne = (
  v: string | string[] | undefined | unknown
): string | undefined => (typeof v === 'string' ? v : undefined)

/**
 * Alias for getOne.
 * @see getOne
 */
export const unarray = getOne

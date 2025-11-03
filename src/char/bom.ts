/**
 * UTF-8 Byte Order Mark (BOM) character.
 */
export const BOM = '\uFEFF'

/**
 * Check if string starts with BOM.
 *
 * @param s - String to check
 * @returns true if string starts with BOM
 *
 * @example
 * hasBom('\uFEFFhello')  // => true
 * hasBom('hello')        // => false
 */
export const hasBom = (s: string) => s.startsWith(BOM)

/**
 * Remove BOM from start of string if present.
 *
 * @param s - String to process
 * @returns String with BOM removed
 *
 * @example
 * trimBom('\uFEFFhello')  // => 'hello'
 * trimBom('hello')        // => 'hello'
 */
export const trimBom = (s: string) => (hasBom(s) ? s.slice(1) : s)

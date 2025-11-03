/**
 * Lowercase alphabets a-z.
 *
 * @example
 * charAlphabets  // => 'abcdefghijklmnopqrstuvwxyz'
 */
export const charAlphabets = 'abcdefghijklmnopqrstuvwxyz'

/**
 * Digits 0-9.
 *
 * @example
 * charNums  // => '0123456789'
 */
export const charNums = '0123456789'

/**
 * Uppercase alphabets A-Z.
 *
 * @example
 * charABC  // => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
export const charABC = charAlphabets.toUpperCase()

/**
 * Lowercase alphabets and digits: [a-z0-9].
 *
 * @example
 * charAbc123  // => 'abcdefghijklmnopqrstuvwxyz0123456789'
 */
export const charAbc123 = charAlphabets + charNums

/**
 * Alphabets and digits: [A-Za-z0-9].
 * Uppercase first, then lowercase, then numbers.
 *
 * @example
 * charABCabc123  // => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ...'
 */
export const charABCabc123 = charABC + charAlphabets + charNums

/**
 * Digits and alphabets: [0-9a-zA-Z].
 * Numbers first, then lowercase, then uppercase.
 *
 * @example
 * char123abcABC  // => '0123456789abcdefghijklmnopqrstuvwxyz...'
 */
export const char123abcABC = charNums + charAlphabets + charABC

/**
 * Environment check: true if NODE_ENV is 'development'.
 *
 * @example
 * if (isDev) console.log('Debug mode')
 */
export const isDev = process?.env?.['NODE_ENV'] === 'development'

/**
 * Characters that are NOT easily misidentified.
 * Excludes: 0, O, 8, B, 5, S, 9, G, 6, L, I, 1
 *
 * Useful for generating human-readable codes (verification codes, tokens).
 *
 * @example
 * charNonMisidentify  // => 'ACDEFHJKMNPRTUVWXYZ2347'
 */
export const charNonMisidentify = 'ACDEFHJKMNPRTUVWXYZ2347'

/**
 * Characters that ARE easily misidentified.
 * Includes: 0, O, 8, B, 5, S, 9, G, 6, L, I, 1
 *
 * @example
 * charMisidentify  // => '0O8B5S9G6LI1'
 */
export const charMisidentify = '0O8B5S9G6LI1'

/**
 * Strongly non-misidentifiable characters (even stricter).
 * Subset of charNonMisidentify with fewer similar-looking characters.
 *
 * @example
 * charStrongNonMisidentify  // => 'ACHJKMNTXY34'
 */
export const charStrongNonMisidentify = 'ACHJKMNTXY34'

const printableAscii1 = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ`
const printableAscii2 = '[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'

/**
 * All printable ASCII characters (space through tilde).
 * Includes: space, !"#$%&'()*+,-./ [0-9] :;<=>?@ [A-Z] [\]^_` [a-z] {|}~
 *
 * @example
 * printableAscii.length  // => 95
 */
export const printableAscii = printableAscii1 + printableAscii2

/**
 * Safe printable ASCII characters (excludes escape-prone chars).
 * Omits: ", ', space, backslash, backquote
 * Useful for generating tokens that won't break string literals.
 *
 * @example
 * safePrintableAscii  // => '!#$%&()*+,-./0123...'
 */
export const safePrintableAscii = `!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~`

/**
 * Base62 characters: [0-9a-zA-Z].
 * Standard base62 encoding alphabet.
 *
 * @example
 * base62.length  // => 62
 */
export const base62 = char123abcABC

/**
 * Base90 characters: base62 + safe symbols.
 * [0-9a-zA-Z] + !#$%&()*+,-./:;<=>?@[]^_{|}~
 * Larger character set for higher entropy encoding.
 *
 * @example
 * base90.length  // => 90
 */
export const base90 = `${char123abcABC}!#$%&()*+,-./:;<=>?@[]^_{|}~`

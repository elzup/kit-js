export const charAlphabets = 'abcdefghijklmnopqrstuvwxyz'
export const charNums = '0123456789'
export const charABC = charAlphabets.toUpperCase()
export const charAbc123 = charAlphabets + charNums
export const charABCabc123 = charABC + charAbc123
export const isDev = process?.env?.['NODE_ENV'] === 'development'

export const charNonMisidentify = 'ACDEFHJKMNPRTUVWXYZ2347'
export const charMisidentify = '0O8B5S9G6LI1'
export const charStrongNonMisidentify = 'ACHJKMNTXY34'

const printableAscii1 = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ`
const printableAscii2 = '[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'

/**
 * printable ASCII chars
 * `!"#$%&'()*+,-./` + `[0-9]` + `:;<=>?@` + `[A-Z]` + ``[\]^_` `` + `[a-z]` + `{|}~`
 * */
export const printableAscii = printableAscii1 + printableAscii2

/**
 * printable ASCII chars without chars tend to call escape
 * omit `"`, `'`, space, backslash, backquote
 * */
export const safePrintableAscii = `!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~`
console.log(printableAscii)

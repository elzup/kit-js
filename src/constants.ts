export const charAlphabets = 'abcdefghijklmnopqrstuvwxyz'
export const charNums = '0123456789'
export const charABC = charAlphabets.toUpperCase()
export const charAbc123 = charAlphabets + charNums
export const charABCabc123 = charABC + charAbc123
export const isDev = process?.env?.['NODE_ENV'] === 'development'

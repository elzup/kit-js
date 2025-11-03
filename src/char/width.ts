import { shift } from './shift'

const SHIFT = 0xfee0 // 65248, 'Ａ'.charCodeAt(0) - 'A'.charCodeAt(0)
const FULL_WIDTH_CHARS = /[Ａ-Ｚａ-ｚ０-９]/g
const HALF_WIDTH_CHARS = /[A-Za-z0-9]/g

const shiftToHalfWidth = (c: string) => shift(c, -SHIFT)

/**
 * Convert full-width alphanumeric characters to half-width.
 *
 * Converts full-width ASCII letters and digits (Ａ-Ｚ, ａ-ｚ, ０-９)
 * to their half-width equivalents.
 *
 * @param s - String to convert
 * @returns String with alphanumerics converted to half-width
 *
 * @example
 * halfWidth('ＡＢＣＤ１２３')
 * // => 'ABCD123'
 *
 * @example
 * halfWidth('こんにちはＡＢＣ')
 * // => 'こんにちはABC'
 */
export const halfWidth = (s: string) =>
  s.replace(FULL_WIDTH_CHARS, shiftToHalfWidth)

const shiftToFullWidth = (c: string) => shift(c, SHIFT)

/**
 * Convert half-width alphanumeric characters to full-width.
 *
 * Converts ASCII letters and digits (A-Z, a-z, 0-9) to their
 * full-width equivalents.
 *
 * @param s - String to convert
 * @returns String with alphanumerics converted to full-width
 *
 * @example
 * fullWidth('ABCD123')
 * // => 'ＡＢＣＤ１２３'
 *
 * @example
 * fullWidth('Hello World')
 * // => 'Ｈｅｌｌｏ Ｗｏｒｌｄ'
 */
export const fullWidth = (s: string) =>
  s.replace(HALF_WIDTH_CHARS, shiftToFullWidth)

type ReplacePair = [string, string][]

const FULL_WIDTH_PAREN_PAIRS: ReplacePair = [
  ['（「『〔【', '('],
  ['［', '['],
  ['｛', '{'],
  ['〈《＜', '<'],
  ['）」』〕】', ')'],
  ['］', ']'],
  ['｝', '}'],
  ['〉》＞', '>'],
]

const FULL_WIDTH_SIGN_PAIRS: ReplacePair = [
  ['　', ' '],
  ['！', '!'],
  ['？', '?'],
  ['／', '/'],
  ['＼', '\\'],
  ['、，', ','],
  ['。．', '.'],
  ['：', ':'],
  ['；', ';'],
  ['´｀¨‘’', "'"],
  ['＿', '_'],
  ['＾', '^'],
  ['ー―‐－', '-'],
  ['～', '~'],
  ['✕×✖', '×'],
  ['“”', '"'],
  ['＝', '='],
  ['￥', '¥'],
  ['＄', '$'],
  ['％', '%'],
  ['＃', '#'],
  ['＆', '&'],
  ['＊', '*'],
  ['＠', '@'],
  ...FULL_WIDTH_PAREN_PAIRS,
]

export const pairReplace = (title: string, pairs: ReplacePair) =>
  pairs.reduce(
    (s, [full, half]) =>
      s.replace(new RegExp(`[${escapeRegExp(full)}]`, 'g'), half),
    title
  )
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/**
 * Convert full-width signs and punctuation to half-width.
 *
 * Normalizes various full-width symbols including spaces, punctuation,
 * brackets, and special characters to their half-width equivalents.
 *
 * @param title - String to normalize
 * @returns String with signs converted to half-width
 *
 * @example
 * halfySigns('こんにちは！世界。')
 * // => 'こんにちは!世界.'
 *
 * @example
 * halfySigns('【重要】　お知らせ')
 * // => '(重要) お知らせ'
 */
export const halfySigns = (title: string) =>
  pairReplace(title, FULL_WIDTH_SIGN_PAIRS)
// ・々仝ヽヾゝゞ〃〆

/**
 * Convert full-width parentheses and brackets to half-width.
 *
 * Normalizes various full-width bracket types (（）, 「」, 『』, etc.)
 * to their half-width equivalents.
 *
 * @param s - String to normalize
 * @returns String with parentheses converted to half-width
 *
 * @example
 * halfyParens('（テスト）')
 * // => '(テスト)'
 *
 * @example
 * halfyParens('「引用」【注意】')
 * // => '(引用)(注意)'
 */
export const halfyParens = (s: string) => pairReplace(s, FULL_WIDTH_PAREN_PAIRS)
/**
 * Normalize all bracket types to parentheses.
 *
 * First converts full-width brackets to half-width, then normalizes
 * all bracket types ([{< and ]}>) to regular parentheses.
 *
 * @param s - String to normalize
 * @returns String with all brackets converted to ()
 *
 * @example
 * normalizeParens('[test] {value}')
 * // => '(test) (value)'
 *
 * @example
 * normalizeParens('「日本語」【重要】')
 * // => '(日本語)(重要)'
 */
export const normalizeParens = (s: string) =>
  pairReplace(halfyParens(s), [
    ['[{<', '('],
    [']}>', ')'],
  ])

/**
 * Normalize text by converting to half-width (soft normalization).
 *
 * Converts both alphanumeric characters and signs/punctuation to
 * half-width. Less aggressive than hardNormalizeText.
 *
 * @param s - String to normalize
 * @returns Normalized string with half-width characters
 *
 * @example
 * softNormalizeText('ＨＥＬＬＯ！')
 * // => 'HELLO!'
 *
 * @example
 * softNormalizeText('１２３（テスト）')
 * // => '123(テスト)'
 */
export const softNormalizeText = (s: string) => halfySigns(halfWidth(s))
/**
 * Aggressively normalize text (hard normalization).
 *
 * Converts to half-width, normalizes all brackets to parentheses,
 * and converts to lowercase. Useful for search/comparison.
 *
 * @param s - String to normalize
 * @returns Aggressively normalized string
 *
 * @example
 * hardNormalizeText('ＨＥＬＬＯ！【重要】')
 * // => 'hello!(重要)'
 *
 * @example
 * hardNormalizeText('ＡＢＣ[test]{value}')
 * // => 'abc(test)(value)'
 */
export const hardNormalizeText = (s: string) =>
  halfySigns(normalizeParens(halfWidth(s))).toLocaleLowerCase()

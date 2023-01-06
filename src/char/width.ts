import { shift } from './shift'

const SHIFT = 0xfee0 // 65248, 'Ａ'.charCodeAt(0) - 'A'.charCodeAt(0)
const FULL_WIDTH_CHARS = /[Ａ-Ｚａ-ｚ０-９]/g
const HALF_WIDTH_CHARS = /[A-Za-z0-9]/g

const shiftToHalfWidth = (c: string) => shift(c, -SHIFT)

export const halfWidth = (s: string) =>
  s.replace(FULL_WIDTH_CHARS, shiftToHalfWidth)

const shiftToFullWidth = (c: string) => shift(c, SHIFT)

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

export const halfySigns = (title: string) =>
  pairReplace(title, FULL_WIDTH_SIGN_PAIRS)
// ・々仝ヽヾゝゞ〃〆

export const halfyParens = (s: string) => pairReplace(s, FULL_WIDTH_PAREN_PAIRS)
export const normalizeParens = (s: string) =>
  pairReplace(halfyParens(s), [
    ['[{<', '('],
    [']}>', ')'],
  ])

export const softNormalizeText = (s: string) => halfySigns(halfWidth(s))
export const hardNormalizeText = (s: string) =>
  halfySigns(normalizeParens(halfWidth(s))).toLocaleLowerCase()

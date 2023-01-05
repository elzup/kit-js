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

const FULL_WIDTH_SIGN_PAIRS = [
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
]

export const halfySigns = (title: string) =>
  FULL_WIDTH_SIGN_PAIRS.reduce(
    (s, [full, half]) => s.replace(new RegExp(`[${full}]`, 'g'), half),
    title
  )
// ・々仝ヽヾゝゞ〃〆

export const halfyParens = (s: string) =>
  s
    .replace(/[（〔［｛〈《「『【＜]/g, '(')
    .replace(/[）〕］｝〉》」』】＞]/g, ')')

export const hardNormalizeText = (s: string) =>
  halfySigns(halfyParens(halfWidth(s)))

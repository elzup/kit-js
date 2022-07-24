type Option = { skip: boolean; stretch: boolean }

const defaultOpt: Option = { skip: true, stretch: true }

const toHiraShift = (c: string) => String.fromCharCode(c.charCodeAt(0) - 0x60)
const toHira = (s: string) => s.replace(/[\u30a1-\u30f6]/g, toHiraShift)

const tableA = 'あいうえお'
const tableN = 'なにぬねの'
const nDouble = (c: string) => Boolean(c) && (tableA + tableN).includes(c)

const table = [
  'あいうえお',
  'かきくけこ',
  'さしすせそ',
  'たちつてと',
  'なにぬねの',
  'はひふへほ',
  'まみむめも',
  'やいゆえよ',
  'らりるれろ',
  'わいうえを',
  'がぎぐげご',
  'ざじずぜぞ',
  'だぢづでど',
  'ばびぶべぼ',
  'ぱぴぷぺぽ',
].join('')

export const romanizationChar = (
  c: string,
  nc: string,
  { skip, stretch }: Option
) => {
  const i = table.indexOf(c)

  if (i >= 0) {
    const vi = i % 5
    const ci = Math.floor(i / 5)

    return consonants[ci] + vowels[vi]
  }
  if (stretch && 'ー〜'.includes(c)) return '-'
  if ('んン'.includes(c)) return nDouble(nc) ? 'nn' : 'n'

  return skip ? '' : c
}

export const romanization = (s: string, opt?: Partial<Option>) => {
  const compOpt = { ...defaultOpt, ...opt }
  const chars = [...toHira(s)]

  return chars
    .map((c, i) => romanizationChar(c, chars[i + 1] ?? '', compOpt))
    .join('')
}

const vowels = 'aiueo'
const consonants = ['', ...'kstnhmyrwgzdbp']

// ;('ん')

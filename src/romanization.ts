type Option = { skip: boolean; stretch: boolean }

const defaultOpt: Option = { skip: true, stretch: true }

const toHiraShift = (c: string) => String.fromCharCode(c.charCodeAt(0) - 0x60)
const toHira = (s: string) => s.replace(/[\u30a1-\u30f6]/g, toHiraShift)

export const remoanizationChar = (
  c: string,
  nc: string,
  { skip, stretch }: Option
) => {
  const i = table.indexOf(toHira(c))

  if (i >= 0) {
    const vi = i % 5
    const ci = Math.floor(i / 5)

    return consonants[ci] + vowels[vi]
  }
  if (stretch && 'ー〜'.includes(c)) return '-'
  return skip ? '' : c
}

export const romanization = (s: string, opt?: Partial<Option>) => {
  const compOpt = { ...defaultOpt, ...opt }
  const chars = [...s]

  return chars
    .map((c, i) => remoanizationChar(c, chars[i + 1] ?? '', compOpt))
    .join('')
}

const vowels = 'aiueo'
const consonants = ['', ...'kstnhmyrwgzdbp']

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

// ;('ん')

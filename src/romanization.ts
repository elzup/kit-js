type Option = { skip: boolean }

const defaultOpt: Option = { skip: true }

export const romanization = (s: string, opt?: Option) => {
  const { skip } = { ...defaultOpt, ...opt }

  return [...s]
    .map((c) => {
      const i = table.indexOf(c)

      if (i === -1) return skip ? '' : c
      const vi = i % 5
      const ci = Math.floor(i / 5)

      return consonants[ci] + vowels[vi]
    })
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
  'やーゆーよ',
  'らりるれろ',
  'わーーーを',
  'がぎぐげご',
  'ざじずぜぞ',
  'だぢづでど',
  'ばびぶべぼ',
  'ぱぴぷぺぽ',
].join('')

// ;('ん')

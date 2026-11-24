import {
  fullWidth,
  halfWidth,
  halfyParens,
  halfySigns,
  hardNormalizeText,
  normalizeParens,
  pairReplace,
  softNormalizeText,
} from '../char/width'

test('pairReplace', () => {
  expect(
    pairReplace('abcAbcde', [
      ['a', '+'],
      ['bB', '-'],
      ['cC', '.'],
    ])
  ).toMatchInlineSnapshot(`"+-.A-.de"`)
})

test('fullWidth', () => {
  expect(fullWidth('AbcＡｂ')).toBe('ＡｂｃＡｂ')
  expect(fullWidth('123１２３')).toBe('１２３１２３')
})

test('halfWidth', () => {
  expect(halfWidth('abcＡｂ')).toBe('abcAb')
  expect(halfWidth('123１２３')).toBe('123123')
})

test('halfyParens', () => {
  expect(
    halfyParens('（〔｛「『【）〕｝」』】〈《＜〉》＞［］')
  ).toMatchInlineSnapshot(`"(({((())})))<<<>>>[]"`)
  expect(halfyParens('<>[]{}()')).toBe('<>[]{}()')
})

test('normalizeParens', () => {
  expect(
    normalizeParens('（〔［｛〈《「『【＜）〕］｝〉》」』】＞')
  ).toMatchInlineSnapshot(`"(((((((((())))))))))"`)
  expect(normalizeParens('<>[]{}()')).toBe(`()()()()`)
})

test('halfySigns', () => {
  expect(
    halfySigns('　！？／＼、，。．：；´｀¨‘’＿＾ー―‐－～✕×✖“”＝￥＄％＃＆＊＠')
  ).toMatchInlineSnapshot(`" !?/\\,,..:;'''''_^----~×××""=¥$%#&*@"`)
  expect(halfySigns('ーー')).toBe('--')
})

test('hardNormalizeText', () => {
  expect(
    hardNormalizeText('Ａｂｃ「￥＄％＃＆＊＠」１２３')
  ).toMatchInlineSnapshot(`"abc(¥$%#&*@)123"`)
  const a = hardNormalizeText('ＡｂC｛【￥$%#&*@＞>１２３')
  const b = hardNormalizeText('aBｃ（<¥＄％＃＆＊＠)］123')

  expect(a).toBe(b)
})

test('softNormalizeText', () => {
  expect(
    softNormalizeText('Ａｂｃ「￥＄％＃＆＊＠」１２３')
  ).toMatchInlineSnapshot(`"Abc(¥$%#&*@)123"`)
  const a = softNormalizeText('ＡｂC｛【￥$%#&*@＞>１２３')
  const b = softNormalizeText('aBｃ（<¥＄％＃＆＊＠)］123')

  expect(a).toMatchInlineSnapshot(`"AbC{(¥$%#&*@>>123"`)
  expect(b).toMatchInlineSnapshot(`"aBc(<¥$%#&*@)]123"`)
})

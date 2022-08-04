import {
  fullWidth,
  halfWidth,
  halfyParens,
  halfySigns,
  hardNormalizeText,
} from '../index'

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
    halfyParens('[（〔［｛〈《「『【＜][）〕］｝〉》」』】＞]')
  ).toMatchInlineSnapshot(`"[((((((((((][))))))))))]"`)
})

test('halfySigns', () => {
  expect(
    halfySigns('　！？／＼、，。．：；´｀¨‘’＿＾ー―‐－～✕×✖“”＝￥＄％＃＆＊＠')
  ).toMatchInlineSnapshot(`" !?/\\\\,，.．:;'｀¨‘’_^^―‐－~××✖\\"”=¥$%#&*@"`)
})

test('hardNormalizeText', () => {
  expect(
    hardNormalizeText('Ａｂｃ「￥＄％＃＆＊＠」１２３')
  ).toMatchInlineSnapshot(`"Abc(¥$%#&*@)123"`)
})

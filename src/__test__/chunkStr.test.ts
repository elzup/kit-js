import { chunkStr } from '../index'

test('chunkStr', () => {
  expect(chunkStr('abc', 2)).toStrictEqual(['ab', 'bc'])
  expect(chunkStr('abcdef', 3)).toStrictEqual(['abc', 'bcd', 'cde', 'def'])
  expect(() => {
    chunkStr('abc', 10)
  }).toThrowErrorMatchingInlineSnapshot(`"Invalid array length"`)
})

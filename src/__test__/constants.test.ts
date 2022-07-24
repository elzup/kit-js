import {
  char123abcABC,
  charABC,
  charAbc123,
  charABCabc123,
  charAlphabets,
  charMisidentify,
  charNonMisidentify,
  charNums,
  charStrongNonMisidentify,
  isDev,
  printableAscii,
  safePrintableAscii,
} from '../index'

const constants = {
  charABC,
  charABCabc123,
  charAbc123,
  char123abcABC,
  charAlphabets,
  charNums,
  isDev,
  charMisidentify,
  charNonMisidentify,
  charStrongNonMisidentify,
  printableAscii,
  safePrintableAscii,
}

test('constants', () => {
  expect(constants).toMatchInlineSnapshot(`
    Object {
      "char123abcABC": "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "charABC": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "charABCabc123": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      "charAbc123": "abcdefghijklmnopqrstuvwxyz0123456789",
      "charAlphabets": "abcdefghijklmnopqrstuvwxyz",
      "charMisidentify": "0O8B5S9G6LI1",
      "charNonMisidentify": "ACDEFHJKMNPRTUVWXYZ2347",
      "charNums": "0123456789",
      "charStrongNonMisidentify": "ACHJKMNTXY34",
      "isDev": false,
      "printableAscii": " !\\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~",
      "safePrintableAscii": "!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~",
    }
  `)
})

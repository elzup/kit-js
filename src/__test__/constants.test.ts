import {
  charABC,
  charAbc123,
  charABCabc123,
  charAlphabets,
  charMisidentify,
  charNonMisidentify,
  charNums,
  charStrongNonMisidentify,
  isDev,
} from '../index'

const constants = {
  charABC,
  charABCabc123,
  charAbc123,
  charAlphabets,
  charNums,
  isDev,
  charMisidentify,
  charNonMisidentify,
  charStrongNonMisidentify,
}

test('constants', () => {
  expect(constants).toMatchInlineSnapshot(`
    Object {
      "charABC": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "charABCabc123": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      "charAbc123": "abcdefghijklmnopqrstuvwxyz0123456789",
      "charAlphabets": "abcdefghijklmnopqrstuvwxyz",
      "charMisidentify": "0O8B5S9G6LI1",
      "charNonMisidentify": "ACDEFHJKMNPRTUVWXYZ2347",
      "charNums": "0123456789",
      "charStrongNonMisidentify": "ACHJKMNTXY34",
      "isDev": false,
    }
  `)
})

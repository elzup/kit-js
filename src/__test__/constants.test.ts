import {
  base62,
  base90,
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
} from '../char/constants'
import { day, hour, min, sec, week } from '../time/constants'

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
  base62,
  base90,
  sec,
  min,
  hour,
  day,
  week,
}

test('constants', () => {
  expect(constants).toMatchInlineSnapshot(`
    {
      "base62": "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "base90": "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_{|}~",
      "char123abcABC": "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "charABC": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "charABCabc123": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      "charAbc123": "abcdefghijklmnopqrstuvwxyz0123456789",
      "charAlphabets": "abcdefghijklmnopqrstuvwxyz",
      "charMisidentify": "0O8B5S9G6LI1",
      "charNonMisidentify": "ACDEFHJKMNPRTUVWXYZ2347",
      "charNums": "0123456789",
      "charStrongNonMisidentify": "ACHJKMNTXY34",
      "day": 86400000,
      "hour": 3600000,
      "isDev": false,
      "min": 60000,
      "printableAscii": " !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~",
      "safePrintableAscii": "!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~",
      "sec": 1000,
      "week": 604800000,
    }
  `)
})

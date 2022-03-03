import {
  charABC,
  charABCabc123,
  charAbc123,
  charAlphabets,
  charNums,
  isDev,
} from '../index'

const constants = {
  charABC,
  charABCabc123,
  charAbc123,
  charAlphabets,
  charNums,
  isDev,
}

test('constants', () => {
  expect(constants).toMatchInlineSnapshot(`
Object {
  "charABC": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "charABCabc123": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  "charAbc123": "abcdefghijklmnopqrstuvwxyz0123456789",
  "charAlphabets": "abcdefghijklmnopqrstuvwxyz",
  "charNums": "0123456789",
  "isDev": false,
}
`)
})

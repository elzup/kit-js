import { googleSearchUrl, googleSearchImageUrl } from '../index'

test('url', () => {
  expect(googleSearchUrl('abc')).toMatchInlineSnapshot(
    `"https://www.google.co.jp/search?q=abc"`
  )
  expect(googleSearchImageUrl('abc')).toMatchInlineSnapshot(
    `"https://www.google.co.jp/search?q=abc&tbm=isch"`
  )
})

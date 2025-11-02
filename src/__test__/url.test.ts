import {
  googleMapsPinUrl,
  googleSearchImageUrl,
  googleSearchUrl,
} from '../template/url'

test('url', () => {
  expect(googleSearchUrl('abc')).toMatchInlineSnapshot(
    `"https://www.google.co.jp/search?q=abc"`
  )
  expect(googleSearchImageUrl('abc')).toMatchInlineSnapshot(
    `"https://www.google.co.jp/search?q=abc&tbm=isch"`
  )

  expect(googleMapsPinUrl(12.34, 123.456)).toMatchInlineSnapshot(
    `"https://maps.google.co.jp/maps?ll=12.34,123.456&q=loc:12.34,123.456&z=15"`
  )
  expect(googleMapsPinUrl(12.34, 123.456, 1)).toMatchInlineSnapshot(
    `"https://maps.google.co.jp/maps?ll=12.34,123.456&q=loc:12.34,123.456&z=1"`
  )
})

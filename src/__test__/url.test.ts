import {
  googleSearchUrl,
  googleSearchImageUrl,
  googleMapsPinUrl,
} from '../index'

test('url', () => {
  expect(googleSearchUrl('abc')).toMatchInlineSnapshot(
    `"https://www.google.co.jp/search?q=abc"`
  )
  expect(googleSearchImageUrl('abc')).toMatchInlineSnapshot(
    `"https://www.google.co.jp/search?q=abc&tbm=isch"`
  )

  expect(googleMapsPinUrl(12.34, 123.456)).toMatchInlineSnapshot(
    `"https://www.google.co.jp/maps/place/12.34,123.456/@12.34,123.456,15z/data"`
  )
  expect(googleMapsPinUrl(12.34, 123.456, 1)).toMatchInlineSnapshot(
    `"https://www.google.co.jp/maps/place/12.34,123.456/@12.34,123.456,1z/data"`
  )
})

import { pickUrl } from '../index'
import { pickUrlMb } from '../pickUrl'

test('pickUrl', () => {
  const nonMatch = pickUrl('\nhoge\n')
  const match = pickUrl('hoge\nabhttps://a.com/piyo\na')
  const queryParamAndEncode = pickUrl(
    'hoge\nabhttps://a.com/piyo/b?q=%7Ba%3A1%7D'
  )
  const ignoreMb = pickUrl('hoge\nabhttps://a.com/piyo/bです')
  const multiUrl = pickUrl(
    'https://a.com/piyo/b (https://b.com/hoge)\na\nhttp://c.net'
  )

  expect(nonMatch).toMatchInlineSnapshot(`Array []`)
  expect(match).toMatchInlineSnapshot(`
    Array [
      "https://a.com/piyo",
    ]
  `)
  expect(queryParamAndEncode).toMatchInlineSnapshot(`
    Array [
      "https://a.com/piyo/b?q=%7Ba%3A1%7D",
    ]
  `)
  expect(ignoreMb).toMatchInlineSnapshot(`
    Array [
      "https://a.com/piyo/b",
    ]
  `)
  expect(multiUrl).toMatchInlineSnapshot(`
    Array [
      "https://a.com/piyo/b",
      "https://b.com/hoge)",
      "http://c.net",
    ]
  `)
})
test('pickUrlMb', () => {
  const multiByteUrls = pickUrlMb(
    'hoge\nabhttps://a.com/piyo/あいう?q=%7Ba%3A1%7D\nhttps://あ.jp'
  )

  expect(multiByteUrls).toMatchInlineSnapshot(`
    Array [
      "https://a.com/piyo/あいう?q=%7Ba%3A1%7D",
      "https://あ.jp",
    ]
  `)
})

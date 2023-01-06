import { pickUrl, pickUrlMb } from '../index'

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

  expect(nonMatch).toMatchInlineSnapshot(`[]`)
  expect(match).toMatchInlineSnapshot(`
    [
      "https://a.com/piyo",
    ]
  `)
  expect(queryParamAndEncode).toMatchInlineSnapshot(`
    [
      "https://a.com/piyo/b?q=%7Ba%3A1%7D",
    ]
  `)
  expect(ignoreMb).toMatchInlineSnapshot(`
    [
      "https://a.com/piyo/b",
    ]
  `)
  expect(multiUrl).toMatchInlineSnapshot(`
    [
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
  const nonMatch = pickUrlMb('\nhoge\n')

  expect(multiByteUrls).toMatchInlineSnapshot(`
    [
      "https://a.com/piyo/あいう?q=%7Ba%3A1%7D",
      "https://あ.jp",
    ]
  `)
  expect(nonMatch).toMatchInlineSnapshot(`[]`)
})

import { makeSlackParams } from '../index'

test('makeSlackParams', () => {
  expect(
    makeSlackParams('https://example.com/token/abc', {
      text: 'hello',
      channel: '#general',
      username: 'my bot',
      icon_emoji: ':ghost:',
    })
  ).toMatchInlineSnapshot(`
    Object {
      "data": Object {
        "channel": "#general",
        "icon_emoji": ":ghost:",
        "text": "hello",
        "username": "my bot",
      },
      "headers": Object {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      "method": "POST",
      "url": "https://example.com/token/abc",
    }
  `)
  expect(
    makeSlackParams('https://example.com/token/abc', {
      text: 'hello',
    })
  ).toMatchInlineSnapshot(`
    Object {
      "data": Object {
        "text": "hello",
      },
      "headers": Object {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      "method": "POST",
      "url": "https://example.com/token/abc",
    }
  `)
})

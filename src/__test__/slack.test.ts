import { makeSlackParams } from '../template/slack'

test('makeSlackParams', () => {
  expect(
    makeSlackParams('https://example.com/token/abc', {
      text: 'hello',
      channel: '#general',
      username: 'my bot',
      icon_emoji: ':ghost:',
    })
  ).toMatchInlineSnapshot(`
    {
      "data": {
        "channel": "#general",
        "icon_emoji": ":ghost:",
        "text": "hello",
        "username": "my bot",
      },
      "headers": {
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
    {
      "data": {
        "text": "hello",
      },
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      "method": "POST",
      "url": "https://example.com/token/abc",
    }
  `)
})

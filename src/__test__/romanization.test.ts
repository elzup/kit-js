import { romanization } from '../romanization'

test('romanization', () => {
  expect(romanization('あきすての')).toBe('akisuteno')
  expect(romanization('はみゆれを')).toBe('hamiyurewo')
  expect(romanization('がじづべぽ')).toBe('gazidubepo')
})

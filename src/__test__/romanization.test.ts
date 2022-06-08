import { romanization } from '../romanization'

describe('romanization', () => {
  it('basic', () => {
    expect(romanization('あきすての')).toBe('akisuteno')
    expect(romanization('はみゆれを')).toBe('hamiyurewo')
    expect(romanization('がじづべぽ')).toBe('gazidubepo')
  })

  it.todo('skip option')
  it.todo('stretch')
  it.todo('xya')
})

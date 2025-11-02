import { romanization } from '../char/romanization'

describe('romanization', () => {
  it('basic', () => {
    expect(romanization('あきすての')).toBe('akisuteno')
    expect(romanization('はみゆれを')).toBe('hamiyurewo')
    expect(romanization('がじづべぽ')).toBe('gazidubepo')
  })

  it('skip option', () => {
    expect(romanization('てa漢😸', { skip: false })).toBe('tea漢😸')
    expect(romanization('てa漢😸')).toBe('te')
    expect(romanization('てa漢😸', { skip: true })).toBe('te')
  })

  it('stretch', () => {
    expect(romanization('コードルール')).toBe('ko-doru-ru')
    expect(romanization('コードルール', { stretch: true })).toBe('ko-doru-ru')
    expect(romanization('コードルール', { stretch: false })).toBe('kodoruru')
  })
  it('nn', () => {
    expect(romanization('さんま')).toBe('sanma')
    expect(romanization('たんい')).toBe('tanni')
    expect(romanization('たんに')).toBe('tannni')
    expect(romanization('ん')).toBe('n')
  })

  // it('xya', () => {
  //   expect(romanization('しゃー')).toBe('gazidubepo')
  // })
})

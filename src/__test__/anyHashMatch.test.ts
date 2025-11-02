import { anyHashMatch } from '../niche/anyHashMatch'
import { sha512Hex } from '../node/hash'

const PASS_HASH =
  '5b722b307fce6c944905d132691d5e4a2214b7fe92b738920eb3fce3a90420a19511c3010a0e7712b054daef5b57bad59ecbd93b3280f210578f547f4aed4d25'

describe('anyHashMatch', () => {
  it('match', () => {
    expect(anyHashMatch('pass', PASS_HASH, 4)).toBe(true)
    expect(anyHashMatch('passS', PASS_HASH, 4)).toBe(true)
    expect(anyHashMatch('ABCpassS', PASS_HASH, 4)).toBe(true)
    expect(anyHashMatch('ABCpass', PASS_HASH, 4)).toBe(true)
  })

  it('non match', () => {
    expect(anyHashMatch('plain', PASS_HASH, 4)).toBe(false)
    expect(anyHashMatch('pass', PASS_HASH, 3)).toBe(false)
  })
  it('with salt', () => {
    expect(anyHashMatch('_ass_', PASS_HASH, 3, 'p')).toBe(true)
    expect(anyHashMatch('apass_', PASS_HASH, 4, 'p')).toBe(false)
  })

  it('with hashFunc', () => {
    expect(anyHashMatch('__pop__', 'poppop', 3, '', (a) => a + a)).toBe(true)
    expect(anyHashMatch('__pop__', '@pop@pop', 3, '@', (a) => a + a)).toBe(true)
    const shortHash = PASS_HASH.substring(0, 10)

    expect(
      anyHashMatch('__pass__', shortHash, 4, '', (a) =>
        sha512Hex(a).substring(0, 10)
      )
    ).toBe(true)
  })
  it('arg error', () => {
    expect(() => {
      anyHashMatch('a', 'v', 0)
    }).toThrowErrorMatchingInlineSnapshot(`"len must be greater than 0"`)
  })
})

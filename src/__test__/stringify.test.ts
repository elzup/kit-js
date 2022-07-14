import { stringify } from '../index'

describe('stringify', () => {
  it('non hit', () => {
    expect(
      stringify('hoge', {
        nul: () => 'null hit',
        obj: () => 'obj hit',
        num: () => 'num hit',
      })
    ).toBe('hoge')
  })
  it('obj', () => {
    expect(stringify({}, { obj: JSON.stringify })).toBe('{}')
  })

  it('null', () => {
    expect(stringify(null, { nul: () => '' })).toBe('')
  })

  it('num', () => {
    expect(stringify(10, { num: (n) => `(${n})` })).toBe('(10)')
  })

  it('arr', () => {
    expect(stringify([], { num: (n) => `(${n})` })).toBe('(10)')
  })
})

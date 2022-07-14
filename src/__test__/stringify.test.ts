import { stringify } from '../index'

describe('stringify', () => {
  it('non hit', () => {
    expect(
      stringify('hoge', {
        nul: () => 'null hit',
        obj: () => 'obj hit',
        num: () => 'num hit',
        arr: () => 'arr hit',
      })
    ).toBe('hoge')
    expect(stringify('hoge', {})).toBe('hoge')
    expect(stringify({}, {})).toBe('[object Object]')
    expect(stringify(null, {})).toBe('null')
    expect(stringify(10, {})).toBe('10')
    expect(stringify([1, 2, 3, 'ok'], {})).toBe('1,2,3,ok')
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
    expect(stringify([1, 2, 3, 'ok'], { arr: (a) => a.join(',') })).toBe(
      '1,2,3,ok'
    )
  })
})

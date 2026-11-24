import { regpick, regpickMatcher } from '../niche/regpick'

const binstr = (bs: boolean[]) => bs.map((v) => (v ? '1' : '0')).join('')

describe('regpick', () => {
  it('fieldFn', () => {
    expect(regpick([0, 1, 0, 0, 0, 1, 0], Boolean, /10+1/)).toStrictEqual({
      matches: [1, 0, 0, 0, 1],
      prints: [false, true, true, true, true, true, false],
    })

    expect(
      regpick(['a01', 'b01', 'b02', 'a02'], (s) => s.startsWith('b'), /1+/)
    ).toStrictEqual({
      matches: ['b01', 'b02'],
      prints: [false, true, true, false],
    })

    expect(
      regpick([0, 1, 0, 0, 1, 0, 1, 0, 0], Boolean, /10*?1/)
    ).toStrictEqual({
      matches: [1, 0, 0, 1],
      prints: [false, true, true, true, true, false, false, false, false],
    })
  })

  it('bools', () => {
    const a = [0, 1, 0, 1, 0, 1, 0]
    const preCalc = a.map(Boolean)

    expect(regpick(a, preCalc, /1.*1/)).toStrictEqual({
      matches: [1, 0, 1, 0, 1],
      prints: [false, true, true, true, true, true, false],
    })
  })
  it('non match', () => {
    const { HEAD_0 } = regpickMatcher

    expect(binstr(regpick([1, 1], Boolean, HEAD_0).prints)).toStrictEqual('00')
  })

  it('matches', () => {
    const b00101010 = [0, 0, 1, 0, 1, 0, 1, 0]
    const b11000101 = [1, 1, 0, 0, 0, 1, 0, 1]
    const { HEAD_0, HEAD_01, HEAD_1, HEAD_10 } = regpickMatcher
    const { TAIL_0, TAIL_01, TAIL_1, TAIL_10, IN_010, IN_101 } = regpickMatcher

    expect(binstr(regpick(b00101010, Boolean, HEAD_0).prints)).toStrictEqual(
      '11000000'
    )

    expect(binstr(regpick(b00101010, Boolean, HEAD_01).prints)).toStrictEqual(
      '11100000'
    )

    expect(binstr(regpick(b11000101, Boolean, HEAD_1).prints)).toStrictEqual(
      '11000000'
    )

    expect(binstr(regpick(b11000101, Boolean, HEAD_10).prints)).toStrictEqual(
      '11111000'
    )

    expect(binstr(regpick(b00101010, Boolean, TAIL_0).prints)).toStrictEqual(
      '00000001'
    )

    expect(binstr(regpick(b11000101, Boolean, TAIL_01).prints)).toStrictEqual(
      '00000011'
    )

    expect(binstr(regpick(b11000101, Boolean, TAIL_1).prints)).toStrictEqual(
      '00000001'
    )

    expect(binstr(regpick(b00101010, Boolean, TAIL_10).prints)).toStrictEqual(
      '00000011'
    )

    expect(binstr(regpick(b00101010, Boolean, IN_010).prints)).toStrictEqual(
      '11111111'
    )

    expect(binstr(regpick(b00101010, Boolean, IN_101).prints)).toStrictEqual(
      '00111110'
    )
  })
})

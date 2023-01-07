import { regpick } from '../index'

describe('regpick', () => {
  it('fieldFn', () => {
    const a = [0, 1, 0, 0, 0, 1, 0]

    expect(regpick(a, Boolean, /10+1/)).toStrictEqual({
      matches: [1, 0, 0, 0, 1],
      prints: [false, true, true, true, true, true, false],
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
})

import { regpick } from '../index'

describe('regpick', () => {
  it('middle', () => {
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
})

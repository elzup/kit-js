import { regpick } from '../regpick'

describe('regpick', () => {
  it('middle', () => {
    const a = [0, 1, 0, 0, 0, 1, 0]

    expect(regpick(a, Boolean, /^0+1+()1+0+$/)).toStrictEqual({
      matches: [1, 1],
      prints: [false, true, false, false, false, true, false],
    })
  })
})

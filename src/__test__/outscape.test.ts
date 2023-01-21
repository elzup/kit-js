import { hour, min, outscape } from '../index'

const min5 = 5 * min
const min10 = 10 * min
const min30 = 30 * min

describe('outscape', () => {
  it('full enough', () => {
    expect(
      outscape([min, min5, min10, min30, hour], 8 * hour, 10000, 10)
    ).toStrictEqual({ visibles: [true, true, true, true, true] })
  })

  it('fadeout min', () => {
    expect(
      outscape([min, min5, min10, min30, hour], 8 * hour, 1000, 10)
    ).toStrictEqual({ visibles: [false, true, true, true, true] })
  })

  it('fadeout min5', () => {
    expect(
      outscape([min, min5, min10, min30, hour], 8 * hour, 500, 10)
    ).toStrictEqual({ visibles: [false, false, true, true, true] })
  })
})

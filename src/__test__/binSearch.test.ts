import { binSearch, range } from '../index'

describe('binSearch', () => {
  it('int arr', () => {
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const intMiddle = (min: number, max: number) => Math.floor((min + max) / 2)

    expect(
      range(11).map((t) =>
        binSearch((i) => a[i] > t, 0, a.length, intMiddle, 1)
      )
    ).toStrictEqual(a)
  })

  it('float', () => {
    const middle = (min: number, max: number) => (min + max) / 2
    const powOver = (n: number) => n * n > 2

    expect(binSearch(powOver, 0, 2, middle, 0.000001)).toMatchInlineSnapshot(
      `1.4142131805419922`
    )
  })
})

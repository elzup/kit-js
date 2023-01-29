import { binSearch, binSearchArr, range } from '../index'

describe('binSearch', () => {
  it('int arr', () => {
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const intMiddle = (min: number, max: number) => Math.floor((min + max) / 2)

    expect(
      range(11).map((t) =>
        binSearch({ dw: 0, up: a.length }, ({ dw, up }) => {
          const mid = intMiddle(dw, up)

          return { isOver: a[mid] > t, mid, isFinish: 1 >= up - dw }
        })
      )
    ).toStrictEqual(a)
  })

  it('float', () => {
    expect(
      binSearch({ dw: 0, up: 2 }, ({ dw, up }) => {
        const mid = (dw + up) / 2

        return { mid, isOver: mid ** 2 > 2, isFinish: 0.000001 >= up - dw }
      })
    ).toMatchInlineSnapshot(`1.4142131805419922`)
  })
})

test('binSearchArr', () => {
  const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  expect(range(11).map((t) => binSearchArr(a, t))).toStrictEqual(a)
})

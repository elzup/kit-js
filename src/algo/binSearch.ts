type Range = { dw: number; up: number }
export const binSearch = (
  range: Range,
  nextMiddle: (range: Range) => {
    isOver: boolean
    mid: number
    isFinish: boolean
  }
) => {
  let up = range.up,
    dw = range.dw

  while (true) {
    const { isOver, mid, isFinish } = nextMiddle({ dw, up })

    if (isFinish) break
    if (isOver) up = mid
    else dw = mid
  }
  return dw
}

export const binSearchArr = (a: readonly number[], target: number) =>
  binSearch({ dw: 0, up: a.length }, ({ dw, up }) => {
    const mid = Math.floor((dw + up) / 2)

    return { isOver: a[mid] > target, mid, isFinish: 1 >= up - dw }
  })

export const binSearchFloat = (
  range: Range,
  overFn: (v: number) => boolean,
  resolution: number
) =>
  binSearch(range, ({ dw, up }) => {
    const mid = (dw + up) / 2

    return { mid, isOver: overFn(mid), isFinish: resolution >= up - dw }
  })

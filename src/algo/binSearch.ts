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

export const binSearchArr = (a: readonly number[], target: number) => {
  const intMiddle = (min: number, max: number) => Math.floor((min + max) / 2)

  return binSearch({ dw: 0, up: a.length }, ({ dw, up }) => {
    const mid = intMiddle(dw, up)

    return { isOver: a[mid] > target, mid, isFinish: 1 >= up - dw }
  })
}

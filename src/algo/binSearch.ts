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

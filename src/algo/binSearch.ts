export const binSearch = (
  isOver: (v: number) => boolean,
  min: number,
  max: number,
  nextMiddle: (min: number, max: number) => number,
  resolution: number
) => {
  let left = min
  let right = max

  while (resolution < right - left) {
    const mid = nextMiddle(left, right)

    if (isOver(mid)) {
      left = mid
    } else {
      right = mid
    }
  }
  return left
}

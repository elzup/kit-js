type CycleRange = { start: number; end: number }

export const cycleRangeIn = ({ start, end }: CycleRange, val: number) => {
  if (start < end) {
    return start <= val && val < end
  } else {
    return val < end || start <= val
  }
}

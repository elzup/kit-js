const randRangeHit = (v: number, min: number, max?: number) => {
  const [low, high] = max === undefined ? [0, min] : [min, max]
  const d = high - low

  return low + Math.floor(v * d)
}

export const randRange = (
  min: number,
  max?: number,
  rand = Math.random
): number => {
  if (typeof max !== 'number') {
    return randRange(0, min, rand)
  }
  return randRangeHit(min, max, rand())
}

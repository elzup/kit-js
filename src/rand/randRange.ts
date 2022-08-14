const randRangeHit = (low: number, high: number, v: number) => {
  const d = high - low

  console.log(d)
  console.log(v * d)
  console.log(Math.floor(v * d))

  return low + Math.floor(v * d)
}

export const randRange = (
  min: number,
  max: number | (() => number) = Math.random,
  rand = Math.random
): number => {
  if (typeof max === 'function') {
    return randRange(0, min, max)
  }
  return randRangeHit(min, max, rand())
}

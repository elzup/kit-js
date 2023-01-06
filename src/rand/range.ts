const randRangeHit = (low: number, high: number, v: number) =>
  low + Math.floor(v * (high - low))

type RandFunc = () => number

type RandRange = {
  (max: number): number
  (max: number, randFn: RandFunc): number
  (min: number, max: number): number
  (min: number, max: number, randFn: RandFunc): number
}
export const randRange: RandRange = (
  minOrMax: number,
  maxOrFn?: number | RandFunc,
  fn?: RandFunc
): number => {
  const [min, max] =
    typeof maxOrFn === 'number' ? [minOrMax, maxOrFn] : [0, minOrMax]
  const randFunc = fn ?? (typeof maxOrFn === 'function' ? maxOrFn : Math.random)

  return randRangeHit(min, max, randFunc())
}

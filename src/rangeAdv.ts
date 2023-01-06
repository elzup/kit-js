import { negaposi } from './clamp'

const calcStep = (start: number, end: number, step?: number) => {
  if (step !== undefined) return step
  return negaposi(end - start)
}

const rangeAdvCore = (start: number, end: number, step: number) => {
  if (start === end) return []
  if (step === 0) throw new Error('step cannot be zero')
  if (start < end && step < 0) throw new Error('step cannot be negative')
  if (start > end && step > 0) throw new Error('step cannot be positive')

  const nums = []
  const check = start < end ? (n: number) => n < end : (n: number) => n > end

  for (let i = start; check(i); i += step) {
    nums.push(i)
  }
  return nums
}

export const rangeAdv = (start: number, end: number, step?: number) => {
  return rangeAdvCore(start, end, calcStep(start, end, step))
}

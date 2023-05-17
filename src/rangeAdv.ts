const calcStep = (start: number, end: number, step?: number) => {
  if (step !== undefined) return step
  return Math.sign(end - start)
}

const rangeAdvCore = (start: number, end: number, step: number) => {
  if (start === end) return []
  if (step === 0) throw new Error('step cannot be zero')
  if (start < end && step < 0) throw new Error('step cannot be negative')
  if (start > end && step > 0) throw new Error('step cannot be positive')

  const length = Math.ceil(Math.abs(end - start) / Math.abs(step))

  return Array.from({ length }, (_, i) => start + i * step)
}

export const rangeAdv = (start: number, end: number, step?: number) => {
  return rangeAdvCore(start, end, calcStep(start, end, step))
}

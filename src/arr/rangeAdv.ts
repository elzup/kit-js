const calcStep = (start: number, end: number, step?: number) => {
  if (step !== undefined) return step
  return Math.sign(end - start)
}

export const rangeAdvGen = function* (
  start: number,
  end: number,
  step: number
) {
  if (start === end) return
  if (step === 0) throw new Error('step cannot be zero')
  if (start < end && step < 0) throw new Error('step cannot be negative')
  if (start > end && step > 0) throw new Error('step cannot be positive')

  const length = Math.ceil(Math.abs(end - start) / Math.abs(step))

  for (let i = 0; i < length; i++) {
    yield start + i * step
  }
}

const rangeAdvList = (start: number, end: number, step: number) => {
  return [...rangeAdvGen(start, end, step)]
}

export const rangeAdv = (start: number, end: number, step?: number) => {
  return rangeAdvList(start, end, calcStep(start, end, step))
}

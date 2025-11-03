const calcStep = (start: number, end: number, step?: number) => {
  if (step !== undefined) return step
  return Math.sign(end - start)
}

/**
 * Generates a sequence of numbers from start to end (exclusive) with a specified step.
 * @param start - The starting value of the sequence
 * @param end - The ending value of the sequence (exclusive)
 * @param step - The step size for each iteration (defaults to 1)
 * @returns An array containing the generated sequence
 */
export const rangeAdvGen = function* (
  start: number,
  end: number,
  step: number = calcStep(start, end)
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

/**
 * Generate an array of numbers from start to end (exclusive) with a specified step.
 * @param start - The starting value of the sequence
 * @param end - The ending value of the sequence (exclusive)
 * @param step - The step size for each iteration (defaults to 1 or -1 based on start and end)
 * @returns An array containing the generated sequence
 */
export const rangeAdv = (
  start: number,
  end: number,
  step: number = calcStep(start, end)
) => {
  return [...rangeAdvGen(start, end, step)]
}

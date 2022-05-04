const calcStep = (start: number, end?: number, step0?: number) => {
  if (step0 !== undefined) return step0
  if (end === undefined || start <= end) return 1
  return -1
}

export const range = (start: number, end?: number, step0?: number) => {
  const step = calcStep(start, end, step0)

  if (step === 0) throw new Error('step cannot be zero')

  if (end === undefined) {
    if (start < 0) throw new Error('start cannot be negative')
    return [...Array(start).keys()]
  }

  if (start < end && step < 0) throw new Error('step cannot be negative')

  if (start > end && step > 0) throw new Error('step cannot be positive')
  const nums = []

  const check = start < end ? (n: number) => n < end : (n: number) => n > end

  for (let i = start; check(i); i += step) {
    nums.push(i)
  }
  return nums
}

/**
 * Generate an array of numbers within a circular range with wrapping.
 *
 * This function creates a sequence of numbers that loops back to the start
 * when reaching the end of the range. Useful for cyclic patterns like
 * clock positions, circular buffers, or repeating sequences.
 *
 * @param from - Starting value of the range (inclusive)
 * @param to - Ending value of the range (exclusive)
 * @param len - Length of the output array
 * @param step - Step size for each iteration (defaults to 1)
 * @returns Array of numbers that wrap around the range
 *
 * @throws {Error} If step is zero
 *
 * @example
 * // Basic circular range (0-10, 15 items, step 1)
 * rangeLoop(0, 10, 15, 1)
 * // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]
 *
 * @example
 * // Clock hours with step 3
 * rangeLoop(0, 12, 8, 3)
 * // => [0, 3, 6, 9, 0, 3, 6, 9]
 *
 * @example
 * // Custom range with larger step
 * rangeLoop(5, 15, 6, 4)
 * // => [5, 9, 13, 7, 11, 5]
 */

export const rangeLoopGen = function* (
  from: number,
  to: number,
  len: number,
  step: number
) {
  const w = to - from
  if (len <= 0 || w === 0) return
  if (step === 0) throw new Error('step cannot be zero')

  let p = 0
  for (let i = 0; i < len; i++) {
    yield p + from
    p = (p + step) % w
  }
}

const rangeLoopList = (from: number, to: number, len: number, step: number) => {
  return [...rangeLoopGen(from, to, len, step)]
}

export const rangeLoop = (
  from: number,
  to: number,
  len: number,
  step: number = 1
) => {
  return rangeLoopList(from, to, len, step)
}

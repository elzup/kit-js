/**
 * Defragment an array of numbers into continuous ranges.
 *
 * This function groups consecutive numbers in an array into ranges,
 * reducing fragmentation. It's useful for compacting sequential values
 * into start-end pairs.
 *
 * @param a - Array of numbers to defragment
 * @param isStep - Custom function to determine if two numbers are consecutive.
 *                 Defaults to (a, b) => a + 1 === b (standard increment by 1)
 * @returns Array of Range objects with start and end properties
 *
 * @example
 * // Basic usage with sequential numbers
 * defrag([1, 2, 3, 4, 5])
 * // => [{ start: 1, end: 5 }]
 *
 * @example
 * // Fragmented sequences
 * defrag([2, 3, 4, 10, 21, 22, 23])
 * // => [
 * //   { start: 2, end: 4 },
 * //   { start: 10, end: 10 },
 * //   { start: 21, end: 23 }
 * // ]
 *
 * @example
 * // Custom step function (within 2)
 * defrag([1, 2, 4, 10, 12], (a, b) => b - a <= 2)
 * // => [
 * //   { start: 1, end: 4 },
 * //   { start: 10, end: 12 }
 * // ]
 */

type Range = { start: number; end: number }

const reduce = (
  { range, ranges }: { range: Range | null; ranges: Range[] },
  c: number,
  isStep: (a: number, b: number) => boolean
) => {
  if (range === null) return { range: { start: c, end: c }, ranges }
  if (isStep(range.end, c)) return { range: { ...range, end: c }, ranges }
  return { range: { start: c, end: c }, ranges: [...ranges, range] }
}

export const defrag = (
  a: number[],
  isStep: (a: number, b: number) => boolean = (a, b) => a + 1 === b
) => {
  if (a.length === 0) return []
  const { range, ranges } = a.reduce((p, c) => reduce(p, c, isStep), {
    range: null as Range | null,
    ranges: [] as Range[],
  })

  return [...ranges, range]
}

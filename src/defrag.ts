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

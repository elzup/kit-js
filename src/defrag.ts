type Range = { start: number; end: number }

const reduce = (
  { range, ranges }: { range: Range; ranges: Range[] },
  c: number,
  i: number
) => {
  if (i === 0) return { range: { start: c, end: c }, ranges }
  if (range.end + 1 === c) return { range: { ...range, end: c }, ranges }
  return { range: { start: c, end: c }, ranges: [...ranges, range] }
}

export const defrag = (a: number[]) =>
  a.reduce(reduce, { range: { start: NaN, end: NaN }, ranges: [] })

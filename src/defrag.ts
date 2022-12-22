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

export const defrag = (a: number[]) => {
  if (a.length === 0) return []
  const { range, ranges } = a.reduce(reduce, {
    range: { start: NaN, end: NaN },
    ranges: [],
  })

  return [...ranges, range]
}

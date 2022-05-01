export const mergeSortArr = <T>(
  sorted1: T[],
  sorted2: T[],
  orderBy: (a: T) => number
) => {
  const res: T[] = []
  const a = [...sorted1]
  const b = [...sorted2]

  while (a.length > 0 && b.length > 0) {
    res.push((orderBy(a[0]) <= orderBy(b[0]) ? a : b).shift())
  }

  return res.concat(a).concat(b)
}

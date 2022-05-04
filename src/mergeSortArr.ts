export const mergeSortArr = <T>(
  sorted1: readonly T[],
  sorted2: readonly T[],
  orderBy: (a: T) => number
) => {
  const res: T[] = []
  const a = [...sorted1]
  const b = [...sorted2]

  while (a[0] !== undefined && b[0] !== undefined) {
    const v = (orderBy(a[0]) <= orderBy(b[0]) ? a : b).shift()

    if (v === undefined) throw Error('popped undefined')

    res.push(v)
  }

  return res.concat(a).concat(b)
}

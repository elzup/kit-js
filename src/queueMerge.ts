export function queueMerge<T>(queues: T[][], comp: (a: T) => number): T[] {
  const result: T[] = []

  while (true) {
    const [minv, mini] = queues.reduce(
      ([minv, mini], v, i) => {
        if (v.length === 0) return [minv, mini]
        const cur = comp(v[0])

        if (minv !== undefined && cur >= minv) return [minv, mini]
        return [cur, i]
      },
      [undefined, 0] as [number | undefined, number]
    )

    if (minv === undefined) break

    const v = queues[mini].shift()

    if (v !== undefined) result.push(v)
  }
  return result
}

export const mergeSortArr = <T>(
  sorted1: T[],
  sorted2: T[],
  orderBy: (a: T) => number
) => queueMerge([sorted1, sorted2], orderBy)

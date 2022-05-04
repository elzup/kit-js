export function queueMerge<T>(queues: T[][], comp: (a: T) => number): T[] {
  const result: T[] = []

  while (true) {
    let minv: number | undefined = undefined
    let mini = 0

    queues.forEach((v, i) => {
      if (v.length === 0) return
      const time = comp(v[0])

      if (minv === undefined || time < minv) {
        minv = time
        mini = i
      }
    })

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

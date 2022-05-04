export function queueMerge<T>(
  queues: readonly T[][],
  comp: (a: T) => number
): T[] {
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

    const log = queues[mini].shift()

    if (log === undefined) continue

    result.push(log)
  }
  return result
}

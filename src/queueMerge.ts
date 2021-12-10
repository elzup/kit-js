export function queueMerge<T>(queues: T[][], comp: (a: T) => number): T[] {
  const result: T[] = []

  while (true) {
    let minv: number | undefined = undefined
    let mini = 0

    queues.forEach((v, i) => {
      if (!v[0]) return
      const time = comp(v[0])

      if (!minv || time < minv) {
        minv = time
        mini = i
      }
    })

    // console.log(minv)

    if (!minv) break

    const log = queues[mini].shift()

    if (!log) continue

    result.push(log)
  }
  return result
}

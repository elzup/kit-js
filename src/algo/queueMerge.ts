/**
 * Merge multiple sorted queues into a single sorted array.
 *
 * Takes multiple sorted arrays and merges them by always picking the
 * smallest element across all queues. Useful for merging sorted data streams.
 *
 * @param queues - Array of sorted arrays to merge
 * @param comp - Function that returns a comparable value for each element
 * @returns Merged sorted array
 *
 * @example
 * // Merge sorted arrays
 * queueMerge(
 *   [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
 *   (x) => x
 * )
 * // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * @example
 * // Merge events by timestamp
 * queueMerge(
 *   [
 *     [{ time: 100, data: 'a' }, { time: 300, data: 'b' }],
 *     [{ time: 200, data: 'c' }, { time: 400, data: 'd' }]
 *   ],
 *   (event) => event.time
 * )
 * // => Events sorted by time
 */
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

/**
 * Merge two sorted arrays into one sorted array.
 *
 * Convenience function for merging two sorted arrays.
 * More efficient than sorting after concatenation.
 *
 * @param sorted1 - First sorted array
 * @param sorted2 - Second sorted array
 * @param orderBy - Function that returns comparable value for sorting
 * @returns Merged sorted array
 *
 * @example
 * mergeSortArr([1, 3, 5], [2, 4, 6], (x) => x)
 * // => [1, 2, 3, 4, 5, 6]
 *
 * @example
 * // Merge users by age
 * mergeSortArr(
 *   [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 30 }],
 *   [{ name: 'Charlie', age: 25 }],
 *   (user) => user.age
 * )
 * // => [Alice(20), Charlie(25), Bob(30)]
 */
export const mergeSortArr = <T>(
  sorted1: T[],
  sorted2: T[],
  orderBy: (a: T) => number
) => queueMerge([sorted1, sorted2], orderBy)

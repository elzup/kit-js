import { keyBy } from './keyBy'

type ScheduleItem<T> = {
  id: T
  start: number
  end: number
}
// Extract the column containing the first item.
// It does not extract the highest number of items.
export const schedulingPick = <T>([...a]: ScheduleItem<T>[]): [
  T[],
  ScheduleItem<T>[]
] => {
  const ans: T[] = []
  let cur = a.shift()

  if (cur === undefined) return [[], []]

  ans.push(cur.id)

  for (let i = 0; i < a.length; i++) {
    if (cur.end <= a[i].start) {
      cur = a[i]

      ans.push(cur.id)
      a.splice(i, 1)
      i--
    }
  }

  return [ans, a]
}

export const scheduling = <T>(a: ScheduleItem<T>[]): T[][] => {
  let arr = [...a]
  const ans: T[][] = []

  arr.sort((v, w) => v.start - w.start)

  while (arr.length > 0) {
    const [ids, after] = schedulingPick(arr)

    arr = after

    ans.push(ids)
  }
  return ans
}

export const schedulingBy = <T>(
  a: T[],
  toSchedule: (v: T) => ScheduleItem<string>
): T[][] => {
  const k = a.map((v) => {
    const s = toSchedule(v)

    return { v, s, id: s.id }
  })
  const res = scheduling(k.map((v) => v.s))

  const byId = keyBy(k, (k) => k.s.id)

  return res.map((row) => row.map((id) => byId[id].v))
}

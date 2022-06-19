import { keyBy } from './keyBy'
import { range } from './range'

type ScheduleItem<T, K extends string | number = number> = {
  id: T
  start: K
  end: K
}
// Extract the column containing the first item.
// It does not extract the highest number of items.
export const schedulingPick = <T, K extends string | number = number>([
  ...a
]: ScheduleItem<T, K>[]): [T[], ScheduleItem<T, K>[]] => {
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

const last = <T>(a: T[]): T | undefined => a[a.length - 1]

export const easeSchedulingTry = <T, K extends string | number = number>(
  [...a]: ScheduleItem<T, K>[],
  n: number
): T[][] | false => {
  if (n <= 0) throw new Error('n must be greater than 0')
  const ans: ScheduleItem<T, K>[][] = []

  for (let j = 0; j < n; j++) ans[j] = []

  let p = 0

  for (const v of a) {
    let inserted = false

    for (let j = 0; j < n; j++) {
      const i = p % n

      p++

      const tail = last(ans[i])

      if (tail === undefined || tail.end <= v.start) {
        ans[i].push(v)
        inserted = true
        break
      }
    }
    if (!inserted) {
      return false
    }
  }

  return ans.map((v) => v.map((e) => e.id))
}

export const easeScheduling = <T>(a: ScheduleItem<T>[]): T[][] => {
  let ans: T[][] = []

  for (const i of range(a.length)) {
    const res = easeSchedulingTry(a, i + 1)

    if (res !== false) {
      ans = res
      break
    }
  }

  range(a.length).some((i) => {
    const res = easeSchedulingTry(a, i + 1)

    if (res === false) return false

    ans = res
    return true
  })

  return ans
}

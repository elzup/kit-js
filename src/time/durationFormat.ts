import { greedy } from '../algo/greedy'

type UnitQuery = {
  suffix: string
  val: number
}
const unitOrderQuery: UnitQuery[] = [
  { suffix: 'y', val: 365 * 24 * 60 * 60 * 1000 },
  { suffix: 'd', val: 24 * 60 * 60 * 1000 },
  { suffix: 'h', val: 60 * 60 * 1000 },
  { suffix: 'm', val: 60 * 1000 },
  { suffix: 's', val: 1000 },
]

export const dulationFormatBase = (msec: number, units: UnitQuery[]) => {
  const vs = greedy(
    msec,
    units.map((v) => v.val)
  )

  return units.map((v, i) => ({ num: vs[i], unit: v }))
}

export const dulationFormat = (msec: number) => {
  const items = dulationFormatBase(msec, unitOrderQuery)

  return items
    .filter((v) => v.num > 0)
    .map((v) => `${v.num}${v.unit.suffix}`)
    .join('')
}

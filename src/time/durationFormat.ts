import { greedy } from '../algo/greedy'

type UnitQuery = {
  suffix: string
  val: number
}

const dulationFormatBase = (msec: number, units: UnitQuery[]) => {
  const vs = greedy(
    msec,
    units.map((v) => v.val)
  )
  let pad = true

  return units.map((v, i) => {
    pad = pad && vs[i] === 0
    return { pad, num: vs[i], unit: v }
  })
}

const unitOrderQuery: UnitQuery[] = [
  { suffix: 'y', val: 365 * 24 * 60 * 60 * 1000 },
  { suffix: 'd', val: 24 * 60 * 60 * 1000 },
  { suffix: 'h', val: 60 * 60 * 1000 },
  { suffix: 'm', val: 60 * 1000 },
  { suffix: 's', val: 999 },
]

export const dulationFormat = (msec: number, skip = true) => {
  const items = dulationFormatBase(msec, unitOrderQuery)

  return items
    .filter((v) => !v.pad && (!skip || v.num > 0))
    .map((v) => `${v.num}${v.unit.suffix}`)
    .join('')
}

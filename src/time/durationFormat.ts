import { greedy } from '../algo/greedy'

type UnitQuery = {
  suffix: string
  val: number
}

const durationFormatBase = (msec: number, units: UnitQuery[]) => {
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

/**
 * Format milliseconds as human-readable duration string.
 *
 * Converts milliseconds to a compact format using units: y (years),
 * d (days), h (hours), m (minutes), s (seconds).
 *
 * @param msec - Duration in milliseconds
 * @param skip - Skip zero values (default: true)
 * @returns Formatted duration string
 *
 * @example
 * durationFormat(3661000)
 * // => '1h1m1s'
 *
 * @example
 * durationFormat(90000)
 * // => '1m30s'
 *
 * @example
 * durationFormat(86400000)
 * // => '1d'
 */
export const durationFormat = (msec: number, skip = true) => {
  const items = durationFormatBase(msec, unitOrderQuery)

  return items
    .filter((v) => !v.pad && (!skip || v.num > 0))
    .map((v) => `${v.num}${v.unit.suffix}`)
    .join('')
}

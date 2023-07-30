type UnitQuery = {
  unit: string
  query: string
  t: number
}
const unitOrderQuery: UnitQuery[] = [
  { unit: 'year', query: 'y', t: 365 * 24 * 60 * 60 * 1000 },
  { unit: 'day', query: 'd', t: 24 * 60 * 60 * 1000 },
  { unit: 'hour', query: 'h', t: 60 * 60 * 1000 },
  { unit: 'minute', query: 'm', t: 60 * 1000 },
  { unit: 'second', query: 's', t: 1000 },
]

type UnitItem = {
  num: number
  unit: UnitQuery
}

const reducer = (
  { msec, items }: { msec: number; items: UnitItem[] },
  unit: UnitQuery
) => {
  const v = Math.floor(msec / unit.t)

  items.push({ num: v, unit })
  return { items, msec: msec - v * unit.t }
}

export const dulationFormatBase = (
  msec: number,
  unitOrderQuery: UnitQuery[]
) => {
  const { items, msec: remains } = unitOrderQuery.reduce(reducer, {
    items: [],
    msec,
  })

  return items
}

export const dulationFormat = (msec: number) => {
  const items = dulationFormatBase(msec, unitOrderQuery)

  return items
    .filter((v) => v.num > 0)
    .map((v) => `${v.num}${v.unit.query}`)
    .join('')
}

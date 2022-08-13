import { upsert, upsertMap } from '../index'

describe('upsertMap', () => {
  it('map', () => {
    const m = new Map()

    m.set('a', 1)
    m.set('b', 1)

    upsertMap(m, 'c', 1)
    upsertMap(m, 'b', 2)

    expect(m.get('a')).toBe(1)
    expect(m.get('b')).toBe(1)
    expect(m.get('c')).toBe(1)
  })

  it('map falcy non replace', () => {
    const m = new Map()

    m.set('a', undefined)
    upsertMap(m, 'a', 1)

    m.set('b', 0)
    upsertMap(m, 'b', 1)

    m.set('c', null)
    upsertMap(m, 'c', 1)

    expect(m.get('a')).toBe(undefined)
    expect(m.get('b')).toBe(0)
    expect(m.get('c')).toBe(null)
  })
})
describe('upsert', () => {
  it('obj', () => {
    const o: Record<string, number> = { a: 1, b: 1 }

    upsert(o, 'c', 1)
    upsert(o, 'b', 3)

    expect(o).toStrictEqual({ a: 1, b: 1, c: 1 })
  })

  it('obj falcy non replace', () => {
    const o = { a: undefined, b: 0, c: null }

    upsert(o, 'a', 1)
    upsert(o, 'b', 1)
    upsert(o, 'c', 1)

    expect(o).toStrictEqual({ a: undefined, b: 0, c: null })
  })
})

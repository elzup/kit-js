import { expectType } from 'tsd'
import { keyBy } from '../index'

describe('keyBy', () => {
  it('numbers', () => {
    const bys = keyBy([2, 3], (v) => String(v % 2))

    expect(bys).toMatchInlineSnapshot(`
      Object {
        "0": 2,
        "1": 3,
      }
    `)
  })
  it('override', () => {
    const bys = keyBy([1, 2, 3, 4], (v) => String(v % 2))

    expect(bys).toMatchInlineSnapshot(`
      Object {
        "0": 4,
        "1": 3,
      }
    `)
  })

  it('enum key', () => {
    type Item = { category: 'a' | 'b' | 'c' }
    type Category = Item['category']
    const bys = keyBy(
      [
        { category: 'a' },
        { category: 'b' },
        { category: 'a' },
        { category: 'c' },
      ] as Item[],
      (v) => v.category
    )

    expectType<Record<Category, Item>>(bys)

    expect(bys).toMatchInlineSnapshot(`
      Object {
        "a": Object {
          "category": "a",
        },
        "b": Object {
          "category": "b",
        },
        "c": Object {
          "category": "c",
        },
      }
    `)
  })
})

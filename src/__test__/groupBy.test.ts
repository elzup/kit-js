import { expectType } from 'tsd'
import { groupByFunc } from '../obj/groupBy'

describe('groupBy', () => {
  it('numbers', () => {
    const groups = groupByFunc([1, 2, 3, 4], (v) => String(v % 2))

    expect(groups).toMatchInlineSnapshot(`
      {
        "0": [
          2,
          4,
        ],
        "1": [
          1,
          3,
        ],
      }
    `)
    expectType<Record<number, number[]>>(groups)
  })

  it('enum key', () => {
    type Item = { category: 'a' | 'b' | 'c' }
    type Category = Item['category']
    const groups = groupByFunc(
      [
        { category: 'a' },
        { category: 'b' },
        { category: 'a' },
        { category: 'c' },
      ] as Item[],
      (v) => v.category
    )

    expectType<Record<Category, Item[]>>(groups)

    expect(groups).toMatchInlineSnapshot(`
      {
        "a": [
          {
            "category": "a",
          },
          {
            "category": "a",
          },
        ],
        "b": [
          {
            "category": "b",
          },
        ],
        "c": [
          {
            "category": "c",
          },
        ],
      }
    `)
  })
})

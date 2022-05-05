import { expectType } from 'tsd'
import { groupByFunc } from '../index'

describe('groupBy', () => {
  it('numbers', () => {
    expect(groupByFunc([1, 2, 3, 4], (v) => String(v % 2)))
      .toMatchInlineSnapshot(`
          Object {
            "0": Array [
              2,
              4,
            ],
            "1": Array [
              1,
              3,
            ],
          }
      `)
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
      Object {
        "a": Array [
          Object {
            "category": "a",
          },
          Object {
            "category": "a",
          },
        ],
        "b": Array [
          Object {
            "category": "b",
          },
        ],
        "c": Array [
          Object {
            "category": "c",
          },
        ],
      }
    `)
  })
})

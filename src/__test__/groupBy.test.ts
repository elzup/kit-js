import { groupByFunc } from '..'

test('groupBy', () => {
  expect(groupByFunc([1, 2, 3, 4], (v) => v % 2)).toMatchInlineSnapshot(`
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

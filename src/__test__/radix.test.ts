import { decToRadix } from '../index'

test('decToRadix', () => {
  expect(decToRadix(100, 2)).toMatchInlineSnapshot(`
    Array [
      0,
      0,
      1,
      0,
      0,
      1,
      1,
    ]
  `)
})

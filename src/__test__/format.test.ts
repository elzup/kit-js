import { pad, pad02, round } from '../str/format'

test('pad', () => {
  expect(pad(123, 5)).toMatchInlineSnapshot(`"00123"`)
  expect(pad(123, 2)).toMatchInlineSnapshot(`"123"`)
  expect(pad(12, 4)).toMatchInlineSnapshot(`"0012"`)
  expect(pad('0012', 3)).toMatchInlineSnapshot(`"0012"`)

  expect(pad02(1)).toMatchInlineSnapshot(`"01"`)
})

test('round', () => {
  expect(round(1.234, 1)).toMatchInlineSnapshot(`1.2`)
  expect(round(1.234, 3)).toMatchInlineSnapshot(`1.234`)
})

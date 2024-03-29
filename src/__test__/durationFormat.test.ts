import { dulationFormat } from '../index'

test('dulationFormat', () => {
  expect(dulationFormat(1000)).toBe('1s')
  expect(dulationFormat(11000)).toMatchInlineSnapshot(`"11s"`)
  expect(dulationFormat(60000)).toMatchInlineSnapshot(`"1m"`)
  expect(dulationFormat(100000)).toMatchInlineSnapshot(`"1m40s"`)
  expect(dulationFormat(1000000)).toMatchInlineSnapshot(`"16m40s"`)
  expect(dulationFormat(77777777777)).toMatchInlineSnapshot(`"2y170d4h56m17s"`)
  expect(
    dulationFormat(24 * 60 * 60 * 1000 + 1 * 1000, false)
  ).toMatchInlineSnapshot(`"1d0h0m1s"`)
})

import { dulationFormat } from '../index'

test('dulationFormat', () => {
  expect(dulationFormat(1000)).toBe('1s')
  expect(dulationFormat(11000)).toMatchInlineSnapshot(`"11s"`)
  expect(dulationFormat(60000)).toMatchInlineSnapshot(`"1m"`)
  expect(dulationFormat(100000)).toMatchInlineSnapshot(`"1m40s"`)
  expect(dulationFormat(1000000)).toMatchInlineSnapshot(`"16m40s"`)
  expect(dulationFormat(24 * 60 * 60 * 1000 + 1 * 1000)).toMatchInlineSnapshot(
    `"1d1s"`
  )
})

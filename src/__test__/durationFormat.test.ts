import { durationFormat } from '../index'

test('durationFormat', () => {
  expect(durationFormat(1000)).toBe('1s')
  expect(durationFormat(11000)).toMatchInlineSnapshot(`"11s"`)
  expect(durationFormat(60000)).toMatchInlineSnapshot(`"1m"`)
  expect(durationFormat(100000)).toMatchInlineSnapshot(`"1m40s"`)
  expect(durationFormat(1000000)).toMatchInlineSnapshot(`"16m40s"`)
  expect(durationFormat(77777777777)).toMatchInlineSnapshot(`"2y170d4h56m17s"`)
  expect(
    durationFormat(24 * 60 * 60 * 1000 + 1 * 1000, false)
  ).toMatchInlineSnapshot(`"1d0h0m1s"`)
})

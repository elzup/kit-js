import { countup } from '../index'

test('countup', () => {
  expect(countup(['a', 'b', 'a', 1, 0, 0, 0])).toMatchInlineSnapshot(`
Map {
  "a" => 2,
  "b" => 1,
  1 => 1,
  0 => 3,
}
`)
})

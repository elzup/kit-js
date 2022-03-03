import { makeMap } from '../index'

test('makeObj', () => {
  expect(makeMap(['a', 'b'])).toMatchInlineSnapshot(`
Map {
  "a" => null,
  "b" => null,
}
`)

  expect(makeMap(['a', 'b'], 'c')).toMatchInlineSnapshot(`
Map {
  "a" => "c",
  "b" => "c",
}
`)

  expect(makeMap(['a', 'b'], 0)).toMatchInlineSnapshot(`
Map {
  "a" => 0,
  "b" => 0,
}
`)
})

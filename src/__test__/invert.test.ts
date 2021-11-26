import invert from '../lib/invert'

test('invert', () => {
  expect(invert({ a: 1, 2: 'b' })).toMatchInlineSnapshot(`
Object {
  "1": "a",
  "b": "2",
}
`)
})

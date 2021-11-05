import noop from '../noop'

test('noop', () => {
  const a = noop()
  expect(a).toMatchInlineSnapshot(`undefined`)
  expect(noop(1, 2, 'three')).toMatchInlineSnapshot(`undefined`)
})

import noop from '../lib/noop'

test('noop', () => {
  expect(noop()).toMatchInlineSnapshot(`undefined`)
  expect(noop(1, 2, 'three')).toMatchInlineSnapshot(`undefined`)
})

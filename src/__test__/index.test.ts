import noop from '../noop'

test('noop', () => {
  const a = noop()
  expect(a).toMatchInlineSnapshot()
})

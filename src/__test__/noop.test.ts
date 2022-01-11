import noop, { tagNoop } from '../noop'

test('noop', () => {
  expect(noop()).toMatchInlineSnapshot(`undefined`)
  expect(noop(1, 2, 'three')).toMatchInlineSnapshot(`undefined`)
})

test('tagNoop', () => {
  expect(tagNoop`abc`).toMatchInlineSnapshot(`"abc"`)
  const age = 20

  expect(tagNoop`bob(${age})`).toMatchInlineSnapshot(`"bob(20)"`)
  expect(tagNoop`0-${1}-2-${3}`).toMatchInlineSnapshot(`"0-1-2-3"`)
})

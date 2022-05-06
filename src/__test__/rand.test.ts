import { randRange } from '..'
import { seedRand } from '../rand'
import { range } from '../range'

test('rand', () => {
  const paralels = range(10).map((n) => seedRand(String(n)))

  expect(paralels).toMatchInlineSnapshot(`
    Array [
      0.402037404151159,
      0.4519428262831776,
      0.22800373001303437,
      0.5205082477721134,
      0.466661589810005,
      0.48855864594491233,
      0.06935065401034647,
      0.6070710700920152,
      0.19632543153215073,
      0.15280676466580323,
    ]
  `)
})

test('randRange', () => {
  const v1 = randRange('a1', 10)
  const v2 = randRange('a1', 20, 30)

  expect(v1).toMatchInlineSnapshot(`4`)
  expect(v2).toMatchInlineSnapshot(`24`)
})

import {
  choise,
  randGen,
  randRange,
  range,
  sample,
  seedRand,
  seedRandAdvance,
  seedRandBuf,
  shuffle,
} from '../index'

test('rand', () => {
  const paralels = range(10).map((n) => seedRand(String(n)))

  expect(seedRand(1)).toMatchInlineSnapshot(`0.4519428262831776`)
  expect(seedRand('1')).toMatchInlineSnapshot(`0.4519428262831776`)
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
test('seedRandBuf', () => {
  const resBuf = seedRandBuf('abc')

  expect(resBuf.toString('base64')).toMatchInlineSnapshot(
    `"ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0="`
  )
})
test('seedRandAdvance', () => {
  const res = seedRandAdvance('abc')

  expect(res.num).toMatchInlineSnapshot(`0.7464366390494545`)
  expect(res.seed).toMatchInlineSnapshot(`"abc"`)
  expect(res.buf.toString('base64')).toMatchInlineSnapshot(
    `"ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0="`
  )
})

test('randRange', () => {
  const v1 = randRange('a1', 10)
  const v2 = randRange('a1', 20, 30)

  expect(v1).toMatchInlineSnapshot(`4`)
  expect(v2).toMatchInlineSnapshot(`24`)
})

test('shuffle', () => {
  const res = shuffle('b', [1, 2, 3, 4, 5])

  expect(res).toMatchInlineSnapshot(`
    Array [
      3,
      4,
      2,
      1,
      5,
    ]
  `)
})

test('sample', () => {
  const res1 = sample('a', [1, 2, 3, 4, 5])
  const res3 = sample('a', [1, 2, 3, 4, 5], 3)

  expect(res1).toMatchInlineSnapshot(`
    Array [
      3,
    ]
  `)
  expect(res3).toMatchInlineSnapshot(`
    Array [
      3,
      2,
      4,
    ]
  `)
})
test('choise', () => {
  const res = choise('a', [1, 2, 3, 4, 5])

  expect(res).toMatchInlineSnapshot(`3`)
})
test('randGen', () => {
  const r = randGen('a')
  const res = [r.next().value, r.next().value, r.next().value]

  expect(res).toMatchInlineSnapshot(`
    Array [
      0.873368340806717,
      0.4372768375470124,
      0.28616679732544187,
    ]
  `)
})

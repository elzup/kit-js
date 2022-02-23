import { randRange, randGen } from '../rand'

test('rand', () => {
  const rf = randGen(1)

  expect([...Array(10)].map(() => rf.next()).flat()).toMatchInlineSnapshot(`
    Array [
      -638953871,
      504890836,
      -1873192399,
      -1873199053,
      462149015,
      -983349865,
      -1615788072,
      -978086715,
      -2133735799,
      1598121209,
    ]
  `)
  expect(randRange(123, 1, 5)).toMatchInlineSnapshot(`4`)
  expect(randRange(123, 0, 5)).toMatchInlineSnapshot(`5`)
})

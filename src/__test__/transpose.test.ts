import { transpose } from '../transpose'

test('transpose', () => {
  expect(
    transpose([
      ['a', 'b'],
      ['c', 'd'],
      ['d', 'e'],
    ])
  ).toStrictEqual([
    ['a', 'c', 'd'],
    ['b', 'd', 'e'],
  ])
})

import { transpose } from '../index'

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
  expect(transpose([])).toStrictEqual([])
})

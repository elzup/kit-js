import { uniq } from '../arr/uniq'

test('uniq', () => {
  expect(uniq([1, 2, 3, 3, 2])).toStrictEqual([1, 2, 3])
  expect(uniq(['a', 'A', 1, 'b', 'b'])).toStrictEqual(['a', 'A', 1, 'b'])
  expect(uniq([])).toStrictEqual([])
})

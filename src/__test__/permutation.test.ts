import { permutation, permutationBase } from '../algo/permutation'

describe('permutation', () => {
  it('works', () => {
    const res = permutation([1, 2, 3], 2)

    expect(res).toStrictEqual([
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 2],
    ])
  })

  it('without len', () => {
    expect(permutation([1, 2])).toStrictEqual([
      [1, 2],
      [2, 1],
    ])
  })

  it('permutationBase', () => {
    const res = permutationBase([1, 2])

    expect(res).toStrictEqual([
      [1, 2],
      [2, 1],
    ])
  })
})

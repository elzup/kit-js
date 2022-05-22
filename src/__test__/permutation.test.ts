import { permutation } from '..'

describe('permutation', () => {
  it('works', () => {
    const perms: number[][] = []

    permutation(perms, [1, 2, 3], 2)
    expect(perms).toStrictEqual([
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 2],
    ])
  })
})

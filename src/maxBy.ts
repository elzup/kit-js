export const maxBy = <T>(a: readonly T[], compareFn: (t: T) => number): T =>
  a
    .map((v) => [v, compareFn(v)] as const)
    .reduce((a, b) => (a[1] > b[1] ? a : b))[0]

export const minBy = <T>(a: readonly T[], compareFn: (t: T) => number): T =>
  maxBy(a, (t) => -compareFn(t))

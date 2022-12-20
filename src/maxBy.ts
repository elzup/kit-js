export const maxBy = <T>(
  a: readonly T[],
  compareFn: (t: T) => number
): T | undefined =>
  a.length === 0
    ? undefined
    : a
        .map((v) => [v, compareFn(v)] as const)
        .reduce((a, b) => (a[1] > b[1] ? a : b))[0]

export const minBy = <T>(
  a: readonly T[],
  compareFn: (t: T) => number
): T | undefined => maxBy(a, (t) => -compareFn(t))

export const nearBy = <T>(
  a: readonly T[],
  compareFn: (t: T) => number,
  target: number
): T | undefined => maxBy(a, (t) => -Math.abs(target - compareFn(t)))

export const farBy = <T>(
  a: readonly T[],
  compareFn: (t: T) => number,
  target: number
): T | undefined => maxBy(a, (t) => Math.abs(target - compareFn(t)))

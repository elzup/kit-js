export function comps2<T>(a: T[]): [T, T][] {
  if (a.length < 2) return []

  const [, ...b] = a

  return b.map((v, i) => [a[i], b[i]])
}

export function comps<T>(a: T[], n = 2): T[][] {
  if (a.length < n) return []
  if (n === 2) return comps2(a)

  const b = a.slice(n - 1, a.length)

  return b.map((v, i) => a.slice(i, i + n))
}
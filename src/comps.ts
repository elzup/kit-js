export function comps<T>(a: T[]): [T, T][] {
  const b = [...a]

  b.shift()
  a.pop()

  return b.map((v, i) => [a[i], b[i]])
}

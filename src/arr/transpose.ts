export const transpose = <T>(a: T[][]) => {
  if (a.length === 0) return []
  return a[0].map((_, i) => a.map((_, j) => a[j][i]))
}

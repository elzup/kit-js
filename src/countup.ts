export const countup = (arr: (string | number)[]) => {
  const m = new Map<string | number, number>()

  arr.forEach((v) => {
    m.set(v, (m.get(v) || 0) + 1)
  })
  return m
}

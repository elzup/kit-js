export const shuffle = <T>(arr: readonly T[], rand = Math.random): T[] => {
  const a = arr.map((v) => ({ v, r: rand() }))

  a.sort((a, b) => a.r - b.r)
  return a.map(({ v }) => v)
}

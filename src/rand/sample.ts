export const sample = <T>(arr: T[], n: number, rand = Math.random): T[] => {
  const b: T[] = []

  arr.forEach((v, i) => {
    const all = arr.length - i
    const least = n - b.length

    if (rand() < least / all) b.push(v)
  })
  return b
}

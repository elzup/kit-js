export const greedy = (n: number, a: readonly number[]) =>
  [...a, 1].map((u, i) => Math.floor((n % (a[i - 1] ?? Infinity)) / u))

export const greedyStrict = (n: number, units: readonly number[]) => {
  let k = n

  const a = units.map((u) => {
    const v = Math.floor(k / u)

    k -= v * u
    return v
  })

  return [...a, k]
}

const lastWrap = (a: number[]) => [a, a.pop()]

const greedyBase = (n: number, units: readonly number[]) =>
  [...units, 1].map((u, i) => Math.floor((n % (units[i - 1] ?? Infinity)) / u))

export const greedy = (n: number, units: readonly number[]) =>
  lastWrap(greedyBase(n, units))

export const greedyStrict = (n: number, units: readonly number[]) => {
  let k = n

  const a = units.map((u) => {
    const v = Math.floor(k / u)

    k -= v * u
    return v
  })

  return [a, k]
}

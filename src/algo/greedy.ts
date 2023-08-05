export const greedy = (n: number, units: readonly number[]) => {
  let k = n

  const a = units.map((u) => {
    const v = Math.floor(k / u)

    k -= v * u
    return v
  })

  return [a, k]
}

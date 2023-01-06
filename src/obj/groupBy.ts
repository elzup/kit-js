export const groupByFunc = <T, K extends string>(
  a: readonly T[],
  fieldFn: (t: T) => K
): Record<K, T[]> => {
  const groups = {} as Record<K, T[]>

  a.forEach((item) => {
    const key = fieldFn(item)

    if (groups[key] === undefined) groups[key] = [] as T[]

    groups[key].push(item)
  })

  return groups
}

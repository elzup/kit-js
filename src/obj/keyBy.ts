export const keyBy = <T, K extends string>(
  a: T[],
  fieldFn: (t: T) => K
): Record<K, T> => {
  const byId = {} as Record<K, T>

  a.forEach((item) => {
    const key = fieldFn(item)

    byId[key] = item
  })

  return byId
}

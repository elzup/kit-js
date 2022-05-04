export const groupByFunc = <T, K extends string>(
  a: T[],
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

// export const groupBy = <T, K extends string>(
//   a: T[],
//   field: string | ((t: T) => K)
// ) => {
//   if (typeof field === 'function') {
//     return groupByFunc(a, field)
//   }
//   type A = T extends { [field]: infer U } ? U : never

//   return groupByFunc<T, A>(a, (t: T) => t[field])
// }

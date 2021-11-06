const invert = <T extends string | number | symbol>(
  obj: Record<string, T>
): Record<T, string> => {
  const newObj = {} as Record<T, string>

  Object.keys(obj).forEach((key) => {
    newObj[obj[key]] = key
  })
  return newObj
}

export const swapKeyValue = invert
export default invert

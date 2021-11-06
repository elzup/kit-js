const makeObj = <T>(keys: string[], defaultValue: T = null) => {
  const obj: Record<string, T> = {}

  keys.forEach((key) => {
    obj[key] = defaultValue
  })
  return obj
}

export default makeObj

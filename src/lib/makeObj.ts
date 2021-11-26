const makeObj = <T>(keys: string[], defaultValue: T = null) =>
  Object.fromEntries(keys.map((key) => [key, defaultValue]))

export default makeObj

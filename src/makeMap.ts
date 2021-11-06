const makeMap = <T>(keys: string[], defaultValue: T = null) =>
  new Map(keys.map((k) => [k, defaultValue]))

export default makeMap

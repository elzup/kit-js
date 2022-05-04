export const makeObj = <T>(
  keys: readonly string[],
  defaultValue: T = null as any
) => Object.fromEntries(keys.map((key) => [key, defaultValue]))

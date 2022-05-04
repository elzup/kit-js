export const makeMap = <T>(
  keys: readonly string[],
  defaultValue: T = null as any
) => new Map(keys.map((k) => [k, defaultValue]))

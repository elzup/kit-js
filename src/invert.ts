export const swap = <T, U>([k, v]: [T, U]): [U, T] => [v, k]

type InvertFn = <T extends PropertyKey>(
  obj: Record<string, T> | string[] | string
) => Record<string, T>

export const invert: InvertFn = (
  obj
  // after: (v: T) => T = (v) => v
) => Object.fromEntries(Object.entries(obj).map(swap))

export const swapKeyValue = invert

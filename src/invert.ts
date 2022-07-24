export const swap = <T, U>([k, v]: [T, U]): [U, T] => [v, k]
export const invert = <T extends PropertyKey>(
  obj: Record<string, T> | string[] | string
): Record<string, string> => Object.fromEntries(Object.entries(obj).map(swap))

export const swapKeyValue = invert

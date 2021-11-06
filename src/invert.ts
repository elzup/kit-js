const swap = <T, U>([k, v]: [T, U]): [U, T] => [v, k]
const invert = <T extends PropertyKey>(
  obj: Record<string, T>
): Record<string, string> => Object.fromEntries(Object.entries(obj).map(swap))

export const swapKeyValue = invert
export default invert

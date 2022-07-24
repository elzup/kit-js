export const swap = <T, U>([k, v]: [T, U]): [U, T] => [v, k]

type Entryable<T> = string[] | string | Record<string, T>

type InvertFn = {
  <T extends PropertyKey>(obj: Entryable<T>): Record<string, T>
  <T extends PropertyKey, V>(
    obj: Entryable<T>,
    after: (v: string) => V
  ): Record<string, V>
}

export const invert: InvertFn = <T extends PropertyKey, V = T>(
  obj: Entryable<T>,
  after?: (v: string) => V
) =>
  Object.fromEntries(
    Object.entries(obj)
      .map(swap)
      .map(([k, v]) => [k, after ? after(v) : v])
  )

export const swapKeyValue = invert

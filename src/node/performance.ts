import { performance } from 'perf_hooks'

type PeformanceProperty = { ms: number }
type Callback<CustomArgs extends any[] = []> = (
  p: PeformanceProperty,
  ...customs: CustomArgs
) => void

const defaultCallback: Callback<[string]> = ({ ms }, label: string) => {
  console.log(`${label}:${Math.floor(ms)}ms`)
}

type CustomArgs<T extends unknown> =
  T extends Callback<infer Args> ? Args : never

export const performanceTimeUtil = <Args extends any[] = []>(
  callback?: Callback<Args>
) => {
  let memo = performance.now()

  const cb = callback || defaultCallback

  return {
    mark(...args: CustomArgs<typeof cb>) {
      const now = performance.now()

      cb({ ms: now - memo }, ...args)

      memo = now
    },
  }
}

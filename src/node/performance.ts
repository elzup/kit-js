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

/**
 * Create performance timer utility for measuring execution time.
 *
 * Returns an object with a mark() method that measures time elapsed
 * since the last mark (or creation). Useful for performance profiling.
 *
 * @param callback - Custom callback for handling timing data
 * @returns Object with mark() method
 *
 * @example
 * const timer = performanceTimeUtil()
 * // ... some work ...
 * timer.mark('step1')  // logs: "step1:123ms"
 * // ... more work ...
 * timer.mark('step2')  // logs: "step2:456ms"
 *
 * @example
 * // Custom callback
 * const timer = performanceTimeUtil(({ ms }, label) => {
 *   console.log(`${label} took ${ms.toFixed(2)}ms`)
 * })
 * timer.mark('operation')
 */
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

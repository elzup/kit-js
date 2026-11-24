/**
 * Pause execution for a specified duration.
 *
 * Returns a Promise that resolves after the specified milliseconds.
 * Useful for adding delays in async functions, rate limiting, or
 * waiting between operations. Must be used with await or .then().
 *
 * @param msec - Milliseconds to sleep
 * @returns Promise that resolves after the delay
 *
 * @example
 * // Wait 1 second
 * await sleep(1000)
 * console.log('1 second later')
 *
 * @example
 * // Delay between API calls
 * for (const item of items) {
 *   await fetchData(item)
 *   await sleep(500)  // 500ms delay between calls
 * }
 *
 * @example
 * // Retry with backoff
 * async function retryWithDelay() {
 *   try {
 *     return await apiCall()
 *   } catch (error) {
 *     await sleep(2000)  // Wait 2 seconds before retry
 *     return await apiCall()
 *   }
 * }
 *
 * @example
 * // Using with time constants
 * import { sec, min } from '@elzup/kit/time/constants'
 * await sleep(5 * sec)   // 5 seconds
 * await sleep(2 * min)   // 2 minutes
 *
 * @example
 * // Animation timing
 * element.classList.add('fade-in')
 * await sleep(300)  // Wait for animation
 * element.classList.remove('fade-in')
 */
export const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec))

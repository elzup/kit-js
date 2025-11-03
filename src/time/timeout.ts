import { sleep } from './sleep'

const makeTimeout = async (msec: number) => {
  await sleep(msec)
  throw new Error('Timeout')
}

/**
 * Add timeout to a Promise, throwing error if exceeded.
 *
 * Races the given promise against a timeout. If timeout is reached
 * first, throws an Error with message 'Timeout'.
 *
 * @param task - Promise to add timeout to
 * @param msec - Timeout duration in milliseconds
 * @returns Promise that resolves with task result or throws timeout error
 *
 * @example
 * await timeout(fetchData(), 5000)  // 5 second timeout
 *
 * @example
 * try {
 *   await timeout(slowOperation(), 1000)
 * } catch (e) {
 *   console.log(e.message)  // 'Timeout'
 * }
 */
export const timeout = <T>(task: Promise<T>, msec: number) => {
  return Promise.race([task, makeTimeout(msec)])
}

/**
 * Add timeout to a Promise with fallback value.
 *
 * Like timeout(), but returns an alternative value instead of throwing
 * when timeout is reached. Other errors are still thrown.
 *
 * @param task - Promise to add timeout to
 * @param msec - Timeout duration in milliseconds
 * @param alt - Alternative value to return on timeout
 * @returns Promise that resolves with task result or alternative value
 *
 * @example
 * const result = await timeoutCover(fetchData(), 5000, null)
 * // Returns null if timeout, data if successful
 *
 * @example
 * const data = await timeoutCover(apiCall(), 3000, { default: true })
 * // Returns { default: true } on timeout
 */
export const timeoutCover = <T, U>(task: Promise<T>, msec: number, alt: U) => {
  return timeout(task, msec).catch((e) => {
    if (e.message === 'Timeout') return alt
    throw e
  })
}

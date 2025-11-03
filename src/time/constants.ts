/**
 * One second in milliseconds.
 *
 * @example
 * await sleep(3 * sec)  // Sleep for 3 seconds
 */
export const sec = 1000

/**
 * One minute in milliseconds (60 seconds).
 *
 * @example
 * await sleep(5 * min)  // Sleep for 5 minutes
 */
export const min = 60 * sec

/**
 * One hour in milliseconds (60 minutes).
 *
 * @example
 * const cacheExpiry = Date.now() + 2 * hour  // Expire in 2 hours
 */
export const hour = 60 * min

/**
 * One day in milliseconds (24 hours).
 *
 * @example
 * const tomorrow = Date.now() + day
 */
export const day = 24 * hour

/**
 * One week in milliseconds (7 days).
 *
 * @example
 * const nextWeek = Date.now() + week
 */
export const week = 7 * day

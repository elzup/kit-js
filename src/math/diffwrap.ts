/**
 * Calculate the shortest signed distance between two values in a circular range.
 *
 * This function computes the difference between two numbers considering
 * that the range wraps around (e.g., angles, clock positions, hue values).
 * It always returns the shortest path, taking into account the circular nature.
 *
 * @param a - Starting value
 * @param b - Target value
 * @param min - Minimum value of the range (inclusive)
 * @param max - Maximum value of the range (exclusive)
 * @returns The shortest signed distance a - b within the circular range
 *
 * @example
 * // 24-hour clock (0-24)
 * diffwrap(23, 1, 0, 24) // => 2 (not -22)
 * diffwrap(1, 23, 0, 24) // => -2 (not 22)
 */
export const diffwrap = (
  a: number,
  b: number,
  min: number,
  max: number
): number => {
  const range = max - min
  const half = range / 2
  const diff = b - a

  if (diff < -half) return diff + range
  if (half < diff) return diff - range

  return diff
}

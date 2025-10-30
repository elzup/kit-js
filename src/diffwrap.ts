/**
 * Calculate the shortest signed distance between two values in a circular range.
 *
 * This function computes the difference between two numbers considering
 * that the range wraps around (e.g., angles, clock positions, hue values).
 * It always returns the shortest path, taking into account the circular nature.
 *
 * @param from - Starting value
 * @param to - Target value
 * @param min - Minimum value of the range (inclusive)
 * @param max - Maximum value of the range (exclusive)
 * @returns The shortest signed distance from `from` to `to`
 *
 * @example
 * // Angles (0-360 degrees)
 * diffwrap(350, 10, 0, 360) // => 20 (not -340)
 * diffwrap(10, 350, 0, 360) // => -20 (not 340)
 *
 * @example
 * // Clock hours (0-12)
 * diffwrap(11, 1, 0, 12) // => 2 (not -10)
 * diffwrap(1, 11, 0, 12) // => -2 (not 10)
 */
export const diffwrap = (
  from: number,
  to: number,
  min: number,
  max: number,
): number => {
  const range = max - min
  const halfRange = range / 2
  let diff = to - from

  if (diff > halfRange) {
    diff -= range
  } else if (diff < -halfRange) {
    diff += range
  }

  return diff
}

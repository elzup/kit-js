type CycleRange = { start: number; end: number }

/**
 * Check if value is within a cyclic range.
 *
 * Handles both normal ranges (start < end) and wrap-around ranges
 * (start > end, wrapping around like clock hours).
 *
 * @param range - Object with start and end numbers
 * @param val - Value to check
 * @returns true if value is in range
 *
 * @example
 * cycleRangeIn({ start: 10, end: 20 }, 15)  // => true
 * cycleRangeIn({ start: 10, end: 20 }, 5)   // => false
 *
 * @example
 * // Wrap-around range (like 22:00 to 02:00)
 * cycleRangeIn({ start: 22, end: 2 }, 23)  // => true
 * cycleRangeIn({ start: 22, end: 2 }, 1)   // => true
 * cycleRangeIn({ start: 22, end: 2 }, 10)  // => false
 */
export const cycleRangeIn = ({ start, end }: CycleRange, val: number) => {
  if (start < end) {
    return start <= val && val < end
  } else {
    return val < end || start <= val
  }
}

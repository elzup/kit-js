/**
 * Clamp a number within a minimum and maximum range.
 *
 * Restricts a value to be within the specified bounds. If the value is
 * less than min, returns min. If greater than max, returns max. Otherwise
 * returns the value unchanged.
 *
 * @param value - Number to clamp
 * @param min - Minimum allowed value
 * @param max - Maximum allowed value
 * @returns Clamped value between min and max (inclusive)
 *
 * @example
 * // Value within range (unchanged)
 * clamp(5, 0, 10)
 * // => 5
 *
 * @example
 * // Value below minimum
 * clamp(-5, 0, 10)
 * // => 0
 *
 * @example
 * // Value above maximum
 * clamp(15, 0, 10)
 * // => 10
 *
 * @example
 * // Clamp percentage to 0-100
 * clamp(userInput, 0, 100)
 *
 * @example
 * // Clamp RGB color value
 * const red = clamp(colorValue, 0, 255)
 */
export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value))

/**
 * Alias for Math.sign - returns the sign of a number.
 *
 * Returns 1 for positive numbers, -1 for negative numbers, 0 for zero,
 * and NaN for NaN.
 *
 * @see Math.sign
 *
 * @example
 * negaposi(10)   // => 1
 * negaposi(-10)  // => -1
 * negaposi(0)    // => 0
 */
export const negaposi = Math.sign

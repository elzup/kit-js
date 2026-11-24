/**
 * Create a toggle function that cycles through an array of values.
 *
 * Returns a function that, given a value from the array, returns the next
 * value in sequence (wrapping around to the start after the last element).
 *
 * @param arr - Array of values to cycle through
 * @returns Function that returns next value in cycle
 *
 * @example
 * const nextColor = makeToggle(['red', 'green', 'blue'])
 * nextColor('red')   // => 'green'
 * nextColor('green') // => 'blue'
 * nextColor('blue')  // => 'red' (wraps around)
 *
 * @example
 * // Toggle between states
 * const nextState = makeToggle(['idle', 'loading', 'success', 'error'])
 * nextState('idle')    // => 'loading'
 * nextState('loading') // => 'success'
 */
export const makeToggle = <T>(arr: readonly T[]): ((v: T) => T) => {
  return (v) => {
    const cur = arr.indexOf(v)

    return arr[(cur + 1) % arr.length]
  }
}

/**
 * Alias for makeToggle.
 * @see makeToggle
 */
export const makeCycle = makeToggle

/**
 * Toggle function for boolean values.
 *
 * Convenience function that toggles between true and false.
 *
 * @example
 * toggle(true)  // => false
 * toggle(false) // => true
 */
export const toggle = makeToggle([true, false])

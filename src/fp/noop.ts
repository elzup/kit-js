/**
 * No-operation function that does nothing and returns undefined.
 *
 * A function that accepts any arguments and does nothing. Useful as a
 * default callback, placeholder function, or when you need to satisfy
 * a function parameter but don't want any action to occur.
 *
 * @param _args - Any arguments (ignored)
 * @returns undefined
 *
 * @example
 * // Default callback
 * const onClick = shouldHandle ? handleClick : noop
 * onClick()
 *
 * @example
 * // Placeholder in optional callback
 * function fetchData(onSuccess = noop, onError = noop) {
 *   // ... fetch logic
 * }
 *
 * @example
 * // Disable console in production
 * const logger = isProduction ? noop : console.log
 * logger('Debug message')
 */
export const noop = (..._args: unknown[]) => {}

/**
 * Template literal tag that returns the interpolated string.
 *
 * A tagged template function that acts as a no-op but returns the
 * resulting string. Useful when you need a template tag but don't
 * want any special processing.
 *
 * @param strs - Template string array
 * @param exps - Expression values
 * @returns Interpolated string
 *
 * @example
 * // Basic usage
 * const name = 'World'
 * tagNoop`Hello ${name}!`
 * // => 'Hello World!'
 *
 * @example
 * // Conditional tag selection
 * const tag = shouldHighlight ? highlightTag : tagNoop
 * const result = tag`Code: ${code}`
 */
export const tagNoop = (strs: TemplateStringsArray, ...exps: any[]) =>
  strs.map((a, i) => a + String(exps[i] ?? '')).join('')

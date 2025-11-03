/**
 * Get environment variable with default value and required validation.
 *
 * Safely retrieves environment variables with fallback support. Can enforce
 * required variables and customize error handling. Node.js only.
 *
 * @param key - Environment variable name
 * @param defaultValue - Value to return if variable is undefined (default: '')
 * @param required - Whether the variable is required (throws if missing)
 * @param requiredCallback - Custom callback when required variable is missing
 * @returns Environment variable value or default
 *
 * @throws {Error} If required is true and variable is undefined (via callback)
 *
 * @example
 * // Basic usage with default
 * const port = getEnv('PORT', '3000')
 * // => '3000' if PORT is not set
 *
 * @example
 * // Required environment variable
 * const apiKey = getEnv('API_KEY', '', true)
 * // => Throws error if API_KEY is not set
 *
 * @example
 * // Custom error handling
 * const dbUrl = getEnv('DATABASE_URL', '', true, () => {
 *   console.error('DATABASE_URL is required!')
 *   process.exit(1)
 * })
 *
 * @example
 * // Optional with fallback
 * const env = getEnv('NODE_ENV', 'development')
 * // => 'development' if NODE_ENV is not set
 *
 * @example
 * // Check if variable exists
 * const debug = getEnv('DEBUG')
 * if (debug) {
 *   console.log('Debug mode enabled')
 * }
 */
export const getEnv = (
  key: string,
  defaultValue = '',
  required = false,
  requiredCallback = () => {
    throw Error(`env ${key} is required`)
  }
) => {
  const value = process.env[key]

  if (required && value === undefined) {
    requiredCallback()
  }

  return value ?? defaultValue
}

export const getEnv = (
  key: string,
  defaultValue = '',
  required = false,
  requiredCallback = () => {
    throw Error(`env ${key} is required`)
  }
) => {
  const value = process.env[key]

  if (required && !value) {
    requiredCallback()
  }

  return value || defaultValue
}

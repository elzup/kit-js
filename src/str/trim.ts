/** trim 1 double quote from most outside */
export const trimQuote = (s: string) => s.replace(/^"/, '').replace(/"$/, '')

/** trim all chars out of paren */
export const trimParenOut = (s: string) =>
  s.replace(/.*\(/, '').replace(/\).*/, '')

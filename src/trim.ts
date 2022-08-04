export const trimQuote = (s: string) => s.replace(/^"/, '').replace(/"$/, '')
export const trimParenOut = (s: string) =>
  s.replace(/.*\(/, '').replace(/\).*/, '')

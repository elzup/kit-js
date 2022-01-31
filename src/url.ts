export const googleSearchUrl = (q: string) =>
  `https://www.google.co.jp/search?q=${encodeURIComponent(q)}`
export const googleSearchImageUrl = (q: string) =>
  `${googleSearchUrl(q)}&tbm=isch`

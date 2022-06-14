const URL_REGEX = /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+/g
const URL_REGEX_MB =
  /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g

export const pickUrl = (s: string) => s.match(URL_REGEX) ?? []
export const pickUrlMb = (s: string) => s.match(URL_REGEX_MB) ?? []

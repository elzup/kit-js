const URL_REGEX = /https?:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+/g
const URL_REGEX_MB =
  /https?:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g

/**
 * Extract all URLs from a string.
 *
 * Finds all HTTP/HTTPS URLs in the text using regex.
 * Returns an array of matched URLs or empty array if none found.
 *
 * @param s - String to search for URLs
 * @returns Array of URLs found
 *
 * @example
 * pickUrl('Visit https://example.com and http://test.org')
 * // => ['https://example.com', 'http://test.org']
 *
 * @example
 * pickUrl('No URLs here')
 * // => []
 */
export const pickUrl = (s: string) => s.match(URL_REGEX) ?? []

/**
 * Extract all URLs from a string (with multibyte character support).
 *
 * Same as pickUrl but also matches URLs containing Japanese and other
 * multibyte characters (Hiragana, Katakana, Kanji, full-width chars).
 *
 * @param s - String to search for URLs
 * @returns Array of URLs found
 *
 * @example
 * pickUrlMb('見て https://例.jp/テスト')
 * // => ['https://例.jp/テスト']
 */
export const pickUrlMb = (s: string) => s.match(URL_REGEX_MB) ?? []

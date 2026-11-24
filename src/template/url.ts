/**
 * Generate Google search URL for query.
 *
 * @param q - Search query
 * @returns Google search URL
 *
 * @example
 * googleSearchUrl('TypeScript tutorial')
 * // => 'https://www.google.co.jp/search?q=TypeScript%20tutorial'
 */
export const googleSearchUrl = (q: string) =>
  `https://www.google.co.jp/search?q=${encodeURIComponent(q)}`

/**
 * Generate Google Images search URL for query.
 *
 * @param q - Search query
 * @returns Google Images search URL
 *
 * @example
 * googleSearchImageUrl('cats')
 * // => 'https://www.google.co.jp/search?q=cats&tbm=isch'
 */
export const googleSearchImageUrl = (q: string) =>
  `${googleSearchUrl(q)}&tbm=isch`

const googleMapsPinUrlBase = (lls: string, zoom: number) =>
  `https://maps.google.co.jp/maps?ll=${lls}&q=loc:${lls}&z=${zoom}`
/**
 * Generate Google Maps URL with pin at coordinates.
 *
 * @param lat - Latitude
 * @param lon - Longitude
 * @param zoom - Zoom level (default: 15)
 * @returns Google Maps URL with pin
 *
 * @example
 * googleMapsPinUrl(35.6762, 139.6503, 12)
 * // => 'https://maps.google.co.jp/maps?ll=35.6762,139.6503&...'
 */
export const googleMapsPinUrl = (
  lat: string | number,
  lon: string | number,
  zoom = 15
) => googleMapsPinUrlBase(`${lat},${lon}`, zoom)

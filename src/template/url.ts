export const googleSearchUrl = (q: string) =>
  `https://www.google.co.jp/search?q=${encodeURIComponent(q)}`
export const googleSearchImageUrl = (q: string) =>
  `${googleSearchUrl(q)}&tbm=isch`

export const googleMapsPinUrl = (lat: number, lon: number, zoom = 15) =>
  `https://www.google.co.jp/maps/place/${lat},${lon}/@${lat},${lon},${zoom}z/data`

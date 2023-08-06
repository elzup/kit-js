export const googleSearchUrl = (q: string) =>
  `https://www.google.co.jp/search?q=${encodeURIComponent(q)}`
export const googleSearchImageUrl = (q: string) =>
  `${googleSearchUrl(q)}&tbm=isch`

const googleMapsPinUrlBase = (lls: string, zoom: number) =>
  `https://maps.google.co.jp/maps?ll=${lls}&q=loc:${lls}&z=${zoom}`
export const googleMapsPinUrl = (
  lat: string | number,
  lon: string | number,
  zoom = 15
) => googleMapsPinUrlBase(`${lat},${lon}`, zoom)

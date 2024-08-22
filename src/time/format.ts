import { pad02 } from '../format'

export const timePartsStr = (date: Date) => {
  const yyyy = String(date.getFullYear())
  const mo = pad02(String(date.getMonth() + 1))
  const dd = pad02(date.getDate())
  const hh = pad02(date.getHours())
  const mn = pad02(date.getMinutes())
  const ss = pad02(date.getSeconds())

  return { yyyy, mo, dd, hh, mn, ss }
}

export const formatYmd = (date: Date) =>
  (({ yyyy, mo, dd }) => `${yyyy}-${mo}-${dd}`)(timePartsStr(date))

export const ymd = (date: Date) =>
  (({ yyyy, mo, dd }) => `${yyyy}${mo}${dd}`)(timePartsStr(date))

export const ymdNum = (date: Date) => Number(ymd(date))

export const formatHms = (date: Date) =>
  (({ hh, mn, ss }) => `${hh}:${mn}:${ss}`)(timePartsStr(date))

export const hm = (date: Date) =>
  (({ hh, mn }) => `${hh}${mn}`)(timePartsStr(date))

export const formatTime = (date: Date) =>
  `${formatYmd(date)} ${formatHms(date)}`

export const isoJp = (date: Date) =>
  new Date(date.getTime() + 9 * 60 * 60 * 1000)
    .toISOString()
    .replace('Z', '+09:00')

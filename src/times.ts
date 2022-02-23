export const times = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return { year, month, day, hour, minute, second }
}

export const timesNow = () => times(new Date())

const SEC = 1000
const MIN = 60 * SEC

const JP_SHIFT_HOUR = 9

export const shiftDate = (date: Date, hour = 0) =>
  new Date(+date + (date.getTimezoneOffset() + Math.floor(hour * 60)) * MIN)

export const jpDate = (date: Date) => shiftDate(date, JP_SHIFT_HOUR)

export const ymd = (date: Date) =>
  String(date.getFullYear()).padStart(4, '0') +
  String(date.getMonth() + 1).padStart(2, '0') +
  String(date.getDate()).padStart(2, '0')
export const ymdNum = (date: Date) => Number(ymd(date))

export const timeParts = (d: Date) => {
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()

  return { year, month, date, hour, minute, second }
}

export const timesNow = () => timeParts(new Date())

const SEC = 1000
const MIN = 60 * SEC

const JP_SHIFT_HOUR = 9

export const shiftDate = (date: Date, hour = 0) =>
  new Date(+date + (date.getTimezoneOffset() + Math.floor(hour * 60)) * MIN)

export const jpDate = (date: Date) => shiftDate(date, JP_SHIFT_HOUR)

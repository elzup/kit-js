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

export const jpDate = (date: Date) =>
  new Date(+date + (date.getTimezoneOffset() + 9 * 60) * MIN)

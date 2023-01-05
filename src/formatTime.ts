import { pad02 } from './format'
import { timeParts } from './times'

export const formatYmd = (date: Date) => {
  const { year, month, day } = timeParts(date)

  return `${year}-${pad02(month)}-${pad02(day)}`
}

export const formatHms = (date: Date) => {
  const { hour, minute, second } = timeParts(date)

  return `${pad02(hour)}:${pad02(minute)}:${pad02(second)}`
}

export const formatTime = (date: Date) => {
  return `${formatYmd(date)} ${formatHms(date)}`
}

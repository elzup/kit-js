import { range } from './range'

export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size < 1) return []
  return range(Math.ceil(arr.length / size)).map((i) =>
    arr.slice(i * size, (i + 1) * size)
  )
}

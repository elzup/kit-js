import { range } from '../arr/range'

export const chunkStr = (s: string, size: number): string[] =>
  range(s.length - size + 1).map((i) => s.substring(i, i + size))

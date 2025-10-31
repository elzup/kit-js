import { windowed2 } from '../arr/windowed'

const unOtherwise = (v: number) => (v === -1 ? Infinity : v)
const columnLength = (rows: readonly any[][]) => rows[0]?.length ?? 0
const diffPos = (row1: any[], row2: any[]) =>
  row1.findIndex((v, j) => v !== row2[j])

// (4, 2) => [false, false, true, true]
const makeBoolRow = (length: number, truePos: number) =>
  Array.from({ length }, (_v, i) => i >= truePos)

export const rowspanPos = (rows: readonly any[][]) => {
  if (rows.length === 0) return []
  const positions = windowed2(rows).map((v) => unOtherwise(diffPos(...v)))

  return [0, ...positions]
}

export const rowspan = (rows: readonly any[][]) => {
  const colNum = columnLength(rows)

  return rowspanPos(rows).map((v) => makeBoolRow(colNum, v))
}

import { windowed2 } from '../windowed'

const unOtherwise = (v: number) => (v === -1 ? Infinity : v)

const diffPos = (row1: readonly any[], row2: readonly any[]) =>
  row1.findIndex((v, j) => v !== row2[j])

// (4, 2) => [false, false, true, true]
const makeBoolRow = (length: number, truePos: number) =>
  Array.from({ length }, (_v, i) => i >= truePos)

export const rowspan = (cells: readonly any[][]) => {
  if (cells.length === 0) return []
  const length = cells[0]?.length ?? 0
  const positions = windowed2(cells).map((v) => unOtherwise(diffPos(...v)))

  return [0, ...positions].map((v) => makeBoolRow(length, v))
}

import { windowed2 } from '../arr/windowed'

const unOtherwise = (v: number) => (v === -1 ? Infinity : v)
const columnLength = (rows: readonly any[][]) => rows[0]?.length ?? 0
const diffPos = (row1: any[], row2: any[]) =>
  row1.findIndex((v, j) => v !== row2[j])

// (4, 2) => [false, false, true, true]
const makeBoolRow = (length: number, truePos: number) =>
  Array.from({ length }, (_v, i) => i >= truePos)

/**
 * Calculate rowspan positions for table rows.
 *
 * Returns array of positions indicating where consecutive rows differ.
 * Used for calculating HTML table rowspan attributes.
 *
 * @param rows - 2D array of table rows
 * @returns Array of difference positions for each row
 *
 * @example
 * rowspanPos([['a', 'b'], ['a', 'c'], ['d', 'e']])
 * // => [0, 1, 0] (row 1 differs at pos 1, row 2 at pos 0)
 */
export const rowspanPos = (rows: readonly any[][]) => {
  if (rows.length === 0) return []
  const positions = windowed2(rows).map((v) => unOtherwise(diffPos(...v)))

  return [0, ...positions]
}

/**
 * Generate rowspan boolean matrix for table rendering.
 *
 * Creates a matrix indicating which cells should be hidden due to rowspan.
 * Each row contains booleans: false = hide (spanned), true = show.
 *
 * @param rows - 2D array of table rows
 * @returns 2D boolean array for rowspan rendering
 *
 * @example
 * rowspan([['a', 'b'], ['a', 'c'], ['d', 'e']])
 * // => [[false, false], [false, true], [false, false]]
 */
export const rowspan = (rows: readonly any[][]) => {
  const colNum = columnLength(rows)

  return rowspanPos(rows).map((v) => makeBoolRow(colNum, v))
}

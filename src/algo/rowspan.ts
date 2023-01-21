export const rowspan = (cells: any[][]) => {
  return cells.map((row, i) => {
    if (i === 0) {
      return Array.from({ length: row.length }, () => true)
    }
    const prevRow = cells[i - 1]
    const l = row.findIndex((cell, j) => cell !== prevRow[j])
    const v = l === -1 ? row.length + 1 : l

    return Array.from({ length: row.length }, (_v, i) => i >= v)
  })
}

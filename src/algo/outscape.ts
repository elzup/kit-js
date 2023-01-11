/**
 * Check if the grid ruler should be visible
 * @param units ruler's unit size
 * @param range ruler's range
 * @param viewWidth view's pixel width
 * @param viewMinWidth minimum view's pixel width
 * @returns
 */
export const outscape = (
  units: number[],
  range: number,
  viewWidth: number,
  viewMinWidth: number
) => {
  const rate = viewWidth / range
  const visibles = units.map((v) => v * rate > viewMinWidth)

  return { visibles }
}

export const shiftChar = (c: string, diff: number) =>
  String.fromCharCode(c.charCodeAt(0) + diff)

export const halfWidth = (s: string) =>
  s.replace(FULL_WIDTH_CHARS, shiftToHalfWidth)

export const BOM = '\uFEFF'
export const hasBom = (s: string) => s.startsWith(BOM)
export const trimBom = (s: string) => (hasBom(s) ? s.slice(1) : s)

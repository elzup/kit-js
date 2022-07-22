type IsAsciiFn = {
  (n: number): boolean
  (s: string): boolean
}

export const isAscii: IsAsciiFn = (v) =>
  typeof v === 'string'
    ? Boolean(v.match(/^[\x20-\x7e]*$/))
    : v >= 0x20 && v <= 0x7e
export const trimNonAscii = (s: string) => s.replace(/[^\x20-\x7e]*/g, '')
export const asciify = trimNonAscii

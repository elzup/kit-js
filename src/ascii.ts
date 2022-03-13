export const isAscii = (s: string) => s.match(/^[\x20-\x7e]*$/)
export const asciify = (s: string) => s.replace(/[^\x20-\x7e]*/g, '')

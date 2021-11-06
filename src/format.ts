export const pad = (v: number | string, d: number) => `${v}`.padStart(d, '0')
export const pad02 = (v: number | string) => pad(v, 2)
export const round = (v: number, d: number) => Math.round(v * 10 ** d) / 10 ** d

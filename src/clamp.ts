export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value))

export const negaposi = (value: number) => clamp(value, -1, 1) as -1 | 0 | 1

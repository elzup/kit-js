export const stringify = (
  v: unknown,
  converter: {
    nul?: () => string
    obj?: (obj: object) => string
    num?: (n: number) => string
  }
): string => {
  if (converter.nul && v === null) return converter.nul()
  if (converter.obj && typeof v === 'object' && v !== null)
    return converter.obj(v)
  if (converter.num && typeof v === 'number') return converter.num(v)
  return String(v)
}

// const escapeMmd = (s: string) => zen2han(s.replace(/[()（） ・]/g, ''))
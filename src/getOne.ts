export const getOne = (v: string | string[] | undefined): string => {
  if (v === undefined) return ''
  return typeof v === 'object' ? v[0] : v
}

export const unarray = getOne

export default getOne

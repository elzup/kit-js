export const getOne = (
  v: string | string[] | undefined | unknown
): string | undefined => (typeof v === 'string' ? v : undefined)

export const unarray = getOne

export default getOne

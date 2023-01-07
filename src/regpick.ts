type Plan = boolean
type Print = boolean

type RegpickReturn<U> = {
  matches: U[]
  prints: Print[]
}

export const regpick = <U>(
  arr: U[],
  arg2: ((t: U) => boolean) | Plan[],
  r: RegExp
): RegpickReturn<U> => {
  return regpickCore(arr, typeof arg2 === 'function' ? arr.map(arg2) : arg2, r)
}

const regpickCore = <U>(
  arr: U[],
  plans: Plan[],
  r: RegExp
): RegpickReturn<U> => {
  const prints = planToPrint(plans, r)

  return { matches: arr.filter((_v, i) => prints[i]), prints }
}

const planToPrint = (plans: Plan[], match: RegExp): Print[] => {
  return []
}

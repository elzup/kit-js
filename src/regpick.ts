type Plan = boolean
type Print = boolean

type RegpickReturn<U> = {
  matches: U[]
  prints: Print[]
}

export const regpickMatcher = {
  IN_101: /1.*1/,
  IN_010: /0.*0/,
  HEAD_0: /^0+/,
  HEAD_01: /^0+1+/,
  HEAD_1: /^1+/,
  HEAD_10: /^1+0+/,
  TAIL_0: /0+$/,
  TAIL_1: /1+$/,
  TAIL_01: /0+1+$/,
  TAIL_10: /1+0+$/,
}

export const regpick = <U>(
  arr: U[],
  arg2: ((t: U) => boolean) | Plan[],
  r: RegExp
): RegpickReturn<U> =>
  regpickCore(arr, typeof arg2 === 'function' ? arr.map(arg2) : arg2, r)

const regpickCore = <U>(
  arr: U[],
  plans: Plan[],
  r: RegExp
): RegpickReturn<U> => {
  const prints = planToPrint(plans, r)

  return { matches: arr.filter((_v, i) => prints[i]), prints }
}

const binstr = (bs: boolean[]) => bs.map((v) => (v ? '1' : '0')).join('')
const planToPrint = (plans: Plan[], r: RegExp): Print[] => {
  const m = binstr(plans).match(r)

  if (m === null || m.index === undefined) return plans.map(() => false)

  const { index: fi } = m
  const li = fi + m[0].length

  return plans.map((_v, i) => fi <= i && i < li)
}

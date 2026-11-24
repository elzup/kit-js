type Plan = boolean
type Print = boolean

type RegpickReturn<U> = {
  matches: U[]
  prints: Print[]
}

/**
 * Common regex patterns for matching boolean sequences.
 *
 * These patterns are useful for selecting elements based on their
 * boolean representation patterns (e.g., selecting leading/trailing
 * sequences, or ranges between true values).
 */
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

/**
 * Pick elements from an array based on a regex pattern applied to boolean representations.
 *
 * This function converts array elements to a binary string representation (0 and 1)
 * using a provided predicate or pre-calculated boolean array, then applies a regex pattern
 * to select a contiguous range of elements.
 *
 * @param arr - Source array to pick elements from
 * @param arg2 - Either a predicate function to convert elements to booleans, or a pre-calculated boolean array
 * @param r - Regular expression pattern to match against the binary string (1=true, 0=false)
 * @returns Object containing matched elements and a boolean array indicating which positions were selected
 *
 * @example
 * // Pick elements between first and last truthy value
 * regpick([0, 1, 0, 0, 0, 1, 0], Boolean, /1.*1/)
 * // => { matches: [1, 0, 0, 0, 1], prints: [false, true, true, true, true, true, false] }
 *
 * @example
 * // Pick consecutive items starting with 'b'
 * regpick(['a01', 'b01', 'b02', 'a02'], (s) => s.startsWith('b'), /1+/)
 * // => { matches: ['b01', 'b02'], prints: [false, true, true, false] }
 *
 * @example
 * // Using pre-defined matcher for leading zeros
 * const arr = [0, 0, 1, 0, 1, 0, 1, 0]
 * regpick(arr, Boolean, regpickMatcher.HEAD_0)
 * // => { matches: [0, 0], prints: [true, true, false, false, false, false, false, false] }
 */
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

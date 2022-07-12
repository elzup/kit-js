import { charCodeShift } from './charCodeShift'

const SHIFT = 0xfee0

export const shiftToHalfWidth = (c: string) => charCodeShift(c, -SHIFT)

export const halfWidth = (s: string) =>
  s.replace(/[Ａ-Ｚａ-ｚ０-９]/g, shiftToHalfWidth)

export const shiftToFullWidth = (c: string) => charCodeShift(c, SHIFT)
export const fullWidth = (s: string) =>
  s.replace(/[A-Za-z0-9]/g, shiftToFullWidth)

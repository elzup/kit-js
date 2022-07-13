import { shiftChar } from './shiftChar'

// 'Ａ' - 'A'
const SHIFT = 0xfee0
const FULL_WIDTH_CHARS = /[Ａ-Ｚａ-ｚ０-９]/g
const HALF_WIDTH_CHARS = /[A-Za-z0-9]/g

export const shiftToHalfWidth = (c: string) => shiftChar(c, -SHIFT)

export const halfWidth = (s: string) =>
  s.replace(FULL_WIDTH_CHARS, shiftToHalfWidth)

export const shiftToFullWidth = (c: string) => shiftChar(c, SHIFT)
export const fullWidth = (s: string) =>
  s.replace(HALF_WIDTH_CHARS, shiftToFullWidth)

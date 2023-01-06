const fromCodePoint = (n: number) => String.fromCodePoint(n)
/* istanbul ignore next */
const toCodePoint = (s: string) => s.codePointAt(0) ?? NaN

export const repartitionBits = (buf: Uint8Array, bn: number): string => {
  const bits = Array.from(buf)
    .map((b) => b.toString(2).padStart(8, '0'))
    .join('')
  const bps = bits.match(new RegExp(`.{${bn}}`, 'g')) || []

  return Array.from(bps)
    .map((b) => b.padEnd(bn, '0'))
    .map((b) => fromCodePoint(parseInt(b, 2)))
    .join('')
}

export const unRepartitionBits = (str: string, bits: number): Uint8Array => {
  const u8s = (
    [...str]
      .map((v) => toCodePoint(v))
      .map((b) => b.toString(2).padStart(bits, '0'))
      .join('')
      .match(/.{8}/g) || []
  ).map((b) => parseInt(b, 2))

  return new Uint8Array(Array.from(u8s))
}

export const shiftCodePoint = (str: string, shift: number): string =>
  [...str].map((v) => fromCodePoint(toCodePoint(v) + shift)).join('')

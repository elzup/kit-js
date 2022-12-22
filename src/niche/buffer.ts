const encodeCodePointShift = (n: number, shift = 0) =>
  String.fromCodePoint(shift + n)
const decodeCodePointShift = (s: string, shift = 0) =>
  (s.codePointAt(0) ?? 0) - shift

export const repartitionBits = (buf: Uint8Array, shift = 0): string => {
  const bits = Array.from(buf)
    .map((b) => b.toString(2).padStart(8, '0'))
    .join('')
  const b6s = bits.match(/.{6}/g) || []

  return Array.from(b6s)
    .map((b) => b.padEnd(6, '0'))
    .map((b) => encodeCodePointShift(parseInt(b, 2)), shift)
    .join('')
}

export const unRepartitionBits = (str: string): Uint8Array => {
  const u8s = (
    [...str]
      .map(decodeCodePointShift)
      .map((b) => b.toString(2).padStart(6, '0'))
      .join('')
      .match(/.{8}/g) || []
  ).map((b) => parseInt(b, 2))

  return new Uint8Array(Array.from(u8s))
}

'⡀'.codePointAt(0) // 8bit 1~256

new TextDecoder().decode(
  Uint8Array.from([0b11101111, 0b10111111, 0b10111111, 0b10111111])
)

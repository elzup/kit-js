export const hexCharToBin = (c: string) =>
  Number(`0x${c}`).toString(2).padStart(4, '0')
export const hex2bin = (s: string) => s.split('').map(hexCharToBin).join('')

export const binstr = (buf: Buffer) => hex2bin(buf.toString('hex'))

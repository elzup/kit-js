import crypto from 'crypto'

export const hash = (s: string, algorithm: string, enc: BufferEncoding) =>
  crypto.createHash(algorithm).update(String(s)).digest().toString(enc)
export const makeHash =
  (algorithm: string, enc: BufferEncoding) => (s: string) =>
    hash(s, algorithm, enc)

export const sha512Hex = makeHash('sha512', 'hex')

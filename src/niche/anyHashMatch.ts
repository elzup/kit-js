import { chunkStr } from '../chunkStr'
import { sha512Hex } from '../hash'

const hashMatch = (
  hash: string,
  hashFunc: (s: string) => string,
  plain: string
): boolean => hashFunc(plain) === hash

export const anyHashMatch = (
  plain: string,
  hash: string,
  len: number,
  salt = '',
  hashFunc: (s: string) => string = sha512Hex
): boolean => {
  if (len === 0) throw new Error('len must be greater than 0')

  const match = hashMatch.bind(null, hash, (s) => hashFunc(salt + s))

  return chunkStr(plain, len).some(match)
}

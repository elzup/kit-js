import { createHash } from 'crypto'

export const hashDigest = (s: string, algorithm: string) =>
  createHash(algorithm).update(String(s)).digest()

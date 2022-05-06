import crypto from 'crypto'

const MAX = 2 ** 32
const ALGORITHM = 'sha256'

export const seedRandBuf = (seed: string) =>
  crypto.createHash(ALGORITHM).update(seed).digest()

export const seedRandAdnvance = (seed: string) => {
  const buf = seedRandBuf(seed)

  return {
    seed,
    num: buf.readUInt32LE() / (MAX + 1), // 0 <= num < 1
    buf,
  }
}

export const seedRand = (seed: string) => seedRandAdnvance(seed).num

export const randRange = (seed: string, min: number, max?: number) => {
  const [low, high] = max === undefined ? [0, min] : [min, max]
  const d = high - low

  return low + Math.floor(seedRand(seed) * d)
}

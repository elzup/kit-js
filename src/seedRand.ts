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

export const randRange = (seed: string, min: number, max?: number) =>
  randRangeHit(seedRand(seed), min, max)

export const randRangeHit = (v: number, min: number, max?: number) => {
  const [low, high] = max === undefined ? [0, min] : [min, max]
  const d = high - low

  return low + Math.floor(v * d)
}

export const shuffle = <T>(seed: string, arr: T[]): T[] => {
  const a = arr.map((v, i) => ({ v, r: seedRand(seed + `${i}`) }))

  a.sort((a, b) => a.r - b.r)
  return a.map(({ v }) => v)
}

export const choise = <T>(seed: string, arr: T[]): T | undefined =>
  sample(seed, arr, 1)[0]

export const sample = <T>(seed: string, arr: T[], n = 1): T[] =>
  shuffle(seed, arr).slice(0, n)

export function* randGen(seed: string): Generator<number, void, number> {
  for (let i = 0; ; i++) {
    yield seedRand(seed + `${i}`)
  }
}

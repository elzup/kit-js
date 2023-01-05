import { createHash } from 'crypto'

const MAX = 2 ** 32
const ALGORITHM = 'sha256'

type Seed = number | string
export const randSeedBuf = (seed: Seed) =>
  createHash(ALGORITHM).update(String(seed)).digest()

export const randSeedAdvance = (seed: Seed) => {
  const buf = randSeedBuf(seed)

  return {
    seed,
    num: buf.readUInt32LE() / (MAX + 1), // 0 <= num < 1
    buf,
  }
}

export const randSeed = (seed: Seed) => randSeedAdvance(seed).num

const randRangeHit = (v: number, min: number, max?: number) => {
  const [low, high] = max === undefined ? [0, min] : [min, max]
  const d = high - low

  return low + Math.floor(v * d)
}

export const randRange = (seed: Seed, min: number, max?: number) =>
  randRangeHit(randSeed(seed), min, max)

export const shuffle = <T>(seed: Seed, arr: T[]): T[] => {
  const a = arr.map((v, i) => ({ v, r: randSeed(`${seed}${i}`) }))

  a.sort((a, b) => a.r - b.r)
  return a.map(({ v }) => v)
}

export const choise = <T>(seed: string, arr: T[]): T | undefined =>
  sample(seed, arr, 1)[0]

export function* randGen(seed: string): Generator<number, number, number> {
  for (let i = 0; ; i++) {
    yield randSeed(seed + `${i}`)
  }
}

export function makeRand(seed = String(Date.now())) {
  const rand = randGen(seed)

  return { fn: () => rand.next().value, seed }
}

export const sample = <T>(seed: string, arr: T[], n = 1): T[] =>
  shuffle(seed, arr).slice(0, n)

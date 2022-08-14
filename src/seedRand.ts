import crypto from 'crypto'

const MAX = 2 ** 32
const ALGORITHM = 'sha256'

type Seed = number | string
export const seedRandBuf = (seed: Seed) =>
  crypto.createHash(ALGORITHM).update(String(seed)).digest()

export const seedRandAdvance = (seed: Seed) => {
  const buf = seedRandBuf(seed)

  return {
    seed,
    num: buf.readUInt32LE() / (MAX + 1), // 0 <= num < 1
    buf,
  }
}

export const seedRand = (seed: Seed) => seedRandAdvance(seed).num

const randRangeHit = (v: number, min: number, max?: number) => {
  const [low, high] = max === undefined ? [0, min] : [min, max]
  const d = high - low

  return low + Math.floor(v * d)
}

export const randRange = (seed: Seed, min: number, max?: number) =>
  randRangeHit(seedRand(seed), min, max)

export const shuffle = <T>(seed: Seed, arr: T[]): T[] => {
  const a = arr.map((v, i) => ({ v, r: seedRand(`${seed}${i}`) }))

  a.sort((a, b) => a.r - b.r)
  return a.map(({ v }) => v)
}

export const choise = <T>(seed: string, arr: T[]): T | undefined =>
  sample(seed, arr, 1)[0]

export function* randGen(seed: string): Generator<number, number, number> {
  for (let i = 0; ; i++) {
    yield seedRand(seed + `${i}`)
  }
}

export function makeRand(seed = String(Date.now())) {
  const rand = randGen(seed)

  return { fn: () => rand.next().value, seed }
}

export const sample = <T>(seed: string, arr: T[], n = 1): T[] =>
  shuffle(seed, arr).slice(0, n)

export function dsample(a: number[], n: number, rand = Math.random): number[] {
  const b: number[] = []

  a.forEach((v, i) => {
    const all = a.length - i
    const least = n - b.length

    if (rand() < least / all) b.push(v)
  })
  return b
}

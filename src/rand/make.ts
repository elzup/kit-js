import { hashDigest } from '../node/crypto'

const MAX = 2 ** 32
const ALGORITHM = 'sha256'

type Seed = number | string
export const randSeedBuf = (seed: Seed) => hashDigest(String(seed), ALGORITHM)

export const randSeedAdv = (seed: Seed) => {
  const buf = randSeedBuf(seed)
  const num = buf.readUInt32LE() / (MAX + 1) // 0 <= num < 1

  return { seed, num, buf }
}

export const randSeed = (seed: Seed) => randSeedAdv(seed).num

export function* randGen(seed: string): Generator<number, number, number> {
  for (let i = 0; ; i++) {
    yield randSeed(seed + `${i}`)
  }
}

export function makeRand(seed = String(Date.now())) {
  const rand = randGen(seed)

  return { fn: () => rand.next().value, seed }
}

import { makeRand } from './make'
import { choice } from './choice'
import { shuffle } from './shuffle'
import { sample } from './sample'
import { randRange } from './range'

export const shuffleSeed = <T>(a: T[], seed: string) =>
  shuffle(a, makeRand(seed).fn)

export const choiceSeed = <T>(a: T[], seed: string) =>
  choice(a, makeRand(seed).fn)

// Deprecated: use choiceSeed instead
export const chioceSeed = choiceSeed

export const sampleSeed = <T>(a: T[], n: number, seed: string) =>
  sample(a, n, makeRand(seed).fn)

export const randRangeSeed = (min: number, max: number, seed: string) =>
  randRange(min, max, makeRand(seed).fn)

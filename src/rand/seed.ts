import { makeRand } from '../seedRand'
import { choise } from './choise'
import { shuffle } from './shuffle'
import { sample } from './sample'
import { randRange } from './randRange'

export const shuffleSeed = <T>(a: T[], seed: string) =>
  shuffle(a, makeRand(seed).fn)

export const choiseSeed = <T>(a: T[], seed: string) =>
  choise(a, makeRand(seed).fn)

export const sampleSeed = <T>(a: T[], n: number, seed: string) =>
  sample(a, n, makeRand(seed).fn)

export const randRangeSeed = (min: number, max: number, seed: string) =>
  randRange(min, max, makeRand(seed).fn)

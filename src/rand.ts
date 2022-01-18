export const randRange = (seed: number, min: number, max: number) =>
  (Math.abs(rand(seed)) % (max - min + 1)) + min

type RandState = { x: number; y: number; z: number; w: number }
const randNext = ({ x, y, z, w }: RandState): RandState => {
  const t = x ^ (x << 11)
  const nw = w ^ (w >>> 19) ^ (t ^ (t >>> 8))

  return { x: y, y: z, z: w, w: nw }
}

const initState = { x: 123456789, y: 362436069, z: 521288629 }

export const rand = (seed: number) => randNext({ ...initState, w: seed }).w
export function randGen(seed = 88675123) {
  let state = { ...initState, w: seed }

  return {
    next: () => {
      state = randNext(state)
      return state.w
    },
  }
}

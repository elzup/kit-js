export const makeToggle = <T>(arr: readonly T[]): ((v: T) => T) => {
  return (v) => {
    const cur = arr.indexOf(v)

    return arr[(cur + 1) % arr.length]
  }
}

export const makeCycle = makeToggle
export const toggle = makeToggle([true, false])

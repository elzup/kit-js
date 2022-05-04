export const makeToggle = <T extends any = boolean>(
  arr: T[] = [true, false] as any[]
): ((v: T) => T) => {
  return (v) => {
    const cur = arr.indexOf(v)

    return arr[cur + 1]
  }
}

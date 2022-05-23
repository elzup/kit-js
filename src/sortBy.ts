type ScoreFunc<T> = (v: T) => number

export const sortBy = <T>(a: T[], f: ScoreFunc<T>) => {
  a.sort((a, b) => f(a) - f(b))
}

export const sortByHoc =
  <T>(f: ScoreFunc<T>) =>
  (a: T, b: T) =>
    f(a) - f(b)

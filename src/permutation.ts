// referenced by https://qiita.com/higuma/items/5af4e62bdf4df42ce673 thanks

export const permutationBase = <T>(
  post: T[],
  n: number = post.length,
  pre: T[] = [],
  perm: T[][] = []
) => {
  if (n === 0) {
    perm.push(pre)
    return
  }
  for (let i = 0, len = post.length; i < len; ++i) {
    const rest = post.slice(0)

    permutationBase(rest, n - 1, pre.concat(rest.splice(i, 1)), perm)
  }
  return perm
}

export const permutation = <T>(
  post: T[],
  n: number = post.length,
  pre: T[] = []
) => {
  const perm: T[][] = []

  permutationBase(post, n, pre, perm)
  return perm
}

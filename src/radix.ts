export const decToRadix = (n: number, base: number): number[] => {
  if (n < 0) throw new Error('n must be >= 0')
  if (base <= 0) throw new Error('base must be > 0')

  const digits: number[] = []
  let nn: number = n

  while (nn > 0) {
    const d = nn % base

    digits.unshift(d)

    nn = Math.floor(nn / base)
  }
  return digits
}

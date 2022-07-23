export const decToRadix = (n: number, base: number): number[] => {
  if (base < 0) throw new Error('base must be positive')

  const digits: number[] = []
  let nn: number = n

  while (nn > 0) {
    const d = nn % base

    digits.push(d)

    nn = Math.floor(nn / base)
  }
  return digits
}

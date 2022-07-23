import { nominal, Nominal } from 'nominal-types'

export type Decimal = Nominal<'Decimal', number>
export type Digit = Nominal<'Digit', number>

export const decToRadix = (n: Decimal, base: number): Digit[] => {
  if (base < 0) throw new Error('base must be positive')

  const digits: Digit[] = []
  let nn: Decimal = n

  while (nn > 0) {
    const d = nominal.make<Digit>(nn % base)

    digits.push(d)

    nn = nominal.make<Decimal>(Math.floor(nn / base))
  }
  return digits
}

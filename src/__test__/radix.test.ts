import { nominal } from 'nominal-types'
import { decToRadix } from '../index'
import { Decimal } from '../radix'

test('decToRadix', () => {
  expect(decToRadix(nominal.make<Decimal>(100), 2)).toMatchInlineSnapshot()
})

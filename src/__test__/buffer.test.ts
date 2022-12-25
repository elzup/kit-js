import { repartitionBits, unRepartitionBits } from '../index'

describe('repartitionBits', () => {
  it('basic', () => {
    expect(
      repartitionBits(
        new Uint8Array([0b11111111, 0b00001111, 0b00110011, 0b01010101]),
        6
      )
    ).toMatchInlineSnapshot(`"?0<3"`)
  })
})

describe('unRRepartitionBits', () => {
  it('basic', () => {
    expect(
      Buffer.from(unRepartitionBits('abcdefg', 6)).toString('hex')
    ).toMatchInlineSnapshot(`"c38b1e4cb9b3"`)
  })
})

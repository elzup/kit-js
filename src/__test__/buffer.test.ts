import { repartitionBits, unRepartitionBits } from '../index'

describe('repartitionBits', () => {
  it('basic', () => {
    expect(
      repartitionBits(
        new Uint8Array([0b11111111, 0b00001111, 0b00110011, 0b01010101]),
        'あ'.codePointAt(0)
      )
    ).toMatchInlineSnapshot(`"?0<3"`)
  })
})

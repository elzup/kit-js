import { repartitionBits, unRepartitionBits, shiftCodePoint } from '../index'

describe('repartitionBits', () => {
  it('basic', () => {
    expect(
      repartitionBits(
        new Uint8Array([0b11111111, 0b00001111, 0b00110011, 0b01010101]),
        6
      )
    ).toMatchInlineSnapshot(`"?0<3"`)
  })
  it('empty', () => {
    expect(repartitionBits(new Uint8Array([]), 6)).toMatchInlineSnapshot(`""`)
  })
})

describe('unRepartitionBits', () => {
  it('basic', () => {
    expect(
      Buffer.from(unRepartitionBits('abcdefg', 6)).toString('hex')
    ).toMatchInlineSnapshot(`"c38b1e4cb9b3"`)
  })

  it('empty', () => {
    expect(
      Buffer.from(unRepartitionBits('', 6)).toString('hex')
    ).toMatchInlineSnapshot(`""`)
  })
})

describe('shiftCodePoint', () => {
  it('basic', () => {
    expect(shiftCodePoint('abcdefg', 3)).toMatchInlineSnapshot(`"defghij"`)
    expect(shiftCodePoint('あいうえお', 10)).toMatchInlineSnapshot(
      `"がぎぐげご"`
    )
    expect(shiftCodePoint('たちつてと', -10)).toMatchInlineSnapshot(
      `"さしずぜぞ"`
    )
  })
})

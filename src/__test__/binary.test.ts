import { binstr, hex2bin, hexCharToBin } from '../index'

test('binstr', () => {
  const buf = Buffer.from(new Float32Array([1.23]).buffer)
  const bs = binstr(buf)

  expect(bs).toMatchInlineSnapshot(`"10100100011100001001110100111111"`)
  expect(binstr(Buffer.from('lock'))).toMatchInlineSnapshot(
    `"01101100011011110110001101101011"`
  )
})

test('hex2bin', () => {
  const bs = hex2bin('0088ff')

  expect(bs).toMatchInlineSnapshot(`"000000001000100011111111"`)
})

test('hexCharToBin', () => {
  expect(hexCharToBin('1')).toBe('0001')
  expect(hexCharToBin('8')).toBe('1000')
  expect(hexCharToBin('a')).toBe('1010')
})

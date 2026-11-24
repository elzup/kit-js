import { digest, digestHex, toHex } from '../crypto/digest'
import { randSecure } from '../crypto/random'
import { hashDigest } from '../node/crypto'

const ABC_SHA256 =
  'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'

test('digestHex', async () => {
  expect(await digestHex('abc', 'sha256')).toBe(ABC_SHA256)
})

test('digest matches node sync hashDigest for all algorithms', async () => {
  const algorithms = ['sha1', 'sha256', 'sha384', 'sha512'] as const

  for (const algorithm of algorithms) {
    expect(toHex(await digest('日本語', algorithm))).toBe(
      toHex(hashDigest('日本語', algorithm))
    )
  }
})

test('digest throws when crypto.subtle is unavailable', async () => {
  vi.stubGlobal('crypto', {})
  await expect(digest('abc', 'sha256')).rejects.toThrow(/crypto.subtle/)
  vi.unstubAllGlobals()
})

test('toHex pads single digit bytes', () => {
  expect(toHex(new Uint8Array([0, 15, 255]))).toBe('000fff')
})

test('randSecure in [0, 1)', () => {
  for (let i = 0; i < 1000; i++) {
    const v = randSecure()

    expect(v).toBeGreaterThanOrEqual(0)
    expect(v).toBeLessThan(1)
  }
})

import { hash, makeHash, sha512Hex } from '../index'

test('hash', () => {
  const res = hash('abc', 'sha512', 'hex').substring(0, 20)
  const res2 = hash('abd', 'sha512', 'hex').substring(0, 20)

  expect(res).toBe('ddaf35a193617abacc41')
  expect(res2).toBe('1a9840c27a5cf22dab06')
})
test('makeHash', () => {
  const shaHexFn = makeHash('sha512', 'hex')
  const shaBaseFn = makeHash('sha512', 'base64url')

  expect(shaHexFn('abc').substring(0, 20)).toBe('ddaf35a193617abacc41')
  expect(shaHexFn('abd').substring(0, 20)).toBe('1a9840c27a5cf22dab06')

  expect(shaBaseFn('abc').substring(0, 20)).toBe('3a81oZNherrMQXNJriBB')
})

test('sha512Hex', () => {
  const res = sha512Hex('abc').substring(0, 20)

  expect(res).toBe('ddaf35a193617abacc41')
})

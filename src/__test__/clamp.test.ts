import { clamp, negaposi } from '../math/clamp'

describe('clamp', () => {
  it('under', () => {
    expect(clamp(1, 2, 3)).toBe(2)
  })

  it('in range', () => {
    expect(clamp(5, 2, 7)).toBe(5)
  })

  it('over', () => {
    expect(clamp(10, 2, 7)).toBe(7)
  })

  it('invalid arg', () => {
    expect(clamp(3, 7, 5)).toMatchInlineSnapshot(`7`)
    expect(clamp(9, 7, 5)).toMatchInlineSnapshot(`7`)
    expect(clamp(6, 7, 5)).toMatchInlineSnapshot(`7`)
  })
})

describe('negaposi', () => {
  it('negaposi', () => {
    expect(negaposi(10)).toBe(1)
    expect(negaposi(-500)).toBe(-1)
    expect(negaposi(0)).toBe(0)
    expect(negaposi(0.1)).toBe(1)
  })
})

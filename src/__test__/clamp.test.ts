import { clamp } from '../clamp'

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

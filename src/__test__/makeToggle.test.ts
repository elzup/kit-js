import { makeToggle } from '../index'

describe('makeToggle', () => {
  it('default boolean', () => {
    const toggleBool = makeToggle()

    expect(toggleBool(true)).toBe(false)
    expect(toggleBool(false)).toBe(true)
  })
})

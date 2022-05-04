import { makeToggle } from '../index'

describe('makeToggle', () => {
  it('default boolean', () => {
    const toggleBool = makeToggle()

    expect(toggleBool(true)).toBe(false)
    expect(toggleBool(false)).toBe(true)
  })

  it('premitive array', () => {
    const toggleArr = makeToggle([1, 2, 3])

    expect(toggleArr(1)).toBe(2)
    expect(toggleArr(2)).toBe(3)
  })

  it('cyclable', () => {
    const toggleArr = makeToggle([1, 2, 3])

    expect(toggleArr(3)).toBe(1)
  })

  it('enum type', () => {
    const toggleArr = makeToggle(['a', 'b', 'c'])

    expect(toggleArr('a')).toBe('b')
  })

  describe('no hit', () => {
    it('default first arg', () => {
      const toggleNum = makeToggle([1, 2, 3])

      expect(toggleNum(101)).toBe(1)
    })
  })
})

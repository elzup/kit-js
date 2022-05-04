import { makeToggle } from '../index'
import { toggle } from '../makeToggle'

describe('makeToggle', () => {
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
    const ids = ['a', 'b', 'c'] as const

    const toggleArr = makeToggle(ids)

    expect(toggleArr('a')).toBe('b')
    // expect(toggleArr('d')).toBe('b')
  })

  it('undefined', () => {
    const toggleArr = makeToggle([])

    expect(toggleArr('a')).toBe(undefined)
  })

  describe('no hit', () => {
    it('default first arg', () => {
      const toggleNum = makeToggle([1, 2, 3])

      expect(toggleNum(101)).toBe(1)
    })
  })

  it('toggle util', () => {
    expect(toggle(true)).toBe(false)
    expect(toggle(false)).toBe(true)
  })
})

import { diffwrap } from '../math/diffwrap'

describe('diffwrap', () => {
  describe('angles (0-360)', () => {
    it('normal difference within half range', () => {
      expect(diffwrap(10, 50, 0, 360)).toBe(40)
      expect(diffwrap(50, 10, 0, 360)).toBe(-40)
    })

    it('wrapping clockwise (positive)', () => {
      expect(diffwrap(350, 10, 0, 360)).toBe(20)
      expect(diffwrap(340, 20, 0, 360)).toBe(40)
    })

    it('wrapping counter-clockwise (negative)', () => {
      expect(diffwrap(10, 350, 0, 360)).toBe(-20)
      expect(diffwrap(20, 340, 0, 360)).toBe(-40)
    })

    it('exactly half range', () => {
      expect(diffwrap(0, 180, 0, 360)).toBe(180)
      expect(diffwrap(180, 0, 0, 360)).toBe(-180)
    })

    it('same position', () => {
      expect(diffwrap(0, 0, 0, 360)).toBe(0)
      expect(diffwrap(180, 180, 0, 360)).toBe(0)
    })
  })

  describe('clock hours (0-12)', () => {
    it('normal difference', () => {
      expect(diffwrap(3, 6, 0, 12)).toBe(3)
      expect(diffwrap(6, 3, 0, 12)).toBe(-3)
    })

    it('wrapping around midnight', () => {
      expect(diffwrap(11, 1, 0, 12)).toBe(2)
      expect(diffwrap(1, 11, 0, 12)).toBe(-2)
    })

    it('exactly half (opposite positions)', () => {
      expect(diffwrap(0, 6, 0, 12)).toBe(6)
      expect(diffwrap(6, 0, 0, 12)).toBe(-6)
    })
  })

  describe('color hue (0-360)', () => {
    it('red to yellow', () => {
      expect(diffwrap(0, 60, 0, 360)).toBe(60)
    })

    it('red to magenta (wrapping)', () => {
      expect(diffwrap(0, 300, 0, 360)).toBe(-60)
    })
  })

  describe('custom range', () => {
    it('range [100, 200)', () => {
      expect(diffwrap(190, 110, 100, 200)).toBe(20)
      expect(diffwrap(110, 190, 100, 200)).toBe(-20)
    })

    it('range [-180, 180)', () => {
      expect(diffwrap(170, -170, -180, 180)).toBe(20)
      expect(diffwrap(-170, 170, -180, 180)).toBe(-20)
    })
  })
})

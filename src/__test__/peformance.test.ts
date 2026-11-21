import { performance } from 'perf_hooks'
import { vi } from 'vitest'
import { performanceTimeUtil } from '../node/performance'

vi.mock('perf_hooks', () => ({
  performance: { now: () => 0 },
}))

describe('performanceTimeUtil', () => {
  it('default callback', () => {
    const perfNow = vi.spyOn(performance, 'now').mockImplementation(() => 0)
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => 0)

    perfNow.mockReturnValueOnce(1_000_000)

    const timer = performanceTimeUtil()

    perfNow.mockReturnValueOnce(1_000_000 + 1234)

    timer.mark('step1')

    perfNow.mockReturnValueOnce(1_000_000 + 1234 + 1.567)

    timer.mark('step2')

    expect(consoleSpy.mock.calls.map(([v]) => v).join('\n'))
      .toMatchInlineSnapshot(`
      "step1:1234ms
      step2:1ms"
    `)
  })

  it('custom callback', () => {
    const mockFn = vi.fn()
    const perfNow = vi.spyOn(performance, 'now').mockImplementation(() => 0)

    perfNow.mockReturnValueOnce(0)

    const timer = performanceTimeUtil(
      ({ ms }, n1: number, n2: number, names: string[]) =>
        mockFn({ ms, n1, n2, names })
    )

    perfNow.mockReturnValueOnce(1111)

    timer.mark(1, 10, ['a'])

    perfNow.mockReturnValueOnce(1111 + 2222.33)
    timer.mark(2, 20, ['b', 'c'])

    expect(mockFn.mock.calls[0][0]).toStrictEqual({
      ms: 1111,
      n1: 1,
      n2: 10,
      names: ['a'],
    })
    expect(mockFn.mock.calls[1][0]).toStrictEqual({
      ms: 2222.33,
      n1: 2,
      n2: 20,
      names: ['b', 'c'],
    })
  })
})

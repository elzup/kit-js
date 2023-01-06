import { performanceTimeUtil } from '../index'

describe('performanceTimeUtil', () => {
  it('default callback', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

    jest.useFakeTimers({ now: 1_000_000 })

    // const timer = performanceTimeUtil(({ ms }, name) =>
    //   console.log(`${name} ${ms}`)
    // )

    const timer = performanceTimeUtil()

    jest.advanceTimersByTime(1234)
    timer.mark('step1')

    jest.advanceTimersByTime(1.567)

    timer.mark('step2')

    // expect(consoleSpy.mock.calls).toStrictEqual([[`step1:0ms`], [`step2:0ms`]])
    expect(consoleSpy.mock.calls.map(([v]) => v).join('\n'))
      .toMatchInlineSnapshot(`
      "step1:1234ms
      step2:1ms"
    `)
  })

  it('custom callback', () => {
    const mockFn = jest.fn()

    jest.useFakeTimers({ now: 0 })

    const timer = performanceTimeUtil(
      ({ ms }, n1: number, n2: number, names: string[]) =>
        mockFn({ ms, n1, n2, names })
    )

    jest.advanceTimersByTime(1111)

    timer.mark(1, 10, ['a'])

    jest.advanceTimersByTime(2222.33)
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

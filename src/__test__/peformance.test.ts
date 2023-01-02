import { performanceTimeUtil } from '../performance'

describe('performanceTimeUtil', () => {
  it('default callback', () => {
    const consoleSpy = jest.spyOn(console, 'log')

    jest.useFakeTimers({ now: 1_000_000 })

    // const timer = performanceTimeUtil(({ ms }, name) =>
    //   console.log(`${name} ${ms}`)
    // )

    const timer = performanceTimeUtil()

    jest.useFakeTimers({ now: 1_001_234 })
    timer.mark('step1')

    jest.useFakeTimers({ now: 1_001_234.567 })
    timer.mark('step2')

    // expect(consoleSpy.mock.calls).toStrictEqual([[`step1:0ms`], [`step2:0ms`]])
    expect(consoleSpy.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "step1:0ms",
        ],
        Array [
          "step2:0ms",
        ],
      ]
    `)
  })

  it('custom callback', () => {
    const mock = jest.fn()

    jest.useFakeTimers({ now: 0 })

    const timer = performanceTimeUtil(
      ({ ms }, n1: number, n2: number, names: string[]) =>
        mock({ ms, n1, n2, names })
    )

    jest.useFakeTimers({ now: 1111 })
    timer.mark(1, 10, ['a'])

    jest.useFakeTimers({ now: 2222.33 })
    timer.mark(2, 20, ['b', 'c'])

    expect(mock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "ms": 0,
            "n1": 1,
            "n2": 10,
            "names": Array [
              "a",
            ],
          },
        ],
        Array [
          Object {
            "ms": 0,
            "n1": 2,
            "n2": 20,
            "names": Array [
              "b",
              "c",
            ],
          },
        ],
      ]
    `)
  })
})

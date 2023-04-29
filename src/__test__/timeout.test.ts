import { sleep, timeout } from '..'

describe('timeout', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    const spy = jest.spyOn(global, 'setTimeout')

    spy.mockClear()
  })

  it('no timeout', async () => {
    async function heavyWork() {
      await sleep(500)
      return 'end'
    }

    const res = timeout(heavyWork(), 1_000).catch((e) => {
      console.log('invalid timeout', e)
    })

    jest.advanceTimersByTime(500)
    await Promise.resolve()

    expect(await res).toBe('end')
  })

  it('throw timeout', async () => {
    async function heavyWork() {
      await sleep(5_000)
      return 'end'
    }

    const res = timeout(heavyWork(), 1_000).catch((e) => e.message)

    jest.advanceTimersByTime(2_000)
    await Promise.resolve()

    expect(await res).toMatchInlineSnapshot(`"Timeout"`)
  })
})

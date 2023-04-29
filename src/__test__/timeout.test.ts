import { sleep, timeout, timeoutCover } from '..'

async function heavyWork(msec: number) {
  await sleep(msec)
  return 'end'
}

describe('timeout', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    const spy = jest.spyOn(global, 'setTimeout')

    spy.mockClear()
  })

  it('no timeout', async () => {
    const res = timeout(heavyWork(50), 100).catch((e) => {
      console.log('invalid timeout', e)
    })

    jest.advanceTimersByTime(50)
    await Promise.resolve()

    expect(await res).toBe('end')
  })

  it('throw timeout', async () => {
    const res = timeout(heavyWork(200), 100).catch((e) => e.message)

    jest.advanceTimersByTime(100)
    await Promise.resolve()

    expect(await res).toMatchInlineSnapshot(`"Timeout"`)
  })

  it('timeoutCover', async () => {
    const safeTask = timeoutCover(heavyWork(100), 200, false)
    const overTask = timeoutCover(heavyWork(200), 100, false)

    jest.advanceTimersByTime(100)
    await Promise.resolve()

    expect(await safeTask).toMatchInlineSnapshot(`"end"`)
    expect(await overTask).toMatchInlineSnapshot(`false`)
  })
})

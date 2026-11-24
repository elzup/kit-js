import { vi } from 'vitest'
import { sleep } from '../time/sleep'
import { timeout, timeoutCover } from '../time/timeout'

async function heavyWork(msec: number) {
  await sleep(msec)
  return 'end'
}

describe('timeout', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    const spy = vi.spyOn(global, 'setTimeout')

    spy.mockClear()
  })

  it('no timeout', async () => {
    const res = timeout(heavyWork(50), 100).catch((e) => {
      console.log('invalid timeout', e)
    })

    vi.advanceTimersByTime(50)
    await Promise.resolve()

    expect(await res).toBe('end')
  })

  it('throw timeout', async () => {
    const res = timeout(heavyWork(200), 100).catch((e) => e.message)

    vi.advanceTimersByTime(100)
    await Promise.resolve()

    expect(await res).toMatchInlineSnapshot(`"Timeout"`)
  })

  it('timeoutCover', async () => {
    const safeTask = timeoutCover(heavyWork(100), 200, false)
    const overTask = timeoutCover(heavyWork(200), 100, false)

    vi.advanceTimersByTime(100)
    await Promise.resolve()

    expect(await safeTask).toMatchInlineSnapshot(`"end"`)
    expect(await overTask).toMatchInlineSnapshot(`false`)
  })

  it('timeoutCover throw task error', async () => {
    const res = timeoutCover(
      (async () => {
        throw new Error('Other')
        return 'end'
      })(),
      200,
      false
    ).catch((e) => e.message)

    vi.advanceTimersByTime(100)
    await Promise.resolve()

    expect(await res).toMatchInlineSnapshot(`"Other"`)
  })
})

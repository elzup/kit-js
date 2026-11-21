import { vi } from 'vitest'
import { sleep } from '../time/sleep'

vi.useFakeTimers()

const mockCallback = vi.fn((s) => s)

describe('sleep', () => {
  beforeEach(() => {
    const spy = vi.spyOn(global, 'setTimeout')

    spy.mockClear()
    mockCallback.mockClear()
  })

  it('wait works', async () => {
    async function mock() {
      await sleep(1000)
      mockCallback('end')
    }
    mock()

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)

    vi.advanceTimersByTime(200)
    await Promise.resolve()

    expect(mockCallback).not.toHaveBeenCalled()

    vi.runAllTimers()
    await Promise.resolve()

    expect(mockCallback).toHaveBeenCalledWith('end')
  })
})

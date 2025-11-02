import { sleep } from '../time/sleep'

jest.useFakeTimers()

const mockCallback = jest.fn((s) => s)

describe('sleep', () => {
  beforeEach(() => {
    const spy = jest.spyOn(global, 'setTimeout')

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

    jest.advanceTimersByTime(200)
    await Promise.resolve()

    expect(mockCallback).not.toHaveBeenCalled()

    jest.runAllTimers()
    await Promise.resolve()

    expect(mockCallback).toHaveBeenCalledWith('end')
  })
})

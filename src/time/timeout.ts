import { sleep } from './sleep'

const makeTimeout = async (msec: number) => {
  await sleep(msec)
  throw new Error('Timeout')
}

export const timeout = <T>(task: Promise<T>, msec: number) => {
  return Promise.race([task, makeTimeout(msec)])
}

export const timeoutCover = <T, U>(task: Promise<T>, msec: number, alt: U) => {
  return timeout(task, msec).catch((e) => {
    if (e.message === 'Timeout') return alt
    throw e
  })
}

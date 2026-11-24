// tsc never deletes outputs of removed sources; stale lib/ files would be published.
import { rmSync } from 'node:fs'

rmSync('lib', { recursive: true, force: true })

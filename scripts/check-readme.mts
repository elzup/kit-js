// Every `import { ... } from '@elzup/kit/...'` in readme.md must resolve through
// package exports and provide the named bindings, so docs can't drift from lib/.
// Lines under "Migration" intentionally show old 4.5.0 paths and are skipped.
import { readFileSync } from 'node:fs'

const README = readFileSync('readme.md', 'utf8')
const usage = README.slice(0, README.indexOf('## Migration'))
const IMPORT_RE = /import\s*\{([^}]+)\}\s*from\s*'(@elzup\/kit\/[^']+)'/g

const failures: string[] = []
let count = 0

for (const [, names, spec] of usage.matchAll(IMPORT_RE)) {
  count++
  try {
    const mod = await import(spec)
    const missing = names
      .split(',')
      .map((n) => n.trim())
      .filter((n) => n !== '' && !(n in mod))

    if (missing.length > 0) failures.push(`${spec}: missing ${missing.join(', ')}`)
  } catch (e) {
    failures.push(`${spec}: ${(e as Error).message}`)
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`ok: ${count} readme imports resolve`)

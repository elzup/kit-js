// Load every built module through both the ESM and CJS entry points,
// so a broken specifier (e.g. missing .js extension) fails before publish.
import { readdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, relative } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(import.meta.url)

const listJs = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name)
    if (e.isDirectory()) return e.name === 'esm' ? [] : listJs(p)
    return e.name.endsWith('.js') ? [p] : []
  })

const cjsFiles = listJs('lib')
const failures: string[] = []

for (const file of cjsFiles) {
  const name = relative('lib', file)
  const esmFile = join('lib/esm', name)

  try {
    require(join(process.cwd(), file))
  } catch (e) {
    failures.push(`cjs ${name}: ${(e as Error).message}`)
  }
  try {
    await import(pathToFileURL(esmFile).href)
  } catch (e) {
    failures.push(`esm ${name}: ${(e as Error).message}`)
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`ok: ${cjsFiles.length} modules load as CJS and ESM`)

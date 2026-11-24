// lib/esm/*.js use ESM syntax but the root package.json has no "type": "module"
// (the CJS build in lib/ depends on that). A nested package.json scopes ESM to lib/esm only.
import { writeFileSync } from 'node:fs'

writeFileSync('lib/esm/package.json', JSON.stringify({ type: 'module' }) + '\n')

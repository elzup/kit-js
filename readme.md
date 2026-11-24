# @elzup/kit

![Node CI](https://github.com/elzup/kit-js/workflows/Node%20CI/badge.svg)
[![tested with vitest](https://img.shields.io/badge/tested_with-vitest-6E9F18.svg)](https://vitest.dev)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

| Statements                                                                                | Branches                                                                              | Functions                                                                                | Lines                                                                            |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-99.9%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-99.5%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-99.76%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-99.87%25-brightgreen.svg?style=flat) |

> elzup&#39;s utils

## Install

```
$ npm install @elzup/kit
```

## Usage

### arr/windowed

```js
import { windowed } from '@elzup/kit/arr/windowed'
windowed([1, 2, 3, 4], 2)
// [[1, 2], [2, 3], [3, 4]]

// with size
windowed([1, 2, 3, 4, 5, 6], 3)
// [ [1, 2, 3],
//   [2, 3, 4],
//   [3, 4, 5],
//   [4, 5, 6] ]
```

### algo/outscape

```js
import { outscape } from '@elzup/kit/algo/outscape'

const min = 60
const hour = 60 * min

outscape([min, 5 * min, 10 * min, 30 * min, hour], 8 * hour, 500, 10)
// { visibles: [false, false, true, true, true] }
/*             [ 1.04166, 5.20833, 10.4166, 31.25, 62.5 ] canvas gaps


ruler sizes, coordinate width, canvas size, minimum gap canvas size */
```

### algo/rowspan

```js
import { rowspan } from '@elzup/kit/algo/rowspan'

const rows = [
  ['a', 1, true],
  ['a', 2, false],
  ['a', 2, true],
  ['a', 2, true],
  ['b', 1, false],
]
rowspan(rows)
// [ [true, true, true],
//   [false, true, true],
//   [false, false, true],
//   [false, false, false],
//   [true, true, true], ]
```

<table>
  <tbody>
    <tr> <td rowspan=4>a</td> <td>1</td>           <td>true</td>           </tr>
    <tr>                      <td rowspan=3>2</td> <td>false</td>          </tr>
    <tr>                                           <td rowspan=2>true</td> </tr>
    <tr>                                                                   </tr>
    <tr> <td>b</td>           <td>1</td>           <td>false</td>          </tr>
  </tbody>
</table>

### arr/chunk

```js
import { chunk } from '@elzup/kit/arr/chunk'
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
// [ [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10], ]
```

### fp/makeToggle

```js
import { makeToggle } from '@elzup/kit/fp/makeToggle'

const toggle3 = makeToggle([1, 2, 3])

expect(toggle3(1)).toBe(2)
expect(toggle3(2)).toBe(3)
expect(toggle3(3)).toBe(1)
```

### obj/clean

remove undefined
primitive clone

```js
import { clean } from '@elzup/kit/obj/clean'

clean({
  a: 1,
  b: undefined,
  c: 'c',
})
// {
//   a: 1,
//   c: "c",
// }

// !!
clean({ a: new Date(0), b: null, c: new RegExp('^a$') })
// {
//    a: "1970-01-01T00:00:00.000Z",
//    b: null,
//    c: Object {},
//  }
```

> **Warning:**
> clean, (and aliased clone) is using JSON.stringify
> can not serialize Date, RegExp, Function, undefined, Symbol, Map, Set, WeakMap, WeakSet

### obj/makeObj

```js
import { makeObj } from '@elzup/kit/obj/makeObj'
makeObj(['a', 'b'], 0)

// {
//   a: 0,
//   b: 0,
// }
```

### obj/countup

```js
import { countup } from '@elzup/kit/obj/countup'

countup(['a', 'b', 'a', 1, 0, 0, 0])
// Map {
//   "a" => 2,
//   "b" => 1,
//   1 => 1,
//   0 => 3,
// }
```

### time

```js
import { timeParts } from '@elzup/kit/time/utils'

timeParts()
// { year: 2123, month: 4, date: 5, hour: 6, minute: 7, second: 8 }

import { timePartsStr } from '@elzup/kit/time/format'

timePartsStr()
// { yyyy: "2123", mo: "04", dd: "05", hh: "06", mn: "07", ss: "08" }
```

### char/width

```js
import {
  fullWidth,
  halfWidth,
  hardNormalizeText,
  softNormalizeText,
} from '@elzup/kit/char/width'

fullWidth('AbcＡｂ')
// 'ＡｂｃＡｂ'
halfWidth('abcＡｂ')
// 'abcAb'

hardNormalizeText('Ａｂｃ「￥＄％＃＆＊＠」１２３')
// "Abc(¥$%#&*@)123"

hardNormalizeText('Ａｂc｛￥$%#&*@＞１２３') ===
  hardNormalizeText('Abｃ（¥＄％＃＆＊＠］123')
// true

softNormalizeText('Ａｂｃ「￥＄％＃＆＊＠」１２３')
// "Abc(¥$%#&*@)123"
softNormalizeText('ＡｂC｛【￥$%#&*@＞>１２３')
// "AbC{(¥$%#&*@>>123"
softNormalizeText('aBｃ（<¥＄％＃＆＊＠)］123')
// "aBc(<¥$%#&*@)]123"
```

### template/url googleSearchUrl

```js
import { googleSearchUrl } from '@elzup/kit/template/url'
googleSearchUrl('abc')
// "https://www.google.co.jp/search?q=abc"
```

### math/clamp

```js
import { clamp, negaposi } from '@elzup/kit/math/clamp'
// val, min, max

clamp(1, 20, 30) // 20
clamp(12, 0, 10) // 10

negaposi(10) // 1
negaposi(-500) // -1
negaposi(0) // 0
```

### arr/transpose

```js
import { transpose } from '@elzup/kit/arr/transpose'
transpose([
  ['a', 'b'],
  ['c', 'd'],
  ['d', 'e'],
])
// [ ['a', 'c', 'd'],
//   ['b', 'd', 'e'], ]
```

### node/performance

```js
import { performanceTimeUtil } from '@elzup/kit/node/performance'
const timer = performanceTimeUtil()
timer.mark('step1')
> step1:1234ms
timer.mark('step2')
> step2:1ms

const custom = performanceTimeUtil(({ ms }, name, ...params) =>{
  console.log(`${name}: [${Math.floor(ms)}ms]`)
  console.log(`- ${JSON.stringify(params)} ${ms}`)
})

custom.mark('step1')
> step1: [4731ms]
> - [] 4731.639425039291

custom.mark('step2', 'hello')
> step2: [9ms]
> - ["hello"] 9.945472955703735

custom.mark('step3', 1, 2, 3)
> step3: [850ms]
> - [1,2,3] 850.8986039161682
```

### Other specs (more than 50 funcs)

[./src/\_\_test\_\_](./src/__test__)

## Migration from 4.5.0 to 5.0.0

### Import paths

Import each module by `@elzup/kit/<category>/<module>`. There is no root import and no `lib/` in the path.

```js
// 4.5.0
import { chunk } from '@elzup/kit/lib/chunk'
// 5.0.0
import { chunk } from '@elzup/kit/arr/chunk'
```

| 4.5.0 (`@elzup/kit/lib/...`)                                                             | 5.0.0 (`@elzup/kit/...`)    |
| ---------------------------------------------------------------------------------------- | --------------------------- |
| `chunk`, `last`, `maxBy`, `range`, `rangeAdv`, `sortBy`, `transpose`, `uniq`, `windowed` | `arr/<name>`                |
| `comps`                                                                                  | `arr/windowed`              |
| `ascii`, `bom`, `constants`, `romanization`                                              | `char/<name>`               |
| `shiftChar`                                                                              | `char/shift`                |
| `strWidth`                                                                               | `char/width`                |
| `binary`                                                                                 | `convert/binary`            |
| `identity`, `makeToggle`, `noop`                                                         | `fp/<name>`                 |
| `clamp`, `cycleRange`, `radix`                                                           | `math/<name>`               |
| `anyHashMatch`, `getOne`, `regpick`                                                      | `niche/<name>`              |
| `crypto`, `getEnv`, `hash`, `performance`                                                | `node/<name>`               |
| `clean`, `countup`, `groupBy`, `invert`, `keyBy`, `makeMap`, `makeObj`, `upsert`         | `obj/<name>`                |
| `mapId`                                                                                  | `obj/idfy`                  |
| `seedRand`                                                                               | `rand/make`                 |
| `rand/randRange`                                                                         | `rand/range`                |
| `rand/choise`                                                                            | `rand/choice`               |
| `chunkStr`, `format`, `incstr`, `pickUrl`, `stringify`, `trim`                           | `str/<name>`                |
| `strinc`                                                                                 | `str/incstr`                |
| `slack`, `url`                                                                           | `template/<name>`           |
| `formatTime`, `times`                                                                    | `time/format`, `time/utils` |
| `permutation`, `queueMerge`                                                              | `algo/<name>`               |

### Renamed exports

| 4.5.0                                  | 5.0.0                                               |
| -------------------------------------- | --------------------------------------------------- |
| `choise` / `choiseSeed`                | `choice` / `choiceSeed`                             |
| `seedRand` / `seedRandAdvance`         | `randSeed` / `randSeedAdv` (`rand/make`)            |
| `shiftChar`                            | `shift` (`char/shift`)                              |
| `dulationFormat`                       | `durationFormat`                                    |
| `times`                                | `timeParts` (`time/utils`); key `day` is now `date` |
| `formatYmd`, `formatHms`, `formatTime` | moved to `time/format`                              |
| `timesNow`, `shiftDate`, `jpDate`      | moved to `time/utils`                               |

### Removed

- Root import (`@elzup/kit`, `lib/index`)
- `algo/defrag`: use [`rangeize`](https://github.com/elzup/rangeize)
- `algo/scheduling`: use [`interval-scheduling`](https://github.com/elzup/interval-scheduling)
- `template/terms`, `comps2`
- `isDev` (`char/constants`): check `process.env.NODE_ENV` in your app
- `seedRandBuf` / `randSeedBuf`, and `buf` in `randSeedAdv`

### Behavior changes

- **`rand/make` and `rand/seed` return different values.** The seeded PRNG is now pure JS (cyrb128 + sfc32), sync and browser-compatible. The same seed does not reproduce 4.5.0 values.
- `node/crypto` `hashDigestAsync` moved to `crypto/digest` `digest` (Web Crypto only).
- Added `crypto/digest` (`digest`, `digestHex`, `toHex`) and `crypto/random` (`randSecure`, a secure `Math.random` replacement usable as `rand` for `shuffle` / `choice`).
- ESM is supported (`import` resolves to `lib/esm`).
- Layering: `rand/` = reproducible randomness (sync, universal), `crypto/` = cryptographic (async, universal), `node/` = Node.js only.

## License

MIT © [anozon](https://anozon.me)

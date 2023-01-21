# @elzup/kit

![Node CI](https://github.com/elzup/kit-js/workflows/Node%20CI/badge.svg)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

| Statements                                                                               | Branches                                                                             | Functions                                                                              | Lines                                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

> elzup&#39;s utils

## Install

```
$ npm install @elzup/kit
```

## Usage

### alog/scheduling

calc row grouping of Gantt chart

```js
import scheduling from '@elzup/kit/lib/algo/scheduling'
const items = [
  { id: 'a', start: 1, end: 10 },
  { id: 'b', start: 5, end: 15 },
  { id: 'c', start: 10, end: 20 },
  { id: 'd', start: 12, end: 20 },
  { id: 'e', start: 16, end: 17 },
]

scheduling(items)

// [['a', 'c'], ['b', 'e'], ['d']]
```

```
   |          111111111122
   |0123456789012345678901
  a| +--------<
  b|     +---------<
  c|          +---------<
  d|            +-------<
  e|                +<
↓scheduling↓
   |          111111111122
   |0123456789012345678901
a,c|+---------+---------<
b,e|     +---------<+<
  d|            +-------<
```

if need gaps (add margin to end)

```js
scheduling(items.map((v) => ({ ...v, end: v.end + 1 })))
// [['a', 'd'], ['b', 'e'], ['c']]
```

```
   |          111111111122
   |0123456789012345678901
a,d|+--------.< +-------.<
b,e|     +---------.+.<
  c|          +---------.<
```

### alog/windowed

```js
import { windowed } from '@elzup/kit/lib/algo/windowed'
windowed([1, 2, 3, 4], 2)
// [[1, 2], [2, 3], [3, 4]]

// with size
windowed([1, 2, 3, 4, 5, 6], 3)
// [ [1, 2, 3],
//   [2, 3, 4],
//   [3, 4, 5],
//   [4, 5, 6] ]
```

### alog/defrag

```js
import { defrag } from '@elzup/kit/lib/algo/defrag'

defrag([2, 3, 4, 5, 6, 10, 21, 22, 23])
// [ { start: 2, end: 6 },
//   { start: 10, end: 10 },
//   { start: 21, end: 23 } ]

// with rule
defrag([1, 2, 4, 10, 12], (a, b) => b - a <= 2) // diff <= 2 is chain
// [ { start: 1, end: 4 },
//   { start: 10, end: 12 } ]
```

### alog/outscape

```js
import { outscape } from '@elzup/kit/lib/algo/outscape'

const min = 60
const hour = 60 * min

outscape([min, 5 * min, 10 * min, 30 * min, hour], 8 * hour, 500, 10)
// { visibles: [false, false, true, true, true] }
/*             [ 1.04166, 5.20833, 10.4166, 31.25, 62.5 ] canvas gaps


ruler sizes, coordinate width, canvas size, minimum gap canvas size */
```

### alog/rowspan

```js
import { rowspan } from '@elzup/kit/lib/algo/rowspan'

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

### chunk

```js
import { chunk } from '@elzup/kit/lib/chunk'
chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
// [ [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10], ]
```

### makeToggle

```js
import { makeToggle } from '@elzup/kit/lib/makeToggle'

const toggle3 = makeToggle([1, 2, 3])

expect(toggle3(1)).toBe(2)
expect(toggle3(2)).toBe(3)
expect(toggle3(3)).toBe(1)
```

### clean

remove undefined
primitive clone

```js
import { clean } from '@elzup/kit/lib/clean'

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
import { makeObj } from '@elzup/kit/lib/obj/makeObj'
makeObj(['a', 'b'], 0)

// {
//   a: 0,
//   b: 0,
// }
```

### obj/countup

```js
import { countup } from '@elzup/kit/lib/obj/countup'

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
import { timeParts } from '@elzup/kit/lib/time/utils'

timeParts()
// { year: 2123, month: 4, date: 5, hour: 6, minute: 7, second: 8 }

import { timePartsStr } from '@elzup/kit/lib/time/format'

timePartsStr()
// { yyyy: "2123", mo: "04", dd: "05", hh: "06", mn: "07", ss: "08" }
```

### char/width

```js
import {
  fullWidth,
  halfWith,
  hardNormalizeText,
  softNormalizeText,
} from '@elzup/kit/lib/char/width'

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
import { googleSearchUrl } from '@elzup/kit/lib/template/url'
googleSearchUrl('abc')
// "https://www.google.co.jp/search?q=abc"
```

### clamp

```js
import { clamp, negaposi } from '@elzup/kit/lib/clamp'
// val, min, max

clamp(1, 20, 30) // 20
clamp(12, 0, 10) // 10

negaposi(10) // 1
negaposi(-500) // -1
negaposi(0) // 0
```

### transpose

```js
import { transpose } from '@elzup/kit/lib/transpose'
transpose([
  ['a', 'b'],
  ['c', 'd'],
  ['d', 'e'],
])
// [ ['a', 'c', 'd'],
//   ['b', 'd', 'e'], ]
```

### performance

```js
import { performanceTimeUtil } = from '@elzup/kit/lib/performance'
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

## v3 -> v4 migration

```
rename src/{ => algo}/defrag.ts
rename src/{ => algo}/permutation.ts
rename src/{ => algo}/queueMerge.ts
rename src/{ => algo}/scheduling.ts
rename src/{ => char}/ascii.ts
rename src/{ => char}/bom.ts
rename src/{ => char}/constants.ts
rename src/{ => char}/romanization.ts
rename src/{ => niche}/anyHashMatch.ts
rename src/{ => obj}/countup.ts
rename src/{ => obj}/groupBy.ts
rename src/{ => obj}/invert.ts
rename src/{ => obj}/keyBy.ts
rename src/{ => obj}/makeMap.ts
rename src/{ => obj}/makeObj.ts
rename src/{ => obj}/upsert.ts
rename src/{ => template}/slack.ts
rename src/{ => template}/url.ts
rename src/{seedRand.ts => rand/make.ts}
rename src/rand/{randRange.ts => range.ts}

rename src/{mapId.ts => obj/idfy.ts}
rename src/{comps.ts => windowed.ts}
rename src/{src/times.ts => time/format.ts}
rename src/{formatTime.ts => time/utils.ts}
rename src/{shiftChar.ts => char/shift.ts}
rename src/{strinc.ts => incstr.ts}
```

## License

MIT © [anozon](https://anozon.me)

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

### scheduling

calc row grouping of Gantt chart

```js
import scheduling from '@elzup/kit/algo/scheduling'
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
                   111111111122
         0123456789012345678901
 a        +--------<
 b            +---------<
 c                 +---------<
 d                   +-------<
 e                       +<
 ↓
                   111111111122
         0123456789012345678901
 [a,c]   +--------+----------<
 [b,e]        +---------<+<
 [d]                 +-------<
```

if need gaps (add margin to end)

```js
scheduling(items.map((v) => ({ ...v, end: v.end + 1 })))
// [['a', 'd'], ['b', 'e'], ['c']]
```

```
                   111111111122
         0123456789012345678901
 [a,d]   +--------<. +-------<.
 [b,e]        +---------<+<.
 [c]              +----------<.
```

### windowed

```js
import { windowed } from '@elzup/kit/algo/windowed'
windowed([1, 2, 3, 4], 2)
// [[1, 2], [2, 3], [3, 4]]

// with size
windowed([1, 2, 3, 4, 5, 6], 3)
// [ [1, 2, 3],
//   [2, 3, 4],
//   [3, 4, 5],
//   [4, 5, 6] ]
```

### defrag

```js
import { defrag } from '@elzup/kit/algo/defrag'

defrag([2, 3, 4, 5, 6, 10, 21, 22, 23])
// [ { start: 2, end: 6 },
//   { start: 10, end: 10 },
//   { start: 21, end: 23 } ]

// with rule
defrag([1, 2, 4, 10, 12], (a, b) => b - a <= 2) // diff <= 2 is chain
// [ { start: 1, end: 4 },
//   { start: 10, end: 12 } ]
```

### invert

### makeCycle

### clean

### makeObj

```js
import { makeObj } from '@elzup/kit/obj/makeObj'
makeObj(['a', 'b'], 0)

// {
//   a: 0,
//   b: 0,
// }
```

### countup

### sortBy

### times

### rand

### width

fullWidth
hardNormalizeText

### googleSearchUrl

```js
const { hoge } = require('@elzup/kit')

/* tree shaking */
// const { hoge } = require('@elzup/kit/lib/hoge')

hoge()
```

## trim

## clamp

## chunk

## transpose

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

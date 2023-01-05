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

## Doc

[./src/\_\_test\_\_](./src/__test__)

## Usage

```js
const { hoge } = require('@elzup/kit')

/* tree shaking */
// const { hoge } = require('@elzup/kit/lib/hoge')

hoge()
```

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
rename src/{ => obj}/mapId.ts
rename src/{ => template}/slack.ts
rename src/{ => template}/url.ts

rename src/{comps.ts => windowed.ts}
rename src/{src/times.ts => time/format.ts}
rename src/{formatTime.ts => time/utils.ts}
rename src/{shiftChar.ts => char/shift.ts}
rename src/{strinc.ts => incstr.ts}
```

## License

MIT © [anozon](https://anozon.me)

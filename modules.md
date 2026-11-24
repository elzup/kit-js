# Module Analysis

## Usage

This package supports **partial imports only**. Import functions directly from their module paths:

```typescript
// ✅ Correct - Import from specific modules
import { range } from '@elzup/kit/arr/range'
import { sleep } from '@elzup/kit/time/sleep'
import { chunk } from '@elzup/kit/arr/chunk'

// ❌ Incorrect - No barrel export
// import { range, sleep } from '@elzup/kit'  // This will not work
```

Benefits:

- Better tree-shaking
- Smaller bundle sizes
- Explicit dependencies

## Summary

| Module                 | Return | In Dep | Node Deps  | Category | Demand |
| ---------------------- | ------ | ------ | ---------- | -------- | ------ |
| algo/binSearch.ts      | number | 0      | -          | algo     | Medium |
| algo/greedy.ts         | array  | 0      | -          | algo     | Low    |
| algo/outscape.ts       | object | 0      | -          | algo     | Low    |
| algo/permutation.ts    | array  | 0      | -          | algo     | Medium |
| algo/queueMerge.ts     | array  | 0      | -          | algo     | Medium |
| algo/rowspan.ts        | array  | 1      | -          | algo     | Low    |
| arr/chunk.ts           | array  | 1      | -          | arr      | High   |
| arr/last.ts            | T?     | 0      | -          | arr      | High   |
| arr/maxBy.ts           | T?     | 0      | -          | arr      | High   |
| arr/range.ts           | array  | 0      | -          | arr      | High   |
| arr/rangeAdv.ts        | array  | 0      | -          | arr      | Medium |
| arr/rangeLoop.ts       | array  | 0      | -          | arr      | Medium |
| arr/sortBy.ts          | void   | 0      | -          | arr      | High   |
| arr/transpose.ts       | array  | 0      | -          | arr      | Medium |
| arr/uniq.ts            | array  | 0      | -          | arr      | High   |
| arr/windowed.ts        | array  | 0      | -          | arr      | Medium |
| char/ascii.ts          | bool   | 1      | -          | char     | Medium |
| char/bom.ts            | bool   | 0      | -          | char     | Low    |
| char/constants.ts      | string | 0      | -          | char     | High   |
| char/romanization.ts   | string | 0      | -          | char     | Low    |
| crypto/digest.ts       | async  | 0      | -          | crypto   | Low    |
| crypto/random.ts       | number | 0      | -          | crypto   | Medium |
| char/shift.ts          | string | 0      | -          | char     | Medium |
| char/width.ts          | string | 1      | -          | char     | Medium |
| convert/binary.ts      | string | 0      | buffer     | convert  | Low    |
| fp/identity.ts         | T      | 0      | -          | fp       | High   |
| fp/makeToggle.ts       | object | 0      | -          | fp       | Medium |
| fp/noop.ts             | void   | 0      | -          | fp       | High   |
| math/clamp.ts          | number | 0      | -          | math     | High   |
| math/cycleRange.ts     | bool   | 0      | -          | math     | Low    |
| math/diffwrap.ts       | number | 0      | -          | math     | Low    |
| math/radix.ts          | array  | 0      | -          | math     | Low    |
| niche/anyHashMatch.ts  | bool   | 2      | crypto     | niche    | Low    |
| niche/buffer.ts        | string | 0      | buffer     | niche    | Low    |
| niche/getOne.ts        | string | 0      | -          | niche    | Medium |
| niche/regpick.ts       | object | 0      | -          | niche    | Low    |
| node/crypto.ts         | buffer | 0      | crypto     | node     | Low    |
| node/getEnv.ts         | string | 0      | process    | node     | High   |
| node/hash.ts           | string | 1      | crypto     | node     | Low    |
| node/performance.ts    | object | 0      | perf_hooks | node     | Low    |
| obj/clean.ts           | object | 0      | -          | obj      | High   |
| obj/countup.ts         | object | 0      | -          | obj      | High   |
| obj/groupBy.ts         | object | 0      | -          | obj      | High   |
| obj/idfy.ts            | array  | 0      | -          | obj      | Medium |
| obj/invert.ts          | object | 0      | -          | obj      | Medium |
| obj/keyBy.ts           | object | 0      | -          | obj      | High   |
| obj/makeMap.ts         | object | 0      | -          | obj      | Medium |
| obj/makeObj.ts         | object | 0      | -          | obj      | Medium |
| obj/upsert.ts          | void   | 0      | -          | obj      | Medium |
| rand/choice.ts         | T      | 0      | -          | rand     | High   |
| rand/make.ts           | object | 1      | -          | rand     | Medium |
| rand/prng.ts           | number | 0      | -          | rand     | Low    |
| rand/range.ts          | number | 0      | -          | rand     | High   |
| rand/sample.ts         | array  | 0      | -          | rand     | Medium |
| rand/seed.ts           | array  | 4      | -          | rand     | Medium |
| rand/shuffle.ts        | array  | 0      | -          | rand     | High   |
| str/chunkStr.ts        | array  | 1      | -          | str      | Medium |
| str/format.ts          | string | 0      | -          | str      | High   |
| str/incstr.ts          | string | 3      | -          | str      | Low    |
| str/pickUrl.ts         | array  | 0      | -          | str      | Medium |
| str/stringify.ts       | string | 0      | -          | str      | Low    |
| str/trim.ts            | string | 0      | -          | str      | Medium |
| template/slack.ts      | object | 0      | -          | template | Low    |
| template/url.ts        | string | 0      | -          | template | Low    |
| time/constants.ts      | number | 0      | -          | time     | High   |
| time/durationFormat.ts | string | 1      | -          | time     | Medium |
| time/format.ts         | string | 1      | -          | time     | High   |
| time/sleep.ts          | object | 0      | -          | time     | High   |
| time/timeout.ts        | object | 1      | -          | time     | Medium |
| time/utils.ts          | object | 1      | -          | time     | Medium |

**Legend:**

- **Return**: Main return type (array, number, string, object, bool, void, buffer, T, T|undefined)
- **Docs**: Has JSDoc documentation (Yes/No)

## Applied Category Reorganization

### New Categories Created

#### arr/ (配列操作)

9 files:

- chunk.ts, last.ts, maxBy.ts, range.ts, rangeAdv.ts, sortBy.ts, transpose.ts, uniq.ts, windowed.ts

#### str/ (文字列操作)

7 files:

- chunkStr.ts, format.ts, incstr.ts, pickUrl.ts, regpick.ts, stringify.ts, trim.ts

#### math/ (数学・数値計算)

4 files:

- clamp.ts, cycleRange.ts, diffwrap.ts, radix.ts

#### fp/ (関数型プログラミング)

2 files:

- identity.ts, noop.ts

#### convert/ (データ変換)

1 file:

- binary.ts

#### node/ (Node.js依存)

4 files:

- crypto.ts, getEnv.ts, hash.ts, performance.ts

### Existing Categories Extended

#### obj/ (オブジェクト操作)

Added from root:

- clean.ts

### Root Level Files (moved to niche/)

- getOne.ts → niche/getOne
- makeToggle.ts → fp/makeToggle

## Import Examples by Category

### arr/ (Array Operations)

```typescript
import { chunk } from '@elzup/kit/arr/chunk'
import { range } from '@elzup/kit/arr/range'
import { uniq } from '@elzup/kit/arr/uniq'
```

### str/ (String Operations)

```typescript
import { pad, pad02, round } from '@elzup/kit/str/format'
import { trimQuote } from '@elzup/kit/str/trim'
```

### time/ (Time & Date)

```typescript
import { sleep } from '@elzup/kit/time/sleep'
import { formatTime, ymd } from '@elzup/kit/time/format'
import { sec, min, hour, day } from '@elzup/kit/time/constants'
```

### obj/ (Object Operations)

```typescript
import { clean, clone } from '@elzup/kit/obj/clean'
import { groupByFunc } from '@elzup/kit/obj/groupBy'
```

### rand/ (Random Utilities)

```typescript
import { choice } from '@elzup/kit/rand/choice'
import { shuffle } from '@elzup/kit/rand/shuffle'
import { randSeed } from '@elzup/kit/rand/make'
```

### Unchanged Categories

- **algo/**: アルゴリズム関連
- **arr/**: 配列操作
- **char/**: 文字・文字列処理
- **fp/**: 関数型プログラミング
- **math/**: 数学・数値計算
- **niche/**: ニッチ用途（複雑な特殊ツール）
- **rand/**: ランダム値生成
- **str/**: 文字列操作
- **template/**: テンプレート生成
- **time/**: 時間・日付処理

## Demand Analysis

### High Demand (19 modules)

汎用性が高く、頻繁に使われる可能性のある関数:

- Array utilities: chunk, last, maxBy, range, sortBy, uniq
- Object utilities: countup, groupBy, keyBy, clean
- Character constants: char/constants
- Basic utilities: identity, noop, clamp
- String formatting: format
- Time utilities: time/constants, time/format, time/sleep
- Random utilities: rand/choice, rand/range, rand/shuffle
- Environment: getEnv

### Medium Demand (26 modules)

有用だが限定的な用途:

- Array operations: rangeAdv, transpose, windowed
- Object helpers: idfy, invert, makeMap, makeObj, upsert
- Character manipulation: char/ascii, char/shift, char/width
- Algorithm helpers: algo/binSearch, algo/permutation, algo/queueMerge
- String utilities: chunkStr, pickUrl, trim
- Time utilities: time/durationFormat, time/timeout, time/utils
- Random seed functions: rand/make, rand/sample, rand/seed
- General utilities: getOne, makeToggle

### Low Demand (23 modules)

ニッチまたは特殊な用途:

- Cryptographic: crypto, hash, niche/anyHashMatch
- Buffer operations: binary, niche/buffer
- Performance monitoring: performance
- Algorithm (niche): algo/greedy, algo/outscape, algo/rowspan
- Character (niche): char/bom, char/romanization
- String encoding: incstr, radix, regpick, stringify
- Template generators: template/slack, template/terms, template/url
- Math (niche): cycleRange, diffwrap

## Node.js Dependencies Summary

以下のモジュールは Node.js 標準パッケージに依存しており、ブラウザ環境では使用制限があります:

- **crypto**: node/crypto.ts, node/hash.ts, niche/anyHashMatch.ts (同期 hash。ブラウザでは async の crypto/digest を使う)
- **buffer**: binary.ts, niche/buffer.ts
- **perf_hooks**: performance.ts

これらのモジュールは特殊用途が多く、需要評価も Low になっています。

import { sha512Hex } from '../anyHashMatch'
import { genTerms } from '../index'

test('genTerms', () => {
  const terms = genTerms('anozon研究チーム', '運営チーム')
  const text = `# ${terms.head.name}
${terms.head.text ?? ''}

---

${
  terms.mains
    .map(
      (v) => `
## ${v.name}
${v.text ?? ''}
${
  v.items
    ?.map((v) =>
      typeof v === 'string'
        ? `* ${v}`
        : `* ${v.content}
${v.subs.map((sub) => `  - ${sub}`).join('\n')}`
    )
    .join('\n') ?? ''
}
`
    )
    .join('\n\n') ?? ''
}
---
${terms.foot}
`

  expect(terms.head.text).toMatchInlineSnapshot(
    `"この利用規約(以下，「本規約」といいます。)は，anozon研究チーム(以下，「運営チーム」といいます。)がこのウェブサイト上で提供するサービス(以下，「本サービス」といいます。)の利用条件を定めるものです。登録ユーザーの皆さま(以下，「ユーザー」といいます。)には，本規約に従って，本サービスをご利用いただきます。"`
  )
  expect(sha512Hex(text).substring(0, 20)).toMatchInlineSnapshot(
    `"ae183d4df72cf634455c"`
  )
})

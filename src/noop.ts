export const noop = (..._args: unknown[]) => {}

export const tagNoop = (strs: TemplateStringsArray, ...exps: any[]) =>
  strs.map((a, i) => a + String(exps[i] ?? '')).join('')

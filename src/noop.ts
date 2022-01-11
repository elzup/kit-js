const noop = (..._args: unknown[]) => {}

export const tagNoop = (strs: TemplateStringsArray, ...exps: any[]) =>
  strs.reduce((a, c, i) => a + c + `${exps[i] || ''}`, '')

export default noop

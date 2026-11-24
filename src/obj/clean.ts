/**
 * remove undefined field
 */
export const clean = <T extends Record<string, unknown>>(o: T): T =>
  JSON.parse(JSON.stringify(o))

export const clone = clean

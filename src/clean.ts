/**
 * remove undefined field
 */
const clean = <T extends Record<string, unknown>>(o: T): T =>
  JSON.parse(JSON.stringify(o))

export default clean

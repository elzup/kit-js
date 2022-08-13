type Key = string | number | symbol

export const upsertMap = <K, V>(m: Map<K, V>, k: K, v: V) => {
  if (m.has(k)) return
  m.set(k, v)
  return
}

export const upsert = <K extends Key, V>(o: Record<K, V>, k: K, v: V) => {
  if (k in o) return
  o[k] = v
}

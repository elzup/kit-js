function removeUndefinedField<T extends Record<string, unknown>>(o: T): T {
  for (let key in o) {
    if (o[key] === undefined) delete o[key]
  }
  return o
}

export default removeUndefinedField

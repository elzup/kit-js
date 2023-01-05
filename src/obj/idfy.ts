export const idfy = <T>(arr: T[]) => arr.map((v, id) => ({ ...v, id }))
export const mapId = idfy

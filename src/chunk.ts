export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size < 1) return []
  const chunks: T[][] = []

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

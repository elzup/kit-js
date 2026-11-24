/**
 * Shift a character by a specified offset in the character code.
 *
 * Adds the offset to the character's Unicode code point and returns
 * the resulting character. Useful for character transformations.
 *
 * @param c - Single character to shift
 * @param diff - Offset to add to character code
 * @returns Shifted character
 *
 * @example
 * shift('a', 1)  // => 'b'
 * shift('b', -1) // => 'a'
 * shift('A', 32) // => 'a' (uppercase to lowercase offset)
 */
export const shift = (c: string, diff: number) =>
  String.fromCharCode(c.charCodeAt(0) + diff)

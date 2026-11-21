/**
 * Turn a title into a URL slug: lower case, words joined by single hyphens.
 * Diacritics are reduced to their base letters (e.g. "é" -> "e").
 * If `maxLength` is a positive number, the slug is cut to at most that many
 * characters, with any trailing hyphen removed.
 */
export function slugify(title: string, maxLength?: number): string {
  const s = title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (typeof maxLength === 'number' && maxLength > 0 && s.length > maxLength) {
    return s.slice(0, maxLength).replace(/-+$/, '');
  }
  return s;
}

/** Count the words in a piece of text. */
export function wordCount(text: string): number {
  return text
    .split(/\s+/)
    .filter((token) => /[a-zA-Z0-9]+/.test(token)).length;
}

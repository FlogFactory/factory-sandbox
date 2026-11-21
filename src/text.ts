/**
 * Turn a title into a URL slug: lower case, words joined by single hyphens.
 * Diacritics are reduced to their base letters (e.g. "é" -> "e").
 */
export function slugify(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Count the words in a piece of text. */
export function wordCount(text: string): number {
  return text
    .split(/\s+/)
    .filter((token) => /[a-zA-Z0-9]+/.test(token)).length;
}

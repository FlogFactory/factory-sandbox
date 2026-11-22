/**
 * Turn a title into a URL slug: lower case, words joined by single hyphens.
 * Apostrophes (' and ’) are dropped, so "Don't" becomes "dont".
 * Diacritics are reduced to their base letters (e.g. "é" -> "e").
 * If `maxLength` is a positive number, the slug is cut to at most that many
 * characters, with any trailing hyphen removed.
 * If `maxWordCount` is a positive number, only that many leading words are kept.
 * When both are given the word limit is applied first, then the length limit.
 */
export function slugify(title: string, maxLength?: number, maxWordCount?: number): string {
  let s = title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (typeof maxWordCount === 'number' && maxWordCount > 0 && s) {
    s = s.split('-').slice(0, maxWordCount).join('-');
  }
  if (typeof maxLength === 'number' && maxLength > 0 && s.length > maxLength) {
    return s.slice(0, maxLength).replace(/-+$/, '');
  }
  return s;
}

/**
 * Count the words in a piece of text. Words are separated by whitespace,
 * em dashes (—), en dashes (–) or slashes (/); hyphenated words count as one.
 */
export function wordCount(text: string): number {
  return text
    .split(/[\s—–/]+/)
    .filter((token) => /[a-zA-Z0-9]+/.test(token)).length;
}

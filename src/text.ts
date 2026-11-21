/** Turn a title into a URL slug: lower case, words joined by single hyphens. */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove combining diacritical marks
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Count the words in a piece of text. */
export function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

import { wordCount } from './text.ts';

/**
 * Estimate how long a piece of text takes to read, in whole minutes.
 * The result is rounded up, so 200 words at the default 200 words per minute
 * is 1 minute and 201 words is 2. Empty or whitespace-only text is 0; any
 * other text is at least 1. Words are counted the same way `wordCount` counts
 * them.
 * `wordsPerMinute` defaults to 200. A value that is not a finite number
 * greater than zero (0, a negative, `NaN`, `Infinity`, or a non-number) is
 * ignored and 200 is used instead.
 */
export function readingTime(text: string, wordsPerMinute: number = 200): number {
  const words = wordCount(text);
  if (words === 0) return 0;
  const wpm = Number.isFinite(wordsPerMinute) && wordsPerMinute > 0 ? wordsPerMinute : 200;
  return Math.ceil(words / wpm);
}

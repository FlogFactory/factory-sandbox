import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readingTime } from '../src/reading.ts';
import { wordCount } from '../src/text.ts';

const words = (n: number) => Array.from({ length: n }, () => 'word').join(' ');

test('readingTime', () => {
  assert.equal(readingTime(words(200)), 1);
  assert.equal(readingTime(words(201)), 2);
  assert.equal(readingTime(words(400)), 2);
  assert.equal(readingTime(words(401)), 3);
  assert.equal(readingTime('one'), 1);
  assert.equal(readingTime(''), 0);
  assert.equal(readingTime('   '), 0);
});

test('readingTime with wordsPerMinute', () => {
  assert.equal(readingTime(words(400), 100), 4);
  assert.equal(readingTime(words(200), 300), 1);
  assert.equal(readingTime(words(1), 1000), 1);
});

test('readingTime falls back to 200 words per minute', () => {
  const text = words(200);
  assert.equal(readingTime(text, 0), 1);
  assert.equal(readingTime(text, -5), 1);
  assert.equal(readingTime(text, NaN), 1);
  assert.equal(readingTime(text, Infinity), 1);
  assert.equal(readingTime(text, '100' as unknown as number), 1);
});

test('readingTime counts words like wordCount', () => {
  const text = 'state-of-the-art design, and ... more — plus two';
  assert.equal(readingTime(text, 1), wordCount(text));
  assert.equal(readingTime('one - two', 1), wordCount('one - two'));
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify, wordCount } from '../src/text.ts';

test('slugify', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
  assert.equal(slugify('  Already--slugged  '), 'already-slugged');
});

test('wordCount', () => {
  assert.equal(wordCount('one two  three'), 3);
  assert.equal(wordCount('   '), 0);
  assert.equal(wordCount('one - two'), 2);
  assert.equal(wordCount('wait ... what'), 2);
  assert.equal(wordCount('state-of-the-art design'), 2);
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify, wordCount } from '../src/text.ts';

test('slugify', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
  assert.equal(slugify('  Already--slugged  '), 'already-slugged');
  assert.equal(slugify("Don't stop"), 'dont-stop');
  assert.equal(slugify('It’s here'), 'its-here');
});

test('wordCount', () => {
  assert.equal(wordCount('one two  three'), 3);
  assert.equal(wordCount('   '), 0);
});

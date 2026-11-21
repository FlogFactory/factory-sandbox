import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify, wordCount } from '../src/text.ts';

test('slugify', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
  assert.equal(slugify('  Already--slugged  '), 'already-slugged');
  assert.equal(slugify('Café déjà vu'), 'cafe-deja-vu');
  assert.equal(slugify('Māori'), 'maori');
  assert.equal(slugify("Don't panic"), 'dont-panic');
  assert.equal(slugify("It's 5 o'clock"), 'its-5-oclock');
  assert.equal(slugify('Don’t panic'), 'dont-panic');
});

test('slugify with maxLength', () => {
  const long = slugify('This is a very long title for a post', 10);
  assert.ok(long.length <= 10);
  assert.equal(long, 'this-is-a');
  assert.equal(slugify('short', 5), 'short');
  assert.equal(slugify('x'.repeat(100), 3), 'xxx');
  assert.equal(slugify('   ', 5), '');
  assert.equal(slugify('ab cd', 3), 'ab');
  assert.equal(slugify('Hello World', 0), 'hello-world');
  assert.equal(slugify('Hello World', -1), 'hello-world');
});

test('slugify with maxWordCount', () => {
  assert.equal(slugify('This is a very long title for a post', undefined, 3), 'this-is-a');
  assert.equal(slugify('short title', undefined, 5), 'short-title');
  assert.equal(slugify('one', undefined, 1), 'one');
  assert.equal(slugify("Don't panic now", undefined, 2), 'dont-panic');
  assert.equal(slugify('   ', undefined, 2), '');
  assert.equal(slugify('Hello World', undefined, 0), 'hello-world');
  assert.equal(slugify('Hello World', undefined, -1), 'hello-world');
  assert.equal(slugify('a b c d e', undefined, 4), 'a-b-c-d');
});

test('slugify with maxLength and maxWordCount', () => {
  assert.equal(slugify('This is a very long title for a post', 10, 2), 'this-is');
  assert.equal(slugify('This is a very long title', 12, 3), 'this-is-a');
  assert.equal(slugify('This is a very long title', 4, 3), 'this');
  assert.equal(slugify('This is a very long title', 200, 2), 'this-is');
});

test('wordCount', () => {
  assert.equal(wordCount('one two  three'), 3);
  assert.equal(wordCount('   '), 0);
  assert.equal(wordCount(''), 0);
  assert.equal(wordCount('one - two'), 2);
  assert.equal(wordCount('wait ... what'), 2);
  assert.equal(wordCount('state-of-the-art design'), 2);
});

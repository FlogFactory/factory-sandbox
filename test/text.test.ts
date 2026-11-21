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

test('wordCount', () => {
  assert.equal(wordCount('one two  three'), 3);
  assert.equal(wordCount('   '), 0);
  assert.equal(wordCount(''), 0);
  assert.equal(wordCount('one - two'), 2);
  assert.equal(wordCount('wait ... what'), 2);
  assert.equal(wordCount('state-of-the-art design'), 2);
});

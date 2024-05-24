import { test, expect } from '@jest/globals';
import freakFunction from '../freak.js'

test('check freack', () => {
  expect(freakFunction()).toBe('Helloy, I`m freack function!))))');
})

import { test, expect } from '@jest/globals';
import freak from '../freak.js'

test('check freack', () => {
  expect(freak()).toBe('Helloy, I`m freack function!))))');
})

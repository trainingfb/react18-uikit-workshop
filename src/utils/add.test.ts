// utils/add.test.ts
// import { expect, test } from 'vitest'; /// <--- REMOVED
import { add } from './add.ts';

test('should sum two numbers', () => {
   expect(add(2, 1)).toBe(3);
});
test('should sum return the sum even if only one parameter is passed', () => {
   expect(add(2)).toBe(2);
});
test('should sum return zero if both params are not defined', () => {
   expect(add()).toBe(0);
});

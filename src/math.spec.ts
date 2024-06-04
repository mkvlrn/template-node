import { expect, test } from 'vitest';
import { add } from '~/math.ts';

test('add', () => {
  const twoPlusTwo = add(2, 2);
  expect(twoPlusTwo).toBe(4);
});

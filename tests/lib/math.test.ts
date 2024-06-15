import { expect, test } from 'vitest';
import { add } from '~/lib/math.ts';

test(`add`, () => {
  const twoPlusTwo = add(2, 2);
  const twoPlustThree = add(2, 3);

  expect(twoPlusTwo).toBe(4);
  expect(twoPlustThree).not.toBe(4);
});

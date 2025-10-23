import { expect, test } from "vitest";
import { add, subtract } from "#/math/basic";

test("should add two numbers", () => {
  const twoPlusTwo = add(2, 2);
  const twoPlusThree = add(2, 3);

  expect(twoPlusTwo).toStrictEqual(4);
  expect(twoPlusThree).toStrictEqual(5);
});

test("should subtract two numbers", () => {
  const twoMinusTwo = subtract(2, 2);
  const twoMinusThree = subtract(2, 3);

  expect(twoMinusTwo).toStrictEqual(0);
  expect(twoMinusThree).toStrictEqual(-1);
});

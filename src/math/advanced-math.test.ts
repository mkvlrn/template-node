import { assert, expect, test } from "vitest";
import { divide, multiply } from "./advanced-math.ts";

test("should multiply two numbers", () => {
  const twoTimesTwo = multiply(2, 2);
  const twoTimesThree = multiply(2, 3);

  expect(twoTimesTwo).toStrictEqual(4);
  expect(twoTimesThree).toStrictEqual(6);
});

test("should divide two numbers", () => {
  const twoDividedByTwo = divide(2, 2);
  const twoDividedByFour = divide(2, 4);

  assert.isTrue(twoDividedByFour.isOk);
  expect(twoDividedByFour.value).toStrictEqual(0.5);
  assert.isTrue(twoDividedByTwo.isOk);
  expect(twoDividedByTwo.value).toStrictEqual(1);
});

test("should return an error when dividing by zero", () => {
  const divideByZero = divide(2, 0);

  assert.isTrue(divideByZero.isError);
  expect(divideByZero.error).toBeInstanceOf(Error);
  expect(divideByZero.error.message).toStrictEqual("cannot divide by zero");
});

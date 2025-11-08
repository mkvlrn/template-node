import assert from "node:assert/strict";
import { expect, test } from "vitest";
import { divide, multiply } from "#/math/advanced";

test("should multiply two numbers", () => {
  const twoTimesTwo = multiply(2, 2);
  const twoTimesThree = multiply(2, 3);

  expect(twoTimesTwo).toStrictEqual(4);
  expect(twoTimesThree).toStrictEqual(6);
});

test("should divide two numbers", () => {
  const twoDividedByTwo = divide(2, 2);
  const twoDividedByFour = divide(2, 4);

  assert(twoDividedByFour.isOk);
  expect(twoDividedByFour.value).toStrictEqual(0.5);
  assert(twoDividedByTwo.isOk);
  expect(twoDividedByTwo.value).toStrictEqual(1);
});

test("should return an error when dividing by zero", () => {
  const divideByZero = divide(2, 0);

  assert(divideByZero.isError);
  expect(divideByZero.error).toBeInstanceOf(Error);
  expect(divideByZero.error.message).toStrictEqual("cannot divide by zero");
});

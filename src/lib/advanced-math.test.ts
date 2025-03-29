import { divide, multiply } from "#lib/advanced-math.ts";
import { assert, describe, expect, test } from "vitest";

describe("multiply", () => {
  test("should multiply two numbers", () => {
    const twoTimesTwo = multiply(2, 2);
    const twoTimesThree = multiply(2, 3);

    expect(twoTimesTwo).toEqual(4);
    expect(twoTimesThree).toEqual(6);
  });
});

describe("divide", () => {
  test("should divide two numbers", () => {
    const twoDividedByTwo = divide(2, 2);
    const twoDividedByThree = divide(2, 4);

    expect(twoDividedByTwo.ok).toBe(true);
    assert(twoDividedByTwo.ok === true);
    expect(twoDividedByTwo.value).toEqual(1);

    expect(twoDividedByThree.ok).toBe(true);
    assert(twoDividedByThree.ok === true);
    expect(twoDividedByThree.value).toEqual(0.5);
  });

  test("should return an error when dividing by zero", () => {
    const divideByZero = divide(2, 0);

    expect(divideByZero.ok).toBe(false);
    assert(divideByZero.ok === false);
    expect(divideByZero.error).toBeInstanceOf(Error);
    expect(divideByZero.error?.message).toBe("Division by zero is not allowed");
  });
});

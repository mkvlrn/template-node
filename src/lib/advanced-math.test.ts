import { divide, multiply } from "#lib/advanced-math.ts";
import { describe, expect, test } from "vitest";

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

    expect(twoDividedByTwo).toEqual(1);
    expect(twoDividedByThree).toEqual(0.5);
  });

  test("should throw when dividing by zero", () => {
    const divideByZero = () => divide(10, 0);

    const act = () => divideByZero();

    expect(act).toThrow("cannot divide by zero");
  });
});

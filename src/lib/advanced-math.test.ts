import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { divide, multiply } from "~/lib/advanced-math";

describe("advanced math", () => {
  describe("multiply", () => {
    test("should multiply two numbers", () => {
      const twoTimesTwo = multiply(2, 2);
      const twoTimesThree = multiply(2, 3);

      assert.equal(twoTimesTwo, 4);
      assert.notEqual(twoTimesThree, 4);
    });
  });

  describe("divide", () => {
    test("should divide two numbers", () => {
      const twoDividedByTwo = divide(2, 2);
      const twoDividedByThree = divide(2, 3);

      assert.equal(twoDividedByTwo, 1);
      assert.notEqual(twoDividedByThree, 1);
    });

    test("should throw when dividing by zero", () => {
      const divideByZero = () => divide(10, 0);

      assert.throws(divideByZero, { message: "cannot divide by zero" });
    });
  });
});

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { divide, multiply } from "~/lib/advanced-math.js";

describe("advanced-math", () => {
  describe("multiply", () => {
    it("should multiply two numbers", () => {
      const twoTimesTwo = multiply(2, 2);
      const twoTimesThree = multiply(2, 3);

      assert.strictEqual(twoTimesTwo, 4);
      assert.strictEqual(twoTimesThree, 6);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      const twoDividedByTwo = divide(2, 2);
      const twoDividedByThree = divide(2, 4);

      assert.strictEqual(twoDividedByTwo.ok, true);
      assert.strictEqual(twoDividedByTwo.value, 1);

      assert.strictEqual(twoDividedByThree.ok, true);
      assert.strictEqual(twoDividedByThree.value, 0.5);
    });

    it("should return an error when dividing by zero", () => {
      const divideByZero = divide(2, 0);

      assert.strictEqual(divideByZero.ok, false);
      assert.ok(divideByZero.error instanceof Error);
      assert.strictEqual(divideByZero.error.message, "Division by zero is not allowed");
    });
  });
});

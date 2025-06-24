import { assert, describe, expect, it } from "vitest";
import { divide, multiply } from "#/math/advanced-math.ts";

describe("advanced-math", () => {
  describe("multiply", () => {
    it("should multiply two numbers", () => {
      const twoTimesTwo = multiply(2, 2);
      const twoTimesThree = multiply(2, 3);

      expect(twoTimesTwo).toBe(4);
      expect(twoTimesThree).toBe(6);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      const twoDividedByTwo = divide(2, 2);
      const twoDividedByThree = divide(2, 4);

      assert.isTrue(twoDividedByTwo.ok);
      expect(twoDividedByTwo.value).toBe(1);
      assert.isTrue(twoDividedByThree.ok);
      expect(twoDividedByThree.value).toBe(0.5);
    });

    it("should return an error when dividing by zero", () => {
      const divideByZero = divide(2, 0);

      assert.isFalse(divideByZero.ok);
      expect(divideByZero.error.message).toBe("Division by zero is not allowed");
    });
  });
});

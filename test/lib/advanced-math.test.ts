import { describe, expect, it } from "vitest";
import { divide, multiply } from "~/lib/advanced-math";

describe("advanced math", () => {
  describe("multiply", () => {
    it("should multiply two numbers", () => {
      const twoTimesTwo = multiply(2, 2);
      const twoTimesThree = multiply(2, 3);

      expect(twoTimesTwo).toStrictEqual(4);
      expect(twoTimesThree).not.toStrictEqual(4);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      const twoDividedByTwo = divide(2, 2);
      const twoDividedByThree = divide(2, 3);

      expect(twoDividedByTwo).toStrictEqual(1);
      expect(twoDividedByThree).not.toStrictEqual(1);
    });

    it("should throw when dividing by zero", () => {
      const divideByZero = () => divide(10, 0);

      expect(divideByZero).toThrow("Division by zero");
    });
  });
});

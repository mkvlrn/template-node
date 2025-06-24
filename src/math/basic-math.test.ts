import { describe, expect, it } from "vitest";
import { add, subtract } from "#/math/basic-math.ts";

describe("basic-math", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      const twoPlusTwo = add(2, 2);
      const twoPlusThree = add(2, 3);

      expect(twoPlusTwo).toBe(4);
      expect(twoPlusThree).toBe(5);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      const twoMinusTwo = subtract(2, 2);
      const twoMinusThree = subtract(2, 3);

      expect(twoMinusTwo).toBe(0);
      expect(twoMinusThree).toBe(-1);
    });
  });
});

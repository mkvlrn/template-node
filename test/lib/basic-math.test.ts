import { describe, expect, it } from "vitest";
import { add, subtract } from "~/lib/basic-math";

describe("basic math", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      const twoPlusTwo = add(2, 2);
      const twoPlusThree = add(2, 3);

      expect(twoPlusTwo).toStrictEqual(4);
      expect(twoPlusThree).not.toStrictEqual(4);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      const twoMinusTwo = subtract(2, 2);
      const twoMinusThree = subtract(2, 3);

      expect(twoMinusTwo).toStrictEqual(0);
      expect(twoMinusThree).not.toStrictEqual(0);
    });
  });
});

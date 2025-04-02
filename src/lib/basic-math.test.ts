import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { add, subtract } from "#lib/basic-math";

describe("basic-math", () => {
  describe("add", () => {
    it("should add two numbers", () => {
      const twoPlusTwo = add(2, 2);
      const twoPlusThree = add(2, 3);

      assert.strictEqual(twoPlusTwo, 4);
      assert.strictEqual(twoPlusThree, 5);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      const twoMinusTwo = subtract(2, 2);
      const twoMinusThree = subtract(2, 3);

      assert.strictEqual(twoMinusTwo, 0);
      assert.strictEqual(twoMinusThree, -1);
    });
  });
});

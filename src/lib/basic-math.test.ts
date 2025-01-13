import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { add, subtract } from "~/lib/basic-math";

describe("basic math", () => {
  describe("add", () => {
    test("should add two numbers", () => {
      const twoPlusTwo = add(2, 2);
      const twoPlusThree = add(2, 3);

      assert.equal(twoPlusTwo, 4);
      assert.notEqual(twoPlusThree, 4);
    });
  });

  describe("subtract", () => {
    test("should subtract two numbers", () => {
      const twoMinusTwo = subtract(2, 2);
      const twoMinusThree = subtract(2, 3);

      assert.equal(twoMinusTwo, 0);
      assert.notEqual(twoMinusThree, 0);
    });
  });
});

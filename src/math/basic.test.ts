import { assert, describe, test } from "vitest";
import { addTestCases, subtractTestCases } from "#/math/__fixtures__/test-cases";
import { add, subtract } from "#/math/basic";

describe("should add two numbers", () => {
  for (const { a, b, expected } of addTestCases) {
    test(`${a} + ${b} = ${expected}`, () => {
      // act
      const result = add(a, b);
      // assert
      assert.strictEqual(result, expected);
    });
  }
});

describe("should subtract two numbers", () => {
  for (const { a, b, expected } of subtractTestCases) {
    test(`${a} - ${b} = ${expected}`, () => {
      // act
      const result = subtract(a, b);
      // assert
      assert.strictEqual(result, expected);
    });
  }
});

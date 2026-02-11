import { describe, expect, test } from "vitest";
import { addTestCases, subtractTestCases } from "#/math/__fixtures__/test-cases";
import { add, subtract } from "#/math/basic";

describe("should add two numbers", () => {
  for (const tc of addTestCases) {
    test(`${tc.a} + ${tc.b} = ${tc.expected}`, () => {
      // act
      const result = add(tc.a, tc.b);
      // assert
      expect(result).toStrictEqual(tc.expected);
    });
  }
});

describe("should subtract two numbers", () => {
  for (const tc of subtractTestCases) {
    test(`${tc.a} - ${tc.b} = ${tc.expected}`, () => {
      // act
      const result = subtract(tc.a, tc.b);
      // assert
      expect(result).toStrictEqual(tc.expected);
    });
  }
});

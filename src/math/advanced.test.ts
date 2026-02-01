import { describe, expect, test } from "vitest";
import { divideTestCases, multiplyTestCases } from "#math/__fixtures__/test-cases";
import { divide, multiply } from "#math/advanced";

describe("should multiply two numbers", () => {
  for (const tc of multiplyTestCases) {
    test(`${tc.a} x ${tc.b} = ${tc.expected}`, () => {
      // act
      const result = multiply(tc.a, tc.b);
      // assert
      expect(result).toStrictEqual(tc.expected);
    });
  }
});

describe("should divide two numbers", () => {
  for (const tc of divideTestCases) {
    test(`${tc.a} ÷ ${tc.b} = ${tc.display}`, () => {
      // act
      const result = divide(tc.a, tc.b);
      // assert
      expect(result).toStrictEqual(tc.expected);
    });
  }
});

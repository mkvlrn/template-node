import { describe, expect, test } from "vitest";
import { divideTestCases, multiplyTestCases } from "#/math/__fixtures__/test-cases";
import { divide, multiply } from "#/math/advanced";

describe("should multiply two numbers", () => {
  for (const { a, b, expected } of multiplyTestCases) {
    test(`${a} x ${b} = ${expected}`, () => {
      // act
      const result = multiply(a, b);
      // assert
      expect(result).toStrictEqual(expected);
    });
  }
});

describe("should divide two numbers", () => {
  for (const { a, b, expected, errorMessage } of divideTestCases) {
    test(`${a} ÷ ${b} = ${errorMessage ?? expected}`, () => {
      // act
      const act = () => divide(a, b);
      // assert
      if (typeof errorMessage === "string") {
        expect(act).toThrow(errorMessage);
      } else {
        expect(act()).toStrictEqual(expected);
      }
    });
  }
});

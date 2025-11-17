import { describe, expect, test } from "vitest";
import { divideTestCases, multiplyTestCases } from "#/math/__fixtures__/test-cases";
import { divide, multiply } from "#/math/advanced";

describe("should multiply two numbers", () => {
  test.each(multiplyTestCases)("$a x $b = $expected", ({ a, b, expected }) => {
    const result = multiply(a, b);

    expect(result).toStrictEqual(expected);
  });
});

describe("should divide two numbers", () => {
  test.each(divideTestCases)("$a / $b = $display", ({ a, b, expected }) => {
    const result = divide(a, b);

    expect(result).toStrictEqual(expected);
  });
});

import { describe, expect, test } from "vitest";
import { addTestCases, subtractTestCases } from "#/math/__fixtures__/test-cases";
import { add, subtract } from "#/math/basic";

describe("should add two numbers", () => {
  test.each(addTestCases)("$a + $b = $expected", ({ a, b, expected }) => {
    const result = add(a, b);

    expect(result).toStrictEqual(expected);
  });
});

describe("should subtract two numbers", () => {
  test.each(subtractTestCases)("$a - $b = $expected", ({ a, b, expected }) => {
    const result = subtract(a, b);

    expect(result).toStrictEqual(expected);
  });
});

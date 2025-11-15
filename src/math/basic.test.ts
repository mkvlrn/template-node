import { describe, expect, test } from "vitest";
import { add, subtract } from "#/math/basic";

interface TestCase {
  a: number;
  b: number;
  expected: number;
}

describe("should add two numbers", () => {
  const testCases: TestCase[] = [
    { a: 2, b: 2, expected: 4 },
    { a: 2, b: 3, expected: 5 },
    { a: 1000, b: 2000, expected: 3000 },
  ];

  test.each(testCases)("$a + $b = $expected", ({ a, b, expected }) => {
    const result = add(a, b);

    expect(result).toStrictEqual(expected);
  });
});

describe("should subtract two numbers", () => {
  const testCases: TestCase[] = [
    { a: 2, b: 2, expected: 0 },
    { a: 2, b: 3, expected: -1 },
    { a: 1000, b: 2000, expected: -1000 },
  ];

  test.each(testCases)("$a - $b = $expected", ({ a, b, expected }) => {
    const result = subtract(a, b);

    expect(result).toStrictEqual(expected);
  });
});

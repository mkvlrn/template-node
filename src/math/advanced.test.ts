import { err, ok, type Result } from "@mkvlrn/result";
import { describe, expect, test } from "vitest";
import { divide, multiply } from "#/math/advanced";

interface TestCase<T> {
  a: number;
  b: number;
  expected: T;
}

describe("should multiply two numbers", () => {
  const testCases: TestCase<number>[] = [
    { a: 2, b: 2, expected: 4 },
    { a: 2, b: 3, expected: 6 },
    { a: 1000, b: 2000, expected: 2_000_000 },
  ];

  test.each(testCases)("$a x $b = $expected", ({ a, b, expected }) => {
    const result = multiply(a, b);

    expect(result).toStrictEqual(expected);
  });
});

describe("should divide two numbers", () => {
  const testCases: TestCase<Result<number, Error>>[] = [
    { a: 2, b: 2, expected: ok(1) },
    { a: 2, b: 4, expected: ok(0.5) },
    { a: 999, b: 333, expected: ok(3) },
    { a: 2, b: 0, expected: err(new Error("cannot divide by zero")) },
  ];

  test.each(testCases)("$a / $b = $expected", ({ a, b, expected }) => {
    const result = divide(a, b);

    expect(result).toStrictEqual(expected);
  });
});

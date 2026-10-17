import { describe, expect, test } from "vitest";
import * as math from "#/lib/math";

interface TestCase {
  a: number;
  b: number;
  op: (a: number, b: number) => number;
  expected: number;
}

describe("math success", () => {
  const testCases: TestCase[] = [
    { a: 2, b: 2, op: math.add, expected: 4 },
    { a: 2, b: 2, op: math.subtract, expected: 0 },
    { a: 2, b: 2, op: math.multiply, expected: 4 },
    { a: 2, b: 2, op: math.divide, expected: 1 },
  ];

  test.each(testCases)("$op.name($a, $b) should return $expected", ({ a, b, op, expected }) => {
    const result = op(a, b);

    expect(expected).toEqual(result);
  });
});

describe("math failure", () => {
  test("division by zero should thrown an error", () => {
    const expected = new Error("cannot divide by zero");

    const act = () => math.divide(2, 0);

    expect(act).toThrow(expected);
  });
});

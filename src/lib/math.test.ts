import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "#/lib/math";

describe("math success", () => {
  const testCases = [
    { a: 2, b: 2, op: add, expected: 4 },
    { a: 2, b: 2, op: subtract, expected: 0 },
    { a: 2, b: 2, op: multiply, expected: 4 },
    { a: 2, b: 2, op: divide, expected: 1 },
  ];

  test.each(testCases)("$op.name($a, $b) should return $expected", ({ a, b, op, expected }) => {
    const result = op(a, b);

    expect(expected).toEqual(result);
  });
});

describe("math failure", () => {
  test("division by zshould throw an errorould", () => {
    const expected = new Error("cannot divide by zero");

    const act = () => divide(2, 0);

    expect(act).toThrow(expected);
  });
});

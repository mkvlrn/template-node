import { expect, test } from "vitest";

import { add, divide, multiply, subtract } from "#/lib/math";

interface TestCase {
  a: number;
  b: number;
  func: (a: number, b: number) => number;
  expected: number;
}

const tests = new Map<string, TestCase>([
  ["should add: 2 + 2 = 4", { a: 2, b: 2, func: add, expected: 4 }],
  ["should subtract: 2 - 2 = 0", { a: 2, b: 2, func: subtract, expected: 0 }],
  ["should multiply: 2 * 2 = 4", { a: 2, b: 2, func: multiply, expected: 4 }],
  ["should divide: 2 / 2 = 1", { a: 2, b: 2, func: divide, expected: 1 }],
]);

tests.forEach((tc, name) => {
  test(name, () => {
    const result = tc.func(tc.a, tc.b);

    expect(tc.expected).toEqual(result);
  });
});

test("should throw on division by zero", () => {
  const expected = "cannot divide by zero";

  const act = () => divide(2, 0);

  expect(act).toThrow(expected);
});

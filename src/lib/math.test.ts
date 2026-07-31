import { expect, test } from "vitest";
import { add, divide, multiply, subtract } from "#/lib/math";

interface TestCase {
  a: number;
  b: number;
  op: (a: number, b: number) => number;
  expected: number;
}

test.each<TestCase>([
  { a: 2, b: 2, op: add, expected: 4 },
  { a: 2, b: 2, op: subtract, expected: 0 },
  { a: 2, b: 2, op: multiply, expected: 4 },
  { a: 2, b: 2, op: divide, expected: 1 },
])("should find: $op.name($a, $b) = $expected", ({ a, b, op, expected }) => {
  const result = op(a, b);

  expect(expected).toEqual(result);
});

test("should throw on division by zero", () => {
  const expected = "cannot divide by zero";

  const act = () => divide(2, 0);

  expect(act).toThrow(expected);
});

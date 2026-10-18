import { describe, expect, it, vi } from "vite-plus/test";
import * as math from "#/lib/math";

interface TestCase {
  left: number;
  right: number;
  op: (left: number, right: number) => number;
  expected: number;
}

vi.setConfig({
  testTimeout: 1000,
});

describe("math success", () => {
  const testCases: TestCase[] = [
    { expected: 4, left: 2, op: math.add, right: 2 },
    { expected: 0, left: 2, op: math.subtract, right: 2 },
    { expected: 4, left: 2, op: math.multiply, right: 2 },
    { expected: 1, left: 2, op: math.divide, right: 2 },
  ];

  it.each(testCases)(
    "$op.name($left, $right) should return $expected",
    ({ left, right, op, expected }) => {
      expect.hasAssertions();

      const result = op(left, right);

      expect(expected).toStrictEqual(result);
    },
  );
});

describe("math failure", () => {
  it("division by zero should thrown an error", () => {
    expect.hasAssertions();
    const expected = new Error("Cannot divide by zero");

    const { left, right } = { left: 2, right: 0 };

    expect(() => math.divide(left, right)).toThrow(expected);
  });
});

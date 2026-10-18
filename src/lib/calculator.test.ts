import { describe, expect, it, suite, vi } from "vite-plus/test";
import * as calculator from "#/lib/calculator";

interface TestCase {
  expression: string;
  expected: number;
}

interface ErrorTestCase {
  expression: string;
  errorMessage: string;
}

vi.setConfig({
  testTimeout: 1000,
});

suite("calculator success", () => {
  const testCases: TestCase[] = [
    { expected: 4, expression: "2 + 2" },
    { expected: 2, expression: "5 - 3" },
    { expected: 12, expression: "4* 3" },
    { expected: -5, expression: "10 /-2" },
    { expected: 1, expression: "2.5 + -1.5" },
    { expected: 4.7, expression: "3.5 - -1.2" },
    { expected: -10, expression: "2.5 * -4" },
    { expected: -3, expression: "9 / -3" },
  ];

  it.each(testCases)(
    "calculate($expression) should return $expected",
    ({ expression, expected }) => {
      expect.hasAssertions();

      const result = calculator.calculate(expression);
      expect(result).toBe(expected);
    },
  );
});

describe("calculator failure", () => {
  const testCases: ErrorTestCase[] = [
    { errorMessage: "Invalid expression: 2 +", expression: "2 +" },
    { errorMessage: "Invalid expression: + 2", expression: "+ 2" },
    { errorMessage: "Cannot divide by zero", expression: "2 / 0" },
    { errorMessage: "Invalid expression: 2 ^ 3", expression: "2 ^ 3" },
    { errorMessage: "Invalid expression: abc + 1", expression: "abc + 1" },
    { errorMessage: "Invalid expression: 1 + abc", expression: "1 + abc" },
  ];

  it.each(testCases)(
    "calculate($expression) should throw an error",
    ({ expression, errorMessage }) => {
      expect.hasAssertions();

      expect(() => calculator.calculate(expression)).toThrow(errorMessage);
    },
  );
});

import { describe, expect, test } from "vitest";
import * as calculator from "#/lib/calculator";

interface TestCase {
  expression: string;
  expected: number;
}

interface ErrorTestCase {
  expression: string;
  errorMessage: string;
}

describe("calculator success", () => {
  const testCases: TestCase[] = [
    { expression: "2 + 2", expected: 4 },
    { expression: "5 - 3", expected: 2 },
    { expression: "4 * 3", expected: 12 },
    { expression: "10 / -2", expected: -5 },
    { expression: "2.5 + -1.5", expected: 1 },
    { expression: "3.5 - -1.2", expected: 4.7 },
    { expression: "2.5 * -4", expected: -10 },
    { expression: "9 / -3", expected: -3 },
  ];

  test.each(testCases)(
    // biome-ignore lint/security/noSecrets: false positive
    "calculate($expression) should return $expected",
    ({ expression, expected }) => {
      const result = calculator.calculate(expression);
      expect(result).toBe(expected);
    },
  );
});

describe("calculator failure", () => {
  const testCases: ErrorTestCase[] = [
    { expression: "2 +", errorMessage: "Invalid expression: 2 +" },
    { expression: "+ 2", errorMessage: "Invalid expression: + 2" },
    { expression: "2 / 0", errorMessage: "cannot divide by zero" },
    { expression: "2 ^ 3", errorMessage: "Invalid expression: 2 ^ 3" },
    { expression: "abc + 1", errorMessage: "Invalid expression: abc + 1" },
    { expression: "1 + abc", errorMessage: "Invalid expression: 1 + abc" },
  ];

  test.each(testCases)(
    // biome-ignore lint/security/noSecrets: false positive
    "calculate($expression) should throw an error",
    ({ expression, errorMessage }) => {
      expect(() => calculator.calculate(expression)).toThrow();
      expect(() => calculator.calculate(expression)).toThrow(errorMessage);
    },
  );
});

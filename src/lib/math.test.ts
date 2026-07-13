import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "#/lib/math";

interface TestCase {
  a: number;
  b: number;
  expected: number;
  errorMessage?: string;
}

describe("should add two numbers", () => {
  const tc: TestCase[] = [
    { a: 2, b: 2, expected: 4 },
    { a: 2, b: 3, expected: 5 },
    { a: 1000, b: 2000, expected: 3000 },
  ];

  for (const { a, b, expected } of tc) {
    test(`${a} + ${b} = ${expected}`, () => {
      // act
      const result = add(a, b);
      // assert
      expect(result).toStrictEqual(expected);
    });
  }
});

describe("should subtract two numbers", () => {
  const tc: TestCase[] = [
    { a: 2, b: 2, expected: 0 },
    { a: 2, b: 3, expected: -1 },
    { a: 1000, b: 2000, expected: -1000 },
  ];

  for (const { a, b, expected } of tc) {
    test(`${a} - ${b} = ${expected}`, () => {
      // act
      const result = subtract(a, b);
      // assert
      expect(result).toStrictEqual(expected);
    });
  }
});

describe("should multiply two numbers", () => {
  const tc: TestCase[] = [
    { a: 2, b: 2, expected: 4 },
    { a: 2, b: 3, expected: 6 },
    { a: 1000, b: 2000, expected: 2_000_000 },
  ];

  for (const { a, b, expected } of tc) {
    test(`${a} x ${b} = ${expected}`, () => {
      // act
      const result = multiply(a, b);
      // assert
      expect(result).toStrictEqual(expected);
    });
  }
});

describe("should divide two numbers", () => {
  const tc: TestCase[] = [
    { a: 2, b: 2, expected: 1 },
    { a: 2, b: 4, expected: 0.5 },
    { a: 999, b: 333, expected: 3 },
    { a: 2, b: 0, expected: Number.NaN, errorMessage: "cannot divide by zero" },
  ];

  for (const { a, b, expected, errorMessage } of tc) {
    test(`${a} ÷ ${b} = ${errorMessage ?? expected}`, () => {
      // act
      const act = () => divide(a, b);
      // assert
      if (typeof errorMessage === "string") {
        expect(act).toThrow(errorMessage);
      } else {
        expect(act()).toStrictEqual(expected);
      }
    });
  }
});

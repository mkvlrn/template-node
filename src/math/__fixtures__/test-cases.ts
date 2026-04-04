interface TestCase {
  a: number;
  b: number;
  expected: number;
  errorMessage?: string;
}

export const addTestCases: TestCase[] = [
  { a: 2, b: 2, expected: 4 },
  { a: 2, b: 3, expected: 5 },
  { a: 1000, b: 2000, expected: 3000 },
];

export const subtractTestCases: TestCase[] = [
  { a: 2, b: 2, expected: 0 },
  { a: 2, b: 3, expected: -1 },
  { a: 1000, b: 2000, expected: -1000 },
];

export const multiplyTestCases: TestCase[] = [
  { a: 2, b: 2, expected: 4 },
  { a: 2, b: 3, expected: 6 },
  { a: 1000, b: 2000, expected: 2_000_000 },
];

export const divideTestCases: TestCase[] = [
  { a: 2, b: 2, expected: 1 },
  { a: 2, b: 4, expected: 0.5 },
  { a: 999, b: 333, expected: 3 },
  { a: 2, b: 0, expected: Number.NaN, errorMessage: "Error: cannot divide by zero" },
];

import { R, type Result } from "@mkvlrn/result";

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): Result<number, Error> {
  if (b === 0) {
    return R.error(new Error("Division by zero is not allowed"));
  }

  return R.ok(a / b);
}

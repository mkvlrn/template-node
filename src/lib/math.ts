const ZERO = 0;

function add(left: number, right: number): number {
  return left + right;
}

function subtract(left: number, right: number): number {
  return left - right;
}

function multiply(left: number, right: number): number {
  return left * right;
}

function divide(left: number, right: number): number {
  if (right === ZERO) {
    throw new Error("Cannot divide by zero");
  }

  return left / right;
}

export { add, subtract, multiply, divide };

import * as math from "#/lib/math";

const OPERATORS = ["+", "-", "*", "/"] as const;

type Operator = (typeof OPERATORS)[number];

function parseExpression(expression: string): [number, Operator, number] {
  const expressionRegex =
    /^(?<left>[+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*(?<operator>[+\-*/])\s*(?<right>[+-]?(?:\d+(?:\.\d*)?|\.\d+))$/u;
  const match = expressionRegex.exec(expression.trim());
  if (!match || !match.groups) {
    throw new TypeError(`Invalid expression: ${expression}`);
  }

  const { left, operator, right } = match.groups;
  const op = OPERATORS.find((opString) => opString === operator);
  if (left === undefined || op === undefined || right === undefined) {
    throw new TypeError(`Invalid expression: ${expression}`);
  }

  return [Number(left), op, Number(right)];
}

export function calculate(expression: string): number {
  const operations: Record<Operator, (left: number, right: number) => number> = {
    "*": math.multiply,
    "+": math.add,
    "-": math.subtract,
    "/": math.divide,
  };
  const [left, operator, right] = parseExpression(expression);

  return operations[operator](left, right);
}

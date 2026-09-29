import * as math from "#/lib/math";

type Operator = "+" | "-" | "*" | "/";

const EXPRESSION_RE =
  /^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*([+\-*/])\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))$/;

export function calculate(expression: string): number {
  const [left, operator, right] = parseExpression(expression);

  // biome-ignore lint/style/useDefaultSwitchClause: regex ensures that the operator is valid andone of the four supported operators
  switch (operator) {
    case "+":
      return math.add(left, right);
    case "-":
      return math.subtract(left, right);
    case "*":
      return math.multiply(left, right);
    case "/":
      return math.divide(left, right);
  }
}

function parseExpression(expression: string): [number, Operator, number] {
  const match = expression.match(EXPRESSION_RE);
  if (!match) {
    throw new Error(`Invalid expression: ${expression}`);
  }

  const [, left, operator, right] = match;

  // biome-ignore lint/style/noNonNullAssertion: regex match ensures all values are present and valid
  return [Number.parseFloat(left!), operator as Operator, Number.parseFloat(right!)];
}

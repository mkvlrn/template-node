import * as math from "#/lib/math";

type Operator = "+" | "-" | "*" | "/";

// Grammar: <number> <operator> <number>, where a number may have a leading sign and decimals.
const NUMBER = String.raw`[+-]?(?:\d+(?:\.\d*)?|\.\d+)`;
const EXPRESSION_REGEX = new RegExp(
  `^(?<left>${NUMBER})\\s*(?<operator>[+\\-*/])\\s*(?<right>${NUMBER})$`,
  "u",
);

function parseExpression(expression: string): [number, Operator, number] {
  const match = EXPRESSION_REGEX.exec(expression.trim());
  if (!match || !match.groups) {
    throw new TypeError(`Invalid expression: ${expression}`);
  }

  const { left, operator, right } = match.groups;

  // The regex's character class guarantees the operator is one of the four below.
  // oxlint-disable-next-line typescript/no-unsafe-type-assertion
  return [Number(left), operator as Operator, Number(right)];
}

function calculate(expression: string): number {
  const operations: Record<Operator, (left: number, right: number) => number> = {
    "*": math.multiply,
    "+": math.add,
    "-": math.subtract,
    "/": math.divide,
  };
  const [left, operator, right] = parseExpression(expression);
  const operation = operations[operator];

  return operation(left, right);
}

export { calculate };

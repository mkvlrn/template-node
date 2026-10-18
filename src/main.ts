// oxlint-disable no-console
import process from "node:process";
import * as calculator from "#/lib/calculator";

const EXPRESSION_INDEX = 2;

function main(argv: readonly string[] = process.argv): void {
  const expression = argv[EXPRESSION_INDEX] ?? "2 + 2";

  console.info(`Calculating: ${expression}`);

  try {
    console.info(`Result: ${calculator.calculate(expression)}`);
  } catch (error) {
    if (error instanceof Error) {
      console.info(`Error: ${error.message}`);
    }
  }
}

if (import.meta.main) {
  main();
}

export { main };

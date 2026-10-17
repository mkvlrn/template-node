/** biome-ignore-all lint/suspicious/noConsole: needed, yo */

import process from "node:process";
import * as calculator from "#/lib/calculator";

export function main(argv: readonly string[] = process.argv): void {
  const expression = argv[2] ?? "2 + 2";

  console.log(`Calculating: ${expression}`);

  try {
    console.log(`Result: ${calculator.calculate(expression)}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
  }
}

if (import.meta.main) {
  main();
}

/** biome-ignore-all lint/suspicious/noConsole: needed, yo */
/** biome-ignore-all lint/correctness/noNodejsModules: backend */

import process from "node:process";
import { divide } from "./math/advanced-math.ts";
import { add } from "./math/basic-math.ts";

const sum = add(1, 2);
console.log(`1 + 2 = ${sum}`);

const value = 4;
const divBy = 0;
const div = divide(value, divBy);
if (div.error) {
  console.error(div.error.message);
  process.exit(1);
}

console.log(`4 / ${divBy} = ${div.value}`);

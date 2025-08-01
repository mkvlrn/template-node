/** biome-ignore-all lint/suspicious/noConsole: needed, yo */

import { divide } from "#/math/advanced-math";
import { add } from "#/math/basic-math";

const sum = add(1, 2);
console.log(`1 + 2 = ${sum}`);

const by = 0;
const div = divide(4, by);
if (div.error) {
  console.error(div.error.message);
  process.exit(1);
}

console.log(`4 / ${by} = ${div.value}`);

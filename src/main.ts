/** biome-ignore-all lint/suspicious/noConsole: needed, yo */

import { divide } from "#/math/advanced-math.ts";
import { add } from "#/math/basic-math.ts";

function main() {
  const sum = add(1, 2);
  console.log(`1 + 2 = ${sum}`);

  const div = divide(4, 0);
  if (div.error !== undefined) {
    console.error(div.error.message);
  } else {
    console.log(`4 / 2 = ${div.value}`);
  }
}

main();

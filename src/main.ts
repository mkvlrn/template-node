import { divide } from "~/lib/advanced-math.js";
import { add } from "~/lib/basic-math.js";

function main(): void {
  const sum = add(1, 2);
  console.log(`1 + 2 = ${sum}`);

  const div = divide(4, 0);
  if (div.ok) {
    console.log(`4 / 2 = ${div.value}`);
  } else {
    console.error(div.error.message);
  }
}

main();

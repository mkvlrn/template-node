import { divide } from "#lib/advanced-math";
import { add } from "#lib/basic-math";

console.log(`2 + 2 = ${add(2, 2)}`);

const div = divide(4, 0);
if (div.ok) {
  console.log(`4 / 2 = ${div.value}`);
} else {
  console.error(div.error.message);
}

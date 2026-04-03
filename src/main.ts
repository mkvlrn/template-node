/** biome-ignore-all lint/suspicious/noConsole: needed, yo */

import { divide } from "#/math/advanced";
import { add } from "#/math/basic";

const sum = add(1, 2);
console.log(`1 + 2 = ${sum}`);

const div = divide(10, 2);
console.log(div.isError ? "Cannot divide by zero" : `10 / 2 = ${div.value}`);

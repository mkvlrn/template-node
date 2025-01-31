import { add } from "#lib/basic-math.ts";
import { z } from "zod";

const twoPlusTwo = add(2, 2);

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

schema.parse({ name: "John", age: 30 });

// biome-ignore lint/suspicious/noConsole: just a simple example
// biome-ignore lint/suspicious/noConsoleLog: just a simple example
console.log(`2 + 2 = ${twoPlusTwo}`);

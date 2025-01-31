import { add } from "#lib/basic-math.ts";

const twoPlusTwo = add(2, 2);

// biome-ignore lint/suspicious/noConsole: just a simple example
// biome-ignore lint/suspicious/noConsoleLog: just a simple example
console.log(`2 + 2 = ${twoPlusTwo}`);

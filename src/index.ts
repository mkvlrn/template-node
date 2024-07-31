import { add } from "~/lib/basic-math.ts";

const twoPlusTwo = add(2, 2);

// eslint-disable-next-line no-console
console.log(twoPlusTwo);

const object = {
  a: 1,
};

Reflect.set(object, "b", 2);

// eslint-disable-next-line no-console
console.log(object);

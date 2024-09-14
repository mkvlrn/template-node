import { describe, expect, test } from "vitest";
import { add, subtract } from "~/lib/basic-math";

describe("basic math", () => {
  test("add", () => {
    const twoPlusTwo = add(2, 2);
    const twoPlusThree = add(2, 3);

    expect(twoPlusTwo).toBe(4);
    expect(twoPlusThree).not.toBe(4);
  });

  test("subtract", () => {
    const twoMinusTwo = subtract(2, 2);
    const twoMinusThree = subtract(2, 3);

    expect(twoMinusTwo).toBe(0);
    expect(twoMinusThree).not.toBe(0);
  });
});

import { add, subtract } from "#lib/basic-math.ts";
import { describe, expect, test } from "vitest";

describe("add", () => {
  test("should add two numbers", () => {
    const twoPlusTwo = add(2, 2);
    const twoPlusThree = add(2, 3);

    expect(twoPlusTwo).toEqual(4);
    expect(twoPlusThree).toEqual(5);
  });
});

describe("subtract", () => {
  test("should subtract two numbers", () => {
    const twoMinusTwo = subtract(2, 2);
    const twoMinusThree = subtract(2, 3);

    expect(twoMinusTwo).toEqual(0);
    expect(twoMinusThree).toEqual(-1);
  });
});

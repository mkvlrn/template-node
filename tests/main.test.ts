import { describe, expect, test, vi } from "vitest";

describe("main", () => {
  test("should log the result to stdout", async () => {
    const consoleSpy = vi.spyOn(console, "log");

    await import("~/main.js");

    expect(consoleSpy).toHaveBeenCalledWith(4);
  });
});

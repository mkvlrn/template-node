import { describe, expect, test, vi } from "vitest";

describe("main", () => {
  test("should log the result to stdout", async () => {
    const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => ({}));

    await import("~/main.js");

    expect(consoleLogSpy).toHaveBeenCalledWith(4);
  });
});

import { describe, expect, it, vi } from "vitest";

describe("main", () => {
  it("should log the result to stdout", async () => {
    const consoleLogSpy = vi
      .spyOn(console, "log")
      .mockImplementation(() => ({}));
    await import("~/main");
    expect(consoleLogSpy).toHaveBeenCalledWith(4);
  });
});

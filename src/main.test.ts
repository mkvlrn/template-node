import { describe, expect, it, vi } from "vite-plus/test";
import { main } from "#/main";

vi.setConfig({
  testTimeout: 1000,
});

describe("main function", () => {
  it("should output the calculation result", () => {
    expect.hasAssertions();
    const logSpy = vi.spyOn(console, "info").mockReturnValue(undefined);

    main(["node", "src/main.ts", "2 + 2"]);

    expect(logSpy.mock.calls).toStrictEqual([["Calculating: 2 + 2"], ["Result: 4"]]);

    logSpy.mockRestore();
  });

  it("should output an error for an invalid expression", () => {
    expect.hasAssertions();
    const errorSpy = vi.spyOn(console, "info").mockReturnValue(undefined);

    main(["node", "src/main.ts", "2 +"]);

    expect(errorSpy).toHaveBeenCalledWith("Error: Invalid expression: 2 +");

    errorSpy.mockRestore();
  });
});

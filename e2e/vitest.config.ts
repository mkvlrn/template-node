import { defineConfig } from "vitest/config";
import baseConfig from "../vitest.config";

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    include: ["./e2e/**/*.test.{ts,tsx}"],
  },
});

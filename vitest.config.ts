import { defineConfig } from "vitest/config";

export default defineConfig(() => {
  return {
    test: {
      include: ["**/*.{test,spec}.ts"],
      exclude: ["node_modules"],
      watch: false,
      reporters: ["tree"],
      coverage: {
        all: true,
        clean: true,
        cleanOnRerun: true,
        include: ["src"],
        exclude: [],
      },
      // biome-ignore lint/style/useNamingConvention: needed for vitest
      env: { NODE_ENV: "test" },
      environment: "node",
      passWithNoTests: true,
      setupFiles: [],
    },
  };
});

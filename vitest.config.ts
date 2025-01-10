// biome-ignore lint/correctness/noNodejsModules: cli
import { readdirSync } from "node:fs";
// biome-ignore lint/correctness/noNodejsModules: cli
import { resolve } from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const validTestScripts = ["test", "test:integration", "test:e2e"];

// get npm script that called vitest
// defaults to "test" if no script was called
// (e.g. when running vitest directly or vitest extension in vscode)
let testScript = process.env.npm_lifecycle_event ?? "test";
if (testScript && !validTestScripts.includes(testScript)) {
  throw new Error(
    `Invalid test script "${testScript}". Valid test scripts are: ${validTestScripts.join(
      ", ",
    )}`,
  );
}
testScript = testScript.replace(":", "-");

// resolve setup files
// must be typescript (*.ts) files in ./test/<test-type>/.setup
const setupFiles: string[] = readdirSync(`./${testScript}/.setup`, {
  withFileTypes: true,
})
  .filter((file) => file.isFile())
  .filter((file) => file.name.endsWith(".ts"))
  .map((file) => resolve(`./${testScript}/.setup/${file.name}`));

// biome-ignore lint/style/noDefaultExport: needed for vitest
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // this is based on what kind of tests are being run, defaults to unit tests
    include: [`./${testScript}/**/*.test.{ts,tsx}`],
    reporters: ["verbose"],
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: "coverage",
      reporter: ["lcov", "html", "text"],
      include: ["src"],
    },
    // biome-ignore lint/style/useNamingConvention: needed for vitest
    env: { NODE_ENV: "test" },
    environment: "node",
    passWithNoTests: true,
    setupFiles,
  },
});

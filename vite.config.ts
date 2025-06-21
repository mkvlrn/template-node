import { glob } from "node:fs/promises";
import { nodeExternals } from "rollup-plugin-node-externals";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// all files except test files
const entryFiles: string[] = [];
for await (const file of glob("src/**/*.ts")) {
  if (!(file.endsWith(".test.ts") || file.endsWith(".spec.ts"))) {
    entryFiles.push(file);
  }
}

export default defineConfig({
  plugins: [
    // externalize node builtins and configure dependencies to be externalized (or not)
    nodeExternals({
      // externalize dependencies in package.json
      deps: true,
      // devDependencies in package.json
      devDeps: false,
      // dependencies to be made bundled
      exclude: ["@mkvlrn/result"],
    }),
    // resolve tsconfig path aliases
    tsconfigPaths(),
  ],

  build: {
    target: "esnext",
    lib: {
      entry: entryFiles,
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    outDir: "./build",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        // this outputs bundled/internal packages to a directory named _internal
        entryFileNames: ({ name }) => `${name.replace("node_modules/", "_internal/")}.js`,
      },
    },
    minify: "terser",
    terserOptions: {
      compress: false,
      format: {
        comments: false,
      },
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      target: "esnext",
      format: "esm",
    },
  },
});

import { rm } from "node:fs/promises";
import { build, type Options } from "tsup";

const options: Options = {
  bundle: true,
  cjsInterop: false,
  dts: false,
  entry: ["src/main.ts"],
  esbuildOptions: (options) => {
    options.conditions = ["dev"];
  },
  external: [],
  format: ["esm"],
  minify: false,
  noExternal: [],
  outDir: "build",
  platform: "node",
  sourcemap: false,
  splitting: false,
  target: "esnext",
};

await rm("build", { force: true, recursive: true });
await build(options);

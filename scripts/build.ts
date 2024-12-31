import fs from "node:fs/promises";
import swc from "@swc/core";

const out = "./dist";

// clean up old output
await fs.rm(out, { recursive: true, force: true });

// get all entry points
const files: string[] = [];
for await (const file of fs.glob("src/**/*.ts")) {
  files.push(file);
}

// transform files
await Promise.all(
  files.map(async (file) => {
    const { code } = await swc.transformFile(file, {
      jsc: {
        parser: {
          syntax: "typescript",
          decorators: true,
          dynamicImport: true,
        },
        target: "esnext",
        transform: {
          decoratorMetadata: true,
        },
      },
      module: {
        type: "es6",
        strict: true,
      },
    });

    const outputPath = `${out}/${file.replace(/^src\//, "").replace(/\.ts$/, ".js")}`;
    await fs.mkdir(outputPath.replace(/\/[^/]+$/, ""), { recursive: true });
    await fs.writeFile(outputPath, code);
  }),
);

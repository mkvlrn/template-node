// TODO: revisit whenever swc passes flags to node
// https://github.com/swc-project/swc-node/issues/890

// import fs from "node:fs/promises";
// import swc from "@swc/core";

// const REGEX_SRC = /^src\//;
// const REGEX_TS = /\.ts$/;
// const REGEX_OUTPUT_PATH = /\/[^/]+$/;
// const OUT = "./dist";

// // clean up old output
// await fs.rm(OUT, { recursive: true, force: true });

// // get all entry points
// const files: string[] = [];
// for await (const file of fs.glob("src/**/*.ts")) {
//   files.push(file);
// }

// // transform files
// await Promise.all(
//   files.map(async (file) => {
//     const { code } = await swc.transformFile(file, {
//       jsc: {
//         parser: {
//           syntax: "typescript",
//           decorators: true,
//           dynamicImport: true,
//         },
//         target: "esnext",
//         transform: {
//           decoratorMetadata: true,
//         },
//       },
//       module: {
//         type: "es6",
//         strict: true,
//       },
//     });

//     const outputPath = `${OUT}/${file.replace(REGEX_SRC, "").replace(REGEX_TS, ".js")}`;
//     await fs.mkdir(outputPath.replace(REGEX_OUTPUT_PATH, ""), { recursive: true });
//     await fs.writeFile(outputPath, code);
//   }),
// );

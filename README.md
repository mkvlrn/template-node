# template-node

![build](https://img.shields.io/github/actions/workflow/status/mkvlrn/template-node/checks.yml?branch=main&style=flat&logo=github)
[![template](https://img.shields.io/badge/template-use_this_template-2ea44f?style=flat&logo=github)](https://github.com/mkvlrn/template-node/generate)
[![mise](https://mise-versions.jdx.dev/badge.svg)](https://mise.jdx.dev)
![license](https://img.shields.io/github/license/mkvlrn/template-node?style=flat)

A sane, opinionated template for esm node projects written in typescript that doesn't rely on transpilation - typescript is ran directly by node.

> [!CAUTION]
> This template use [mise](https://mise.jdx.dev) as tool manager and task runner.
>
> You _**need to have it [installed](https://mise.jdx.dev/installing-mise.html)**_, so everything is in sync correctly and development runs smoothly. Start [here](https://mise.jdx.dev/getting-started.html) if you don't know what this means.

Uses, among other tools/packages:

- [pnpm](https://github.com/pnpm/pnpm) as package manager for node dependencies
- [biome](https://github.com/biomejs/biome) for code linting and formatting
- [lefthook](https://github.com/evilmartians/lefthook) for git hooks
- [cocogitto](https://github.com/cocogitto/cocogitto) for commit message linting
- [vitest](https://github.com/vitest-dev/vitest) for testing

## requirements and dependencies

As noted at the top, you need [mise](https://mise.jdx.dev) to get started with this template. Run `mise install` in the project root, you'll have the correct versions of various tools in the repository directory.

This is _by far_ the easiest way to keep your environment consistent across different machines and team members, no matter the frequency of version updates.

Once the tooling is installed, you can install the node dependencies with pnpm:

```bash
pnpm install
```

> [!NOTE]
> Git hooks are in place to make sure both the tooling managed by mise and the project dependencies are synced with each checkout and merge.

## subpath imports

Subpath imports (`#/`) are used instead of relative paths, mapped in both `package.json` and `tsconfig.json`.

**Example**:

```ts
import { add } from "#/lib/math"; // this points to ./src/lib/math.ts
```

## running

### `mise dev`

Runs the project in watch mode.

### `mise test`

Runs tests.

### `mise lint-fix`

Runs biome in fix mode to lint and format the project.

### `mise typecheck`

Runs type checking using tsc.

## ci

This repository uses GitHub Actions for CI. The workflow is defined in `.github/workflows/checks.yml`.

It automates:

- **Linting & Formatting**: Running Biome.
- **Type Checking**: Running TypeScript type checking.
- **Testing**: Running Vitest, halting the workflow at the first test failure.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

This is done by the `.vscode/settings.json` file.

Debug configuration is also included for running the source directly with node.

## license

MIT

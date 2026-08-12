# template-node

![build](https://img.shields.io/github/actions/workflow/status/mkvlrn/template-node/checks.yml?branch=main&style=flat&logo=github)
[![template](https://img.shields.io/badge/template-use_this_template-2ea44f?style=flat&logo=github)](https://github.com/mkvlrn/template-node/generate)
[![mise](https://mise-versions.jdx.dev/badge.svg)](https://mise.jdx.dev)
![license](https://img.shields.io/github/license/mkvlrn/template-node?style=flat)

A sane, opinionated template for esm node projects written in typescript that doesn't rely on transpilation - typescript is executed directly by node.

> [!NOTE]
> This template uses [arch-devcontainer](https://github.com/mkvlrn/arch-devcontainer) to provide a consistent development environment with Arch Linux and [mise](https://mise.jdx.dev) preconfigured.
>
> You can use the template directly with a devcontainer-compatible editor such as VS Code, or start it from the command line with `./.devcontainer/start.sh`.

Uses, among other tools/packages:

- [bun](https://github.com/oven-sh/bun) as package manager for node dependencies
- [biome](https://github.com/biomejs/biome) for code linting and formatting
- [lefthook](https://github.com/evilmartians/lefthook) for git hooks
- [cocogitto](https://github.com/cocogitto/cocogitto) for commit message linting
- [vitest](https://github.com/vitest-dev/vitest) for testing

## requirements and dependencies

You need [Docker](https://www.docker.com/) and a devcontainer-compatible editor or the [Dev Container CLI](https://github.com/devcontainers/cli) to get started.

The development environment is provided by [arch-devcontainer](https://github.com/mkvlrn/arch-devcontainer), which includes mise, which will be managing most of the tooling in this template.

Once the devcontainer is running, you can install the Node dependencies with `bun install`.

> [!NOTE]
> Git hooks are in place to make sure both the tooling managed by mise and the project dependencies are synced with each checkout and merge.

## subpath imports

Subpath imports (`#/`) are used instead of relative paths, mapped via the `imports` field in `package.json` (allowing native Node resolution at runtime without extra build tools) and mirrored in `tsconfig.json` for IDE support.

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

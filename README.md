# template-node

[![ci](https://img.shields.io/github/actions/workflow/status/mkvlrn/template-node/checks.yml?branch=main&style=flat&logo=github&label=ci)](https://github.com/mkvlrn/template-node/actions/workflows/checks.yml?query=branch%3Amain)
[![template](https://img.shields.io/badge/template-use_this_template-2ea44f?style=flat&logo=github)](https://github.com/mkvlrn/template-node/generate)
[![mise](https://mise-versions.jdx.dev/badge.svg)](https://mise.jdx.dev)
[![license](https://img.shields.io/github/license/mkvlrn/template-node?style=flat)](https://github.com/mkvlrn/template-node/blob/main/LICENSE)

A sane, opinionated template for ESM Node.js projects written in TypeScript without a transpilation step — TypeScript is executed directly by Node.js.

> [!TIP]
> Using [mise](https://mise.jdx.dev) locally is the path of least friction: it manages the project-specific runtimes, tools, and tasks without requiring a container.
>
> This template also includes an optional Arch Linux Dev Container based on [mise-devcontainers](https://github.com/mkvlrn/mise-devcontainers). It is suggested if you do not normally use `mise` or want a consistent, preconfigured development environment.

Uses, among other tools/packages:

- [pnpm](https://github.com/pnpm/pnpm) as package manager
- [Biome](https://github.com/biomejs/biome) for linting and formatting
- [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks
- [Commitlint](https://commitlint.js.org) with [config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) for commit message linting
- [Vitest](https://github.com/vitest-dev/vitest) for testing

## requirements and dependencies

Using `mise` locally is recommended and provides the least-friction setup. If you do not normally use `mise`, the included Dev Container is an optional way to get a consistent development environment with everything preconfigured.

To use the Dev Container you need:

- Docker or a compatible container runtime
- a Dev Container-compatible editor or the [Dev Container CLI](https://github.com/devcontainers/cli)
- an SSH agent exposed through `SSH_AUTH_SOCK` with at least one key loaded

The SSH agent is forwarded into the container for Git authentication and commit signing. Private keys remain on the host.

If you use the Dev Container, once inside it, install the project dependencies:

```sh
pnpm install
```

The project-specific runtimes and development tools are managed by `mise`.

If you do not use the Dev Container, install [mise](https://mise.jdx.dev) locally and run `mise install` before installing the project dependencies.

> [!NOTE]
> After mise installs the configured tools, the post-install hook installs project packages and then sets up the Lefthook Git hooks.

> [!NOTE]
> Git hooks keep the tooling managed by mise and the project dependencies synchronized after checkouts and merges.

## subpath imports

Subpath imports (`#/`) are used instead of relative paths. They are mapped through the `imports` field in `package.json`, allowing native Node.js resolution at runtime without additional build tooling, and mirrored in `tsconfig.json` for editor support.

Example:

```ts
import { add } from "#/lib/math"; // ./src/lib/math.ts
```

## running

### `mise run dev`

Runs the project in watch mode.

### `mise run test`

Runs the tests.

### `mise run lint-fix`

Runs Biome in fix mode to lint and format the project.

### `mise run typecheck`

Runs TypeScript type checking.

## ci

CI is provided by GitHub Actions through [`.github/workflows/checks.yml`](https://github.com/mkvlrn/template-node/blob/main/.github/workflows/checks.yml).

It runs:

- Biome linting and formatting checks
- TypeScript type checking
- Vitest tests

## license

[MIT](https://github.com/mkvlrn/template-node/blob/main/LICENSE)

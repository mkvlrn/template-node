# template-node

A sane, opinionated template for esm node projects written in typescript that doesn't rely on transpilation - typescript is ran directly by node.

> [!NOTE]
> This template favors [pnpm](https://pnpm.io). All instructions assume pnpm. If you insist on npm or yarn, you're on your own.
>
> This template targets Node.js LTS (>=24).

Uses:

- [biome](https://github.com/biomejs/biome) for linting and formatting
- [commitlint](https://github.com/conventional-changelog/commitlint) for linting commit messages
- [husky](https://github.com/typicode/husky) for git hooks
- [lint-staged](https://github.com/lint-staged/lint-staged) for checks on commit
- [vitest](https://github.com/vitest-dev/vitest) for testing

Subpath imports (`#/`) are used instead of relative paths, mapped in both `package.json` and `tsconfig.json`.

## running

### `pnpm dev`

Runs the project in watch mode.

### `pnpm start`

Runs the project.

### `pnpm test`

Runs tests.

### `pnpm biome-fix`

Runs biome in fix mode to lint and format the project.

### `pnpm typecheck`

Runs type checking using tsc.

## ci

GitHub Actions runs on pushes and pull requests to `main`, executing tsc, biome check, and tests.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

This is done by the `.vscode/settings.json` file.

Debug configuration is also included for running the source directly with node.

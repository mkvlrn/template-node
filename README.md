# template-node

A sane, opinionated template for esm node projects written in typescript that doesn't rely on transpilation - typescritp is ran directly by node.

For new, current (v25) node projects.

Uses:

- [biome](https://github.com/biomejs/biome) for linting and formatting
- [commitlint](https://github.com/conventional-changelog/commitlint) for linting commit messages
- [husky](https://github.com/typicode/husky) for git hooks
- [lint-staged](https://github.com/lint-staged/lint-staged) for checks on commit

## running

### `pnpm dev`

Runs the project in watch mode.

### `pnpm start`

Runs the project.

### `pnpm test`

Runs tests.

### `pnpm biome-fix`

Runs biome in fix mode (only [safe fixes](https://biomejs.dev/linter/#safe-fixes)) to lint and format the project.

### `pnpm typecheck`

Runs type checking using tsc.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

This is done by the `.vscode/settings.json` file.

Debug configurations are also included (for source using tsx and for bundle using the generated source maps).

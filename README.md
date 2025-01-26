# template-node

A sane, opinionated template for esm node projects written in typescript.

Uses:

- [biome](https://github.com/biomejs/biome) for linting and formatting
- [tsx](https://github.com/privatenumber/tsx) for running typescript code without transpiling
- [vitest](https://github.com/vitest-dev/vitest) for tests
- [commitlint](https://github.com/conventional-changelog/commitlint) for linting commit messages
- [husky](https://github.com/typicode/husky) for git hooks
- [tsup](https://github.com/egoist/tsup) for building

## running

### `yarn dev`

Runs the project in watch mode, automatically restarting on changes. Uses [tsx](https://github.com/privatenumber/tsx) to run the typescript code without transpiling to `./build`.

### `yarn build`

Builds/transpiles the code to `./build`.

### `yarn start`

Runs the built project.

### `yarn test`, `yarn test:e2e`

Runs tests with vitest.

### `yarn tidy`

Runs biome in fix mode (only [safe fixes](https://biomejs.dev/linter/#safe-fixes)) to lint and format the project. Not only `./src`, but also all "loose" config files around root (js, ts, json, jsonc) or other directories.

### `yarn typecheck`

Runs type checking using tsc and the `tsconfig.json` file, which is not the one used to build the project.

## that tsconfig.json seems very strict and opinionated

Yup.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

I suggesting using the settings in `.vscode/settings-example.json`, that should be pasted into your own `.vscode/settings.json`. I'm not commiting the `.vscode/settings.json` proper because it shouldn't be in VCS as it contains your personal settings.

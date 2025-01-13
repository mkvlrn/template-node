# template-node

A sane, opinionated template for esm node projects written in typescript.

## running

### `yarn dev`

Runs the project in watch mode, automatically restarting on changes. Uses [tsx](https://github.com/privatenumber/tsx) to run the typescript code without transpiling to `./build`.

### `yarn build`

Builds the project to `./build`.

### `yarn start`

Runs the built project.

### `yarn test`

Runs unit tests using the [node test runner](https://nodejs.org/api/test.html).

### `yarn tidy`

Runs biome in fix mode (only [safe fixes](https://biomejs.dev/linter/#safe-fixes)) to lint and format the project. Not only `./src` but all "loose" config files around root (js, ts, json, jsonc) or other directories.

## that tsconfig.json seems very strict and opinionated

Yup.

## vscode

You might want to install the recommended extensions in vscode (workspace recommended):

- [biomejs.biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
- [ms-vscode.test-adapter-converter](https://marketplace.visualstudio.com/items?itemName=ms-vscode.test-adapter-converter)
- [connor4312.nodejs-testing](https://marketplace.visualstudio.com/items?itemName=connor4312.nodejs-testing)

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

I suggesting using the settings in `.vscode/settings-example.json`, that should be pasted into your own `.vscode/settings.json`. I'm not commiting the `.vscode/settings.json` proper because it shouldn't be in VCS as it contains your personal settings.

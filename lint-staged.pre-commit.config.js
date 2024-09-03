// this config is used on the pre-commit hook

export default {
  "*.(ts|tsx)": [() => "tsc --no-emit", "eslint --fix", "prettier --write"],
  "*.(json)": ["prettier --write"],
};

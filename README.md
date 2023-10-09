## EternalCodeTeam Docs

**Description**

This is just the documentation for EternalCode projects.
You can find here information about our projects, how to use them and more!
WWW: https://docs.eternalcode.pl/

**How to run the docs**

To run the docs, follow these steps:

1. Install dependencies: `pnpm install`
2. Run the docs in development mode: `pnpm run docs:dev`
3. Build the docs: `pnpm run docs:build`
4. Serve the docs: `pnpm run docs:serve`

The docs will be served on http://localhost:3000. (Or another port if this one is already in use)

**Scripts**

The project contains the following scripts:

* `docs:dev`: Runs the docs in development mode.
* `docs:build`: Compiles the docs to a static web page.
* `docs:preview`: Runs the docs in preview mode.
* `docs:serve`: Serves the docs in server mode.
* `lint:js`: Lints code using ESLint.
* `lint:prettier`: Lints code using Prettier.
* `lint`: Lints code using ESLint and Prettier.
* `lintfix`: Lints and fixes code using ESLint and Prettier.

**Technologies**

The project uses the following technologies:

* Vue.js: A JavaScript framework for building user interfaces
* VitePress: Vue.js documentation generator
* Vite: A tool for building and developing Vue.js apps
* ESLint: A tool for linting JavaScript code
* Prettier: A tool for formatting JavaScript code
# callsign portal

This monorepo callsign allows you to start immediately with a [React](https://reactjs.org) ([TypeScript](https://www.typescriptlang.org)) single-page application, but it can also be used for any other type of web app.

The callsign takes away the work of having to assemble and configure all the tools for professional development yourself.

## Getting Started

1. Execute the following commands in your terminal:

```sh
pnpm install
pnpm dev
```

:rocket: Now you can get up and running with your ideas!

## Scripts

### Root

```sh
# run all dev servers in parallel during development
pnpm dev

# build all workspaces
pnpm build

# run all preview servers in parallel
pnpm preview

# lint all workspaces
pnpm lint

# run tests for each workspace
pnpm test

# run tests and check coverage for each workspace
pnpm test:coverage

# run type checks for each workspace
pnpm typecheck

# format repo files
pnpm format

# describe a feat/fix changes and add the changeset
pnpm changeset

# update version and create tags
pnpm release
```

### Workspace: Next

[See README](./apps/next/README.md#scripts)

### Workspace: Vite

[See README](./apps/vite/README.md#scripts)

## Workflows

### CI

[See workflow](./.github/workflows/ci.yml)

#### Events

- `push`
- `pull_request`

#### Jobs

- `test`
  - run typecheck
  - run lint
  - run tests and check coverage threshold
- `build`
  - needs all other **jobs** were **successful**
  - run on **push** and only for the **main** branch
  - build apps
  - upload builded apps as artifact

#### Secrets

## Tools

The following tools are used in this monorepo:

### Root

The root of the repository includes the following tools:

- [Changesets](https://github.com/changesets/changesets)
- [Commitlint](https://commitlint.js.org)
- [ESLint](https://eslint.org)
- [Husky](https://typicode.github.io/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io)
- [Turborepo](https://turborepo.org)
- [TypeScript](https://www.typescriptlang.org)

### Workspace: Next

[See README](./apps/next/README.md#tools)

### Workspace: Vite

[See README](./apps/vite/README.md#tools)

## License

MIT License

Copyright (c) 2022 Ahmed Ragab

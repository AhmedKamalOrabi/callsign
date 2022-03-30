# callsign portal

This monorepo callsign

Must you have pnpm installed in your machine check this https://pnpm.io/installation

visit the deployed version https://mfe-platform.s3.us-east-2.amazonaws.com/index.html

## Getting Started

1. Execute the following commands in your terminal:

```sh
pnpm install
pnpm dev
```

to run the vite app

```pnpm run dev --filter vite

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

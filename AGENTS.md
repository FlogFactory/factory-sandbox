# AGENTS.md

A tiny TypeScript library of text helpers that the software factory practises on. It has no dependencies and no build step.

## Layout
- `src/text.ts`: all the code. Exported functions, each with a JSDoc comment that describes its behaviour.
- `test/text.test.ts`: tests, using `node:test` and `node:assert/strict`, with one `test()` per function or behaviour.

## Commands
Node 22 or later. There's nothing to install.
- `npm test`: runs all tests. Run it before opening a PR.
- `npm run check`: syntax-checks `src/` (type stripping, no type checker).

There are no other commands: no lint, formatter, build or type check. Don't add tools or dependencies unless the issue asks for them.

## Conventions
- TypeScript run directly by Node (`--experimental-strip-types`): use only erasable syntax (no `enum`, `namespace` or parameter properties), and import with the `.ts` extension.
- Two-space indent, single quotes, semicolons. Match the surrounding code.
- When behaviour changes, update the function's JSDoc and add or adjust a test in the same change.
- Keep changes to what the issue asks for; mention anything else you notice in the PR instead of changing it.

## How to work
- **Plans name the skill the build follows.**
  - A bug: `diagnosing-bugs`. The plan includes the reproduction command, its failing output, and the ranked hypotheses.
  - New or changed behaviour: `tdd`. The plan names the seams under test.
  - A new module or a changed interface: `codebase-design`, and only then.
- Write the pull request with `file-pr`.
- Use the terms in `CONTEXT.md` if the repo has one. If your change adds a domain term, add it there in the same PR.

## Pull requests
- One issue per PR. Reference the issue (`Fixes #N`) in the description.
- `main` is protected: a PR needs an approving review from the owner, who merges.

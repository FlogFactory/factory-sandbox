# factory-sandbox

A deliberately small project for testing the software factory end to end: issues are dispatched here, the factory investigates, plans, implements and opens pull requests. Nothing here matters; it is safe to break.

- `npm test`: runs the tests (Node 22+, no dependencies)
- `.factory/verify.json`: the commands the factory runs to verify a change (ADR-0004). Read from the default branch, never from the agent's branch.

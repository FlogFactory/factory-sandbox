# factory-sandbox

A deliberately small project for testing the software factory end to end: issues opened here go to Mastra Factory, which plans, implements and opens pull requests. Nothing here matters; it is safe to break.

- `npm test`: runs the tests (Node 22+, no dependencies)
- `AGENTS.md`: layout, commands and conventions for coding agents

## Marketing site

The Slugify marketing page lives in `site/` and is built with Astro and Tailwind CSS. It produces a static site in `site/dist` that can be served from any static host.

GitHub Pages deployment is not enabled yet: the GitHub App used by the factory lacks the `workflows` permission to add the Pages workflow. The prepared workflow is included in the pull request body for a maintainer to add.

```sh
cd site
npm install
npm run dev      # local dev server
npm run build    # static build in site/dist
npm run preview  # preview the built site
```

The site is served from `https://flogfactory.github.io/factory-sandbox/`.

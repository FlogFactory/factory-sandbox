# factory-sandbox

A deliberately small project for testing the software factory end to end: issues are dispatched here, the factory investigates, plans, implements and opens pull requests. Nothing here matters; it is safe to break.

- `npm test`: runs the tests (Node 22+, no dependencies)
- `.factory/verify.json`: the commands the factory runs to verify a change (ADR-0004). Read from the default branch, never from the agent's branch.

## Marketing site

The Slugify marketing page lives in `site/` and is built with Astro and Tailwind CSS. It is published to GitHub Pages by `.github/workflows/site.yml`.

```sh
cd site
npm install
npm run dev      # local dev server
npm run build    # static build in site/dist
npm run preview  # preview the built site
```

The site is served from `https://flogfactory.github.io/factory-sandbox/`.

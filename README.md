# US State & Territory Icons — Next.js POC

First real consumer of [`united-states-and-territories-solid-svg-icons`](https://www.npmjs.com/package/united-states-and-territories-solid-svg-icons).
Built to answer two questions: does the published package work in a modern React
app, and what will it take to drop it into NWYC's `apps/web`?

Stack mirrors NWYC: Next.js App Router, TypeScript, styled-components,
kebab-case filenames with styles in sibling `.styles.ts` files.

## Run it

```sh
npm install
npm run dev     # http://localhost:3000
```

| Route | What |
|---|---|
| `/` | Searchable gallery of all 56 icons, size toggle, copy-the-import button |
| `/compare` | `<FontAwesomeIcon>` vs. a raw-SVG component, plus runtime lookup by name |

## About the install

The package is installed from `vendor/*.tgz`, not from npm. SafeDep PMG (the
guard `npm` is aliased to) quarantines newly published packages for 5 days, so
`1.0.1` is blocked until **2026-09-21**. The tarball here was produced by
`npm pack` from the source repo and is byte-identical to the published one — all
230 files verified with `diff -rq`.

To switch to the registry once the hold expires:

```sh
npm uninstall united-states-and-territories-solid-svg-icons
npm i united-states-and-territories-solid-svg-icons@^1.0.1
rm -rf vendor
```

## What the POC found

### 1. The README's `title` prop no longer labels anything (accessibility bug)

The package README documents:

```jsx
<FontAwesomeIcon icon={faTexas} title="Texas" />
```

Font Awesome 7 deprecated `title` and made icons decorative by default. That
call renders `aria-hidden="true"` with **no accessible name** — a consumer
following the README ships unlabeled icons while believing they labeled them.
Verified in this app's SSR output.

The working form, and what `/compare` uses:

```jsx
<FontAwesomeIcon icon={faTexas} aria-label="Texas" />
// -> <svg role="img" aria-hidden="false" aria-label="Texas">
```

The README's Vue and Angular examples use `title` the same way and need the
same correction. The bare-SVG guidance is unaffected.

### 2. Labels aren't in the published package

`metadata/icons.json` lives in the repo but isn't packed, so consumers get icon
names (`district-of-columbia`) and no display labels. Title-casing the words
gets 54 of 56 right; `district-of-columbia` and `us-virgin-islands` need
overrides, which every consumer will have to rediscover. See the override map in
[`src/lib/icons.ts`](src/lib/icons.ts). Worth shipping a labels map in a future
minor version.

### 3. `<FontAwesomeIcon>` does render in a Server Component

It uses `useId`/`useMemo` and ships no `"use client"` directive, so this looked
likely to fail. It doesn't — `/compare` is a Server Component and prerenders
fine. Undocumented by Font Awesome though, so worth re-checking on FA upgrades.

### 4. Everything else worked as documented

Per-icon subpath imports (CommonJS) interop correctly with ESM named imports,
the bundled `.d.ts` files typecheck under `strict`, icon definitions pass
straight through the RSC boundary as props, and `usat` dedupes to exactly 56.
Runtime lookups via `findIconDefinition` need `as IconPrefix` / `as IconName`
casts, as the README says — that's a Font Awesome type limitation, not a package
defect.

## Layout

```
src/
  app/
    layout.tsx                      FA config, styled-components registry, theme
    page.tsx                        Server Component -> gallery
    compare/page.tsx                Renderer comparison + runtime lookup
    styled-components-registry.tsx  SSR style flushing for App Router
  components/
    icon-gallery/                   Search + size toggle + grid (client)
    icon-card/                      One icon via <FontAwesomeIcon> (client)
    size-toggle/                    Native radio group (client)
    state-icon/                     Raw-SVG renderer, no dependencies (server)
  lib/
    icons.ts                        usat -> 56 deduped entries
    icon-lookup.ts                  library.add + findIconDefinition demo
    icon-sizes.ts                   Sizes + README legibility thresholds
    fontawesome.ts                  config.autoAddCss = false
```

# bitcoin.rocks — Claude Code project guide

This file is auto-loaded into every Claude Code session in this repo. It pulls
in the persistent project rules, memory-bank context, and pointers to the
slash-command workflows.

## Project at a glance

bitcoin.rocks is a Bitcoin education website founded in 2022 — the "first link"
for Bitcoin newcomers. As of April 2026 it runs on **Next.js 16 + React 19 +
TypeScript + Tailwind v4**, server-rendered per-locale across **55 languages**,
hosted on Railway. Content lives in the git repo (TypeScript data files +
flat-key i18n JSON), not a CMS. Form submissions and the inflation API are
served by a separate Railway service in `forms-backend/`.

See `MIGRATION-NEXTJS.md` for the legacy-to-Next migration history and
`V2-REDESIGN-CHECKLIST.md` for the in-flight V2 redesign status.

## Project rules and conventions

The full project intelligence document — stack, architecture, V2 design system,
i18n rules, content workflows, GA event registration, common gotchas — lives in
`.clinerules/workspace-rules.md` and is imported below. Treat it as the
authoritative ruleset for this repo.

@.clinerules/workspace-rules.md

## Memory bank

Stable foundation docs (small, slow-changing) are imported here so they're
always in context:

@memory-bank/projectbrief.md
@memory-bank/productContext.md
@memory-bank/systemPatterns.md
@memory-bank/techContext.md

The two journal-style memory-bank files are **deliberately not @-imported**
because they grow continuously and would dominate the context window:

- **`memory-bank/activeContext.md`** — chronological log of every locale
  refresh and recent decision. Read it on demand when investigating recent
  changes; prepend a new entry at the top when finishing a session that
  warrants documentation (per `.clinerules/workspace-rules.md` and the
  manifest-refresh workflow).
- **`memory-bank/progress.md`** — Step-5 counter and completion log for the
  V2 i18n refresh. Read it on demand; bump the counter when a locale's
  manifest refresh lands.

The `memory-bank/migration/` subdirectory holds historical migration
artifacts (e.g. `page-inventory.md`) — read on demand only.

## Slash commands

Workflow documents from `.clinerules/workflows/` are wired up as Claude Code
slash commands under `.claude/commands/`:

- **`/translate-manifest-refresh <Language Name>`** — drive one existing
  locale through the V2 manifest refresh pass (language-diff → translate →
  apply → verify → build → checklist + memory bank). Source workflow:
  `.clinerules/workflows/manifest-translate-refresh.md`.
- **`/translate-new-language <Language Name>`** — bootstrap a brand-new
  locale: all ~81 i18n JSON files, locale-config wiring, about-page count
  bump, `llms.txt` / `llms-full.txt` updates, memory-bank entries, build
  verification. Source workflow:
  `.clinerules/workflows/translate-new-language.md`.

## Key everyday commands

```bash
npm run dev        # Next dev server on localhost:3000 (Turbopack)
npm run build      # Production build (~4,700 prerendered routes)
npm run lint       # ESLint
npm run typecheck  # TypeScript strict mode

# i18n audit / refresh
node scripts/i18n-audit/snapshot-english.js     # refresh English snapshot
node scripts/i18n-audit/language-diff.js <code> # generate per-locale work queue
node scripts/i18n-audit/apply-translations.js <code>  # merge + verify
node scripts/i18n-audit/verify-language.js <code> # verify locale (manifest + coverage + stale-English)
```

## Repo layout pointers

- `app/[locale]/<slug>/page.tsx` — per-locale routes (file-based)
- `components/` — React components (Server by default; `"use client"` where needed)
- `lib/i18n/` — config, navigation wrapper, message loader, request setup
- `lib/schema/` — JSON-LD builders (article, organization, breadcrumb, etc.)
- `lib/pages.ts` — canonical page registry (slug + namespace + sitemap priority)
- `i18n/<locale>/*.json` — flat snake_case translation files (tab indented)
- `scripts/i18n-audit/` — manifest, snapshot, diff, apply, verify tooling
- `scripts/<lang>-manifest-refresh/` — per-locale helper scripts (one folder per refresh pass)
- `forms-backend/` — separate Railway service (untouched from frontend changes)

## Tools guidance (repeat from workspace-rules)

- **Never edit i18n JSON via inline CLI** (`node -e "…"` / sed / shell heredoc).
  Special characters (Cyrillic, Thai, Arabic, typographic quotes) get corrupted.
  Always go through a `.js` file in `scripts/` using `JSON.parse` / `JSON.stringify(obj, null, "\t")`, or use `Write` for the whole file.
- **Tab indentation is mandatory** in i18n JSON files.
- Prefer `Read` / `Edit` / `Write` over `cat` / `sed` / `awk`.

# bitcoin.rocks

## Mission
The mission of bitcoin.rocks is to accelerate bitcoin adoption through education.

We accomplish this with several free resources:

- [An educational website](https://bitcoin.rocks) designed for people who are new to bitcoin.
- [Bitcoin Stickers](https://bitcoin.rocks/stickers) that enable you to leave an orange pill in public.
- [Bitcoin Flyers](https://bitcoin.rocks/flyers) that you can print and post in public to spread bitcoin awareness.
- [Bitcoin for Business resources](https://bitcoin.rocks/business) that help you get a local business to accept bitcoin payments.

## Website Overview
bitcoin.rocks is an educational website designed for people who are new to bitcoin. The website was founded in 2022 as a "first link" to send to people who ask you about bitcoin.

The main focus of the website is [the homepage](https://bitcoin.rocks) which links out to a variety of internal and external sources depending on the user's interests.

You can view the website here: https://bitcoin.rocks

## Website Architecture
bitcoin.rocks is built on **Next.js 16 + React 19 + TypeScript + Tailwind v4**. Every page is server-rendered per-locale so crawlers and AI systems see translated content in the initial HTML response (all ~55 languages).

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Language:** TypeScript 5.6 (strict mode)
- **Styling:** Tailwind v4 (CSS-first `@theme {}` config in `app/globals.css`)
- **i18n:** `next-intl` + existing `i18n/<locale>/*.json` files (jquery.i18n-compatible flat snake_case keys)
- **Hosting:** Railway (Next server) for the frontend; separate Railway service for form submissions
- **Analytics:** Google Analytics 4 (`G-18L58W2GTN`)

All translation files live in `i18n/` — one JSON file per page per language. You can see which translations are in progress in the [Translations forum.](https://github.com/sovenor/bitcoin-rocks/discussions/categories/translations)

For a detailed architectural tour, see `memory-bank/systemPatterns.md` and `memory-bank/techContext.md`.

## Local Development
Requires **Node.js 20+** and **npm**.

```bash
# Clone the repository
git clone https://github.com/sovenor/bitcoin-rocks.git
cd bitcoin-rocks

# Install dependencies (first time only)
npm install

# Start the dev server
npm run dev
# → open http://localhost:3000/ (auto-redirects to /en/ on first visit)

# Run a full production build across all 55 locales
npm run build

# Serve the production build locally
npm run start

# Lint + type-check
npm run lint
npm run typecheck
```

## License
This project is 100% free and open-source. It is licensed under the MIT License. You are free to take any of the content within and use it for your own purposes. The goal is to make the project more public and open over time.

## Contribute
You can contribute to bitcoin.rocks even if you aren't a programmer! We currently have a strong focus on translations, but there are many ways you can help accelerate bitcoin adoption.

Please read our [Contributor Guide](https://github.com/sovenor/bitcoin-rocks/blob/main/CONTRIBUTING.md) to learn more.

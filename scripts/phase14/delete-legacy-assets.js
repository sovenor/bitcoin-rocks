#!/usr/bin/env node
/**
 * Phase 14 — delete legacy static-site assets that the Next.js app has
 * fully replaced. Idempotent: skips anything that's already gone.
 *
 * Preserves:
 *   - `public/img/**`, `public/favicons/**`, `public/sticker-files/**`,
 *     `public/business/**` (copied in earlier phases — already part of
 *     the Next deploy).
 *   - `forms-backend/` (separate Railway service).
 *   - Everything listed in "Keep" in MIGRATION-NEXTJS.md Phase 14.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");

// ───────────────────────────────────────────────────────── files ───
const FILES_TO_DELETE = [
	// Root-level HTML pages (migrated)
	"404.html",
	"about.html",
	"bank-runs.html",
	"bitcoin-vs-banks.html",
	"bitcoin-vs-bonds.html",
	"bitcoin-vs-cash.html",
	"bitcoin-vs-cbdc.html",
	"bitcoin-vs-crypto.html",
	"bitcoin-vs-fine-art.html",
	"bitcoin-vs-gold.html",
	"bitcoin-vs-real-estate.html",
	"bitcoin-vs-stocks.html",
	"bitcoin-vs-visa.html",
	"buy.html",
	"compound-inflation-calculator.html",
	"flyers.html",
	"get-involved.html",
	"index.html",
	"inflation.html",
	"lightning.html",
	"postcard-success.html",
	"postcards.html",
	"sign-success.html",
	"signs.html",
	"sticker-language-success.html",
	"sticker-success.html",
	"stickers.html",
	"wallets.html",

	// Apache / nginx config (replaced by next.config.ts redirects/headers)
	"nginx.conf",
	"robots.txt", // replaced by app/robots.ts

	// Legacy inject scripts (Phase 4 ported them to lib/schema/*.ts)
	"scripts/inject-seo-content.js",
	"scripts/inject-article-schema.js",
	"scripts/inject-breadcrumb-schema.js",
	"scripts/inject-comparison-schema.js",
	"scripts/inject-organization-schema.js",
	"scripts/inject-reviewed-badge.js",

	// Legacy one-off HTML helpers no longer needed
	"scripts/fix-carousel-wrap.js",
	"scripts/update-inflation-i18n.js",
	"scripts/update-inflation-revamp.js",
	"scripts/update-index-i18n-for-saving.js",
	"scripts/add-faq-keys.js",
	"scripts/add-whats-next-keys.js",
	"scripts/audit-v2-v1-pages.js",
];

// ─────────────────────────────────────────────────────── folders ───
const FOLDERS_TO_DELETE = [
	// Legacy HTML sub-sites (now Next routes)
	"business",
	"nostr",
	"sticker-files",

	// Legacy front-end JS + CSS
	"jquery",
	"css",

	// Legacy helper scripts tied to the static pipeline
	"scripts/inflation-multi",
];

// ─────────────────────────────────────────────────────────── run ───
let deletedFiles = 0;
let skippedFiles = 0;
let deletedDirs = 0;
let skippedDirs = 0;

for (const rel of FILES_TO_DELETE) {
	const abs = path.join(ROOT, rel);
	if (!fs.existsSync(abs)) {
		skippedFiles++;
		continue;
	}
	const stat = fs.statSync(abs);
	if (!stat.isFile()) {
		console.warn(`  ⚠️  ${rel} is not a regular file, skipping`);
		continue;
	}
	fs.unlinkSync(abs);
	console.log(`  🗑  deleted file: ${rel}`);
	deletedFiles++;
}

for (const rel of FOLDERS_TO_DELETE) {
	const abs = path.join(ROOT, rel);
	if (!fs.existsSync(abs)) {
		skippedDirs++;
		continue;
	}
	const stat = fs.statSync(abs);
	if (!stat.isDirectory()) {
		console.warn(`  ⚠️  ${rel} is not a directory, skipping`);
		continue;
	}
	fs.rmSync(abs, { recursive: true, force: true });
	console.log(`  🗑  deleted dir:  ${rel}/`);
	deletedDirs++;
}

console.log("");
console.log(`Files:   ${deletedFiles} deleted, ${skippedFiles} already gone`);
console.log(`Dirs:    ${deletedDirs} deleted, ${skippedDirs} already gone`);

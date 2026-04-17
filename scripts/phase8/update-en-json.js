#!/usr/bin/env node
/**
 * Phase 8 — add Phase-8-specific keys to English JSON files + update
 * `last-updated` dates.
 *
 * New keys for /about:
 *   - about_page_description (meta description, mirrors existing HTML <meta>)
 * New keys for /get-involved:
 *   - get_involved_description (already exists — noop)
 *
 * This script is idempotent: running it twice writes the same output.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
}

function touchMetadata(obj) {
	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = TODAY;
}

// ─── about_en.json ──────────────────────────────────────────────────
{
	const file = path.join(REPO_ROOT, "i18n", "en", "about_en.json");
	const obj = readJson(file);

	const addIfMissing = (key, value) => {
		if (!(key in obj)) obj[key] = value;
	};

	// Meta description (used by generateMetadata + schemas).
	addIfMissing(
		"about_page_description",
		"bitcoin.rocks is a free, open-source Bitcoin education website founded in 2022. Our mission is to accelerate Bitcoin adoption through education."
	);

	// Contact row link targets — rendered after the "Email:" / "Nostr:"
	// / "GitHub:" labels. The V1 HTML embedded the literal strings in
	// an <a href="...">hi@bitcoin.rocks</a> pattern; we promote them
	// to translation keys so they stay consistent across locales.
	addIfMissing("about_contact_email_addr", "hi@bitcoin.rocks");
	addIfMissing("about_contact_nostr_handle", "hi@bitcoin.rocks");
	addIfMissing(
		"about_contact_github_url",
		"github.com/sovenor/bitcoin-rocks"
	);

	touchMetadata(obj);
	writeJson(file, obj);
	console.log(`✓ Updated ${path.relative(REPO_ROOT, file)}`);
}

// ─── get-involved_en.json ───────────────────────────────────────────
{
	const file = path.join(REPO_ROOT, "i18n", "en", "get-involved_en.json");
	const obj = readJson(file);

	// get_involved_description already exists. No new keys to add
	// (the page's fragment-based prose is covered by the existing bag).
	touchMetadata(obj);
	writeJson(file, obj);
	console.log(`✓ Updated ${path.relative(REPO_ROOT, file)}`);
}

console.log(`\nPhase 8 i18n English updates complete. Date: ${TODAY}`);

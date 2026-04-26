#!/usr/bin/env node
/**
 * normalize-json-formatting.js — Re-serialize English i18n JSON files.
 *
 * During the V2 redesign pass many English JSON files accumulated stray
 * blank lines between keys — valid JSON but noisy in diffs and visually
 * untidy. This script walks every `i18n/en/**\/*.json` file and rewrites
 * it with a canonical formatting:
 *
 *   - Tab indentation (matches existing project convention).
 *   - Exactly one newline between keys (no blank lines).
 *   - Trailing newline at end of file.
 *   - `@metadata` block preserved as the first key.
 *   - Key order preserved as it appears in the source file.
 *
 * If the file already parses and serializes identically, it is left
 * untouched (so re-running the script is a no-op once the repo is tidy).
 * Otherwise:
 *   - The file is rewritten with the canonical formatting.
 *   - `@metadata.last-updated` is bumped to today.
 *
 * Usage:
 *   node scripts/i18n-audit/normalize-json-formatting.js
 *   node scripts/i18n-audit/normalize-json-formatting.js --dry-run
 *
 * By default only `i18n/en/**` is normalized. Pass `--all` to walk every
 * locale under `i18n/**` (Step 4 of the cleanup workflow).
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_ROOT = path.join(REPO_ROOT, "i18n");
const I18N_EN_ROOT = path.join(I18N_ROOT, "en");

const DRY_RUN = process.argv.includes("--dry-run") || process.argv.includes("-n");
const ALL_LOCALES = process.argv.includes("--all");

function todayIso() {
	const d = new Date();
	const y = d.getUTCFullYear();
	const m = String(d.getUTCMonth() + 1).padStart(2, "0");
	const day = String(d.getUTCDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
}

/**
 * Recursively walk `dir`, returning every `.json` file path. Skips hidden
 * files and node_modules. Used to find translation JSON files.
 */
function walkJson(dir) {
	const out = [];
	const stack = [dir];
	while (stack.length > 0) {
		const current = stack.pop();
		let entries;
		try {
			entries = fs.readdirSync(current, { withFileTypes: true });
		} catch {
			continue;
		}
		for (const entry of entries) {
			if (entry.name.startsWith(".")) continue;
			if (entry.name === "node_modules") continue;
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) {
				stack.push(full);
			} else if (entry.isFile() && entry.name.endsWith(".json")) {
				out.push(full);
			}
		}
	}
	return out;
}

/**
 * Normalize one JSON file. Returns `{ changed, reason }` describing what
 * happened:
 *   - `{ changed: false, reason: "identical" }`  : already canonical
 *   - `{ changed: false, reason: "parse-error" }`: JSON couldn't be parsed
 *   - `{ changed: true,  reason: "rewrote" }`   : rewrote on disk
 */
function normalizeFile(filePath) {
	let raw;
	try {
		raw = fs.readFileSync(filePath, "utf8");
	} catch (err) {
		return { changed: false, reason: `read-error: ${err.message}` };
	}

	let parsed;
	try {
		parsed = JSON.parse(raw);
	} catch (err) {
		return { changed: false, reason: `parse-error: ${err.message}` };
	}

	if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
		return { changed: false, reason: "not-an-object" };
	}

	// Canonicalize: iterate keys in source order, bump @metadata.last-updated
	// only if the file is going to be changed.
	const canonical = JSON.stringify(parsed, null, "\t") + "\n";

	if (raw === canonical) {
		return { changed: false, reason: "identical" };
	}

	// Bump @metadata.last-updated (clone to avoid mutating the parsed tree).
	if (parsed["@metadata"] && typeof parsed["@metadata"] === "object") {
		parsed["@metadata"] = { ...parsed["@metadata"], "last-updated": todayIso() };
	}
	const canonicalWithBumpedDate = JSON.stringify(parsed, null, "\t") + "\n";

	if (!DRY_RUN) {
		fs.writeFileSync(filePath, canonicalWithBumpedDate);
	}

	return { changed: true, reason: "rewrote" };
}

function main() {
	const root = ALL_LOCALES ? I18N_ROOT : I18N_EN_ROOT;
	if (!fs.existsSync(root)) {
		console.error(`i18n directory not found: ${root}`);
		process.exit(1);
	}

	console.log(
		DRY_RUN
			? `(dry-run) Would normalize JSON formatting under ${path.relative(REPO_ROOT, root)}`
			: `Normalizing JSON formatting under ${path.relative(REPO_ROOT, root)}`,
	);

	const files = walkJson(root);
	console.log(`  Found ${files.length} JSON files.`);

	let rewrote = 0;
	let identical = 0;
	let errors = 0;
	const errorSamples = [];

	for (const file of files) {
		const result = normalizeFile(file);
		if (result.changed) {
			rewrote++;
			const rel = path.relative(REPO_ROOT, file);
			console.log(`  rewrote   ${rel}`);
		} else if (result.reason === "identical") {
			identical++;
		} else {
			errors++;
			if (errorSamples.length < 5) {
				const rel = path.relative(REPO_ROOT, file);
				errorSamples.push(`  ${rel}: ${result.reason}`);
			}
		}
	}

	console.log("");
	console.log(
		DRY_RUN
			? `(dry-run) Would rewrite ${rewrote} files; ${identical} already canonical; ${errors} unreadable/unparseable.`
			: `Rewrote ${rewrote} files; ${identical} already canonical; ${errors} unreadable/unparseable.`,
	);
	if (errorSamples.length > 0) {
		console.log("Problem files:");
		for (const s of errorSamples) console.log(s);
	}
	if (!DRY_RUN && rewrote > 0) {
		console.log("");
		console.log(
			"Next: run `npm run build` to confirm nothing regressed, then commit.",
		);
	}
}

main();

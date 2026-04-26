#!/usr/bin/env node
/**
 * remove-unused-keys.js — Delete dead keys flagged by the audit.
 *
 * Reads `scripts/i18n-audit/unused-keys-report.json` (produced by
 * `find-unused-keys.js`) and deletes every `(namespace, key)` entry from
 * the matching English JSON file under `i18n/en/`. Preserves:
 *   • `@metadata` block (including `last-updated`, which is bumped to today).
 *   • Original key order for the remaining keys.
 *   • Tab indentation (matches the existing file style).
 *
 * Run the audit first so the report is up-to-date:
 *   node scripts/i18n-audit/find-unused-keys.js
 *   node scripts/i18n-audit/remove-unused-keys.js
 *
 * Supports `--dry-run` to preview the impact without touching the files.
 *
 * Step 4 of the i18n cleanup workflow (propagating deletions to the
 * other 54 locales) is a separate script — this one is English-only.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_EN_ROOT = path.join(REPO_ROOT, "i18n", "en");
const REPORT_PATH = path.join(__dirname, "unused-keys-report.json");

const DRY_RUN = process.argv.includes("--dry-run") || process.argv.includes("-n");

/**
 * Convert a namespace (as produced by `fileToNamespace` in the audit) into
 * the on-disk English JSON file path. Example:
 *   "business/wallets"            → /repo/i18n/en/business/wallets_en.json
 *   "sticker-files/polish/index"  → /repo/i18n/en/sticker-files/polish/index_en.json
 */
function namespaceToEnPath(namespace) {
	const lastSlash = namespace.lastIndexOf("/");
	const dir = lastSlash === -1 ? "" : namespace.slice(0, lastSlash);
	const base = lastSlash === -1 ? namespace : namespace.slice(lastSlash + 1);
	return path.join(I18N_EN_ROOT, dir, `${base}_en.json`);
}

function todayIso() {
	const d = new Date();
	const y = d.getUTCFullYear();
	const m = String(d.getUTCMonth() + 1).padStart(2, "0");
	const day = String(d.getUTCDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
}

function readJson(p) {
	const raw = fs.readFileSync(p, "utf8");
	return JSON.parse(raw);
}

/**
 * Write `obj` back to `p` as tab-indented JSON with a trailing newline.
 * Matches the existing project convention.
 */
function writeJson(p, obj) {
	const serialized = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(p, serialized);
}

/**
 * Rebuild the object with `keysToRemove` stripped, preserving the original
 * order of the surviving keys (including `@metadata` first). Sets
 * `@metadata.last-updated` to today.
 */
function stripKeys(original, keysToRemove) {
	const removeSet = new Set(keysToRemove);
	const out = {};
	for (const [key, value] of Object.entries(original)) {
		if (key === "@metadata") {
			// Clone + bump last-updated
			const meta =
				value && typeof value === "object" ? { ...value } : value;
			if (meta && typeof meta === "object") {
				meta["last-updated"] = todayIso();
			}
			out[key] = meta;
			continue;
		}
		if (removeSet.has(key)) continue;
		out[key] = value;
	}
	return out;
}

function main() {
	if (!fs.existsSync(REPORT_PATH)) {
		console.error(
			`Report not found at ${REPORT_PATH}. Run find-unused-keys.js first.`,
		);
		process.exit(1);
	}
	const report = readJson(REPORT_PATH);
	const perNamespace = report.perNamespace || {};
	const namespaces = Object.keys(perNamespace).sort();

	if (namespaces.length === 0) {
		console.log("No unused keys in report — nothing to do.");
		return;
	}

	console.log(
		DRY_RUN
			? "(dry-run) Would remove unused keys from English JSON files:"
			: "Removing unused keys from English JSON files:",
	);

	let filesTouched = 0;
	let keysRemoved = 0;
	let filesMissing = 0;

	for (const ns of namespaces) {
		const keys = perNamespace[ns];
		if (!keys || keys.length === 0) continue;
		const filePath = namespaceToEnPath(ns);
		if (!fs.existsSync(filePath)) {
			filesMissing++;
			console.warn(`  [skip] ${ns}: ${filePath} not found`);
			continue;
		}

		let obj;
		try {
			obj = readJson(filePath);
		} catch (err) {
			console.error(`  [error] ${ns}: ${err.message}`);
			continue;
		}

		const stripped = stripKeys(obj, keys);
		const relPath = path.relative(REPO_ROOT, filePath);
		console.log(`  ${relPath.padEnd(60, " ")} -${keys.length} keys`);
		keysRemoved += keys.length;
		filesTouched++;

		if (!DRY_RUN) {
			writeJson(filePath, stripped);
		}
	}

	console.log("");
	console.log(
		DRY_RUN
			? `(dry-run) Would have updated ${filesTouched} files, removing ${keysRemoved} keys.`
			: `Updated ${filesTouched} files, removing ${keysRemoved} keys.`,
	);
	if (filesMissing > 0) {
		console.log(`  (${filesMissing} namespaces had no matching JSON file on disk)`);
	}
	if (!DRY_RUN) {
		console.log("");
		console.log(
			"Next: run `npm run build` to confirm no missing-key regressions,",
		);
		console.log(
			"then `node scripts/i18n-audit/normalize-json-formatting.js` for Step 3.",
		);
	}
}

main();

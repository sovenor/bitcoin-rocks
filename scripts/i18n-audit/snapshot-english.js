#!/usr/bin/env node
/**
 * snapshot-english.js — Capture the current state of every English key
 * and value to `scripts/i18n-audit/english-snapshot.json`.
 *
 * This snapshot is consumed by `language-diff.js` to distinguish "stale"
 * translations (target still matches an older English value that has
 * since changed) from "up-to-date" ones.
 *
 * The snapshot shape is:
 *   {
 *     "generatedAt": "2026-04-23T…",
 *     "namespaces": {
 *       "<namespace>": {
 *         "lastUpdated": "2026-04-23",     // from @metadata.last-updated
 *         "keys": {
 *           "<key>": "<english_value>",
 *           …
 *         }
 *       },
 *       …
 *     }
 *   }
 *
 * `<namespace>` is the path-like filename stem (e.g. "common",
 * "inflation", "business/wallets", "nostr/index", "sticker-files/french/index").
 *
 * Usage:
 *   node scripts/i18n-audit/snapshot-english.js
 *   node scripts/i18n-audit/snapshot-english.js --dry-run
 *
 * Idempotent: re-running on an unchanged English corpus produces a
 * byte-identical snapshot (modulo the `generatedAt` field, which is
 * updated on every run).
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_EN_ROOT = path.join(REPO_ROOT, "i18n", "en");
const SNAPSHOT_PATH = path.join(__dirname, "english-snapshot.json");

const DRY_RUN = process.argv.includes("--dry-run") || process.argv.includes("-n");

/** Recursively walk `dir`, returning every `.json` file path. */
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
 * For a path like /repo/i18n/en/business/wallets_en.json, return
 * "business/wallets" (the namespace used by next-intl).
 */
function namespaceFor(enPath) {
	const rel = path.relative(I18N_EN_ROOT, enPath);
	if (!rel.endsWith("_en.json")) return null;
	return rel.slice(0, -"_en.json".length);
}

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function main() {
	const files = walkJson(I18N_EN_ROOT).sort();
	const namespaces = {};
	let totalKeys = 0;
	let filesWithoutMetadata = 0;
	let parseErrors = 0;

	for (const f of files) {
		const ns = namespaceFor(f);
		if (!ns) continue;

		let parsed;
		try {
			parsed = readJson(f);
		} catch (err) {
			console.error(`  Parse error in ${path.relative(REPO_ROOT, f)}: ${err.message}`);
			parseErrors++;
			continue;
		}

		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
			console.error(`  Not a JSON object: ${path.relative(REPO_ROOT, f)}`);
			parseErrors++;
			continue;
		}

		const meta = parsed["@metadata"];
		const lastUpdated =
			meta && typeof meta === "object" && typeof meta["last-updated"] === "string"
				? meta["last-updated"]
				: null;
		if (!lastUpdated) filesWithoutMetadata++;

		const keys = {};
		for (const [k, v] of Object.entries(parsed)) {
			if (k === "@metadata") continue;
			// Only string values make it into the snapshot. Anything else
			// (numbers, objects, arrays) would need custom diffing and
			// none of our i18n files currently use non-string values, so
			// flag those loudly for a human to investigate.
			if (typeof v !== "string") {
				console.error(
					`  Non-string value at ${ns}.${k} (type=${typeof v}) — skipping.`,
				);
				continue;
			}
			keys[k] = v;
			totalKeys++;
		}

		namespaces[ns] = {
			lastUpdated,
			keys,
		};
	}

	// Deterministically sorted keys so the snapshot file diffs cleanly
	// commit-over-commit.
	const sortedNs = Object.keys(namespaces).sort();
	const sortedSnapshot = {
		generatedAt: new Date().toISOString(),
		totalNamespaces: sortedNs.length,
		totalKeys,
		namespaces: Object.fromEntries(
			sortedNs.map((ns) => {
				const { lastUpdated, keys } = namespaces[ns];
				const sortedKeys = Object.keys(keys).sort();
				return [
					ns,
					{
						lastUpdated,
						keys: Object.fromEntries(sortedKeys.map((k) => [k, keys[k]])),
					},
				];
			}),
		),
	};

	const serialized = JSON.stringify(sortedSnapshot, null, "\t") + "\n";

	if (DRY_RUN) {
		console.log(
			`(dry-run) Would write ${sortedNs.length} namespaces / ${totalKeys} keys to ${path.relative(REPO_ROOT, SNAPSHOT_PATH)}.`,
		);
	} else {
		fs.writeFileSync(SNAPSHOT_PATH, serialized);
		console.log(
			`Wrote ${sortedNs.length} namespaces / ${totalKeys} keys to ${path.relative(REPO_ROOT, SNAPSHOT_PATH)}.`,
		);
	}

	if (filesWithoutMetadata > 0) {
		console.warn(
			`  Warning: ${filesWithoutMetadata} English file(s) missing @metadata.last-updated.`,
		);
	}
	if (parseErrors > 0) {
		console.error(`  Errors: ${parseErrors} file(s) could not be parsed.`);
		process.exitCode = 1;
	}
}

main();

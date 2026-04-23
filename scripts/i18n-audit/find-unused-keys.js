#!/usr/bin/env node
/**
 * find-unused-keys.js — Audit English i18n JSON files for dead keys.
 *
 * How it works:
 *   1. Walk every `i18n/en/**\/*.json` file and collect the full set of keys
 *      (skipping `@metadata`).
 *   2. Walk every `.ts/.tsx/.js` source file under `app/`, `components/`, and
 *      `lib/`, concatenate them into one big search haystack, and for each
 *      English key check whether it appears as a literal substring.
 *   3. Keys that never appear literally AND are not in the dynamic-keys
 *      allow-list (`scripts/i18n-audit/dynamic-keys-allowlist.js`) AND are
 *      not in the manual-keep set are recorded as "unused" per namespace.
 *   4. Writes the result to `scripts/i18n-audit/unused-keys-report.json`
 *      with per-namespace arrays + a flat `allUnused` roll-up, and prints a
 *      human-readable summary.
 *
 * This is intentionally a *static* literal-substring scan — no runtime i18n
 * resolution. It will over-report unused keys if the codebase builds key
 * names at runtime via template literals or concatenation. To compensate,
 * suspected dynamic patterns are enumerated in the allow-list file.
 *
 * Usage:
 *   node scripts/i18n-audit/find-unused-keys.js
 *
 * Exit code: 0 always. The report JSON is the source of truth.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const {
	buildDynamicKeys,
	EXTRA_USED_KEYS,
	MANUAL_KEEP_KEYS,
} = require("./dynamic-keys-allowlist.js");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_EN_ROOT = path.join(REPO_ROOT, "i18n", "en");
const SOURCE_DIRS = ["app", "components", "lib"].map((d) =>
	path.join(REPO_ROOT, d),
);
const REPORT_PATH = path.join(__dirname, "unused-keys-report.json");

/** File extensions that may reference i18n keys. */
const SOURCE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".mjs", ".cjs", ".jsx"]);

/**
 * Recursively walk `dir`, returning every file path whose extension is in
 * `SOURCE_EXTENSIONS`. Skips hidden files and `node_modules`.
 */
function walkSources(dir) {
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
			} else if (entry.isFile() && SOURCE_EXTENSIONS.has(path.extname(entry.name))) {
				out.push(full);
			}
		}
	}
	return out;
}

/**
 * Recursively walk `i18n/en/`, returning every `*_en.json` file path.
 */
function walkEnglishJson(dir) {
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
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) {
				stack.push(full);
			} else if (entry.isFile() && entry.name.endsWith("_en.json")) {
				out.push(full);
			}
		}
	}
	return out;
}

/**
 * Convert an on-disk English JSON file path into its namespace — mirrors
 * the loader's convention in `lib/i18n/load-messages.ts`. Example:
 *   /repo/i18n/en/business/wallets_en.json → "business/wallets"
 *   /repo/i18n/en/sticker-files/index_en.json → "sticker-files/index"
 */
function fileToNamespace(absPath) {
	const rel = path.relative(I18N_EN_ROOT, absPath);
	const withoutExt = rel.replace(/_en\.json$/, "");
	// On Windows, path.sep is "\"; normalize to "/".
	return withoutExt.split(path.sep).join("/");
}

/** Read + parse a JSON file. Returns `null` on read/parse error. */
function readJson(p) {
	try {
		const raw = fs.readFileSync(p, "utf8");
		return JSON.parse(raw);
	} catch (err) {
		console.error(`[warn] could not read/parse ${p}: ${err.message}`);
		return null;
	}
}

/** Build a combined haystack of every source file's content, deduped. */
function buildHaystack() {
	const files = [];
	for (const dir of SOURCE_DIRS) {
		files.push(...walkSources(dir));
	}
	const chunks = [];
	for (const file of files) {
		try {
			chunks.push(fs.readFileSync(file, "utf8"));
		} catch {
			// ignore unreadable
		}
	}
	// Joining with a newline avoids accidentally merging tokens across file boundaries.
	return chunks.join("\n");
}

/**
 * Return true if `key` appears somewhere in `haystack`. Fast path: plain
 * String.prototype.includes. Keys are snake_case identifiers so no regex
 * escaping is needed.
 */
function keyAppearsInHaystack(key, haystack) {
	return haystack.includes(key);
}

/** Pretty-format a `perNamespace` report as aligned lines. */
function formatSummary(perNamespace) {
	const rows = Object.keys(perNamespace).sort();
	if (rows.length === 0) return "(no unused keys found)";
	const max = rows.reduce((m, n) => Math.max(m, n.length), 0);
	let total = 0;
	const lines = [];
	for (const ns of rows) {
		const count = perNamespace[ns].length;
		total += count;
		lines.push(`  ${ns.padEnd(max, " ")}  ${String(count).padStart(4, " ")} keys`);
	}
	lines.push("");
	lines.push(`  ${"TOTAL".padEnd(max, " ")}  ${String(total).padStart(4, " ")} keys`);
	return lines.join("\n");
}

function main() {
	console.log("Scanning English JSON files under i18n/en/ …");
	const jsonFiles = walkEnglishJson(I18N_EN_ROOT);
	console.log(`  Found ${jsonFiles.length} English JSON files.`);

	// Collect every (namespace, key) pair.
	const perNamespaceAllKeys = {};
	for (const file of jsonFiles) {
		const parsed = readJson(file);
		if (!parsed || typeof parsed !== "object") continue;
		const ns = fileToNamespace(file);
		const keys = [];
		for (const [key, value] of Object.entries(parsed)) {
			if (key === "@metadata") continue;
			// Only pick scalar string leaves — this matches the loader's behavior.
			if (typeof value !== "string") continue;
			keys.push(key);
		}
		perNamespaceAllKeys[ns] = keys;
	}

	console.log("Building source-code haystack from app/ components/ lib/ …");
	const haystack = buildHaystack();
	console.log(`  Haystack: ${haystack.length.toLocaleString()} chars.`);

	const dynamicKeys = buildDynamicKeys();
	console.log(`  Dynamic-keys allow-list: ${dynamicKeys.size} keys.`);
	console.log(`  Manual-keep list:         ${MANUAL_KEEP_KEYS.size} keys.`);
	console.log(`  Extra used-keys list:     ${EXTRA_USED_KEYS.size} keys.`);

	const perNamespaceUnused = {};
	const allUnused = [];
	let totalChecked = 0;
	for (const [ns, keys] of Object.entries(perNamespaceAllKeys)) {
		const unused = [];
		for (const key of keys) {
			totalChecked++;
			if (dynamicKeys.has(key)) continue;
			if (EXTRA_USED_KEYS.has(key)) continue;
			if (MANUAL_KEEP_KEYS.has(key)) continue;
			if (keyAppearsInHaystack(key, haystack)) continue;
			unused.push(key);
		}
		unused.sort();
		if (unused.length > 0) {
			perNamespaceUnused[ns] = unused;
			for (const k of unused) allUnused.push({ namespace: ns, key: k });
		}
	}

	const report = {
		generatedAt: new Date().toISOString(),
		summary: {
			jsonFilesScanned: jsonFiles.length,
			keysChecked: totalChecked,
			unusedKeyCount: allUnused.length,
			namespacesWithUnused: Object.keys(perNamespaceUnused).length,
		},
		perNamespace: perNamespaceUnused,
		allUnused,
	};

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");

	console.log("");
	console.log(`Report written to ${path.relative(REPO_ROOT, REPORT_PATH)}`);
	console.log("");
	console.log(`Unused-key counts per namespace:`);
	console.log(formatSummary(perNamespaceUnused));
	console.log("");
	console.log(
		`Scanned ${totalChecked.toLocaleString()} keys across ${jsonFiles.length} files; ` +
			`flagged ${allUnused.length} as unused across ${Object.keys(perNamespaceUnused).length} namespaces.`,
	);
}

main();

#!/usr/bin/env node
/**
 * Split scripts/i18n-audit/reports/sv.json into 5 partial reports for
 * parallel translation. Chunk 5 is just `sticker-files/index` (the
 * original chunk-5 namespaces — sticker-files/* sub-pages — are all
 * up-to-date for sv, leaving only sticker-files/index in that bucket).
 *
 * Idempotent. Output: scripts/sv-manifest-refresh/chunks/sv-chunk{1..5}.json
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const REPORT_PATH = path.join(REPO_ROOT, "scripts", "i18n-audit", "reports", "sv.json");
const OUT_DIR = path.join(__dirname, "chunks");

const CHUNKS = {
	1: { name: "common-index-inflation", namespaces: new Set(["common", "index", "inflation"]) },
	2: {
		name: "bitcoin-vs",
		match: (ns) => ns.startsWith("bitcoin-vs-"),
	},
	3: {
		name: "business",
		match: (ns) => ns.startsWith("business/"),
	},
	4: {
		name: "everything-else",
		namespaces: new Set([
			"404",
			"about",
			"bank-runs",
			"buy",
			"compound-inflation-calculator",
			"flyers",
			"get-involved",
			"lightning",
			"nostr/index",
			"sticker-language-success",
			"sticker-success",
			"stickers",
			"wallets",
		]),
	},
	5: { name: "sticker-files-index", namespaces: new Set(["sticker-files/index"]) },
};

function classify(ns) {
	for (const [n, def] of Object.entries(CHUNKS)) {
		if (def.namespaces && def.namespaces.has(ns)) return n;
		if (def.match && def.match(ns)) return n;
	}
	return null;
}

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

	const buckets = { 1: [], 2: [], 3: [], 4: [], 5: [] };
	const unclassified = [];
	for (const e of report.entries) {
		const c = classify(e.namespace);
		if (c) buckets[c].push(e);
		else unclassified.push(e);
	}

	if (unclassified.length > 0) {
		console.error(`ERROR: ${unclassified.length} unclassified entries:`);
		const set = new Set(unclassified.map((e) => e.namespace));
		for (const ns of set) console.error(`  ${ns}`);
		process.exit(1);
	}

	let total = 0;
	for (const [n, def] of Object.entries(CHUNKS)) {
		const entries = buckets[n];
		const partial = { ...report, entries };
		const file = path.join(OUT_DIR, `sv-chunk${n}.json`);
		fs.writeFileSync(file, JSON.stringify(partial, null, "\t") + "\n");
		console.log(`chunk ${n} (${def.name.padEnd(22)}): ${String(entries.length).padStart(4)} entries → ${path.relative(REPO_ROOT, file)}`);
		total += entries.length;
	}
	console.log(`\nTotal partitioned: ${total} (report has ${report.entries.length})`);
	if (total !== report.entries.length) {
		console.error("Mismatch — entries lost or duplicated.");
		process.exit(1);
	}
}

main();

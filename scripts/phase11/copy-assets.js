#!/usr/bin/env node
/**
 * Phase 11 — copy sticker-files/* PNGs into public/sticker-files/ so Next
 * serves them at /sticker-files/<lang>/<sticker>.png.
 *
 * Idempotent: only copies files that are missing or stale (different mtime).
 * Never deletes anything. Skips the legacy index.html files (the Next app
 * serves those routes now, not static HTML).
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const SRC_DIR = path.join(REPO_ROOT, "sticker-files");
const DEST_DIR = path.join(REPO_ROOT, "public", "sticker-files");

function copyFileIfNeeded(src, dest) {
	fs.mkdirSync(path.dirname(dest), { recursive: true });
	let srcStat;
	try {
		srcStat = fs.statSync(src);
	} catch {
		return "skip-missing-src";
	}
	let destStat = null;
	try {
		destStat = fs.statSync(dest);
	} catch {
		/* not there yet */
	}
	if (destStat && destStat.size === srcStat.size && destStat.mtimeMs >= srcStat.mtimeMs) {
		return "skip-up-to-date";
	}
	fs.copyFileSync(src, dest);
	return "copied";
}

function walkLangs() {
	const entries = fs.readdirSync(SRC_DIR, { withFileTypes: true });
	let copied = 0;
	let skipped = 0;
	const langs = [];

	for (const e of entries) {
		if (!e.isDirectory()) continue;
		const langSrc = path.join(SRC_DIR, e.name);
		const langDest = path.join(DEST_DIR, e.name);
		langs.push(e.name);
		const files = fs.readdirSync(langSrc, { withFileTypes: true });
		for (const f of files) {
			if (!f.isFile()) continue;
			if (!f.name.toLowerCase().endsWith(".png")) continue;
			const r = copyFileIfNeeded(path.join(langSrc, f.name), path.join(langDest, f.name));
			if (r === "copied") copied++;
			else skipped++;
		}
	}

	return { copied, skipped, langs };
}

function main() {
	console.log(`[phase11/copy-assets] src=${SRC_DIR}`);
	console.log(`[phase11/copy-assets] dest=${DEST_DIR}`);
	const { copied, skipped, langs } = walkLangs();
	console.log(
		`[phase11/copy-assets] done: ${copied} copied, ${skipped} up-to-date, ${langs.length} languages`,
	);
}

main();

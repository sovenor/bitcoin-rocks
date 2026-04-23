#!/usr/bin/env node
/**
 * consolidate-sticker-files-langs.js — One-shot consolidation of the
 * per-language `sticker-files/<lang>/index` namespaces.
 *
 * Context
 * -------
 * Pre-V2: each printable sticker-files language had its own namespace
 *   `i18n/<locale>/sticker-files/<slug>/index_<locale>.json`
 *   holding `<slug>_header` / `<slug>_description` /
 *   `<slug>_bitcoin_sticker_files` keys that the V1 per-language page
 *   rendered.
 *
 * V2: the `/[locale]/sticker-files/[lang]` page builds its H1 in-code
 *   (`"Download <LangName> Bitcoin Sticker Files"`) from
 *   `common_language_<name>` + common_sticker_files_* keys, so every
 *   per-language namespace is now dead weight EXCEPT:
 *
 *     • `sticker-files/english/index` — still holds `print_these`
 *       ("PRINT THESE IN 1 CLICK"), rendered as the StickerMule
 *       1-click CTA button on the English page only.
 *
 *     • `sticker-files/index` — still holds picker-page keys
 *       (`bitcoin_sticker_files_all_languages`, `sticker_files_description`,
 *       `sticker_files_header`) for `/sticker-files`.
 *
 * This script consolidates the `sticker-files/<lang>/` tree:
 *
 *   1. For every locale that has
 *      `i18n/<locale>/sticker-files/english/index_<locale>.json`:
 *      lift its `print_these` value into
 *      `i18n/<locale>/common_<locale>.json` as
 *      `common_sticker_files_print_these`. Locales missing a
 *      `print_these` translation fall back to the English string.
 *
 *   2. Delete every `i18n/<locale>/sticker-files/<slug>/` subdirectory
 *      (including `english/`) — all 43 slugs are now redundant.
 *
 *   3. Preserve `i18n/<locale>/sticker-files/index_<locale>.json` — the
 *      picker-page namespace stays.
 *
 *   4. Bump `@metadata.last-updated` on every `common_<locale>.json`
 *      that was modified.
 *
 * Idempotent: re-running after a clean pass is a no-op (no English-pack
 * entries remain, every common file already has the key).
 *
 * Usage
 *   node scripts/i18n-audit/consolidate-sticker-files-langs.js          # apply
 *   node scripts/i18n-audit/consolidate-sticker-files-langs.js --dry-run # preview
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_ROOT = path.join(REPO_ROOT, "i18n");
const TODAY = "2026-04-23";
const NEW_KEY = "common_sticker_files_print_these";
const ENGLISH_FALLBACK = "PRINT THESE IN 1 CLICK";

const DRY_RUN = process.argv.includes("--dry-run") || process.argv.includes("-n");

/** List every locale directory under `i18n/`. */
function listLocales() {
	return fs
		.readdirSync(I18N_ROOT, { withFileTypes: true })
		.filter((d) => d.isDirectory() && !d.name.startsWith("."))
		.map((d) => d.name)
		.sort();
}

/** Read JSON with tab-indent preservation round-trip. */
function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

/** Write JSON with tab indentation + trailing newline (matches repo style). */
function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
}

/** Recursively remove a directory (node 14+ has rmSync). */
function rmDirRecursive(dir) {
	fs.rmSync(dir, { recursive: true, force: true });
}

/**
 * Insert `common_sticker_files_print_these` into common_<locale>.json.
 *
 * Returns "added" | "already-present" | "skipped-no-common".
 */
function migratePrintThesesKey(locale, printThesesValue) {
	const commonPath = path.join(I18N_ROOT, locale, `common_${locale}.json`);
	if (!fs.existsSync(commonPath)) return "skipped-no-common";

	const data = readJson(commonPath);
	if (data[NEW_KEY] === printThesesValue) return "already-present";

	// Preserve key order. If already present with a different value,
	// overwrite (we treat the sticker-files/english payload as source of
	// truth during migration).
	data[NEW_KEY] = printThesesValue;
	if (data["@metadata"] && typeof data["@metadata"] === "object") {
		data["@metadata"]["last-updated"] = TODAY;
	}

	if (!DRY_RUN) {
		writeJson(commonPath, data);
	}
	return "added";
}

/**
 * Delete every `i18n/<locale>/sticker-files/<slug>/` subdirectory. Keeps
 * the picker-page namespace `sticker-files/index_<locale>.json` intact.
 *
 * Returns the list of deleted subdirectory slugs.
 */
function deletePerLanguageNamespaces(locale) {
	const root = path.join(I18N_ROOT, locale, "sticker-files");
	if (!fs.existsSync(root)) return [];
	const entries = fs.readdirSync(root, { withFileTypes: true });
	const deleted = [];
	for (const entry of entries) {
		if (!entry.isDirectory()) continue;
		const dirPath = path.join(root, entry.name);
		if (!DRY_RUN) rmDirRecursive(dirPath);
		deleted.push(entry.name);
	}
	return deleted;
}

function main() {
	const locales = listLocales();
	let totalAdded = 0;
	let totalAlreadyPresent = 0;
	let totalSkipped = 0;
	let totalDeletedDirs = 0;
	let totalLocalesWithDeletions = 0;
	const missingEnglishPrintTheses = [];

	console.log(
		`${DRY_RUN ? "[DRY-RUN] " : ""}Consolidating sticker-files/<lang>/ namespaces across ${locales.length} locales…\n`,
	);

	for (const locale of locales) {
		// Step 1 — pull print_these from the English-language pack if present.
		const engPath = path.join(
			I18N_ROOT,
			locale,
			"sticker-files",
			"english",
			`index_${locale}.json`,
		);
		let printThesesValue = ENGLISH_FALLBACK;
		if (fs.existsSync(engPath)) {
			try {
				const engData = readJson(engPath);
				if (typeof engData.print_these === "string" && engData.print_these.trim()) {
					printThesesValue = engData.print_these;
				} else {
					missingEnglishPrintTheses.push(locale);
				}
			} catch (err) {
				console.warn(
					`  ${locale}: failed to read ${path.relative(REPO_ROOT, engPath)} — ${err.message}; using English fallback`,
				);
				missingEnglishPrintTheses.push(locale);
			}
		} else {
			missingEnglishPrintTheses.push(locale);
		}

		const status = migratePrintThesesKey(locale, printThesesValue);
		if (status === "added") totalAdded++;
		else if (status === "already-present") totalAlreadyPresent++;
		else totalSkipped++;

		// Step 2 — nuke every per-language subdirectory under sticker-files/.
		const deleted = deletePerLanguageNamespaces(locale);
		if (deleted.length > 0) {
			totalDeletedDirs += deleted.length;
			totalLocalesWithDeletions++;
			console.log(
				`  ${locale}: ${status.padEnd(15)} · deleted ${deleted.length} sticker-files/<lang>/ dirs`,
			);
		} else {
			console.log(`  ${locale}: ${status.padEnd(15)} · no sticker-files/<lang>/ dirs to delete`);
		}
	}

	console.log(`\nSummary:`);
	console.log(
		`  common_<locale>.json: added=${totalAdded}, already-present=${totalAlreadyPresent}, skipped-no-common=${totalSkipped}`,
	);
	console.log(
		`  sticker-files/<lang>/ dirs removed: ${totalDeletedDirs} across ${totalLocalesWithDeletions} locales`,
	);
	if (missingEnglishPrintTheses.length > 0) {
		console.log(
			`  ${missingEnglishPrintTheses.length} locale(s) had no translated 'print_these' (used English fallback): ${missingEnglishPrintTheses.join(", ")}`,
		);
	}
	if (DRY_RUN) console.log(`\n(dry-run — no files were modified.)`);
}

main();

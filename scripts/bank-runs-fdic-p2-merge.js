#!/usr/bin/env node
/**
 * One-off fix: inline the trailing period/verb that used to live in
 * `bank_runs_fdic_p2_b` into the link text `bank_runs_fdic_p2_link`,
 * then delete `bank_runs_fdic_p2_b` from every locale that has it.
 *
 * English / Afrikaans: the link falls at the end of the sentence, so the
 * trailing period is appended → "inflation." / "inflasie."
 *
 * Amharic: the link is mid-sentence in SOV word order. The former `_b`
 * carried the verb + Amharic full-stop ("ያስከትላል።"). We merge that verb
 * into the link text so the link becomes "ዋጋ ግሽበት ያስከትላል።" and the
 * sentence still reads naturally with the _b slot removed.
 *
 * Also updates:
 *   - scripts/i18n-audit/v2-manifest.json — bumps englishValue for the
 *     manifest entry `bank_runs_fdic_p2_link` to "inflation."
 *   - scripts/i18n-audit/english-snapshot.json — removes the `_b` key
 *     and updates the `_link` value to the new English text.
 *
 * All writes use tab indentation + JSON.stringify to preserve encoding
 * correctly across Amharic (Ge'ez script) and Afrikaans (Latin-1
 * supplement) characters.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

/** @type {{ locale: string, file: string, newLink: string }[]} */
const LOCALE_UPDATES = [
	{
		locale: "en",
		file: "i18n/en/bank-runs_en.json",
		newLink: "inflation.",
	},
	{
		locale: "af",
		file: "i18n/af/bank-runs_af.json",
		newLink: "inflasie.",
	},
	{
		locale: "am",
		file: "i18n/am/bank-runs_am.json",
		// Old: _link = "ዋጋ ግሽበት", _b = "ያስከትላል።"
		// New: merge verb into link so sentence still ends correctly.
		newLink: "ዋጋ ግሽበት ያስከትላል።",
	},
];

function readJson(relPath) {
	const abs = path.join(ROOT, relPath);
	const raw = fs.readFileSync(abs, "utf8");
	return { abs, data: JSON.parse(raw) };
}

function writeJsonTabs(abs, data) {
	fs.writeFileSync(abs, JSON.stringify(data, null, "\t") + "\n", "utf8");
}

function updateLocale({ locale, file, newLink }) {
	const { abs, data } = readJson(file);
	const hadB = Object.prototype.hasOwnProperty.call(
		data,
		"bank_runs_fdic_p2_b",
	);
	const hadLink = Object.prototype.hasOwnProperty.call(
		data,
		"bank_runs_fdic_p2_link",
	);

	if (!hadLink) {
		console.warn(
			`[${locale}] skipping — no bank_runs_fdic_p2_link in ${file}`,
		);
		return;
	}

	// Rebuild the object preserving original key order, swapping in the new
	// _link value and dropping _b entirely.
	const rebuilt = {};
	for (const [k, v] of Object.entries(data)) {
		if (k === "bank_runs_fdic_p2_b") continue;
		if (k === "bank_runs_fdic_p2_link") {
			rebuilt[k] = newLink;
			continue;
		}
		rebuilt[k] = v;
	}

	// Bump last-updated on the @metadata block.
	if (rebuilt["@metadata"] && typeof rebuilt["@metadata"] === "object") {
		rebuilt["@metadata"]["last-updated"] = TODAY;
	}

	writeJsonTabs(abs, rebuilt);
	console.log(
		`[${locale}] updated ${file} — _link=${JSON.stringify(newLink)}, ` +
			`removed _b=${hadB ? "yes" : "no"}`,
	);
}

function updateManifest() {
	const rel = "scripts/i18n-audit/v2-manifest.json";
	const { abs, data } = readJson(rel);
	let touched = false;

	const sections = ["changed", "added"];
	for (const section of sections) {
		if (!Array.isArray(data[section])) continue;
		for (const entry of data[section]) {
			if (
				entry?.namespace === "bank-runs" &&
				entry?.key === "bank_runs_fdic_p2_link"
			) {
				if (entry.englishValue !== "inflation.") {
					entry.englishValue = "inflation.";
					touched = true;
				}
			}
			// If `_b` ever ended up in the manifest, strip it — it's gone now.
		}
		// Remove any stray bank_runs_fdic_p2_b entries (defensive — grep
		// showed none, but keep idempotent).
		const before = data[section].length;
		data[section] = data[section].filter(
			(entry) =>
				!(
					entry?.namespace === "bank-runs" &&
					entry?.key === "bank_runs_fdic_p2_b"
				),
		);
		if (data[section].length !== before) touched = true;
	}

	if (touched) {
		writeJsonTabs(abs, data);
		console.log(`[manifest] updated ${rel}`);
	} else {
		console.log(`[manifest] no change needed in ${rel}`);
	}
}

function updateEnglishSnapshot() {
	const rel = "scripts/i18n-audit/english-snapshot.json";
	const { abs, data } = readJson(rel);
	const bankRuns = data?.namespaces?.["bank-runs"];
	if (!bankRuns) {
		console.warn(
			`[snapshot] bank-runs namespace not found in ${rel} — skipping`,
		);
		return;
	}

	let touched = false;
	if (
		Object.prototype.hasOwnProperty.call(bankRuns, "bank_runs_fdic_p2_b")
	) {
		delete bankRuns["bank_runs_fdic_p2_b"];
		touched = true;
	}
	if (bankRuns["bank_runs_fdic_p2_link"] !== "inflation.") {
		bankRuns["bank_runs_fdic_p2_link"] = "inflation.";
		touched = true;
	}

	if (touched) {
		writeJsonTabs(abs, data);
		console.log(`[snapshot] updated ${rel}`);
	} else {
		console.log(`[snapshot] no change needed in ${rel}`);
	}
}

function main() {
	for (const loc of LOCALE_UPDATES) {
		updateLocale(loc);
	}
	updateManifest();
	updateEnglishSnapshot();
	console.log("\ndone.");
}

main();

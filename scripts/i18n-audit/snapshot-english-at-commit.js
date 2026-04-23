#!/usr/bin/env node
/**
 * snapshot-english-at-commit.js <sha> [--output=<path>]
 *
 * Capture the state of every English translation JSON file at a given
 * git revision, and write a snapshot to disk. Unlike
 * `snapshot-english.js` (which snapshots the working tree), this one
 * walks HISTORY so we can freeze a "baseline" of how English looked
 * *before* a subsequent wave of content changes.
 *
 * This is the fix for a blind spot in `language-diff.js`: when the
 * V2 redesign pass shortened many existing English strings in place
 * (same keys, completely different content), the translator-facing
 * diff didn't flag them as needing re-translation — because the
 * target value still existed and wasn't byte-identical to the *new*
 * English, so neither the `missing` nor `untranslated` categories
 * caught it. By keeping a frozen pre-V2 snapshot, the diff tool can
 * now detect "English changed since snapshot" and surface those
 * entries for re-translation.
 *
 * Usage:
 *   node scripts/i18n-audit/snapshot-english-at-commit.js 133d5b98
 *   node scripts/i18n-audit/snapshot-english-at-commit.js 133d5b98 --output=scripts/i18n-audit/english-snapshot-preV2.json
 *   node scripts/i18n-audit/snapshot-english-at-commit.js 133d5b98 --dry-run
 *
 * Default output path is `scripts/i18n-audit/english-snapshot-preV2.json`.
 *
 * The snapshot shape matches `snapshot-english.js` exactly so that
 * `language-diff.js` can consume either one:
 *   {
 *     "sourceCommit": "133d5b98",
 *     "generatedAt": "2026-04-23T…",
 *     "totalNamespaces": N,
 *     "totalKeys": M,
 *     "namespaces": {
 *       "<namespace>": {
 *         "lastUpdated": "<date or null>",
 *         "keys": { "<key>": "<english_value>", … }
 *       },
 *       …
 *     }
 *   }
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const DEFAULT_OUTPUT = path.join(__dirname, "english-snapshot-preV2.json");

function parseArgs(argv) {
	const positional = [];
	const flags = { output: DEFAULT_OUTPUT, dryRun: false };
	for (const a of argv.slice(2)) {
		if (a.startsWith("--output=")) {
			flags.output = path.resolve(REPO_ROOT, a.slice("--output=".length));
		} else if (a === "--dry-run" || a === "-n") {
			flags.dryRun = true;
		} else if (a === "--help" || a === "-h") {
			flags.help = true;
		} else if (a.startsWith("-")) {
			console.error(`Unknown flag: ${a}`);
			process.exit(2);
		} else {
			positional.push(a);
		}
	}
	return { positional, flags };
}

function printHelpAndExit() {
	console.log(
		[
			"Usage: node scripts/i18n-audit/snapshot-english-at-commit.js <sha> [options]",
			"",
			"Options:",
			"  --output=<path>   Where to write the snapshot. Default:",
			"                    scripts/i18n-audit/english-snapshot-preV2.json",
			"  --dry-run         Do not write the snapshot file; just print stats.",
			"  -h, --help        Show this help.",
		].join("\n"),
	);
	process.exit(0);
}

/**
 * Run a git command from the repo root and return stdout as a string.
 * Throws on non-zero exit.
 */
function git(args) {
	return execFileSync("git", args, {
		cwd: REPO_ROOT,
		encoding: "utf8",
		maxBuffer: 256 * 1024 * 1024,
	});
}

/**
 * Resolve the given revision to a full 40-char SHA. Throws if the
 * revision doesn't exist in the repo.
 */
function resolveSha(rev) {
	try {
		return git(["rev-parse", rev]).trim();
	} catch (err) {
		console.error(`Cannot resolve revision "${rev}": ${err.message}`);
		process.exit(2);
	}
}

/**
 * List every `i18n/en/**\/*.json` path that exists at the given SHA,
 * relative to the repo root.
 */
function listEnglishFilesAtSha(sha) {
	const stdout = git(["ls-tree", "-r", "--name-only", sha, "i18n/en"]);
	return stdout
		.split("\n")
		.map((s) => s.trim())
		.filter((s) => s.endsWith(".json"))
		.sort();
}

/**
 * For `i18n/en/business/wallets_en.json` return `business/wallets`.
 */
function namespaceForRelPath(relPath) {
	if (!relPath.startsWith("i18n/en/")) return null;
	const tail = relPath.slice("i18n/en/".length);
	if (!tail.endsWith("_en.json")) return null;
	return tail.slice(0, -"_en.json".length);
}

function readJsonAtSha(sha, relPath) {
	const stdout = git(["show", `${sha}:${relPath}`]);
	return JSON.parse(stdout);
}

function main() {
	const { positional, flags } = parseArgs(process.argv);
	if (flags.help || positional.length === 0) {
		printHelpAndExit();
	}
	const inputRev = positional[0];
	const sha = resolveSha(inputRev);
	const shortSha = sha.slice(0, 12);

	console.log(`Snapshotting English at ${inputRev} (${shortSha})…`);

	const englishFiles = listEnglishFilesAtSha(sha);
	if (englishFiles.length === 0) {
		console.error(`  No English JSON files found at ${sha}.`);
		process.exit(1);
	}

	const namespaces = {};
	let totalKeys = 0;
	let filesWithoutMetadata = 0;
	let parseErrors = 0;

	for (const relPath of englishFiles) {
		const ns = namespaceForRelPath(relPath);
		if (!ns) continue;

		let parsed;
		try {
			parsed = readJsonAtSha(sha, relPath);
		} catch (err) {
			console.error(`  Parse error reading ${relPath} @ ${shortSha}: ${err.message}`);
			parseErrors++;
			continue;
		}

		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
			console.error(`  Not a JSON object: ${relPath} @ ${shortSha}`);
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
			if (typeof v !== "string") {
				console.error(`  Non-string value at ${ns}.${k} (type=${typeof v}) — skipping.`);
				continue;
			}
			keys[k] = v;
			totalKeys++;
		}

		namespaces[ns] = { lastUpdated, keys };
	}

	// Deterministic ordering so snapshots diff cleanly commit-over-commit.
	const sortedNs = Object.keys(namespaces).sort();
	const sortedSnapshot = {
		sourceCommit: sha,
		sourceCommitShort: shortSha,
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

	if (flags.dryRun) {
		console.log(
			`(dry-run) Would write ${sortedNs.length} namespaces / ${totalKeys} keys to ${path.relative(REPO_ROOT, flags.output)}.`,
		);
	} else {
		fs.mkdirSync(path.dirname(flags.output), { recursive: true });
		fs.writeFileSync(flags.output, serialized);
		const sizeKb = (fs.statSync(flags.output).size / 1024).toFixed(1);
		console.log(
			`Wrote ${sortedNs.length} namespaces / ${totalKeys} keys (${sizeKb} KB) to ${path.relative(REPO_ROOT, flags.output)}.`,
		);
	}

	if (filesWithoutMetadata > 0) {
		console.warn(
			`  Warning: ${filesWithoutMetadata} English file(s) missing @metadata.last-updated at ${shortSha}.`,
		);
	}
	if (parseErrors > 0) {
		console.error(`  Errors: ${parseErrors} file(s) could not be parsed.`);
		process.exitCode = 1;
	}
}

main();

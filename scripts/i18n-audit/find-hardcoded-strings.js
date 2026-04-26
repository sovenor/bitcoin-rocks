#!/usr/bin/env node
/**
 * find-hardcoded-strings.js — Source-side audit for hardcoded English.
 *
 * Scans every `.tsx` (and JSX-bearing `.ts`) file under `app/` and
 * `components/` for user-facing English string literals that aren't
 * going through the i18n layer. This is the counterpart to
 * `find-unused-keys.js` (which audits JSON → source); here we audit
 * source → JSON.
 *
 * Detects four kinds of findings:
 *
 *   1. jsx-text  — plain text between JSX tags.
 *                  Example:  <p>Get a wallet</p>
 *
 *   2. attribute — user-facing attribute values on HTML / component
 *                  elements. Current watch-list:
 *                    title, alt, placeholder, aria-label,
 *                    aria-description, aria-placeholder, summary, label
 *                  Example:  <input placeholder="Your address" />
 *
 *   3. metadata  — string literal values in Next.js metadata objects
 *                  (`title:` / `description:`) when the RHS is a raw
 *                  string literal, not a `t(...)` call.
 *                  Example:  title: "Bitcoin stickers"
 *
 *   4. schema    — string literal values passed to known schema
 *                  builders (`buildArticleSchema`, `buildFaqSchema`,
 *                  etc.) for `headline` / `description`. Same criterion:
 *                  raw literal means not translated.
 *                  Example:  headline: "Bitcoin vs. Gold"
 *
 * The scanner is a LIGHTWEIGHT regex pass — no TypeScript AST. It
 * sacrifices surgical precision for robustness across the mixed RSC +
 * Client Component syntax in this codebase. False positives are
 * handled via `hardcoded-strings-allowlist.js`. Re-run the scanner
 * iteratively during triage.
 *
 * Usage:
 *   node scripts/i18n-audit/find-hardcoded-strings.js
 *   node scripts/i18n-audit/find-hardcoded-strings.js --strict   # treat any findings as error (exit 1)
 *   node scripts/i18n-audit/find-hardcoded-strings.js --file <path>   # narrow to a single file
 *
 * Report is written to `scripts/i18n-audit/hardcoded-strings-report.json`.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const {
	GLOBAL_ALLOWLIST,
	FILE_SPECIFIC_ALLOWLIST,
	IGNORED_STRING_PATTERNS,
} = require("./hardcoded-strings-allowlist.js");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const SCAN_DIRS = ["app", "components"].map((d) => path.join(REPO_ROOT, d));
const REPORT_PATH = path.join(__dirname, "hardcoded-strings-report.json");

const STRICT = process.argv.includes("--strict");
const FILE_ARG_IDX = process.argv.indexOf("--file");
const SINGLE_FILE =
	FILE_ARG_IDX >= 0 && FILE_ARG_IDX < process.argv.length - 1
		? process.argv[FILE_ARG_IDX + 1]
		: null;

/** Attributes we consider user-facing. Order independent. */
const USER_FACING_ATTRS = new Set([
	"title",
	"alt",
	"placeholder",
	"aria-label",
	"aria-description",
	"aria-placeholder",
	"aria-valuetext",
	"summary",
	"label",
]);

/** Attributes that LOOK like values but are actually technical / routing /
 *  styling and should never be flagged. */
const TECHNICAL_ATTRS = new Set([
	"className",
	"class",
	"style",
	"id",
	"href",
	"src",
	"srcSet",
	"srcset",
	"type",
	"name",
	"role",
	"rel",
	"target",
	"key",
	"ref",
	"value",
	"defaultValue",
	"defaultChecked",
	"checked",
	"disabled",
	"selected",
	"readOnly",
	"readonly",
	"autoComplete",
	"autocomplete",
	"autoFocus",
	"autofocus",
	"spellCheck",
	"spellcheck",
	"tabIndex",
	"tabindex",
	"min",
	"max",
	"step",
	"pattern",
	"inputMode",
	"inputmode",
	"dir",
	"lang",
	"xmlns",
	"viewBox",
	"fill",
	"stroke",
	"strokeWidth",
	"strokewidth",
	"width",
	"height",
	"loading",
	"decoding",
	"fetchPriority",
	"fetchpriority",
	"crossOrigin",
	"crossorigin",
	"method",
	"action",
	"encType",
	"enctype",
	"accept",
	"acceptCharset",
	"form",
	"formAction",
	"formMethod",
	"formTarget",
	"list",
	"multiple",
	"as",
	"content",
	"property",
	"httpEquiv",
	"charSet",
	"itemProp",
	"itemScope",
	"itemType",
	"color",
]);

/** Schema-builder function names whose string-literal args should be flagged. */
const SCHEMA_BUILDERS = [
	"buildArticleSchema",
	"buildFaqSchema",
	"buildComparisonSchema",
	"buildBreadcrumbSchema",
	"buildOrganizationSchema",
	"buildReviewedBadge",
	"buildPersonSchema",
];

/** Fields inside schema builder calls that ARE user-facing (and should be translated). */
const SCHEMA_TEXT_FIELDS = new Set([
	"headline",
	"description",
	"name",
	"articleBody",
	"text",
]);

/** Metadata fields that are user-facing. */
const METADATA_TEXT_FIELDS = new Set([
	"title",
	"description",
	"siteName",
	"alt",
]);

/** File extensions we scan. */
const EXTENSIONS = new Set([".tsx", ".ts"]);

/* ─────────────────────────────────────────────────────────────────
 * Walk / I/O helpers
 * ───────────────────────────────────────────────────────────────── */

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
			} else if (entry.isFile() && EXTENSIONS.has(path.extname(entry.name))) {
				out.push(full);
			}
		}
	}
	return out;
}

function relPath(absPath) {
	return path.relative(REPO_ROOT, absPath).split(path.sep).join("/");
}

/* ─────────────────────────────────────────────────────────────────
 * String-literal filtering
 * ───────────────────────────────────────────────────────────────── */

/** Collapse whitespace so we compare snippets reliably. */
function normalizeSnippet(s) {
	return s.replace(/\s+/g, " ").trim();
}

/**
 * Patterns that strongly indicate a snippet is actually JS/TS code, not
 * user-facing copy. These are mostly triggered by TypeScript generic
 * syntax like `useRef<HTMLDivElement>(null)` which ends up looking like
 * `>(null); const something = useRef<` between the generics' angle
 * brackets.
 */
const CODE_LIKE_PATTERNS = [
	/=\s*use(?:Ref|State|Effect|Memo|Callback|Id|Router|Pathname|SearchParams|Translations)\b/,
	/\buse(?:Ref|State|Effect|Memo|Callback|Id)\b/,
	/=>/,
	/;\s*(?:const|let|var|return|if|for|while|switch|function)\b/,
	/\breturn\s*\(/,
	/\.(?:current|then|catch|map|filter|find|forEach|includes|reduce|push|pop|slice|splice)\b/,
	/\b(?:HTMLDivElement|HTMLInputElement|HTMLButtonElement|HTMLElement|HTMLSelectElement|HTMLFormElement|HTMLAnchorElement|HTMLImageElement|HTMLSpanElement|HTMLParagraphElement|HTMLHeadingElement|HTMLLabelElement|HTMLUListElement|HTMLOListElement|HTMLLIElement|HTMLTableElement|HTMLTableRowElement|HTMLTableCellElement|SVGSVGElement|SVGElement)\b/,
	/\b(?:Record|Array|Promise|Partial|Readonly|ReactNode|ReactElement|JSX\.Element|MouseEvent|ChangeEvent|FormEvent|KeyboardEvent|FocusEvent|TouchEvent|RefObject|MutableRefObject|Dispatch|SetStateAction)\s*</,
	/\bnull\s*\)/,
	/\b(?:case|default)\s*["']?[a-zA-Z_]+["']?\s*:/,
	/\?\s*\./, // optional chaining: foo?.bar
	/&&|\|\|/,
	/`,\s*["`]/, // template literal concatenation `, "…"`
	/\b(?:exclude|include|filter|map|forEach)\b.*=>/,
	/\bdata-[a-z]+/i, // data-* attributes in JS strings
	/\bquerySelector/,
	/\bforms\?\s*:/, // optional type property
	/^\s*\(/,
	/^\s*[)\]}][),\]};\s]*/,
];

/** Heuristic: does `s` LOOK LIKE user-facing English copy? */
function looksLikeCopy(s) {
	const trimmed = s.trim();
	if (trimmed.length < 2) return false;

	// Ignore patterns listed in the allow-list.
	for (const re of IGNORED_STRING_PATTERNS) {
		if (re.test(trimmed)) return false;
	}

	// Ignore snippets that are obviously JavaScript / TypeScript code
	// (comes from TypeScript generic syntax being misread as JSX text).
	for (const re of CODE_LIKE_PATTERNS) {
		if (re.test(trimmed)) return false;
	}

	// Must contain at least one ASCII letter.
	if (!/[a-zA-Z]/.test(trimmed)) return false;

	// Must have either a space OR be >= 6 chars of alpha-heavy content.
	const hasSpace = /\s/.test(trimmed);
	const alphaRuns = trimmed.match(/[a-zA-Z]+/g) || [];
	const totalAlpha = alphaRuns.reduce((n, r) => n + r.length, 0);
	if (!hasSpace && totalAlpha < 6) return false;

	// Skip things that look like interpolated placeholders only.
	if (/^\$\{[^}]+\}$/.test(trimmed)) return false;

	// Skip snippets made up mostly of punctuation / code noise. If <50% of
	// non-whitespace characters are letters, it's almost certainly code.
	const nonWs = trimmed.replace(/\s/g, "");
	if (nonWs.length > 0 && totalAlpha / nonWs.length < 0.5) return false;

	return true;
}


/** Look up a finding in the allow-list. Returns true if we should skip it. */
function isAllowListed(finding) {
	const normalized = normalizeSnippet(finding.snippet);
	for (const entry of GLOBAL_ALLOWLIST) {
		if (!entry || !entry.reason || !entry.snippet) continue;
		if (entry.kind && entry.kind !== finding.kind) continue;
		if (entry.snippet === normalized) return true;
	}
	for (const entry of FILE_SPECIFIC_ALLOWLIST) {
		if (!entry || !entry.reason || !entry.snippet) continue;
		if (entry.kind && entry.kind !== finding.kind) continue;
		if (entry.file && entry.file !== finding.file) continue;
		if (entry.snippet === normalized) return true;
	}
	return false;
}

/* ─────────────────────────────────────────────────────────────────
 * Source preprocessing
 * ───────────────────────────────────────────────────────────────── */

/**
 * Strip /* …*\/ and // line comments from source so we don't flag text
 * in comments. Preserves line numbers by replacing stripped content
 * with spaces + newlines so offsets stay accurate.
 */
function stripComments(src) {
	let out = "";
	let i = 0;
	const n = src.length;
	let state = "code"; // code | str1 | str2 | tmpl | line-comment | block-comment
	let tmplDepth = 0;
	while (i < n) {
		const c = src[i];
		const next = src[i + 1];
		if (state === "code") {
			if (c === "/" && next === "/") {
				state = "line-comment";
				out += "  ";
				i += 2;
				continue;
			}
			if (c === "/" && next === "*") {
				state = "block-comment";
				out += "  ";
				i += 2;
				continue;
			}
			if (c === "'") {
				state = "str1";
				out += c;
				i++;
				continue;
			}
			if (c === '"') {
				state = "str2";
				out += c;
				i++;
				continue;
			}
			if (c === "`") {
				state = "tmpl";
				out += c;
				i++;
				continue;
			}
			out += c;
			i++;
			continue;
		}
		if (state === "line-comment") {
			if (c === "\n") {
				state = "code";
				out += "\n";
				i++;
				continue;
			}
			out += " ";
			i++;
			continue;
		}
		if (state === "block-comment") {
			if (c === "*" && next === "/") {
				state = "code";
				out += "  ";
				i += 2;
				continue;
			}
			out += c === "\n" ? "\n" : " ";
			i++;
			continue;
		}
		if (state === "str1") {
			if (c === "\\" && next !== undefined) {
				out += c + next;
				i += 2;
				continue;
			}
			if (c === "'") {
				state = "code";
			}
			out += c;
			i++;
			continue;
		}
		if (state === "str2") {
			if (c === "\\" && next !== undefined) {
				out += c + next;
				i += 2;
				continue;
			}
			if (c === '"') {
				state = "code";
			}
			out += c;
			i++;
			continue;
		}
		if (state === "tmpl") {
			if (c === "\\" && next !== undefined) {
				out += c + next;
				i += 2;
				continue;
			}
			if (c === "`") {
				state = "code";
				out += c;
				i++;
				continue;
			}
			if (c === "$" && next === "{") {
				tmplDepth = 1;
				out += "${";
				i += 2;
				// Scan through balanced braces using the main state machine
				while (i < n && tmplDepth > 0) {
					const cc = src[i];
					if (cc === "{") tmplDepth++;
					else if (cc === "}") tmplDepth--;
					out += cc;
					i++;
					if (tmplDepth === 0) break;
				}
				continue;
			}
			out += c;
			i++;
			continue;
		}
	}
	return out;
}

/** Return (line, column) for a character offset into `src` (1-indexed). */
function offsetToLineCol(src, offset) {
	let line = 1;
	let col = 1;
	for (let i = 0; i < offset && i < src.length; i++) {
		if (src[i] === "\n") {
			line++;
			col = 1;
		} else {
			col++;
		}
	}
	return { line, col };
}

/* ─────────────────────────────────────────────────────────────────
 * Finding detectors
 * ───────────────────────────────────────────────────────────────── */

/**
 * JSX text detector — finds text content between `>` and `<` on the same
 * line or across lines where the text is NOT a JSX expression (no
 * surrounding braces). This is intentionally loose; false positives are
 * handled downstream by `looksLikeCopy` + allow-list.
 */
function findJsxText(src, file) {
	const findings = [];
	// Match `>…<` where … is non-bracket text (not a JSX child element).
	// Use a lazy match and require the closing `<` to start a tag or
	// fragment. The `[^<>{}]` class excludes nested tags and expressions.
	const re = />([^<>{}]+)</g;
	let m;
	while ((m = re.exec(src)) !== null) {
		let raw = m[1];
		// Drop if the match looks like raw JS between two JSX expressions
		// (shouldn't happen because `{}` is excluded, but cheap guard).
		const trimmed = raw.trim();
		if (trimmed.length === 0) continue;
		if (!looksLikeCopy(trimmed)) continue;

		const absOffset = m.index + 1; // +1 to skip the `>`
		const { line, col } = offsetToLineCol(src, absOffset);
		findings.push({
			file,
			line,
			column: col,
			kind: "jsx-text",
			snippet: normalizeSnippet(trimmed),
		});
	}
	return findings;
}

/**
 * JSX attribute detector. Scans for
 *     <AttrName>="literal"
 * or
 *     <AttrName>={"literal"}
 * restricted to the `USER_FACING_ATTRS` set.
 */
function findJsxAttributes(src, file) {
	const findings = [];
	for (const attr of USER_FACING_ATTRS) {
		// attr="literal"
		const re1 = new RegExp(
			`(?<![a-zA-Z0-9_-])${attr.replace(
				/[-]/g,
				"\\-",
			)}\\s*=\\s*"([^"\\n]+)"`,
			"g",
		);
		let m;
		while ((m = re1.exec(src)) !== null) {
			const value = m[1];
			if (!looksLikeCopy(value)) continue;
			const { line, col } = offsetToLineCol(src, m.index);
			findings.push({
				file,
				line,
				column: col,
				kind: "attribute",
				attribute: attr,
				snippet: normalizeSnippet(value),
			});
		}
		// attr={"literal"} or attr={'literal'}
		const re2 = new RegExp(
			`(?<![a-zA-Z0-9_-])${attr.replace(
				/[-]/g,
				"\\-",
			)}\\s*=\\s*\\{\\s*(['"])([^'"\\n]+)\\1\\s*\\}`,
			"g",
		);
		while ((m = re2.exec(src)) !== null) {
			const value = m[2];
			if (!looksLikeCopy(value)) continue;
			const { line, col } = offsetToLineCol(src, m.index);
			findings.push({
				file,
				line,
				column: col,
				kind: "attribute",
				attribute: attr,
				snippet: normalizeSnippet(value),
			});
		}
	}
	return findings;
}

/**
 * Metadata / schema object-literal detector. Looks for patterns like
 *     title: "Literal string"
 *     description: "Literal string"
 *     headline: "Literal string"
 * anywhere in the source. Skips RHS that uses `t(…)`, `await ` calls,
 * template literals with interpolation, identifiers, ternaries, etc.
 */
function findObjectLiteralCopy(src, file) {
	const findings = [];
	const fields = new Set([...METADATA_TEXT_FIELDS, ...SCHEMA_TEXT_FIELDS]);
	for (const field of fields) {
		const re = new RegExp(
			`(?<![a-zA-Z0-9_"])${field}\\s*:\\s*(['"])((?:[^'"\\\\]|\\\\.)+?)\\1`,
			"g",
		);
		let m;
		while ((m = re.exec(src)) !== null) {
			const value = m[2];
			if (!looksLikeCopy(value)) continue;
			// Classify kind — schema fields get "schema", metadata fields get "metadata".
			const kind = SCHEMA_TEXT_FIELDS.has(field) ? "schema" : "metadata";
			// If this field overlaps both sets, prefer "metadata" (more common).
			const resolvedKind = METADATA_TEXT_FIELDS.has(field)
				? "metadata"
				: kind;
			const { line, col } = offsetToLineCol(src, m.index);
			findings.push({
				file,
				line,
				column: col,
				kind: resolvedKind,
				field,
				snippet: normalizeSnippet(value),
			});
		}
	}
	return findings;
}

/* ─────────────────────────────────────────────────────────────────
 * Main scanner
 * ───────────────────────────────────────────────────────────────── */

function scanFile(absPath) {
	let raw;
	try {
		raw = fs.readFileSync(absPath, "utf8");
	} catch {
		return [];
	}
	// Skip files that don't contain JSX or metadata-style fields at all.
	if (
		!raw.includes("<") &&
		!raw.includes("title:") &&
		!raw.includes("description:")
	) {
		return [];
	}
	const file = relPath(absPath);
	const src = stripComments(raw);
	const findings = [];
	findings.push(...findJsxText(src, file));
	findings.push(...findJsxAttributes(src, file));
	findings.push(...findObjectLiteralCopy(src, file));
	return findings;
}

function main() {
	let files;
	if (SINGLE_FILE) {
		const abs = path.isAbsolute(SINGLE_FILE)
			? SINGLE_FILE
			: path.join(REPO_ROOT, SINGLE_FILE);
		if (!fs.existsSync(abs)) {
			console.error(`File not found: ${SINGLE_FILE}`);
			process.exit(2);
		}
		files = [abs];
	} else {
		files = [];
		for (const dir of SCAN_DIRS) files.push(...walkSources(dir));
	}

	console.log(`Scanning ${files.length} .tsx/.ts files for hardcoded English…`);

	let rawFindings = [];
	for (const file of files) {
		rawFindings.push(...scanFile(file));
	}
	console.log(`  Raw findings (pre-allow-list): ${rawFindings.length}`);

	// Apply allow-list.
	const findings = rawFindings.filter((f) => !isAllowListed(f));
	console.log(`  After allow-list:             ${findings.length}`);

	// Group by file for a human-readable summary.
	const byFile = {};
	for (const f of findings) {
		if (!byFile[f.file]) byFile[f.file] = [];
		byFile[f.file].push(f);
	}

	const fileNames = Object.keys(byFile).sort();

	const report = {
		generatedAt: new Date().toISOString(),
		summary: {
			filesScanned: files.length,
			rawFindings: rawFindings.length,
			allowListed: rawFindings.length - findings.length,
			flaggedFindings: findings.length,
			filesWithFindings: fileNames.length,
		},
		perFile: byFile,
		allFindings: findings,
	};
	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");

	console.log("");
	console.log(`Report written to ${relPath(REPORT_PATH)}`);
	console.log("");

	if (findings.length === 0) {
		console.log("✓ No hardcoded English strings detected.");
		process.exit(0);
	}

	// Summary per file.
	console.log(`Findings by file (${fileNames.length} files):`);
	for (const file of fileNames) {
		const list = byFile[file];
		console.log(`  ${file}  — ${list.length} finding${list.length === 1 ? "" : "s"}`);
		// Print up to 6 per file for quick scan.
		const shown = list.slice(0, 6);
		for (const f of shown) {
			const loc = `L${f.line}`.padEnd(6, " ");
			const kind = (f.kind + (f.attribute ? `:${f.attribute}` : "") + (f.field ? `:${f.field}` : "")).padEnd(22, " ");
			const snippet = f.snippet.length > 80 ? `${f.snippet.slice(0, 77)}…` : f.snippet;
			console.log(`    ${loc}${kind} ${JSON.stringify(snippet)}`);
		}
		if (list.length > shown.length) {
			console.log(`    … +${list.length - shown.length} more`);
		}
	}

	console.log("");
	console.log(
		`TOTAL: ${findings.length} flagged finding${findings.length === 1 ? "" : "s"} ` +
			`across ${fileNames.length} file${fileNames.length === 1 ? "" : "s"}.`,
	);

	if (STRICT) process.exit(1);
}

main();

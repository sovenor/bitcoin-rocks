#!/usr/bin/env node
/**
 * Phase 9a — Patch lightning/flyers/compound-inflation-calculator pages
 * to await `buildArticleSchema()` (it's async — returns a Promise, which
 * was being serialized as "{}" by JsonLd without the await).
 *
 * Idempotent: if the target pattern isn't found, skips the file.
 */

const fs = require("fs");
const path = require("path");

const PAGES = [
	"app/[locale]/lightning/page.tsx",
	"app/[locale]/flyers/page.tsx",
	"app/[locale]/compound-inflation-calculator/page.tsx",
];

const ROOT = path.join(__dirname, "..", "..");

for (const rel of PAGES) {
	const abs = path.join(ROOT, rel);
	let src = fs.readFileSync(abs, "utf8");

	if (src.includes("const articleSchema = await buildArticleSchema")) {
		console.log(`skip (already patched): ${rel}`);
		continue;
	}

	// Find the `return (\n\t\t<div className="container-main">` then the JsonLd blocks
	const pattern = /(\tconst description = t\([^)]+\);\n\n)\treturn \(\n\t\t<div className="container-main">\n\t\t\t<JsonLd\n\t\t\t\tdata=\{buildArticleSchema\(\{([\s\S]*?)\}\)\}\n\t\t\t\/>\n\t\t\t<JsonLd\n\t\t\t\tdata=\{buildBreadcrumbSchema\(\{([\s\S]*?)\}\)\}\n\t\t\t\/>/;

	const match = src.match(pattern);
	if (!match) {
		console.log(`WARN: pattern not found in ${rel}`);
		continue;
	}

	const articleArgs = match[2];
	const breadcrumbArgs = match[3];

	const replacement =
		`${match[1]}\tconst articleSchema = await buildArticleSchema({${articleArgs}});\n` +
		`\tconst breadcrumbSchema = buildBreadcrumbSchema({${breadcrumbArgs}});\n\n` +
		`\treturn (\n\t\t<div className="container-main">\n` +
		`\t\t\t<JsonLd data={articleSchema} />\n` +
		`\t\t\t<JsonLd data={breadcrumbSchema} />`;

	src = src.replace(pattern, replacement);
	fs.writeFileSync(abs, src);
	console.log(`patched: ${rel}`);
}

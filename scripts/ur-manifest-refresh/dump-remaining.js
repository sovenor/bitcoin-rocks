#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"ur.json",
);

const r = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
const remaining = r.entries.filter(
	(e) => typeof e.targetTranslation !== "string",
);

const byNs = {};
for (const e of remaining) {
	if (!byNs[e.namespace]) byNs[e.namespace] = [];
	byNs[e.namespace].push({
		key: e.key,
		reason: e.reason,
		englishValue: e.englishValue,
		currentValue: e.currentValue,
	});
}

const out = path.resolve(__dirname, "remaining.json");
fs.writeFileSync(out, JSON.stringify(byNs, null, "\t") + "\n");
console.log("Dumped", remaining.length, "entries across", Object.keys(byNs).length, "namespaces to", out);

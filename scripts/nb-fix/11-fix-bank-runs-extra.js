#!/usr/bin/env node
/**
 * 11-fix-bank-runs-extra.js
 *
 * Catch-up fix for one Danish word that slipped through: "inflation"
 * → "inflasjon" in i18n/nb/bank-runs_nb.json.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "bank-runs_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"bank_runs_fdic_p2_link": "inflasjon.",
};

let changed = 0;
for (const [k, v] of Object.entries(fixes)) {
	if (!(k in data)) continue;
	if (data[k] !== v) {
		data[k] = v;
		changed++;
	}
}

data["@metadata"] = data["@metadata"] || {};
data["@metadata"]["last-updated"] = "2026-04-26";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log(`bank-runs_nb.json (extra): re-translated ${changed} keys`);

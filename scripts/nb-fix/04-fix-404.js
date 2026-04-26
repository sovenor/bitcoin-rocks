#!/usr/bin/env node
/**
 * 04-fix-404.js
 *
 * Re-translate Danish-contaminated values in i18n/nb/404_nb.json into
 * proper Norwegian Bokmål.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "404_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"404_message": "Bitcoin er fantastisk, men denne ødelagte siden er ikke det.",
	"404_home": "Tilbake til forsiden",
	"404_not_found_short": "Ikke funnet",
};

let changed = 0;
for (const [k, v] of Object.entries(fixes)) {
	if (!(k in data)) {
		console.warn(`! key not found in file: ${k}`);
		continue;
	}
	if (data[k] !== v) {
		data[k] = v;
		changed++;
	}
}

data["@metadata"] = data["@metadata"] || {};
data["@metadata"]["last-updated"] = "2026-04-26";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log(`404_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);

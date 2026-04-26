#!/usr/bin/env node
/**
 * Fix the lone untranslated entry: common_stickers_material.
 * "Material:" → "Material turi:" (Uzbek typically uses "Material turi" for
 * "type of material"; just "Material:" reads as English).
 */
"use strict";

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.join(
	__dirname,
	"..",
	"i18n-audit",
	"reports",
	"uz.json",
);
const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));

let fixed = 0;
for (const entry of report.entries) {
	if (
		entry.namespace === "common" &&
		entry.key === "common_stickers_material"
	) {
		entry.targetTranslation = "Material turi:";
		fixed++;
	}
}

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n", "utf8");
console.log("Fixed", fixed, "entries.");

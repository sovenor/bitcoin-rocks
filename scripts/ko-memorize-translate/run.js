#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Korean files.
 *  - i18n/ko/index_ko.json   : 2 home-card keys
 *  - i18n/ko/wallets_ko.json : 3 wallets_s6_c4b_a/b/c keys
 * Bumps @metadata.last-updated to 2026-04-30 in both.
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function patchFile(relPath, additions) {
	const filePath = path.join(REPO_ROOT, relPath);
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);

	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = TODAY;
	}

	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}

	fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`Updated ${relPath} (+${Object.keys(additions).length} keys)`);
}

// index_ko.json
patchFile("i18n/ko/index_ko.json", {
	home_card_label_self_custody_4: "최후의 백업",
	home_link_title_self_custody_4: "비트코인을 머릿속에 보관하는 방법",
});

// wallets_ko.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Korean rendering keeps the noun phrase "시드 문구를 외워두면" as the link target (_b),
// with _a as the lead-in clause and _c closing with the "invisible backup" descriptor.
patchFile("i18n/ko/wallets_ko.json", {
	wallets_s6_c4b_a: "회복력을 한 겹 더하기 위해",
	wallets_s6_c4b_b: "시드 문구를 외워두면",
	wallets_s6_c4b_c: "당신과 함께 다니는 보이지 않는 백업이 됩니다.",
});

console.log("Done.");

#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Japanese files.
 *  - i18n/ja/index_ja.json   : 2 home-card keys
 *  - i18n/ja/wallets_ja.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_ja.json
patchFile("i18n/ja/index_ja.json", {
	home_card_label_self_custody_4: "最後の手段のバックアップ",
	home_link_title_self_custody_4: "ビットコインを頭の中に保管する方法",
});

// wallets_ja.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Japanese rendering: a-clause sets the reason ("もう一段の冗長性のため、")
// _b is the verb-clause noun phrase used as the hyperlink target ("シードフレーズを記憶する")
// _c continues the sentence with "ことで、…も…できます。" so the joined sentence reads naturally.
patchFile("i18n/ja/wallets_ja.json", {
	wallets_s6_c4b_a: "もう一段の冗長性のため、",
	wallets_s6_c4b_b: "シードフレーズを記憶する",
	wallets_s6_c4b_c: "ことで、あなたと共に旅する見えないバックアップを持つこともできます。",
});

console.log("Done.");

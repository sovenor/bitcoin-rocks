#!/usr/bin/env node
/**
 * Add new Yoruba translation keys for the memorize-your-seed-phrase rollout.
 * - index_yo.json: 2 self-custody card keys
 * - wallets_yo.json: 3 inline-link keys (s6_c4b_a/b/c)
 * Bumps @metadata.last-updated to 2026-04-30 and writes back with TAB indent.
 */

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");

const updates = [
	{
		file: path.join(repoRoot, "i18n", "yo", "index_yo.json"),
		additions: {
			home_card_label_self_custody_4: "Àfìípamó́ ìparí",
			home_link_title_self_custody_4: "Bí o ṣe lè pamó́ Bitcoin sínú ọpọlọ rẹ",
		},
	},
	{
		file: path.join(repoRoot, "i18n", "yo", "wallets_yo.json"),
		additions: {
			wallets_s6_c4b_a: "Fún ìpele míràn ti àìfọ̀ìkàn, o tún lè",
			wallets_s6_c4b_b: "kọ ọ̀rọ̀ ìgbapadà rẹ sórí",
			wallets_s6_c4b_c: "gẹ́gẹ́ bí àfìípamó́ aláìríran tó ń bá ọ rìn lọ.",
		},
	},
];

for (const { file, additions } of updates) {
	const raw = fs.readFileSync(file, "utf8");
	const obj = JSON.parse(raw);

	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}

	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = "2026-04-30";

	fs.writeFileSync(file, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`Updated ${path.relative(repoRoot, file)} (+${Object.keys(additions).length} keys)`);
}

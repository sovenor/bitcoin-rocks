#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Thai files.
 *  - i18n/th/index_th.json   : 2 home-card keys
 *  - i18n/th/wallets_th.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_th.json
patchFile("i18n/th/index_th.json", {
	home_card_label_self_custody_4: "ข้อมูลสำรองสุดท้าย",
	home_link_title_self_custody_4: "วิธีเก็บ Bitcoin ไว้ในสมองของคุณ",
});

// wallets_th.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Thai keeps the same flow: _b is the noun phrase that gets the link.
patchFile("i18n/th/wallets_th.json", {
	wallets_s6_c4b_a: "เพื่อเพิ่มชั้นความทนทานอีกหนึ่งชั้น คุณยังสามารถ",
	wallets_s6_c4b_b: "จดจำวลีกู้คืนของคุณ",
	wallets_s6_c4b_c: "เป็นข้อมูลสำรองที่มองไม่เห็นซึ่งติดตัวคุณไปทุกที่",
});

console.log("Done.");

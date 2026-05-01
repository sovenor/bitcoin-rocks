#!/usr/bin/env node
/**
 * Adds the new "memorize your seed phrase" keys to the Turkish
 * index_tr.json + wallets_tr.json files, and bumps last-updated.
 *
 * Run from repo root:
 *   node scripts/tr-memorize-translate/run.js
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

const INDEX_PATH = path.join(REPO_ROOT, "i18n", "tr", "index_tr.json");
const WALLETS_PATH = path.join(REPO_ROOT, "i18n", "tr", "wallets_tr.json");

const indexAdds = {
	home_card_label_self_custody_4: "Son çare yedeği",
	home_link_title_self_custody_4: "Bitcoin'i beyninizde nasıl saklarsınız",
};

const walletsAdds = {
	wallets_s6_c4b_a: "Bir esneklik katmanı daha için, ayrıca",
	wallets_s6_c4b_b: "kurtarma ifadenizi ezberleyebilirsiniz",
	wallets_s6_c4b_c: "— sizinle birlikte seyahat eden görünmez bir yedek olarak.",
};

function patchFile(filePath, additions) {
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);

	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = TODAY;
	}

	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}

	const out = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(filePath, out, "utf8");
	console.log(`Updated ${path.relative(REPO_ROOT, filePath)} (+${Object.keys(additions).length} keys, last-updated=${TODAY})`);
}

patchFile(INDEX_PATH, indexAdds);
patchFile(WALLETS_PATH, walletsAdds);

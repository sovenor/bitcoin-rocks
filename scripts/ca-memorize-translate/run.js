#!/usr/bin/env node
/**
 * Adds the new "memorize your seed phrase" keys to the Catalan
 * index_ca.json + wallets_ca.json files, and bumps last-updated.
 *
 * Run from repo root:
 *   node scripts/ca-memorize-translate/run.js
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

const INDEX_PATH = path.join(REPO_ROOT, "i18n", "ca", "index_ca.json");
const WALLETS_PATH = path.join(REPO_ROOT, "i18n", "ca", "wallets_ca.json");

const indexAdds = {
	home_card_label_self_custody_4: "Còpia de seguretat de darrer recurs",
	home_link_title_self_custody_4: "Com guardar Bitcoin al cervell",
};

const walletsAdds = {
	wallets_s6_c4b_a: "Per a una capa més de resiliència, també pots",
	wallets_s6_c4b_b: "memoritzar la teva frase llavor",
	wallets_s6_c4b_c: "com a còpia de seguretat invisible que viatja amb tu.",
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

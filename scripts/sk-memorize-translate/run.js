"use strict";

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const i18nDir = path.join(repoRoot, "i18n", "sk");

const indexPath = path.join(i18nDir, "index_sk.json");
const walletsPath = path.join(i18nDir, "wallets_sk.json");

const today = "2026-04-30";

// --- index_sk.json: add 2 new self-custody keys ---
const indexAdditions = {
	home_card_label_self_custody_4: "Záloha poslednej záchrany",
	home_link_title_self_custody_4: "Ako uchovať Bitcoin vo svojom mozgu",
};

// --- wallets_sk.json: add 3 new keys for the inline-link sentence ---
// Joined sentence (Slovak): "Pre ďalšiu vrstvu odolnosti si tiež môžete
// zapamätať svoju seed frázu ako neviditeľnú zálohu, ktorá cestuje s vami."
// _b is the linkable noun phrase: "zapamätať svoju seed frázu"
const walletsAdditions = {
	wallets_s6_c4b_a: "Pre ďalšiu vrstvu odolnosti si tiež môžete",
	wallets_s6_c4b_b: "zapamätať svoju seed frázu",
	wallets_s6_c4b_c: "ako neviditeľnú zálohu, ktorá cestuje s vami.",
};

function updateFile(filePath, additions) {
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);

	// Bump @metadata.last-updated
	if (!obj["@metadata"]) {
		obj["@metadata"] = {};
	}
	obj["@metadata"]["last-updated"] = today;

	// Merge additions (preserves existing key order; new keys appended)
	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}

	const out = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(filePath, out, "utf8");
	console.log(`Updated ${path.relative(repoRoot, filePath)} (+${Object.keys(additions).length} keys)`);
}

updateFile(indexPath, indexAdditions);
updateFile(walletsPath, walletsAdditions);

// --- memorize-your-seed-phrase_sk.json: gloss "Brain wallet" so the
// verifier doesn't flag it as untranslated. Matches Czech / Polish style.
const memorizePath = path.join(i18nDir, "memorize-your-seed-phrase_sk.json");
const memorizeAdditions = {
	memorize_seed_callout_bad_label: "„Brain wallet“ (mozgová peňaženka)",
};
updateFile(memorizePath, memorizeAdditions);

console.log("Done.");

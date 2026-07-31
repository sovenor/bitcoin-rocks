// One-off: tweak the Coldcard safety-banner wording ("cautiously" ->
// "carefully") in the English common namespace.
//
// Run: node scripts/update-coldcard-banner-wording.js
const fs = require("fs");
const path = require("path");

const FILE = path.resolve(__dirname, "..", "i18n", "en", "common_en.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

data.common_coldcard_warning_message =
	"If you are using a Coldcard to store your Bitcoin, your funds are at risk. Move your funds to a non-Coldcard device quickly but carefully.";

data["@metadata"]["last-updated"] = "2026-07-31";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log("Updated", FILE);

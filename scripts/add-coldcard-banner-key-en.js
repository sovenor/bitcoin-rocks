// One-off: add the site-wide Coldcard safety-banner message to the English
// `common` namespace (loaded on every page via DEFAULT_NAMESPACES). The
// banner's "Learn more" link label reuses the existing common_learn_more
// key, which is already translated across all 55 locales.
//
// Run: node scripts/add-coldcard-banner-key-en.js
const fs = require("fs");
const path = require("path");

const FILE = path.resolve(__dirname, "..", "i18n", "en", "common_en.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

data.common_coldcard_warning_message =
	"If you are using a Coldcard to store your Bitcoin, your funds are at risk. Move your funds to a non-Coldcard device quickly but cautiously.";

data["@metadata"]["last-updated"] = "2026-07-31";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log("Updated", FILE);

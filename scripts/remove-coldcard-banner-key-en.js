// One-off: remove the site-wide Coldcard safety-banner message from the
// English `common` namespace now that the banner has been retired from
// app/[locale]/layout.tsx and app/not-found.tsx.
//
// Run: node scripts/remove-coldcard-banner-key-en.js
const fs = require("fs");
const path = require("path");

const FILE = path.resolve(__dirname, "..", "i18n", "en", "common_en.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

delete data.common_coldcard_warning_message;

data["@metadata"]["last-updated"] = "2026-09-03";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log("Updated", FILE);

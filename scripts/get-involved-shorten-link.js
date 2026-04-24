/**
 * Shorten the "send the owner to …" link on /get-involved.
 *
 * Before: "Send the owner to [our Bitcoin business page to learn why
 *          Bitcoin is good for business, choose a wallet, set up a
 *          point-of-sale, and start accepting payments today.]"
 * After:  "Send the owner to our [Bitcoin business page]."
 */

const fs = require("fs");
const path = require("path");

const filePath = path.join(
	__dirname,
	"..",
	"i18n",
	"en",
	"get-involved_en.json",
);
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

data["@metadata"]["last-updated"] = "2026-04-23";
data["get_involved_business_content_2"] =
	"Know a business that might be open to it? Send the owner to our";
data["get_involved_business_content_3"] = "Bitcoin business page.";

fs.writeFileSync(filePath, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log("✅ Shortened business link in", filePath);

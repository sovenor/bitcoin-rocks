#!/usr/bin/env node
/**
 * Update all /bitcoin-vs-* and /bank-runs comparison JSON files
 * for the April 2026 V2 refresh:
 *
 *   1. Standardize hero H1 → single `hero_title` key in sentence case
 *      (e.g. "The difference between Bitcoin and Gold"). Kept as its
 *      own key so translators edit one string, not four.
 *   2. Condense every `point_N_summary_M` explanation down to the
 *      key points only. Multi-paragraph explanations collapse to one
 *      short paragraph; link-bearing sentences are split into tight
 *      fragments so the link anchors on a single word rather than a
 *      whole phrase.
 *   3. Refresh @metadata.last-updated to today (2026-04-20).
 *
 * We leave stale legacy keys in-place (e.g. `gold_header`, old
 * `point_*_summary_*` multi-paragraph prose) — the data files no
 * longer reference them. Translators can clean them out as they
 * localize the new content. The per-page namespace loader falls
 * back to English per-key, so non-English locales pick up the new
 * short prose automatically until translations land.
 *
 * Run: node scripts/update-comparison-content.js
 */

const fs = require("node:fs");
const path = require("node:path");

const TODAY = "2026-04-20";
const EN_DIR = path.join(__dirname, "..", "i18n", "en");

/**
 * Per-page payload:
 *   - file: filename inside i18n/en/
 *   - heroTitle: new single-line H1
 *   - updates: map of { key → value } to write
 *
 * The `updates` entries overwrite existing keys and add new ones.
 * Order is preserved by the script (new keys appended at the end).
 */
const PAGES = {
	// ═══════════════════ BITCOIN vs GOLD ═══════════════════
	"bitcoin-vs-gold_en.json": {
		heroTitle: "The difference between Bitcoin and Gold",
		updates: {
			point_1_summary_1:
				"Bitcoin can be sent instantly over the internet for low fees. Gold must be physically shipped to transfer ownership.",
			point_2_summary_1:
				"Bitcoin is a digitally native asset you can transfer over the internet. Most online gold is a Digital IOU — you only own a promise from a custodian, not the metal itself.",
			point_3_summary_1:
				"Bitcoin has a hard cap of 21 million BTC. Gold's supply grows about 1.6% per year, shrinking your slice — less than fiat",
			point_3_summary_2: "inflation",
			point_3_summary_3: ", but still inflation.",
			point_4_summary_1:
				"When gold prices rise, more gold gets mined, pushing the price back down. Bitcoin's supply is inelastic — no matter how high the price goes, there will only ever be 21 million.",
			point_5_summary_1:
				"Tens of thousands of independent nodes validate the Bitcoin network. Most physical gold sits in a handful of large custodian vaults.",
			point_6_summary_1:
				"Anyone can verify real Bitcoin by running a full node — it's just an app. Verifying physical gold requires melting it down; the inside could be tungsten.",
			point_7_summary_1:
				"Bitcoin divides into 100 million sats, making it perfect for any size purchase. Gold can't be easily divided for small transactions.",
		},
	},

	// ═══════════════════ BITCOIN vs STOCKS ═══════════════════
	"bitcoin-vs-stocks_en.json": {
		heroTitle: "The difference between Bitcoin and Stocks",
		updates: {
			point_1_summary_1:
				"Bitcoin is a direct asset you own outright. Stocks are shares in a company — their value depends on management, performance, and decisions you can't control.",
			point_2_summary_1:
				"Bitcoin has a hard cap of 21 million BTC. Companies can issue new shares at any time, diluting existing shareholders — similar to how fiat",
			point_2_summary_2: "inflation",
			point_2_summary_3: " dilutes cash. With Bitcoin, your slice never shrinks.",
			point_3_summary_1:
				"Bitcoin has no CEO and no single point of failure. Stocks depend heavily on leadership — one bad decision or departure can tank the price.",
			point_4_summary_1:
				"Bitcoin's price comes from open global markets. Stock valuations rely on metrics like P/E ratios that can mask overpriced shares.",
			point_5_summary_1:
				"Bitcoin trades 24/7 around the world. Stock markets are only open during business hours on weekdays.",
			point_6_summary_1: "You can take",
			point_6_summary_2: "self-custody",
			point_6_summary_3:
				"of Bitcoin with a simple app — no broker needed. Stocks sit with brokerages, exposing you to counterparty risk if they fail.",
			point_7_summary_1:
				"Bitcoin's fixed supply makes it a reliable inflation hedge. Some stocks beat inflation, others don't — there's no guarantee.",
		},
	},

	// ═══════════════════ BITCOIN vs CASH ═══════════════════
	"bitcoin-vs-cash_en.json": {
		heroTitle: "The difference between Bitcoin and Cash",
		updates: {
			point_1_summary_1:
				"Bitcoin moves over the internet anywhere in minutes. Cash needs physical presence or trusted couriers — you can't email a $20 bill.",
			point_2_summary_1:
				"Bitcoin works the same way everywhere. Cash is limited by geography, exchange rates, and local acceptance.",
			point_3_summary_1:
				"Governments can invalidate cash overnight — India did it in 2016. Even without demonetization, cash loses value to",
			point_3_summary_2: "inflation",
			point_3_summary_3:
				". Bitcoin can't be invalidated by any government or authority.",
			point_4_summary_1:
				"Cash can be counterfeited, sometimes convincingly. Bitcoin uses cryptography that makes counterfeiting mathematically impossible.",
			point_5_summary_1:
				"Bitcoin has no central authority. Cash is issued by governments that can print more, change designs, or invalidate notes at will.",
			point_6_summary_1:
				"Cash is vulnerable to theft, fire, loss, and confiscation. Bitcoin can be securely",
			point_6_summary_2: "self-custodied",
			point_6_summary_3: "on a phone or hardware device.",
			point_7_summary_1:
				"Bitcoin divides into 100 million sats, enabling micropayments of any size. Cash has minimum denominations — you can't split a penny.",
		},
	},

	// ═══════════════════ BITCOIN vs BANKS ═══════════════════
	"bitcoin-vs-banks_en.json": {
		heroTitle: "The difference between Bitcoin and Banks",
		updates: {
			point_1_summary_1:
				"Anyone with an internet connection can use Bitcoin — it's",
			point_1_summary_2: "permissionless",
			point_1_summary_3:
				". Banks can refuse, freeze, or close accounts based on policy or government rules.",
			point_2_summary_1:
				"The Bitcoin network runs 24/7/365 with no maintenance windows or holidays. Banks have limited hours, weekends off, and outage windows.",
			point_3_summary_1:
				"Every Bitcoin transaction is on a public blockchain anyone can audit. Banks run private ledgers customers can't independently verify.",
			point_4_summary_1: "With Bitcoin, you hold your own private keys — see",
			point_4_summary_2: "wallets",
			point_4_summary_3:
				". Banks hold your money and can freeze, limit, or restrict it at any time.",
			point_5_summary_1:
				"Bitcoin fees are transparent and predictable. Banks stack on hidden account, overdraft, wire, and ATM fees over time.",
			point_6_summary_1:
				"Bitcoin only lets you spend what you actually own. Banks allow overdrafts, then charge cascading penalty fees for the privilege.",
			point_7_summary_1:
				"Once broadcast, Bitcoin transactions can't be stopped or reversed. Banks can block, freeze, or reverse transactions based on policy or government orders.",
		},
	},

	// ═══════════════════ BITCOIN vs BONDS ═══════════════════
	"bitcoin-vs-bonds_en.json": {
		heroTitle: "The difference between Bitcoin and Bonds",
		updates: {
			point_1_summary_1:
				"Bonds are only 'risk-free' nominally — inflation, interest-rate moves, and default risk all eat real returns.",
			point_1_summary_2:
				"Bitcoin has transparent volatility but no hidden counterparty risk.",
			point_2_summary_1: "When",
			point_2_summary_2: "inflation",
			point_2_summary_3:
				"outpaces bond yields, bondholders lose real purchasing power every year. Bitcoin's 21-million cap can't be inflated away.",
			point_3_summary_1:
				"Bond markets can freeze in crises — Silicon Valley Bank collapsed partly because it was stuck holding bonds that lost value. See how",
			point_3_summary_2: "bank runs",
			point_3_summary_3:
				"happen and why Bitcoin avoids them. Bitcoin trades 24/7 globally with no liquidity crises.",
			point_4_summary_1:
				"Treasury auctions can fail when there aren't enough buyers — see the",
			point_4_summary_2: "weak 2022 auction",
			point_4_summary_3:
				". Bitcoin's price is discovered continuously on open markets with no central auction that can fail.",
			point_5_summary_1:
				"Bond yields are fixed at purchase. Even if the economy booms or the currency collapses, your return stays the same.",
			point_5_summary_2:
				"Bitcoin has room for significant appreciation as adoption grows and demand meets fixed supply.",
			point_6_summary_1:
				"Most bonds are held through banks or brokers, adding counterparty risk. Bitcoin can be self-custodied with a",
			point_6_summary_2: "wallet",
			point_6_summary_3: " — eliminating that risk entirely.",
			point_7_summary_1:
				"Bonds depend entirely on governments paying back. If a government defaults or inflates away its debt, bondholders lose.",
			point_7_summary_2:
				"Bitcoin operates independently of any government or political authority.",
		},
	},

	// ═══════════════════ BITCOIN vs REAL ESTATE ═══════════════════
	"bitcoin-vs-real-estate_en.json": {
		heroTitle: "The difference between Bitcoin and Real Estate",
		updates: {
			point_1_summary_1:
				"Bitcoin moves anywhere in the world instantly. Real estate is fixed to one location and exposed to local economic, political, and natural risks.",
			point_2_summary_1:
				"Bitcoin divides into 100 million sats. Real estate can't be partly sold — you can't offload just the kitchen or buy half a bedroom.",
			point_3_summary_1:
				"Bitcoin operates on a decentralized network that no government can control. Real estate is heavily regulated — zoning, rent control, eminent domain, and seizure all apply.",
			point_4_summary_1:
				"Bitcoin requires no upkeep. Real estate demands repairs, renovations, insurance, property management, and tenant issues.",
			point_5_summary_1:
				"Bitcoin has no ongoing taxes — you only pay capital gains when you sell. Real estate owes annual property taxes regardless of income.",
			point_6_summary_1:
				"Bitcoin, backed up properly, survives fire, flood, and earthquake. Real estate is vulnerable to every disaster, and insurance rarely covers it all.",
			point_7_summary_1:
				"Every bitcoin is identical and interchangeable. Every property is unique, making pricing and comparisons difficult.",
			point_8_summary_1:
				"Bitcoin trades globally 24/7 by anyone with internet access. Real estate sales are limited to local buyers and can take months of paperwork to close.",
			point_9_summary_1:
				"Bitcoin enables direct individual ownership for anyone. Buying real estate as an investment beyond your primary residence drives up housing prices, reducing affordability and fueling the housing crisis.",
		},
	},

	// ═══════════════════ BITCOIN vs CRYPTO ═══════════════════
	"bitcoin-vs-crypto_en.json": {
		heroTitle: "The difference between Bitcoin and Crypto",
		updates: {
			point_1_summary_1:
				"Bitcoin's protocol has stayed fundamentally the same since 2009, providing predictable rules. Most crypto projects constantly change protocols, tokenomics, or fork into new versions.",
			point_2_summary_1:
				"Bitcoin runs on tens of thousands of independent nodes worldwide. Most crypto projects are controlled by foundations, companies, or small dev teams that can make unilateral changes.",
			point_3_summary_1:
				"Bitcoin has a hard cap of 21 million coins — the scarcest digital asset. Most crypto projects have unlimited supplies or mechanisms to mint new tokens at will, diluting holders.",
			point_4_summary_1:
				"Bitcoin has one purpose: peer-to-peer digital money. Anyone can understand and use it. Most crypto involves complex smart contracts or DeFi that require technical expertise to use safely.",
			point_5_summary_1:
				"Bitcoin's Proof of Work has run without a successful attack on the main network for over 15 years. Most crypto projects use experimental consensus that hasn't been battle-tested.",
			point_6_summary_1:
				"Bitcoin is digital money — a store of value and medium of exchange. Most crypto tokens are speculative utility or governance tokens with unclear real-world value.",
			point_7_summary_1:
				"Bitcoin grows stronger under attack and has survived every crisis, ban, and criticism. Most crypto projects collapse under regulatory, technical, or market pressure.",
			point_8_summary_1:
				"Bitcoin has no CEO, no company, no single point of failure. Most crypto projects depend on VCs, specific leadership, or one company's survival.",
		},
	},

	// ═══════════════════ BITCOIN vs CBDC ═══════════════════
	"bitcoin-vs-cbdc_en.json": {
		heroTitle: "The difference between Bitcoin and CBDCs",
		updates: {
			point_1_summary_1:
				"Nobody can stop you from transacting with Bitcoin. CBDCs are designed so governments and central banks can control every payment, limiting your privacy and freedom.",
			point_2_summary_1:
				"Bitcoin never expires and has no monthly fees. CBDCs can be programmed to expire, preventing you from saving for the future.",
			point_3_summary_1:
				"Bitcoin has a hard cap of 21 million BTC. CBDCs have no cap on supply, allowing governments to expand money at will — which causes",
			point_3_summary_2: "inflation",
			point_3_summary_3: ".",
			point_4_summary_1:
				"Bitcoin addresses aren't tied to your real identity. CBDCs link directly to government ID, enabling mass financial surveillance and censorship.",
			point_5_summary_1:
				"Bitcoin's rules are validated by tens of thousands of independent nodes. CBDCs are centralized in government and central-bank hands, which hold complete control over the network.",
			point_6_summary_1:
				"Anyone can run a Bitcoin node to verify the rules of the network. CBDCs don't allow users to run nodes — you have to trust the central authority.",
			point_7_summary_1:
				"Self-custodied Bitcoin can't be frozen by anyone. CBDCs are designed so governments and central banks can freeze accounts instantly.",
			point_8_summary_1:
				"Bitcoin gives you full control over your money when you self-custody it with a",
			point_8_summary_2: "wallet",
			point_8_summary_3:
				". CBDCs require trusting custodians like banks or governments to hold your money for you.",
			point_9_summary_1:
				"Bitcoin's monetary policy is fixed in code and can't be changed. CBDCs can be reprogrammed at will by politicians, causing",
			point_9_summary_2: "inflation",
			point_9_summary_3: " when too much money gets printed.",
			point_10_summary_1:
				"Bitcoin is the most secure computing network ever built and has never been hacked. CBDCs rely on banks and governments that have been hacked countless times.",
		},
	},

	// ═══════════════════ BITCOIN vs FINE ART ═══════════════════
	"bitcoin-vs-fine-art_en.json": {
		heroTitle: "The difference between Bitcoin and Fine Art",
		updates: {
			point_1_summary_1:
				"Every bitcoin is identical and interchangeable. Every artwork is unique — different creation, history, condition, and provenance make direct comparisons extremely difficult.",
			point_2_summary_1:
				"Bitcoin trades 24/7 on a global market accessible to anyone. Fine art requires specialized auction houses, private dealers, or galleries and can take months to sell.",
			point_3_summary_1:
				"Buying or selling Bitcoin costs under 1% in fees, often much less. Art sales rack up 30–40% in buyer's premiums, commissions, insurance, transport, and authentication fees.",
			point_4_summary_1:
				"Bitcoin divides into 100 million sats, making it perfect for any size transaction. You can't own a fraction of a painting or a corner of a sculpture.",
			point_5_summary_1:
				"Bitcoin ownership and authenticity can be cryptographically verified by anyone on-chain. Art authentication is expensive, slow, and still routinely fooled by forgers — destroying an artwork's value overnight.",
			point_6_summary_1:
				"Bitcoin, backed up properly, survives floods, fires, earthquakes, and theft. Fine art is vulnerable to every form of physical destruction, and insurance rarely covers it all.",
			point_7_summary_1:
				"Anyone with an internet connection and a little money can buy Bitcoin. Fine art investment is effectively limited to wealthy collectors with auction access and specialized knowledge.",
		},
	},

	// ═══════════════════ BITCOIN vs VISA ═══════════════════
	"bitcoin-vs-visa_en.json": {
		heroTitle: "The difference between Bitcoin and Visa",
		updates: {
			point_1_summary_1:
				"Bitcoin is an open network anyone can join and use without permission. Visa is a closed system controlled by financial institutions that can deny access — especially to the unbanked and underbanked.",
			point_2_summary_1:
				"Bitcoin transactions have no merchant fees. Visa typically charges merchants around 3% per transaction — your business can save money accepting",
			point_2_summary_2: "Bitcoin payments",
			point_2_summary_3: " instead.",
			point_3_summary_1:
				"Every Bitcoin transaction is on a public, auditable blockchain. Visa runs a closed, proprietary system where customers can't independently verify anything.",
			point_4_summary_1:
				"Bitcoin can't be frozen by any central authority. Visa can freeze accounts, block transactions, or deny service at any time.",
			point_5_summary_1:
				"Bitcoin is final-settlement — you can only spend what you own. Credit cards create debt with interest rates often over 25% a year.",
			point_6_summary_1: "Bitcoin lets you take",
			point_6_summary_2: "self-custody",
			point_6_summary_3:
				"with no bank or payment processor needed. Credit cards always require intermediaries.",
			point_7_summary_1:
				"Bitcoin works 24/7 globally with no business hours. Visa has operating hours, maintenance windows, and geographic restrictions that can block transactions.",
		},
	},
};

// ─────────────────────────────────────────────────────────────
// Apply updates
// ─────────────────────────────────────────────────────────────
let changed = 0;
for (const [filename, payload] of Object.entries(PAGES)) {
	const file = path.join(EN_DIR, filename);
	const raw = fs.readFileSync(file, "utf8");
	const json = JSON.parse(raw);

	// 1. Update metadata
	if (!json["@metadata"]) json["@metadata"] = {};
	json["@metadata"]["last-updated"] = TODAY;

	// 2. Insert hero_title (sentence-case single-line H1).
	json.hero_title = payload.heroTitle;

	// 3. Overwrite the condensed explanation keys.
	for (const [key, value] of Object.entries(payload.updates)) {
		json[key] = value;
	}

	// 4. Persist with tab indentation (site standard).
	fs.writeFileSync(file, JSON.stringify(json, null, "\t") + "\n", "utf8");
	changed++;
	console.log(`✓ ${filename}`);
}

console.log(`\nUpdated ${changed} file(s).`);

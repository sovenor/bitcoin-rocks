#!/usr/bin/env node
/**
 * Phase 10 — business page generator.
 *
 * Generates 12 of the 13 /business/* pages (all except /business which is
 * hand-authored because of its unique shape).
 *
 * Each generated page follows the same pattern:
 *   - SLUG + META_IMAGE constants
 *   - generateMetadata() via buildBusinessMetadata
 *   - Default export fetches translations, emits Article + Breadcrumb JSON-LD,
 *     renders page-specific body inside <BusinessPageShell>, ends with
 *     <BusinessResourceCards>
 *
 * Re-run safely — overwrites each page.tsx.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const APP_BASE = path.join(process.cwd(), "app", "[locale]");

/**
 * Shared wrapper that every generated page reuses. Each page's HEADER
 * returns the preamble (imports + constants + generateMetadata), and each
 * page's BODY returns the inner JSX lines for the page body.
 */

function makePage({
	componentName,
	slug,
	titleKey,
	description,
	descriptionKey,
	metaImage,
	bodyJsx,
	extraImports = "",
}) {
	return `import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BusinessPageShell } from "@/components/BusinessPageShell";
import { BusinessResourceCards } from "@/components/BusinessResourceCards";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";${extraImports ? "\n" + extraImports : ""}

/**
 * /[locale]/${slug} — Phase 10 faithful port of business/${slug.replace(/^business\/?/, "") || "index"}.html.
 */

const SLUG = ${JSON.stringify(slug)};
const META_IMAGE = ${JSON.stringify(metaImage)};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: ${JSON.stringify(titleKey)},
		image: META_IMAGE,${descriptionKey ? `\n\t\tdescriptionKey: ${JSON.stringify(descriptionKey)},` : ""}${description ? `\n\t\tdescription: ${JSON.stringify(description)},` : ""}
	});
}

export default async function ${componentName}({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = \`/\${locale}\`;
	void l;
	const title = t(${JSON.stringify(titleKey)});
	const description = ${description ? JSON.stringify(description) : descriptionKey ? `t(${JSON.stringify(descriptionKey)})` : "title"};

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description,
		image: META_IMAGE,
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<BusinessPageShell locale={locale}>
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

${bodyJsx}

		</BusinessPageShell>
	);
}
`;
}

// ============================================================================
// Per-page definitions
// ============================================================================

/** /business/why — "why Bitcoin is good for business" with 4 sections. */
const PAGE_WHY = {
	dir: "business/why",
	componentName: "BusinessWhyPage",
	slug: "business/why",
	titleKey: "learn_why_bitcoin_is_good_for_business",
	description: "Accept payments with lower fees and get more customers.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-why-v1.png",
	bodyJsx: `\t\t\t<div className="container-inner">
				<h1 className="h1-inflation">{t("why_header")}</h1>
			</div>

			<img
				src="/img/bbk/payment-chart.png"
				className="inline"
				alt={t("why_header")}
			/>

			<div className="break-micro" />

			<div style={{ textAlign: "center" }}>
				<a href={\`\${l}/business\`}>
					<div className="biz-button">
						<p>{t("common_learn_more")}</p>
					</div>
				</a>
			</div>

			<div className="break-micro" />

			<div className="container-inner">
				<h2 className="h2-inflation">{t("why_good_for_you")}</h2>
			</div>

			{/* Section 1 — Bitcoin doesn't have inflation */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("why_s1")}</h3>
					<p>
						<span>{t("why_s1_c1")}</span>
						<br />
						<br />
						<span>{t("why_s1_c2")}</span>{" "}
						<a href={\`\${l}/inflation\`} className="orange-link">
							<span>{t("why_learn_more_lowercase")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 2 — No bank runs */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("why_s2")}</h3>
					<p>
						<span>{t("why_s2_c1")}</span>
						<br />
						<br />
						<span>{t("why_s2_c2")}</span>
						<br />
						<br />
						<span>{t("why_s2_c3")}</span>{" "}
						<a href={\`\${l}/bank-runs\`} className="orange-link">
							<span>{t("why_learn_more_lowercase")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 3 — Permissionless */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("why_s3")}</h3>
					<p>
						<span>{t("why_s3_c1")}</span>
						<br />
						<br />
						<span>{t("why_s3_c2")}</span>{" "}
						<a
							href="https://voteforbetter.money/learn/bitcoin-is-permissionless"
							className="orange-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{t("why_learn_more_lowercase")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 4 — Building a better world */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("why_s4")}</h3>
					<p>
						<span>{t("why_s4_c1")}</span>
						<br />
						<br />
						<span>{t("why_s4_c2")}</span>{" "}
						<a href={l} className="orange-link">
							<span>{t("why_learn_more_lowercase")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Resource cards + Get Started */}
			<BusinessResourceCards locale={locale} exclude={["learn"]} />`,
};

/** /business/guide — list of 7 biz-box CTAs */
const PAGE_GUIDE = {
	dir: "business/guide",
	componentName: "BusinessGuidePage",
	slug: "business/guide",
	titleKey: "accept_bitcoin_payments_at_your_business",
	description: "Bitcoin allows you to accept payments with lower fees and get more customers. This guide shows you how.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-guide-v1.png",
	bodyJsx: `\t\t\t<div className="container-inner">
				<h1 className="h1-inflation">{t("guide_header")}</h1>
			</div>

			<div className="break-micro" />

			{/* This page IS the list of resources, so render the full grid
			    including the Learn card; no header (H1 already communicates it). */}
			<BusinessResourceCards
				locale={locale}
				exclude={["faq", "kit"]}
				showHeader={false}
			/>

			<div className="break-nano" />

			<a href={\`\${l}/business/faq\`}>
				<div className="biz-box biz-faq">
					<div className="container-inner">
						<h3 className="biz-h3" style={{ textTransform: "initial" }}>
							{t("common_biz_faq")}
						</h3>
					</div>
				</div>
			</a>`,
};

/** /business/accounting — 4 sections with inline links */
const PAGE_ACCOUNTING = {
	dir: "business/accounting",
	componentName: "BusinessAccountingPage",
	slug: "business/accounting",
	titleKey: "bitcoin_business_accounting_guide",
	descriptionKey: "accounting_description",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-accounting-v1.png",
	bodyJsx: `\t\t\t<div className="container-inner">
				<h1 className="h1-inflation">{t("accounting_header")}</h1>
				<div className="break-micro" />
			</div>

			<div className="text-box intro">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<a href={\`\${l}/business\`} className="orange-link">
							<span>{t("accounting_s1_c1")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s1_c2")}</span>{" "}
						<a href={\`\${l}/business/wallets\`} className="orange-link">
							<span>{t("accounting_s1_c3")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s1_c4")}</span>
						<br />
						<br />
						<span>{t("accounting_s1_c5")}</span>
						<br />
						<br />
						<a
							href="https://satoshipacioli.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s1_c6")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("accounting_s2")}</h2>
					<p>
						<span>{t("accounting_s2_c1")}</span>
						<br />
						<br />
						<a
							href="https://quickbooks.intuit.com/app/apps/appdetails/blockpath/en-us/"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c2")}</span>
						</a>
						<br />
						<br />
						<a
							href="https://satoshipacioli.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c3")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s2_c4")}</span>
						<br />
						<br />
						<a
							href="https://www.coingecko.com/en/coins/bitcoin"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c5")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s2_c6")}</span>
						<br />
						<br />
						<a
							href="https://www.thespreadsheetguru.com/blog/cryptocurrency-prices-excel"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c7")}</span>
						</a>
						<br />
						<br />
						<a
							href="https://www.coingecko.com/en/coins/bitcoin/historical_data#panel"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c8")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("accounting_s3")}</h2>
					<p>
						<span>{t("accounting_s3_c1")}</span>{" "}
						<a href={\`\${l}/business/wallets\`} className="orange-link">
							<span>{t("accounting_s3_c2")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s3_c3")}</span>
						<br />
						<br />
						<span>{t("accounting_s3_c4")}</span>
						<br />
						<br />
						<span>{t("accounting_s3_c5")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("accounting_s4")}</h2>
					<p>
						<span>{t("accounting_s4_c1")}</span>
						<br />
						<br />
						<a
							href="https://satoshipacioli.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s4_c2")}</span>
						</a>
					</p>
				</div>
			</div>

			<BusinessResourceCards locale={locale} exclude={["accounting"]} />`,
};

/** /business/faq — 9 Q&A sections */
const PAGE_FAQ = {
	dir: "business/faq",
	componentName: "BusinessFaqPage",
	slug: "business/faq",
	titleKey: "frequently_asked_questions_about_accepting_bitcoin",
	descriptionKey: "faq_description",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-faq-v1.png",
	bodyJsx: `\t\t\t<div className="container-inner">
				<h1 className="h1-inflation">{t("faq_header")}</h1>
				<div className="break-micro" />
			</div>

			{/* FAQ 1 — What is Bitcoin? */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s1")}</h2>
					<p>
						<span>{t("faq_s1_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s1_c2")}</span>
						<br />
						<br />
						<span>{t("faq_s1_c3")}</span>
						<br />
						<br />
						<span>{t("faq_s1_c4")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 2 — How can Bitcoin benefit my business? */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s2")}</h2>
					<p>
						<span>{t("faq_s2_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s2_c2")}</span>
						<br />
						<br />
						<a href={\`\${l}/business\`} className="orange-link">
							<span>{t("faq_s2_c3")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 3 — How do I accept Bitcoin payments? */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s3")}</h2>
					<p>
						<span>{t("faq_s3_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s3_c2")}</span>
						<br />
						<br />
						<a href={\`\${l}/business/wallets\`} className="orange-link">
							<span>{t("faq_s3_c3")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 4 — Can I convert Bitcoin to fiat? */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s4")}</h2>
					<p>
						<span>{t("faq_s4_c1")}</span>
						<br />
						<br />
						<a href={\`\${l}/business/wallets\`} className="orange-link">
							<span>{t("faq_s4_c2")}</span>
						</a>
						<br />
						<br />
						<span>{t("faq_s4_c3")}</span>
						<br />
						<br />
						<span>• {t("faq_s4_c4")}</span>
						<br />
						<span>• {t("faq_s4_c5")}</span>
						<br />
						<br />
						<span>{t("faq_s4_c6")}</span>
						<br />
						<br />
						<span>{t("faq_s4_c7")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 5 — In-person payments */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s5")}</h2>
					<p>
						<span>{t("faq_s5_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s5_c2")}</span>
						<br />
						<br />
						<a href={\`\${l}/business/wallets\`} className="orange-link">
							<span>{t("faq_s5_c3")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 6 — Online payments */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s6")}</h2>
					<p>
						<span>{t("faq_s6_c1")}</span>
						<br />
						<br />
						<a href={\`\${l}/business/wallets\`} className="orange-link">
							<span>{t("faq_s6_c2")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 7 — Let customers know */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s7")}</h2>
					<p>
						<span>{t("faq_s7_c1")}</span>{" "}
						<a href={\`\${l}/business/stickers\`} className="orange-link">
							<span>{t("faq_s7_c2")}</span>
						</a>
						<br />
						<br />
						<span>{t("faq_s7_c3")}</span>{" "}
						<a href={\`\${l}/business/maps\`} className="orange-link">
							<span>{t("faq_s7_c4")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 8 — Get more customers */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s8")}</h2>
					<p>
						<span>{t("faq_s8_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s8_c2")}</span>{" "}
						<a href={\`\${l}/business/maps\`} className="orange-link">
							<span>{t("faq_s8_c3")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 9 — Cost */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s9")}</h2>
					<p>
						<span>{t("faq_s9_c1")}</span>
						<br />
						<br />
						<a href={\`\${l}/business/wallets\`} className="orange-link">
							<span>{t("faq_s9_c2")}</span>
						</a>
					</p>
				</div>
			</div>

			<BusinessResourceCards locale={locale} exclude={["faq"]} />`,
};

/** /business/wallets — 4 collapsible wallet categories. Uses BusinessWalletAccordion. */
const PAGE_WALLETS = {
	dir: "business/wallets",
	componentName: "BusinessWalletsPage",
	slug: "business/wallets",
	titleKey: "how_to_accept_bitcoin_payments",
	description: "All Bitcoin wallets are interoperable — pick the one that fits your business.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-wallets-v1.png",
	extraImports: `import { WalletAccordion } from "@/components/WalletAccordion";`,
	bodyJsx: `\t\t\t<div className="text-box home-intro">
				<div className="container-inner" id="intro-container">
					<h1 className="h1-inflation">{t("wallets_header")}</h1>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<span>{t("wallets_intro_1")}</span>
						<br />
						<br />
						<span className="bold">{t("wallets_intro_2")}</span>{" "}
						<span>{t("wallets_intro_3")}</span>
						<br />
						<br />
						<span className="bold">{t("wallets_intro_4")}</span>{" "}
						<span>{t("wallets_intro_5")}</span>
						<br />
						<br />
						<span>{t("wallets_intro_6")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<WalletAccordion question={t("wallets_choice_sole")}>
				<div className="vs-container">
					<BusinessWalletCard
						image="/img/wallets/square-business.png"
						nameKey="wallets_name_square"
						squareNoteKey="wallets_square_note"
						features={["wallets_feature_hybrid", "wallets_feature_info", "wallets_feature_in_person_online", "wallets_feature_settles_both"]}
						getWalletHref="http://squareup.com/bitcoin"
						getWalletLabel={t("wallets_get_wallet")}
					/>
					<BusinessWalletCard
						image="/img/wallets/breez-business.png"
						nameKey="wallets_name_breez"
						features={["wallets_feature_bitcoin_only", "wallets_feature_no_info", "wallets_feature_in_person", "wallets_feature_settles_bitcoin"]}
						featureFirstBold
						getWalletHref="https://breez.technology/mobile/"
						getWalletLabel={t("wallets_get_wallet")}
					/>
					<BusinessWalletCard
						image="/img/wallets/opennode-business.png"
						nameKey="wallets_name_open_node"
						features={["wallets_feature_hybrid", "wallets_feature_info", "wallets_feature_in_person_online", "wallets_feature_settles_both"]}
						featureFirstBold
						getWalletHref="https://www.opennode.com/"
						getWalletLabel={t("wallets_get_wallet")}
					/>
				</div>
			</WalletAccordion>

			<div className="break-micro" />

			<WalletAccordion question={t("wallets_choice_multiple")}>
				<div className="vs-container">
					<BusinessWalletCard
						image="/img/wallets/square-business.png"
						nameKey="wallets_name_square"
						squareNoteKey="wallets_square_note"
						features={["wallets_feature_hybrid", "wallets_feature_info", "wallets_feature_in_person_online", "wallets_feature_settles_both"]}
						getWalletHref="http://squareup.com/bitcoin"
						getWalletLabel={t("wallets_get_wallet")}
					/>
					<BusinessWalletCard
						image="/img/wallets/ibex-business.png"
						nameKey="wallets_name_ibex_pay"
						features={["wallets_feature_hybrid", "wallets_feature_multiple_employees", "wallets_feature_in_person_online", "wallets_feature_settles_both"]}
						featureFirstBold
						getWalletHref="https://www.poweredbyibex.io/"
						getWalletLabel={t("wallets_get_wallet")}
					/>
				</div>
			</WalletAccordion>

			<div className="break-micro" />

			<WalletAccordion question={t("wallets_choice_online")}>
				<div className="vs-container">
					<BusinessWalletCard
						image="/img/wallets/square-business.png"
						nameKey="wallets_name_square"
						squareNoteKey="wallets_square_note"
						features={["wallets_feature_hybrid", "wallets_feature_info", "wallets_feature_in_person_online", "wallets_feature_settles_both"]}
						getWalletHref="http://squareup.com/bitcoin"
						getWalletLabel={t("wallets_get_wallet")}
					/>
					<BusinessWalletCard
						image="/img/wallets/opennode-online-business.png"
						nameKey="wallets_name_open_node"
						features={["wallets_feature_hybrid", "wallets_feature_info", "wallets_feature_online_store", "wallets_feature_settles_both"]}
						featureFirstBold
						getWalletHref="https://www.opennode.com/"
						getWalletLabel={t("wallets_get_wallet")}
					/>
					<BusinessWalletCard
						image="/img/wallets/btcpay-business.png"
						nameKey="wallets_name_btcpay_server"
						features={["wallets_feature_bitcoin_only", "wallets_feature_self_hosted", "wallets_feature_online_store", "wallets_feature_settles_bitcoin"]}
						featureFirstBold
						getWalletHref="https://btcpayserver.org/"
						getWalletLabel={t("wallets_get_wallet")}
					/>
				</div>
			</WalletAccordion>

			<div className="break-micro" />

			<WalletAccordion question={t("wallets_choice_invoice")}>
				<div className="vs-container">
					<BusinessWalletCard
						image="/img/wallets/zaprite-business.png"
						nameKey="wallets_name_zaprite"
						features={["wallets_feature_hybrid", "wallets_feature_info", "wallets_feature_invoicing", "wallets_feature_settles_both"]}
						featureFirstBold
						getWalletHref="https://zaprite.com/"
						getWalletLabel={t("wallets_get_wallet")}
					/>
				</div>
			</WalletAccordion>

			<BusinessResourceCards locale={locale} exclude={["wallets"]} />`,
};

/** /business/stickers — form page with 3 choices. Uses StickerPicker-style country selector. */
const PAGE_STICKERS = {
	dir: "business/stickers",
	componentName: "BusinessStickersPage",
	slug: "business/stickers",
	titleKey: "bitcoin_accepted_here_stickers",
	description: "Let your customers know you accept Bitcoin with free 'Bitcoin Accepted Here' stickers.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-stickers-v1.png",
	extraImports: `import Script from "next/script";
import { CountryFormSelector } from "@/components/CountryFormSelector";
import { StickerAddressForm } from "@/components/StickerAddressForm";`,
	bodyJsx: `\t\t\t<Script
				src="https://challenges.cloudflare.com/turnstile/v0/api.js"
				strategy="afterInteractive"
				async
				defer
			/>

			<div className="container-inner">
				<h1 className="h1-inflation">{t("stickers_header")}</h1>
				<img
					src="/img/bbk/biz-stickers-vertical-v2.png"
					className="inline"
					alt={t("stickers_header")}
				/>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("stickers_request")}</p>
					<br />
					<p>{t("stickers_request_details")}</p>

					<CountryFormSelector
						placeholderLabel={t("common_choose_your_country")}
						options={[
							{ value: "USA", label: t("common_country_usa") },
							{ value: "Canada", label: t("common_country_canada") },
							{ value: "Print", label: t("stickers_country_global_print") },
						]}
					>
						<div id="USA" className="countries" hidden>
							<p>{t("stickers_request_instructions")}</p>
							<StickerAddressForm
								variant="usa"
								action="https://forms.bitcoin.rocks/submit/business-stickers-usa"
							/>
						</div>
						<div id="Canada" className="countries" hidden>
							<p>{t("stickers_request_instructions")}</p>
							<StickerAddressForm
								variant="canada"
								action="https://forms.bitcoin.rocks/submit/business-stickers-canada"
							/>
						</div>
						<div id="Print" className="countries" hidden>
							<p>{t("stickers_print_details")}</p>
							<a
								href={\`\${l}/business/sticker-files/english\`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="button button-sticker">
									<p>{t("common_language_english")}</p>
								</div>
							</a>

							<div className="break-micro" />
							<p>{t("stickers_request_language")}</p>

							<form
								action="https://forms.bitcoin.rocks/submit/business-sticker-language-request"
								method="POST"
							>
								<input type="text" name="language" placeholder="Language" required />
								<br />
								<input
									type="text"
									name="translation1"
									placeholder="Translation for 'Bitcoin Accepted Here'"
									required
								/>
								<br />
								<input
									type="text"
									name="translation2"
									placeholder="Translation for 'Scan to learn why Bitcoin is good for business.'"
									required
								/>
								<br />

								<div
									className="cf-turnstile"
									data-sitekey="0x4AAAAAAClzj7R6NrkNgcsP"
									data-theme="dark"
								/>
								<button type="submit" className="button-form">
									<p>{t("common_submit")}</p>
								</button>
							</form>
						</div>
					</CountryFormSelector>
				</div>
			</div>

			<div className="break-nano" />

			<BusinessResourceCards locale={locale} exclude={["stickers"]} />`,
};

/** /business/maps — form to list business on maps. Faithful port — form posts straight to forms-backend. */
const PAGE_MAPS = {
	dir: "business/maps",
	componentName: "BusinessMapsPage",
	slug: "business/maps",
	titleKey: "bitcoin_merchant_maps_list_your_business_for_free",
	description: "List your business for free on Bitcoin merchant maps.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-maps-v1.png",
	extraImports: `import Script from "next/script";`,
	bodyJsx: `\t\t\t<Script
				src="https://challenges.cloudflare.com/turnstile/v0/api.js"
				strategy="afterInteractive"
				async
				defer
			/>

			<div className="container-inner">
				<h1 className="h1-inflation">{t("maps_header")}</h1>
			</div>

			<img
				src="/img/bbk/payment-chart.png"
				className="inline"
				alt={t("maps_header")}
			/>

			<div className="break-micro" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p>{t("maps_request_details")}</p>
					<br />
					<a
						href="https://btcmap.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="orange-link"
					>
						<span>{t("maps_view")}</span>
					</a>

					<div className="break-micro" />

					<form
						action="https://forms.bitcoin.rocks/submit/business-maps"
						method="POST"
					>
						<input type="text" name="name" placeholder="Business Name" required />
						<br />
						<input
							type="text"
							name="category"
							placeholder="Category (e.g. restaurant)"
							required
						/>
						<br />
						<input
							type="text"
							name="address"
							placeholder="Street Address"
							required
						/>
						<br />
						<input type="text" name="city" placeholder="City" required />
						<br />
						<input
							type="text"
							name="region"
							placeholder="State / Province / Region"
							required
						/>
						<br />
						<input type="text" name="country" placeholder="Country" required />
						<br />
						<input
							type="text"
							name="website"
							placeholder="Website (optional)"
						/>
						<br />
						<input type="hidden" name="_gotcha" style={{ display: "none" }} />

						<div
							className="cf-turnstile"
							data-sitekey="0x4AAAAAAClzj7R6NrkNgcsP"
							data-theme="dark"
						/>
						<button type="submit" className="button-form">
							<p>{t("common_submit")}</p>
						</button>
					</form>
				</div>
			</div>

			<div className="break-nano" />

			<BusinessResourceCards locale={locale} exclude={["maps"]} />`,
};

/** /business/kit — Print your own Bitcoin Business Kit form */
const PAGE_KIT = {
	dir: "business/kit",
	componentName: "BusinessKitPage",
	slug: "business/kit",
	titleKey: "bitcoin_business_kit",
	description: "Get a free Bitcoin Business Kit to share with local businesses.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-kit-v1.png",
	extraImports: `import Script from "next/script";
import { CountryFormSelector } from "@/components/CountryFormSelector";
import { StickerAddressForm } from "@/components/StickerAddressForm";`,
	bodyJsx: `\t\t\t<Script
				src="https://challenges.cloudflare.com/turnstile/v0/api.js"
				strategy="afterInteractive"
				async
				defer
			/>

			<div className="container-inner">
				<h1 className="h1-inflation">{t("kit_header")}</h1>
				<img
					src="/img/bbk/bk-vertical-v2.png"
					className="inline"
					alt={t("kit_header")}
				/>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("kit_request")}</p>
					<br />
					<p>{t("kit_request_details")}</p>

					<CountryFormSelector
						placeholderLabel={t("common_choose_your_country")}
						options={[
							{ value: "USA", label: t("common_country_usa") },
							{ value: "Canada", label: t("common_country_canada") },
							{ value: "Print", label: t("kit_country_global_print") },
						]}
					>
						<div id="USA" className="countries" hidden>
							<p>{t("kit_enter_address")}</p>
							<StickerAddressForm
								variant="usa"
								action="https://forms.bitcoin.rocks/submit/business-kit-usa"
							/>
						</div>
						<div id="Canada" className="countries" hidden>
							<p>{t("kit_enter_address")}</p>
							<StickerAddressForm
								variant="canada"
								action="https://forms.bitcoin.rocks/submit/business-kit-canada"
							/>
						</div>
						<div id="Print" className="countries" hidden>
							<p>{t("kit_print_details")}</p>
							<a
								href="/business/files/english/bbk-exterior-v1.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="button button-sticker">
									<p>{t("kit_view_files")}</p>
								</div>
							</a>
							<a
								href={\`\${l}/business\`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="button button-sticker">
									<p>{t("kit_digital_kit")}</p>
								</div>
							</a>
						</div>
					</CountryFormSelector>
				</div>
			</div>

			<div className="break-nano" />

			<h2 className="h2-inflation">{t("kit_resources")}</h2>

			<BusinessResourceCards
				locale={locale}
				exclude={["kit"]}
				showHeader={false}
			/>`,
};

/** /business/kit-success — thank-you after kit request */
const PAGE_KIT_SUCCESS = {
	dir: "business/kit-success",
	componentName: "BusinessKitSuccessPage",
	slug: "business/kit-success",
	titleKey: "bitcoin_business_kit",
	description: "Your Bitcoin Business Kit is on its way.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-kit-v1.png",
	bodyJsx: `\t\t\t<div className="container-inner">
				<h1 className="h1-inflation">SUCCESS!</h1>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-stickers">{t("kit_success_header")}</h2>
				</div>
			</div>

			<div className="break-micro" />

			<BusinessResourceCards locale={locale} exclude={["kit"]} />`,
};

/** /business/maps-success */
const PAGE_MAPS_SUCCESS = {
	dir: "business/maps-success",
	componentName: "BusinessMapsSuccessPage",
	slug: "business/maps-success",
	titleKey: "bitcoin_merchant_maps_list_your_business_for_free",
	description: "Thanks for adding your business to Bitcoin merchant maps.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-maps-v1.png",
	bodyJsx: `\t\t\t<div className="container-inner">
				<h1 className="h1-inflation">SUCCESS!</h1>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-stickers">{t("kit_success_1")}</h2>
					<br />
					<a
						href="https://btcmap.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="orange-link"
					>
						<span>{t("kit_success_2")}</span>
					</a>
				</div>
			</div>

			<div className="break-micro" />

			<BusinessResourceCards locale={locale} exclude={["maps"]} />`,
};

/** /business/sticker-success */
const PAGE_STICKER_SUCCESS = {
	dir: "business/sticker-success",
	componentName: "BusinessStickerSuccessPage",
	slug: "business/sticker-success",
	titleKey: "bitcoin_accepted_here_stickers",
	description: "Your stickers are on their way.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-stickers-v1.png",
	bodyJsx: `\t\t\t<div className="container-inner">
				<h1 className="h1-inflation">SUCCESS!</h1>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-stickers">{t("sticker_success_details")}</h2>
				</div>
			</div>

			<div className="break-micro" />

			<BusinessResourceCards locale={locale} exclude={["stickers"]} />`,
};

/** /business/sticker-language-success */
const PAGE_STICKER_LANG_SUCCESS = {
	dir: "business/sticker-language-success",
	componentName: "BusinessStickerLanguageSuccessPage",
	slug: "business/sticker-language-success",
	titleKey: "bitcoin_accepted_here_stickers",
	description: "Thanks for requesting stickers in your language.",
	metaImage: "https://bitcoin.rocks/img/meta/meta-bbk-stickers-v1.png",
	bodyJsx: `\t\t\t<div className="container-inner">
				<h1 className="h1-inflation">SUCCESS!</h1>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-stickers">{t("sticker_language_timeline")}</h2>
				</div>
			</div>

			<div className="break-micro" />

			<BusinessResourceCards locale={locale} exclude={["stickers"]} />`,
};

const ALL_PAGES = [
	PAGE_WHY,
	PAGE_GUIDE,
	PAGE_ACCOUNTING,
	PAGE_FAQ,
	PAGE_WALLETS,
	PAGE_STICKERS,
	PAGE_MAPS,
	PAGE_KIT,
	PAGE_KIT_SUCCESS,
	PAGE_MAPS_SUCCESS,
	PAGE_STICKER_SUCCESS,
	PAGE_STICKER_LANG_SUCCESS,
];

// ============================================================================
// Small helper component that the wallets page uses inline
// ============================================================================

const BUSINESS_WALLET_CARD_COMPONENT = `import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

/**
 * Reusable wallet card tile for the /business/wallets page.
 *
 * Parent server component resolves per-card features by i18n key and renders
 * the legacy .wallet-box-biz tile.
 */

export async function BusinessWalletCard({
	image,
	nameKey,
	squareNoteKey,
	features,
	featureFirstBold = true,
	getWalletHref,
	getWalletLabel,
}: {
	image: string;
	nameKey: string;
	squareNoteKey?: string;
	features: readonly string[];
	/** If true, the first feature-line is rendered bold (the legacy "category" line). */
	featureFirstBold?: boolean;
	getWalletHref: string;
	getWalletLabel: string;
}): Promise<ReactNode> {
	const t = await getTranslations();

	return (
		<div className="wallet-box-biz">
			<div className="container-inner">
				<div style={{ textAlign: "center" }}>
					<img src={image} className="device" alt={t(nameKey)} />
				</div>
				<h3 className="h3-label">{t(nameKey)}</h3>

				<div className="break-mini" />
				<p>
					{squareNoteKey ? (
						<>
							<span>{t(squareNoteKey)}</span>
							<br />
							<br />
						</>
					) : null}
					{features.map((fk, idx) => (
						<span key={fk}>
							{featureFirstBold && idx === 0 ? (
								<span className="bold">{t(fk)}</span>
							) : (
								t(fk)
							)}
							<br />
						</span>
					))}
					<br />
				</p>

				<a href={getWalletHref} target="_blank" rel="noopener noreferrer">
					<div className="wallet-button">{getWalletLabel}</div>
				</a>
			</div>
		</div>
	);
}
`;

// ============================================================================
// Main
// ============================================================================

function writeFile(absPath, content) {
	fs.mkdirSync(path.dirname(absPath), { recursive: true });
	fs.writeFileSync(absPath, content);
	console.log("  wrote", path.relative(process.cwd(), absPath));
}

function main() {
	// 1. Write the shared BusinessWalletCard component (used by /business/wallets only).
	writeFile(
		path.join(process.cwd(), "components", "BusinessWalletCard.tsx"),
		BUSINESS_WALLET_CARD_COMPONENT,
	);

	// 2. Add BusinessWalletCard import to the wallets page body (hacky but the
	//    generator was already template-string-heavy and adding another import
	//    line to `extraImports` causes JSX that calls `<BusinessWalletCard>`
	//    without importing it — rewrite the wallets page's extraImports here
	//    to make the dependency explicit).
	PAGE_WALLETS.extraImports = `import { WalletAccordion } from "@/components/WalletAccordion";
import { BusinessWalletCard } from "@/components/BusinessWalletCard";`;

	// 3. Generate each page.
	for (const page of ALL_PAGES) {
		const outPath = path.join(APP_BASE, page.dir, "page.tsx");
		const src = makePage({
			componentName: page.componentName,
			slug: page.slug,
			titleKey: page.titleKey,
			description: page.description,
			descriptionKey: page.descriptionKey,
			metaImage: page.metaImage,
			bodyJsx: page.bodyJsx,
			extraImports: page.extraImports || "",
		});
		writeFile(outPath, src);
	}

	console.log(`\n[phase10] generated ${ALL_PAGES.length} business pages + BusinessWalletCard.`);
}

main();

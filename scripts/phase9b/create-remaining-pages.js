#!/usr/bin/env node
/**
 * Phase 9b helper: generate the remaining form/success pages for the
 * Next.js migration.
 *
 * Each page is a faithful port of its legacy HTML. We keep them short
 * (no repeated CTAs when not in the original) but preserve every user-
 * facing string as an `t("key")` lookup against the existing translation
 * bundle.
 *
 * Generates:
 *   app/[locale]/postcards/page.tsx        — "program closed" page
 *   app/[locale]/buy/page.tsx              — 4-step wizard (BuyFlow)
 *   app/[locale]/sticker-success/page.tsx  — thank-you + fixed-bottom-bar
 *   app/[locale]/sign-success/page.tsx     — thank-you
 *   app/[locale]/postcard-success/page.tsx — thank-you
 *   app/[locale]/sticker-language-success/page.tsx — thank-you
 *
 * Run once: `node scripts/phase9b/create-remaining-pages.js`
 * Idempotent: it overwrites, which is safe because each page is 100%
 * generated from this script (no hand edits land here).
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");

function ensureDir(p) {
	fs.mkdirSync(p, { recursive: true });
}

function writePage(rel, contents) {
	const full = path.join(ROOT, rel);
	ensureDir(path.dirname(full));
	fs.writeFileSync(full, contents);
	console.log(`  wrote ${rel}`);
}

/** Shared metadata header template. */
function metadataBlock({ slug, titleKey, descriptionKey, image }) {
	return `const SLUG = ${JSON.stringify(slug)};
const META_IMAGE = ${JSON.stringify(image)};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t(${JSON.stringify(titleKey)});
	const description = t(${JSON.stringify(descriptionKey)});
	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		openGraph: {
			title,
			description,
			type: "article",
			url: \`https://bitcoin.rocks/\${locale}/\${SLUG}\`,
			images: [{ url: META_IMAGE, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [META_IMAGE],
		},
	};
}`;
}

/** Shared Get Started CTA trio (3 text-boxes + publisher attribution). */
function getStartedCtas() {
	return `			<div className="break-micro" />

			<a href={l}>
				<div className="text-box top">
					<div className="container-inner">
						<h2 className="h2-section" id="get-started">
							{t("common_cta_section_get_started")}
						</h2>
						<h2 className="second-line get-started h2-section">
							{t("common_cta_section_with_bitcoin")}
						</h2>
						<div className="item first">
							<h3 className="h3-item">{t("common_cta_section_title_1_alt")}</h3>
							<div className="type">{t("common_cta_link_type_website")}</div>
							<div className="author">{t("common_cta_author_bitcoin_rocks")}</div>
							<div className="clear" />
						</div>
					</div>
				</div>
			</a>
			<a href={\`\${l}/wallets\`}>
				<div className="text-box middle">
					<div className="container-inner">
						<div className="item">
							<h3 className="h3-item">{t("common_cta_section_title_2")}</h3>
							<div className="type">{t("common_cta_link_type_guide")}</div>
							<div className="author">{t("common_cta_author_bitcoin_rocks")}</div>
							<div className="clear" />
						</div>
					</div>
				</div>
			</a>
			<a href={\`\${l}/buy\`}>
				<div className="text-box bottom">
					<div className="container-inner">
						<div className="item">
							<h3 className="h3-item">{t("common_cta_section_title_3")}</h3>
							<div className="type">{t("common_cta_link_type_website")}</div>
							<div className="author">{t("common_cta_author_bitcoin_rocks")}</div>
							<div className="clear" />
						</div>
					</div>
				</div>
			</a>`;
}

function publisherAttribution() {
	return `			<div
				className="publisher-attribution"
				itemProp="publisher"
				itemScope
				itemType="https://schema.org/Organization"
			>
				<div className="container-inner">
					<p>
						<span className="reviewed-badge">{t("common_reviewed_accuracy")}</span>
						<br />
						<span>{t("common_published_by")}</span>{" "}
						<a href={\`\${l}/about\`} className="orange-link" itemProp="url">
							<span itemProp="name">{t("common_publisher_name")}</span>
						</a>
						<br />
						<span>{t("common_publisher_since")}</span>
						<br />
						<a
							href="https://github.com/sovenor/bitcoin-rocks"
							className="orange-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{t("common_publisher_open_source")}</span>
						</a>
					</p>
				</div>
			</div>`;
}

// ============================================================
// POSTCARDS
// ============================================================
writePage(
	"app/[locale]/postcards/page.tsx",
	`import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/postcards — Phase 9b faithful port of postcards.html.
 *
 * The postcard program is closed. We show the "program closed" notice,
 * redirect users to /stickers, and keep the three preview postcard images.
 */

${metadataBlock({
	slug: "postcards",
	titleKey: "free_bitcoin_postcards",
	descriptionKey: "postcards_description",
	image: "https://bitcoin.rocks/img/meta/meta-postcards-v1.png",
})}

export default async function PostcardsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = \`/\${locale}\`;
	const title = t("free_bitcoin_postcards");
	const description = t("postcards_description");

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
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div className="container-inner">
				<div style={{ textAlign: "center" }}>
					<a href={l}>
						<img
							src="/img/logos/rocks-logo-gray.png"
							className="back-to-home"
							alt="bitcoin.rocks"
						/>
					</a>
				</div>
				<h1 className="h1-inflation">{t("postcards_header")}</h1>
				<img
					src="/img/postcards/postcards-header-v3.png"
					className="inline"
					alt="Postcards header"
				/>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<div className="break-micro" />
					<p>{t("postcards_program_closed_message")}</p>

					<div className="break-micro" />

					<p className="step">{t("postcards_sticker_alternative_header")}</p>
					<div className="break-micro" />
					<p>{t("postcards_sticker_alternative_message")}</p>

					<div className="break-micro" />

					<div style={{ textAlign: "center" }}>
						<a href={\`\${l}/stickers\`}>
							<div
								className="button-form"
								style={{ display: "inline-block", margin: "0 auto" }}
							>
								<p>{t("postcards_sticker_cta")}</p>
							</div>
						</a>
					</div>

					<div className="break-micro" />
				</div>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("postcards_step_2")}</p>
					<p>
						<br />
						<span>{t("postcards_instructions_4")}</span>
						<br />
						<br />
						<span>{t("postcards_instructions_5")}</span>
					</p>

					<img
						src="/img/postcards/postcard-dollar-front.png"
						className="inline"
						alt="Dollar postcard front"
					/>
					<img
						src="/img/postcards/postcard-dollar-back.png"
						className="inline"
						alt="Dollar postcard back"
					/>

					<div className="postcard-divider" />

					<img
						src="/img/postcards/postcard-future-front.png"
						className="inline"
						alt="Future postcard front"
					/>
					<img
						src="/img/postcards/postcard-future-back.png"
						className="inline"
						alt="Future postcard back"
					/>

					<div className="postcard-divider" />

					<img
						src="/img/postcards/postcard-cartoon-front.png"
						className="inline"
						alt="Cartoon postcard front"
					/>
					<img
						src="/img/postcards/postcard-cartoon-back.png"
						className="inline"
						alt="Cartoon postcard back"
					/>
				</div>
			</div>

${getStartedCtas()}

${publisherAttribution()}
		</div>
	);
}
`
);

// ============================================================
// BUY
// ============================================================
writePage(
	"app/[locale]/buy/page.tsx",
	`import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BuyFlow } from "@/components/BuyFlow";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { BUY_COUNTRIES } from "@/lib/buy/platforms";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/buy — Phase 9b faithful port of buy.html.
 *
 * Server renders the full 52-country button grid so crawlers see everything.
 * \`<BuyFlow>\` Client Component delegates click handlers from the grid and
 * reveals subsequent steps (payment method → platforms → storage guidance)
 * based on the user's selections.
 */

${metadataBlock({
	slug: "buy",
	titleKey: "buy_bitcoin_guide",
	descriptionKey: "buy_bitcoin_guide",
	image: "https://bitcoin.rocks/img/meta/meta-buy-v1.png",
})}

export default async function BuyPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = \`/\${locale}\`;
	const title = t("buy_bitcoin_guide");
	const description = t("buy_bitcoin_guide");

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
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div className="container-inner">
				<div style={{ textAlign: "center" }}>
					<a href={l}>
						<img
							src="/img/logos/rocks-logo-gray.png"
							className="back-to-home"
							alt="bitcoin.rocks"
						/>
					</a>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro">
				<div className="container-inner">
					<h1 className="wallet-h3">{t("buy_header")}</h1>
					<p>
						<span>{t("buy_intro_c1")}</span>
						<br />
						<br />
						<span>{t("buy_intro_c2")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<BuyFlow>
				<div className="text-box intro">
					<div className="container-inner">
						<h2 className="h2-section">{t("buy_step_1_header")}</h2>
						<p>{t("buy_step_1_description")}</p>

						<div className="break-micro" />
						<input
							type="text"
							id="country-search"
							placeholder={t("buy_search_countries")}
							className="country-search-input"
						/>

						<div className="break-nano" />
						<div className="container-buy-button">
							{BUY_COUNTRIES.map((c) => (
								<button
									key={c.code}
									className="buy-country-button"
									data-country={c.code}
								>
									<span className="flag-icon">{c.flag}</span>
									&nbsp;
									<span>{t(c.labelKey)}</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</BuyFlow>

			<div className="break-micro" />

${publisherAttribution()}
		</div>
	);
}
`
);

// ============================================================
// STICKER-SUCCESS
// ============================================================
writePage(
	"app/[locale]/sticker-success/page.tsx",
	`import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/sticker-success — Phase 9b faithful port of sticker-success.html.
 * Thank-you screen after a successful sticker-form submission, plus the
 * fixed-bottom "Print & Post Bitcoin Flyers" promo bar.
 */

const SLUG = "sticker-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-stickers-v9.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("common_success");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

export default async function StickerSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = \`/\${locale}\`;
	const title = t("common_success");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("sticker_success_1"),
		image: META_IMAGE,
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div style={{ textAlign: "center" }}>
				<a href={l}>
					<img
						src="/img/logos/rocks-logo-gray.png"
						className="back-to-home"
						alt="bitcoin.rocks"
					/>
				</a>
			</div>

			<h1 className="h2-stickers">
				<span className="inflation">{t("common_success")}</span>
			</h1>

			<div className="text-box intro">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<span>{t("sticker_success_1")}</span>
						<br />
						<br />
						<span>{t("sticker_success_2")}</span>
						<br />
						✅ <span>{t("sticker_success_list_1")}</span>
						<br />
						✅ <span>{t("sticker_success_list_2")}</span>
						<br />
						✅ <span>{t("sticker_success_list_3")}</span>
						<br />
						✅ <span>{t("sticker_success_list_4")}</span>
						<br />
						<br />
						<span>{t("sticker_success_3")}</span>{" "}
						<span>{t("common_footer_follow_first_half")}</span>
						&nbsp;
						<a
							href="https://snort.social/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4"
							className="footer-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							hi@bitcoin.rocks
						</a>
						&nbsp;<span>{t("common_footer_follow_second_half")}</span>
						<br />
						<br />
						————————
						<br />
						<br />
						<span>{t("common_stickers_bulk_want")}</span>{" "}
						<a
							href="https://stickermule.com/u/4c84ba884f9c3ae"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("common_stickers_bulk_store")}</span>
						</a>{" "}
						<span>{t("common_stickers_bulk_cheaper")}</span>
					</p>
				</div>
			</div>

${getStartedCtas()}

			{/* Fixed bottom bar — flyers promo */}
			<div className="fixed-bottom-bar">
				<div className="fixed-bottom-bar-content">
					<span className="fixed-bottom-bar-text">
						<span className="fixed-bottom-bar-new">
							{t("sticker_success_flyers_bar_new")}
						</span>
						<a href={\`\${l}/flyers\`} className="fixed-bottom-bar-link">
							<span>{t("sticker_success_flyers_bar_cta")}</span>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}
`
);

// ============================================================
// SIGN-SUCCESS
// ============================================================
writePage(
	"app/[locale]/sign-success/page.tsx",
	`import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/sign-success — Phase 9b faithful port of sign-success.html.
 * Thank-you after a sign request submission (currently unreachable since
 * the signs program is closed, but we keep it for future re-activation).
 */

const SLUG = "sign-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-signs-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("common_success");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

export default async function SignSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = \`/\${locale}\`;
	const title = t("common_success");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("sign_success_1"),
		image: META_IMAGE,
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div style={{ textAlign: "center" }}>
				<a href={l}>
					<img
						src="/img/logos/rocks-logo-gray.png"
						className="back-to-home"
						alt="bitcoin.rocks"
					/>
				</a>
			</div>

			<h1 className="h2-stickers">
				<span className="inflation">{t("common_success")}</span>
			</h1>

			<div className="text-box intro">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<span>{t("sign_success_1")}</span>
						<br />
						<br />
						<span>{t("sign_success_3")}</span>{" "}
						<span>{t("common_footer_follow_first_half")}</span>
						&nbsp;
						<a
							href="https://snort.social/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4"
							className="footer-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							hi@bitcoin.rocks
						</a>
						&nbsp;<span>{t("common_footer_follow_second_half")}</span>
					</p>
				</div>
			</div>

${getStartedCtas()}
		</div>
	);
}
`
);

// ============================================================
// POSTCARD-SUCCESS
// ============================================================
writePage(
	"app/[locale]/postcard-success/page.tsx",
	`import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/postcard-success — Phase 9b faithful port of postcard-success.html.
 * Kept for link-juice preservation; the postcard program itself is closed.
 */

const SLUG = "postcard-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-postcards-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("common_success");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

export default async function PostcardSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = \`/\${locale}\`;
	const title = t("common_success");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("postcard_success_1"),
		image: META_IMAGE,
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div style={{ textAlign: "center" }}>
				<a href={l}>
					<img
						src="/img/logos/rocks-logo-gray.png"
						className="back-to-home"
						alt="bitcoin.rocks"
					/>
				</a>
			</div>

			<h1 className="h2-stickers">
				<span className="inflation">{t("common_success")}</span>
			</h1>

			<div className="text-box intro">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<span>{t("postcard_success_1")}</span>
						<br />
						<br />
						<span>{t("postcard_success_2")}</span>
					</p>
				</div>
			</div>

${getStartedCtas()}
		</div>
	);
}
`
);

// ============================================================
// STICKER-LANGUAGE-SUCCESS
// ============================================================
writePage(
	"app/[locale]/sticker-language-success/page.tsx",
	`import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/sticker-language-success — Phase 9b faithful port of
 * sticker-language-success.html. Thank-you after submitting the
 * "Request stickers in my language" form.
 */

const SLUG = "sticker-language-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-stickers-v9.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("common_success");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

export default async function StickerLanguageSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = \`/\${locale}\`;
	const title = t("common_success");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("sticker_language_success_1"),
		image: META_IMAGE,
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div style={{ textAlign: "center" }}>
				<a href={l}>
					<img
						src="/img/logos/rocks-logo-gray.png"
						className="back-to-home"
						alt="bitcoin.rocks"
					/>
				</a>
			</div>

			<h1 className="h2-stickers">
				<span className="inflation">{t("common_success")}</span>
			</h1>

			<div className="text-box intro">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<span>{t("sticker_language_success_1")}</span>
						<br />
						<br />
						<span>{t("sticker_language_success_2")}</span>
					</p>
				</div>
			</div>

${getStartedCtas()}
		</div>
	);
}
`
);

console.log("\n✓ Phase 9b remaining pages generated.");

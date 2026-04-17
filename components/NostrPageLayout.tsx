import { getTranslations } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { NostrAccordion } from "@/components/NostrAccordion";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * Shared Server Component rendering the /nostr and /nostr/what-is-nostr
 * pages in the V1 design system. Faithful Tailwind port of the legacy
 * HTML — the two pages only differ by their hero H1 text, meta title,
 * meta description, and breadcrumb slug; the three intro sections + three
 * client-picker accordions (iPhone / Android / Browser) are identical.
 *
 * V2 redesign is deferred to the post-cutover queue.
 */

type Input = {
	slug: "nostr" | "nostr/what-is-nostr";
	/** Translation key for the page <title>. */
	titleKey: string;
	/** Translation key for the orange H1 hero. */
	headerKey: string;
	/** Translation key for the meta description. */
	descriptionKey: string;
	locale: Locale;
};

export async function NostrPageLayout({
	slug,
	titleKey,
	headerKey,
	descriptionKey,
	locale,
}: Input) {
	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	const title = t(titleKey);
	const description = t(descriptionKey);

	const articleSchema = await buildArticleSchema({
		slug,
		locale,
		headline: title,
		description,
		schemaType: "Article",
		image: "/img/meta/meta-nostr-home-v1.png",
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug,
		locale,
		pageTitle: title,
	});

	return (
		<>
			<JsonLd data={articleSchema} />
			{breadcrumbSchema !== null && <JsonLd data={breadcrumbSchema} />}

			<div className="container-main">
				<div className="container-inner">
					<h1 className="h1-inflation">{t(headerKey)}</h1>
				</div>

				{/* JOIN NOSTR NOW — anchor-scroll CTA to the #ready section */}
				<div style={{ textAlign: "center" }}>
					<a href="#ready" style={{ textDecoration: "none" }}>
						<div className="biz-button">
							<p>{t("common_nostr_join")}</p>
						</div>
					</a>
				</div>

				<div className="break-micro" />

				{/* ═══ Intro: Protocol, not platform ═══ */}
				<div className="text-box intro inflation-box">
					<div className="container-inner">
						<div className="break-micro" />
						<h2 className="nostr-intro-h2">
							{t("common_nostr_protocol_header")}
						</h2>
						<p>
							<span>{t("common_nostr_protocol_c1")}</span>
							<br />
							<br />
							<span>{t("common_nostr_protocol_c2")}</span>
						</p>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ Intro: Freedom to move ═══ */}
				<div className="text-box intro inflation-box">
					<div className="container-inner">
						<div className="break-micro" />
						<h2 className="nostr-intro-h2">
							{t("common_nostr_freedom_header")}
						</h2>
						<p>
							<span>{t("common_nostr_freedom_c1")}</span>
							<br />
							<br />
							<span>{t("common_nostr_freedom_c2")}</span>
							<br />
							<br />
							<span>{t("common_nostr_freedom_c3")}</span>
						</p>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ Intro: Bitcoin is built in ═══ */}
				<div className="text-box intro inflation-box">
					<div className="container-inner">
						<div className="break-micro" />
						<h2 className="nostr-intro-h2">
							{t("common_nostr_bitcoin_header")}
						</h2>
						<p>
							<span>{t("common_nostr_bitcoin_c1")}</span>
							<br />
							<br />
							<span>{t("common_nostr_bitcoin_c2")}</span>
						</p>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ Download a free client ═══ */}
				<div id="ready">
					<h2 className="h2-inflation">
						{t("common_nostr_download_client")}
					</h2>
				</div>

				<div className="break-micro" />

				{/* ═══ iPhone Clients ═══ */}
				<NostrAccordion
					header={
						<h3 className="h3-category">
							{t("common_nostr_iphone_clients")}
						</h3>
					}
				>
					{/* PRIMAL */}
					<div
						className="wallet-box-biz wallet-biz-1"
						style={{ marginBottom: "100px" }}
					>
						<div className="container-inner">
							<div style={{ textAlign: "center" }}>
								<img
									src="/img/clients/primal.png"
									alt="Primal"
									className="device"
								/>
							</div>
							<h4 className="h4-label">{t("common_nostr_primal")}</h4>
							<div className="break-mini" />
							<p>
								<span className="bold">
									{t("common_nostr_iphone_app")}
								</span>
								<br />
								<span>{t("common_nostr_first_client")}</span>
								<br />
								<span>{t("common_nostr_wallet_built_in")}</span>
								<br />
								<br />
							</p>
							<a
								href="https://apps.apple.com/us/app/primal/id1673134518"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="wallet-button">
									{t("common_nostr_download_now")}
								</div>
							</a>
						</div>
					</div>

					<div className="break" />

					{/* DAMUS */}
					<div
						className="wallet-box-biz wallet-biz-1"
						style={{ marginBottom: "12px" }}
					>
						<div className="container-inner">
							<div style={{ textAlign: "center" }}>
								<img
									src="/img/clients/damus.png"
									alt="Damus"
									className="device"
								/>
							</div>
							<h4 className="h4-label">{t("common_nostr_damus")}</h4>
							<div className="break-mini" />
							<p>
								<span className="bold">
									{t("common_nostr_iphone_app")}
								</span>
								<br />
								<span>{t("common_nostr_familiar")}</span>
								<br />
								<span>{t("common_nostr_separate_wallet")}</span>
								<br />
								<br />
							</p>
							<a
								href="https://apps.apple.com/ca/app/damus/id1628663131"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="wallet-button">
									{t("common_nostr_download_now")}
								</div>
							</a>
						</div>
					</div>
				</NostrAccordion>

				{/* ═══ Android Clients ═══ */}
				<NostrAccordion
					header={
						<h3 className="h3-category">
							{t("common_nostr_android_clients")}
						</h3>
					}
				>
					{/* PRIMAL Android */}
					<div
						className="wallet-box-biz wallet-biz-1"
						style={{ marginBottom: "100px" }}
					>
						<div className="container-inner">
							<div style={{ textAlign: "center" }}>
								<img
									src="/img/clients/primal.png"
									alt="Primal"
									className="device"
								/>
							</div>
							<h4 className="h4-label">{t("common_nostr_primal")}</h4>
							<div className="break-mini" />
							<p>
								<span className="bold">
									{t("common_nostr_android_app")}
								</span>
								<br />
								<span>{t("common_nostr_first_client")}</span>
								<br />
								<span>{t("common_nostr_wallet_built_in")}</span>
								<br />
								<br />
							</p>
							<a
								href="https://primal.net/downloads"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="wallet-button">
									{t("common_nostr_download_now")}
								</div>
							</a>
						</div>
					</div>

					<div className="break" />

					{/* AMETHYST */}
					<div
						className="wallet-box-biz wallet-biz-1"
						style={{ marginBottom: "12px" }}
					>
						<div className="container-inner">
							<div style={{ textAlign: "center" }}>
								<img
									src="/img/clients/amethyst.png"
									alt="Amethyst"
									className="device"
								/>
							</div>
							<h4 className="h4-label">{t("common_nostr_amethyst")}</h4>
							<div className="break-mini" />
							<p>
								<span className="bold">
									{t("common_nostr_android_app")}
								</span>
								<br />
								<span>{t("common_nostr_features")}</span>
								<br />
								<span>{t("common_nostr_separate_wallet")}</span>
								<br />
								<br />
							</p>
							<a
								href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="wallet-button">
									{t("common_nostr_download_now")}
								</div>
							</a>
						</div>
					</div>

					<div className="break" />
				</NostrAccordion>

				{/* ═══ Browser Clients ═══ */}
				<NostrAccordion
					header={
						<h3 className="h3-category">
							{t("common_nostr_browser_clients")}
						</h3>
					}
				>
					{/* IRIS */}
					<div className="wallet-box-biz wallet-biz-solo">
						<div className="container-inner">
							<div style={{ textAlign: "center" }}>
								<img
									src="/img/clients/iris.png"
									alt="Iris"
									className="other"
								/>
							</div>
							<h4 className="h4-label">{t("common_nostr_iris")}</h4>
							<div className="break-mini" />
							<p>
								<span className="bold">
									{t("common_nostr_web_client")}
								</span>
								<br />
								<span>{t("common_nostr_simple")}</span>
								<br />
								<span>{t("common_nostr_test")}</span>
								<br />
								<br />
							</p>
							<a
								href="https://iris.to/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="wallet-button">
									{t("common_nostr_view_client")}
								</div>
							</a>
						</div>
					</div>

					<div className="break" />
				</NostrAccordion>

				{/* ═══ PUBLISHER ATTRIBUTION ═══ */}
				<div
					className="publisher-attribution"
					itemProp="publisher"
					itemScope
					itemType="https://schema.org/Organization"
				>
					<div className="container-inner">
						<p>
							<span className="reviewed-badge">
								{t(REVIEWED_ACCURACY_I18N_KEY)}
							</span>
							<br />
							<span>{t("common_published_by")}</span>{" "}
							<a
								href={`${l}/about`}
								className="orange-link"
								itemProp="url"
							>
								<span itemProp="name">
									{t("common_publisher_name")}
								</span>
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
				</div>
			</div>
		</>
	);
}

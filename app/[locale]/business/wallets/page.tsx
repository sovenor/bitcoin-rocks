import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BusinessPageShell } from "@/components/BusinessPageShell";
import { BusinessResourceCards } from "@/components/BusinessResourceCards";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { WalletAccordion } from "@/components/WalletAccordion";
import { BusinessWalletCard } from "@/components/BusinessWalletCard";

/**
 * /[locale]/business/wallets — Phase 10 faithful port of business/wallets.html.
 */

const SLUG = "business/wallets";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-wallets-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "how_to_accept_bitcoin_payments",
		image: META_IMAGE,
		description: "All Bitcoin wallets are interoperable — pick the one that fits your business.",
	});
}

export default async function BusinessWalletsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	void l;
	const title = t("how_to_accept_bitcoin_payments");
	const description = "All Bitcoin wallets are interoperable — pick the one that fits your business.";

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

			<div className="text-box home-intro">
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

			<BusinessResourceCards locale={locale} exclude={["wallets"]} />

		</BusinessPageShell>
	);
}

"use client";

/**
 * StickerFlow — V2 redesign (April 22, 2026).
 *
 * Two-step wizard for `/stickers`:
 *   1. Choose a sticker pack (Text Pack or Signs Pack) — two bordered
 *      `.sticker-pack-card` tiles (entire tile is a `<button>`) with a
 *      preview image, <h2> title, description, and a prominent
 *      Bitcoin-orange CTA button. Selecting a pack reveals Step 2.
 *   2. Choose how to get the stickers (USA mail / Canada mail / Print /
 *      Bulk) — four `.sticker-option-button` real-button-looking rows
 *      stacked 1-per-line. Selecting an option reveals the matching
 *      form / language grid / bulk CTA in a `.sticker-panel` surface
 *      card beneath.
 *
 * All form-bearing panels (4 mail forms + 1 print/language-request) are
 * rendered in the initial HTML and toggled with the `hidden` attribute,
 * which keeps the wizard's revealed-form animation smooth.
 *
 * Smooth-scroll between steps to match the `/buy` V2 feel.
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";

import { StickerAddressForm } from "@/components/StickerAddressForm";
import { STICKER_LANGUAGES } from "@/lib/sticker-languages";

type PackId = "text" | "signs";
type OptionId = "usa" | "canada" | "print" | "bulk";

type Props = {
	/** Locale prefix (e.g. "/en") for internal links. */
	localePrefix: string;
};

/** Per-pack form endpoints on forms.bitcoin.rocks. */
const ACTIONS: Record<PackId, { usa: string; canada: string }> = {
	text: {
		usa: "https://forms.bitcoin.rocks/submit/stickers-text-usa",
		canada: "https://forms.bitcoin.rocks/submit/stickers-text-canada",
	},
	signs: {
		usa: "https://forms.bitcoin.rocks/submit/stickers-signs-usa",
		canada: "https://forms.bitcoin.rocks/submit/stickers-signs-canada",
	},
};

export function StickerFlow({ localePrefix }: Props) {
	const t = useTranslations();
	const step2Ref = useRef<HTMLDivElement>(null);
	const panelRef = useRef<HTMLDivElement>(null);
	const [pack, setPack] = useState<PackId | null>(null);
	const [option, setOption] = useState<OptionId | null>(null);

	// When a pack is chosen, reset the option and scroll Step 2 into view.
	useEffect(() => {
		if (!pack) return;
		setOption(null);
		const el = step2Ref.current;
		if (!el) return;
		requestAnimationFrame(() => {
			const top = el.getBoundingClientRect().top + window.scrollY - 50;
			window.scrollTo({ top, behavior: "smooth" });
		});
	}, [pack]);

	// When an option is chosen, scroll the revealed panel into view.
	useEffect(() => {
		if (!option) return;
		const el = panelRef.current;
		if (!el) return;
		requestAnimationFrame(() => {
			const top = el.getBoundingClientRect().top + window.scrollY - 60;
			window.scrollTo({ top, behavior: "smooth" });
		});
	}, [option]);

	const options: ReadonlyArray<{ id: OptionId; labelKey: string }> = [
		{ id: "usa", labelKey: "stickers_option_usa" },
		{ id: "canada", labelKey: "stickers_option_canada" },
		{ id: "print", labelKey: "stickers_option_print" },
		{ id: "bulk", labelKey: "stickers_option_bulk" },
	];

	const showMail = (p: PackId, v: "usa" | "canada") =>
		pack === p && option === v;

	return (
		<>
			{/* ═══ STEP 1 — pack picker ═══ */}
			<div className="inflation-section">
				<div className="container-inner">
					<div className="buy-step-header">
						<span className="buy-step-eyebrow">
							{t("stickers_step_1_eyebrow")}
						</span>
						<h2>{t("stickers_step_1_header")}</h2>
						<p>{t("stickers_step_1_description")}</p>
					</div>

					<div className="sticker-pack-grid">
						<PackCard
							id="text"
							active={pack === "text"}
							image="/img/stickers/web-sticker-pack-text.png"
							title={t("stickers_text_pack")}
							description={t("stickers_text_pack_description")}
							ctaLabel={t("stickers_btn_choose_pack")}
							onChoose={() => setPack("text")}
						/>
						<PackCard
							id="signs"
							active={pack === "signs"}
							image="/img/stickers/web-sticker-pack-signs.png"
							title={t("stickers_signs_pack")}
							description={t("stickers_signs_pack_description")}
							ctaLabel={t("stickers_btn_choose_pack")}
							onChoose={() => setPack("signs")}
						/>
					</div>
				</div>
			</div>

			{/* ═══ STEP 2 — delivery option ═══ */}
			<div ref={step2Ref} className="inflation-section" hidden={!pack}>
				<div className="container-inner">
					<div className="buy-step-header">
						<span className="buy-step-eyebrow">
							{t("stickers_step_2_eyebrow")}
						</span>
						<h2>{t("stickers_step_2_header")}</h2>
						<p>{t("stickers_step_2_description")}</p>
					</div>

					<div className="sticker-option-grid">
						{options.map((o) => (
							<button
								key={o.id}
								type="button"
								className={`sticker-option-button${option === o.id ? " is-selected" : ""}`}
								onClick={() => setOption(o.id)}
							>
								<span className="sticker-option-label">
									{t(o.labelKey)}
								</span>
								<span className="sticker-option-chevron" aria-hidden="true">
									{option === o.id ? "✓" : "→"}
								</span>
							</button>
						))}
					</div>

					<div ref={panelRef} className="sticker-panel">
						<MailPanel
							pack="text"
							variant="usa"
							hidden={!showMail("text", "usa")}
						/>
						<MailPanel
							pack="text"
							variant="canada"
							hidden={!showMail("text", "canada")}
						/>
						<MailPanel
							pack="signs"
							variant="usa"
							hidden={!showMail("signs", "usa")}
						/>
						<MailPanel
							pack="signs"
							variant="canada"
							hidden={!showMail("signs", "canada")}
						/>
						<PrintPanel
							localePrefix={localePrefix}
							hidden={option !== "print"}
						/>
						<BulkPanel hidden={option !== "bulk"} />
					</div>
				</div>
			</div>
		</>
	);
}

/* ───────── Sub-components ───────── */

function PackCard({
	id,
	active,
	image,
	title,
	description,
	ctaLabel,
	onChoose,
}: {
	id: PackId;
	active: boolean;
	image: string;
	title: string;
	description: string;
	ctaLabel: string;
	onChoose: () => void;
}) {
	return (
		<button
			type="button"
			className={`sticker-pack-card${active ? " is-selected" : ""}`}
			data-pack={id}
			onClick={onChoose}
			aria-pressed={active}
		>
			<div className="sticker-pack-image-wrap">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={image} alt={title} className="sticker-pack-image" />
			</div>
			<div className="sticker-pack-body">
				<h2 className="sticker-pack-title">{title}</h2>
				<p className="sticker-pack-description">{description}</p>
				<span className="sticker-pack-cta">
					{active ? `✓ ${ctaLabel}` : ctaLabel}
				</span>
			</div>
		</button>
	);
}

function MailPanel({
	pack,
	variant,
	hidden,
}: {
	pack: PackId;
	variant: "usa" | "canada";
	hidden: boolean;
}) {
	const t = useTranslations();
	const action = ACTIONS[pack][variant];
	return (
		<Panel title={t("stickers_mail_header")} hidden={hidden}>
			<StickerAddressForm variant={variant} action={action} />
		</Panel>
	);
}

function PrintPanel({
	localePrefix,
	hidden,
}: {
	localePrefix: string;
	hidden: boolean;
}) {
	const t = useTranslations();
	return (
		<Panel title={t("stickers_print_header")} hidden={hidden}>
			<p>{t("stickers_print_c1")}</p>
			<p className="sticker-panel-note">{t("stickers_print_c2")}</p>

			<div className="sticker-language-grid">
				{STICKER_LANGUAGES.map((lang) => (
					<a
						key={lang.slug}
						href={`${localePrefix}/sticker-files/${lang.slug}`}
						className="sticker-language-button"
					>
						{t(lang.labelKey)}
					</a>
				))}
			</div>

			<div className="sticker-request">
				<h3 className="sticker-panel-subheading">
					{t("stickers_request_header")}
				</h3>
				<p>{t("stickers_request_c1")}</p>
				<form
					action="https://forms.bitcoin.rocks/submit/sticker-language-request"
					method="POST"
					className="cic-form sticker-form"
				>
					<div className="cic-fields sticker-fields--two">
						<div className="cic-field">
							<label className="cic-label" htmlFor="sticker-request-language">
								{t("placeholder_language")}
							</label>
							<input
								id="sticker-request-language"
								className="cic-input"
								type="text"
								name="language"
								placeholder={t("placeholder_language")}
								required
							/>
						</div>
						<div className="cic-field">
							<label className="cic-label" htmlFor="sticker-request-stickers">
								{t("placeholder_which_stickers")}
							</label>
							<input
								id="sticker-request-stickers"
								className="cic-input"
								type="text"
								name="stickers"
								placeholder={t("placeholder_which_stickers")}
								required
							/>
						</div>
					</div>
					<div className="cic-field">
						<label className="cic-label" htmlFor="sticker-request-email">
							{t("placeholder_email_optional")}
						</label>
						<input
							id="sticker-request-email"
							className="cic-input"
							type="email"
							name="email"
							placeholder={t("placeholder_email_optional")}
						/>
					</div>
					<button type="submit" className="cic-submit">
						{t("common_submit")}
					</button>
				</form>
			</div>
		</Panel>
	);
}

function BulkPanel({ hidden }: { hidden: boolean }) {
	const t = useTranslations();
	return (
		<Panel title={t("stickers_bulk_header")} hidden={hidden}>
			<p>
				{t("stickers_bulk_c1")}{" "}
				<a
					href="https://stickermule.com/u/4c84ba884f9c3ae"
					target="_blank"
					rel="noopener noreferrer"
					className="body-link"
				>
					{t("stickers_bulk_c2")}
				</a>{" "}
				{t("stickers_bulk_c3")}
			</p>
			<div className="flyer-actions">
				<a
					href="https://stickermule.com/u/4c84ba884f9c3ae"
					target="_blank"
					rel="noopener noreferrer"
					className="flyer-btn flyer-btn-primary"
				>
					{t("stickers_bulk_cta")}
				</a>
			</div>
		</Panel>
	);
}

function Panel({
	title,
	children,
	hidden,
}: {
	title: string;
	children: ReactNode;
	hidden: boolean;
}) {
	return (
		<div className="sticker-panel-inner" hidden={hidden}>
			<h3 className="sticker-panel-heading">{title}</h3>
			{children}
		</div>
	);
}

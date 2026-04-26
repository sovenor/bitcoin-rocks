"use client";

/**
 * BusinessStickerFlow — V2 redesign (April 23, 2026).
 *
 * Single-step delivery picker for `/business/stickers`. Unlike the
 * consumer `/stickers` page there is only ONE sticker pack (the
 * "Bitcoin Accepted Here" merchant pack), so we skip the pack-picker
 * step entirely and jump straight to choosing how to receive it:
 *
 *   • USA    — free by mail
 *   • Canada — free by mail
 *   • Global — print your own
 *
 * Selecting an option reveals a matching panel (`.sticker-panel`) with
 * the address form, print instructions, or language-request form.
 *
 * Styling reuses the V2 sticker system (`.sticker-option-grid`,
 * `.sticker-option-button`, `.sticker-panel`, `.sticker-panel-inner`)
 * plus the `.cic-*` form system — same as /stickers — so the two
 * pages feel visually consistent.
 *
 * Forms POST to the existing `forms-backend` endpoints unchanged from
 * the legacy /business/stickers page:
 *   - /submit/business-stickers-usa
 *   - /submit/business-stickers-canada
 *   - /submit/business-sticker-language-request
 */

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { StickerAddressForm } from "@/components/StickerAddressForm";
import { TurnstileWidget } from "@/components/TurnstileWidget";

type OptionId = "usa" | "canada" | "print";

type Props = {
	/** Locale prefix (e.g. "/en") for internal links. */
	localePrefix: string;
};

const ACTIONS = {
	usa: "https://forms.bitcoin.rocks/submit/business-stickers-usa",
	canada: "https://forms.bitcoin.rocks/submit/business-stickers-canada",
	languageRequest:
		"https://forms.bitcoin.rocks/submit/business-sticker-language-request",
} as const;

export function BusinessStickerFlow({ localePrefix }: Props) {
	const t = useTranslations();
	const panelRef = useRef<HTMLDivElement>(null);
	const [option, setOption] = useState<OptionId | null>(null);

	// Scroll the revealed panel into view when an option is chosen.
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
		{ id: "usa", labelKey: "biz_stickers_option_usa" },
		{ id: "canada", labelKey: "biz_stickers_option_canada" },
		{ id: "print", labelKey: "biz_stickers_option_print" },
	];

	return (
		<div className="inflation-section">
			<div className="container-inner">
				<div className="buy-step-header">
					<h2>{t("biz_stickers_step_header")}</h2>
					<p>{t("biz_stickers_step_description")}</p>
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
							<span
								className="sticker-option-chevron"
								aria-hidden="true"
							>
								{option === o.id ? "✓" : "→"}
							</span>
						</button>
					))}
				</div>

				{option && (
					<div ref={panelRef} className="sticker-panel">
						<div className="sticker-panel-inner">
							{option === "usa" && (
								<>
									<h3 className="sticker-panel-heading">
										{t("stickers_mail_header")}
									</h3>
									<StickerAddressForm
										variant="usa"
										action={ACTIONS.usa}
										v2
									/>
								</>
							)}

							{option === "canada" && (
								<>
									<h3 className="sticker-panel-heading">
										{t("stickers_mail_header")}
									</h3>
									<StickerAddressForm
										variant="canada"
										action={ACTIONS.canada}
										v2
									/>
								</>
							)}

							{option === "print" && (
								<>
									<h3 className="sticker-panel-heading">
										{t("biz_stickers_print_header")}
									</h3>
									<p>{t("biz_stickers_print_c1")}</p>

									<div className="sticker-language-grid">
										<a
											href={`${localePrefix}/business/sticker-files/english`}
											className="sticker-language-button"
										>
											{t("common_language_english")}
										</a>
									</div>

									<div className="sticker-request">
										<h3 className="sticker-panel-subheading">
											{t("biz_stickers_request_header")}
										</h3>
										<p>{t("biz_stickers_request_c1")}</p>
										<form
											action={ACTIONS.languageRequest}
											method="POST"
											className="cic-form sticker-form"
										>
											<div className="cic-field">
												<label
													className="cic-label"
													htmlFor="biz-sticker-language"
												>
													{t("placeholder_language")}
												</label>
												<input
													id="biz-sticker-language"
													className="cic-input"
													type="text"
													name="language"
													placeholder={t("placeholder_language")}
													required
												/>
											</div>
											<div className="cic-field">
												<label
													className="cic-label"
													htmlFor="biz-sticker-translation1"
												>
													{t(
														"biz_stickers_placeholder_translation1",
													)}
												</label>
												<input
													id="biz-sticker-translation1"
													className="cic-input"
													type="text"
													name="translation1"
													placeholder={t(
														"biz_stickers_placeholder_translation1",
													)}
													required
												/>
											</div>
											<div className="cic-field">
												<label
													className="cic-label"
													htmlFor="biz-sticker-translation2"
												>
													{t(
														"biz_stickers_placeholder_translation2",
													)}
												</label>
												<input
													id="biz-sticker-translation2"
													className="cic-input"
													type="text"
													name="translation2"
													placeholder={t(
														"biz_stickers_placeholder_translation2",
													)}
													required
												/>
											</div>
											<TurnstileWidget />
											<button
												type="submit"
												className="cic-submit"
											>
												{t("common_submit")}
											</button>
										</form>
									</div>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

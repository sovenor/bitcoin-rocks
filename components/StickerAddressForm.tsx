"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { TurnstileWidget } from "@/components/TurnstileWidget";

/**
 * Sticker address form — shared layout for USA / Canada (and extensible).
 *
 * Client Component (tracks Turnstile token state to gate submit). Submits to
 * `forms-backend` endpoints untouched from the legacy site. Uses the existing
 * `common_*` + `placeholder_*` translation keys.
 *
 * `variant = "usa"` renders the State / Zip fields + the `_gotcha` honeypot.
 * `variant = "canada"` renders Province / Postal Code.
 *
 * Two visual modes:
 *   - legacy (default): plain `<input>` + `<br />` + `.button-form`.
 *     Currently unused; kept for reference.
 *   - v2: renders fields with labels in the shared `.cic-*` form system
 *     (matches `/compound-inflation-calculator`). Used by the V2
 *     `/stickers` wizard and `/business/stickers`.
 */

type Props = {
	variant: "usa" | "canada";
	action: string;
	/** Render in the V2 `.cic-*` form style (labels + grid). */
	v2?: boolean;
};

export function StickerAddressForm({ variant, action, v2 = false }: Props) {
	const t = useTranslations();
	const [token, setToken] = useState<string | null>(null);

	if (v2) {
		return (
			<>
				<p>{t("stickers_instructions_1")}</p>
				<p className="sticker-panel-note">{t("stickers_instructions_2")}</p>
				<form action={action} method="POST" className="cic-form sticker-form">
					<div className="cic-field">
						<label className="cic-label" htmlFor={`sticker-${variant}-name`}>
							{t("placeholder_name_optional")}
						</label>
						<input
							id={`sticker-${variant}-name`}
							className="cic-input"
							type="text"
							name="name"
							placeholder={t("placeholder_name_optional")}
						/>
					</div>
					<div className="cic-field">
						<label
							className="cic-label"
							htmlFor={`sticker-${variant}-address1`}
						>
							{t("placeholder_address_line_1")}
						</label>
						<input
							id={`sticker-${variant}-address1`}
							className="cic-input"
							type="text"
							name="address1"
							placeholder={t("placeholder_address_line_1")}
							required
						/>
					</div>
					<div className="cic-field">
						<label
							className="cic-label"
							htmlFor={`sticker-${variant}-address2`}
						>
							{t("placeholder_address_line_2")}
						</label>
						<input
							id={`sticker-${variant}-address2`}
							className="cic-input"
							type="text"
							name="address2"
							placeholder={t("placeholder_address_line_2")}
						/>
					</div>
					<div className="cic-fields sticker-fields--three">
						<div className="cic-field">
							<label
								className="cic-label"
								htmlFor={`sticker-${variant}-city`}
							>
								{t("placeholder_city")}
							</label>
							<input
								id={`sticker-${variant}-city`}
								className="cic-input"
								type="text"
								name="city"
								placeholder={t("placeholder_city")}
								required
							/>
						</div>
						{variant === "usa" ? (
							<div className="cic-field">
								<label
									className="cic-label"
									htmlFor="sticker-usa-state"
								>
									{t("placeholder_state")}
								</label>
								<input
									id="sticker-usa-state"
									className="cic-input"
									type="text"
									name="state"
									placeholder={t("placeholder_state")}
									required
								/>
							</div>
						) : (
							<div className="cic-field">
								<label
									className="cic-label"
									htmlFor="sticker-canada-province"
								>
									{t("placeholder_province")}
								</label>
								<input
									id="sticker-canada-province"
									className="cic-input"
									type="text"
									name="province"
									placeholder={t("placeholder_province")}
									required
								/>
							</div>
						)}
						{variant === "usa" ? (
							<div className="cic-field">
								<label className="cic-label" htmlFor="sticker-usa-zip">
									{t("placeholder_zip_code")}
								</label>
								<input
									id="sticker-usa-zip"
									className="cic-input"
									type="text"
									name="zip"
									placeholder={t("placeholder_zip_code")}
									required
								/>
							</div>
						) : (
							<div className="cic-field">
								<label
									className="cic-label"
									htmlFor="sticker-canada-postal"
								>
									{t("placeholder_postal_code")}
								</label>
								<input
									id="sticker-canada-postal"
									className="cic-input"
									type="text"
									name="postal"
									placeholder={t("placeholder_postal_code")}
									required
								/>
							</div>
						)}
					</div>
					{variant === "usa" && (
						<input
							type="hidden"
							name="_gotcha"
							style={{ display: "none" }}
						/>
					)}
					<TurnstileWidget onTokenChange={setToken} />
					<button
						type="submit"
						className="cic-submit"
						disabled={!token}
					>
						{t("common_submit")}
					</button>
				</form>
			</>
		);
	}

	// Legacy rendering (currently unused).
	return (
		<>
			<p>
				<span>{t("stickers_instructions_1")}</span>
				<br />
				<br />
				<span>{t("stickers_instructions_2")}</span>
			</p>
			<form action={action} method="POST">
				<input
					type="text"
					name="name"
					placeholder={t("placeholder_name_optional")}
				/>
				<br />
				<input
					type="text"
					name="address1"
					placeholder={t("placeholder_address_line_1")}
					required
				/>
				<br />
				<input
					type="text"
					name="address2"
					placeholder={t("placeholder_address_line_2")}
				/>
				<br />
				<input
					type="text"
					name="city"
					placeholder={t("placeholder_city")}
					required
				/>
				{variant === "usa" ? (
					<input
						type="text"
						name="state"
						placeholder={t("placeholder_state")}
						required
					/>
				) : (
					<input
						type="text"
						name="province"
						placeholder={t("placeholder_province")}
						required
					/>
				)}
				{variant === "usa" ? (
					<input
						type="text"
						name="zip"
						placeholder={t("placeholder_zip_code")}
						required
					/>
				) : (
					<input
						type="text"
						name="postal"
						placeholder={t("placeholder_postal_code")}
						required
					/>
				)}
				<br />
				{variant === "usa" && (
					<input
						type="hidden"
						name="_gotcha"
						style={{ display: "none" }}
					/>
				)}
				<TurnstileWidget />
				<button type="submit" className="button-form">
					<p>{t("common_submit")}</p>
				</button>
			</form>
		</>
	);
}

import { useTranslations } from "next-intl";

/**
 * Sticker address form — shared layout for USA / Canada (and extensible).
 *
 * Server Component. Submits to `forms-backend` endpoints untouched from the
 * legacy site. Uses the existing `common_*` + `placeholder_*` translation
 * keys.
 *
 * `variant = "usa"` renders the State / Zip fields + the `_gotcha` honeypot.
 * `variant = "canada"` renders Province / Postal Code.
 *
 * Captcha: a static `<div className="cf-turnstile" data-sitekey="...">`
 * picked up by Cloudflare's auto-render scan at page load. The host page
 * must (a) load the Turnstile script via `<Script src=".../turnstile/v0/api.js">`
 * and (b) keep this form rendered in the initial HTML (so the scan finds
 * the div) — even when the form is visually hidden via the `hidden`
 * attribute on an ancestor.
 */

type Props = {
	variant: "usa" | "canada";
	action: string;
};

export function StickerAddressForm({ variant, action }: Props) {
	const t = useTranslations();
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
							<label className="cic-label" htmlFor="sticker-usa-state">
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
				<div
					className="cf-turnstile"
					data-sitekey="0x4AAAAAAClzj7R6NrkNgcsP"
					data-theme="dark"
				/>
				<button type="submit" className="cic-submit">
					{t("common_submit")}
				</button>
			</form>
		</>
	);
}

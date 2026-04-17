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
 */

type Props = {
	variant: "usa" | "canada";
	action: string;
};

export function StickerAddressForm({ variant, action }: Props) {
	const t = useTranslations();
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
				<div
					className="cf-turnstile"
					data-sitekey="0x4AAAAAAClzj7R6NrkNgcsP"
					data-theme="dark"
				/>
				<button type="submit" className="button-form">
					<p>{t("common_submit")}</p>
				</button>
			</form>
		</>
	);
}

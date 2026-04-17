import { useTranslations } from "next-intl";

/**
 * One card in a "What's next?" / category grid.
 *
 * Renders:
 *   - Topic label (small text, colored via --card-accent on the parent)
 *   - Title (larger white text)
 *   - Source line ("Source: <author> →", italic grey)
 *
 * The `label`, `title`, and `author` props are translation keys — this
 * component resolves them through `useTranslations()` so the caller
 * just passes the key. Keeps homepage JSX compact.
 *
 * `external` adds target="_blank" + rel="noopener noreferrer" for links
 * that point outside bitcoin.rocks.
 *
 * These cards link to specific pages (internal OR external) — always
 * cross-page navigation, never in-page anchors. External links bypass
 * next-intl's <Link> entirely. Internal links use a plain `<a>` with
 * a pre-localized href (the caller passes `/${locale}/…`) so we don't
 * need `<Link>` here either, which keeps this a clean Server Component.
 */

export function WhatsNextCard({
	href,
	label,
	title,
	authorKey,
	external = false,
}: {
	href: string;
	label: string;
	title: string;
	authorKey: string;
	external?: boolean;
}) {
	const t = useTranslations();

	return (
		<a
			href={href}
			className="whats-next-card"
			{...(external
				? { target: "_blank", rel: "noopener noreferrer" }
				: {})}
		>
			<div>
				<div className="whats-next-card-label">{label}</div>
				<div className="whats-next-card-title">{title}</div>
			</div>
			<div className="whats-next-card-source">
				<span>{t("home_source_prefix")}</span> <span>{t(authorKey)}</span> →
			</div>
		</a>
	);
}

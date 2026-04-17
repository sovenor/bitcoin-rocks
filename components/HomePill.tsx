/**
 * Home carousel pill — colored link button used inside <HomeCarousel>.
 *
 * Renders as `<a>` (server-component-friendly) rather than a next-intl
 * `<Link>` because these are pure in-page anchor scroll targets (`#money`,
 * `#freedom`, …) — never cross-page navigation. Anchor links keep the
 * browser's native smooth-scroll + `scroll-padding-top` offset working.
 *
 * Pills are duplicated 2× in the DOM by the parent so HomeCarousel can
 * seamlessly wrap its scroll offset. The duplicated instances are marked
 * `aria-hidden` + `tabIndex=-1` so they don't clutter the a11y tree.
 */

export type HomePillColor =
	| "money"
	| "saving"
	| "salary"
	| "freedom"
	| "human-rights"
	| "equality"
	| "property-rights"
	| "housing"
	| "business"
	| "crowdfunding"
	| "energy"
	| "environment"
	| "food"
	| "art"
	| "politics"
	| "war"
	| "coding"
	| "networks"
	| "payments"
	| "self-custody"
	| "get-started";

export function HomePill({
	href,
	color,
	duplicate = false,
	children,
}: {
	href: string;
	color: HomePillColor;
	duplicate?: boolean;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			className={`home-pill ${color}`}
			aria-hidden={duplicate || undefined}
			tabIndex={duplicate ? -1 : undefined}
		>
			{children}
		</a>
	);
}

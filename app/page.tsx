import { redirect } from "next/navigation";

/**
 * Root entry point.
 *
 * Temporary: Phase 1 redirects `/` → `/en` so the dev server
 * always lands on a real page. Phase 2 will replace this with
 * `Accept-Language`-aware middleware (see MIGRATION-NEXTJS.md
 * Phase 2).
 */
export default function RootPage() {
	redirect("/en");
}

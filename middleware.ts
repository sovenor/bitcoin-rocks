import createMiddleware from "next-intl/middleware";

import { routing } from "./lib/i18n/routing";

export default createMiddleware(routing);

export const config = {
	/**
	 * Run middleware on every path EXCEPT:
	 *   - Next internals (`/_next/*`, `/_vercel/*`)
	 *   - Any path containing a dot (static files like `/favicon.ico`,
	 *     `/img/foo.png`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, …)
	 *
	 * The `-` inside the char class excludes `_next` + `_vercel` paths.
	 */
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

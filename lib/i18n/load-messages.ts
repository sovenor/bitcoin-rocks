/**
 * Message loader for the existing jquery.i18n JSON files.
 *
 * Files live at `i18n/<locale>/<namespace>_<locale>.json` at the repo root.
 * Each file is a flat `{ "key_name": "string", ... }` object with an
 * `@metadata` entry that must be stripped before handing the object to
 * next-intl.
 *
 * Missing-key fallback: if the target locale omits a key, we use the English
 * value for that key. This matches the behavior of `jquery.i18n` on the legacy
 * static site and means translators never need to ship complete files — any
 * subset is fine.
 *
 * Subdirectories: business/, nostr/, sticker-files/ are supported by passing
 * `"business/wallets"` etc. as the namespace.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

import { defaultLocale, type Locale } from "./config";

/** Flat messages object (strings only — jquery.i18n never nested). */
export type FlatMessages = Record<string, string>;

/** In-memory cache. Cleared on process restart; Next dev reloads handle re-reads. */
const cache = new Map<string, FlatMessages>();

/** Absolute path to the repo-root `i18n/` directory. */
const I18N_ROOT = path.join(process.cwd(), "i18n");

/**
 * Build the on-disk path for a `(locale, namespace)` pair.
 * Example: `("es", "common")` → `<repo>/i18n/es/common_es.json`
 *          `("fr", "business/wallets")` → `<repo>/i18n/fr/business/wallets_fr.json`
 */
function filePath(locale: Locale, namespace: string): string {
	const lastSlash = namespace.lastIndexOf("/");
	const dir = lastSlash === -1 ? "" : namespace.slice(0, lastSlash);
	const base = lastSlash === -1 ? namespace : namespace.slice(lastSlash + 1);
	const fileName = `${base}_${locale}.json`;
	return path.join(I18N_ROOT, locale, dir, fileName);
}

/** Read one JSON file, strip `@metadata`, return the flat message bag. */
async function readNamespace(
	locale: Locale,
	namespace: string,
): Promise<FlatMessages | null> {
	const cacheKey = `${locale}::${namespace}`;
	const cached = cache.get(cacheKey);
	if (cached) return cached;

	const p = filePath(locale, namespace);
	let raw: string;
	try {
		raw = await fs.readFile(p, "utf8");
	} catch (err: unknown) {
		if (
			err &&
			typeof err === "object" &&
			"code" in err &&
			(err as { code?: string }).code === "ENOENT"
		) {
			return null;
		}
		throw err;
	}

	let parsed: unknown;
	try {
		parsed = JSON.parse(raw);
	} catch (err) {
		throw new Error(
			`Invalid JSON in ${p}: ${err instanceof Error ? err.message : String(err)}`,
		);
	}

	if (!parsed || typeof parsed !== "object") {
		return null;
	}

	const out: FlatMessages = {};
	for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
		if (key === "@metadata") continue;
		if (typeof value === "string") {
			out[key] = value;
		}
		// Non-string values are skipped (legacy files sometimes contain stray
		// arrays; none are used as i18n keys so this is safe).
	}

	cache.set(cacheKey, out);
	return out;
}

/**
 * Load one namespace of messages for `locale`, falling back to English
 * for any key the target locale is missing. Returns `{}` if neither the
 * target nor English file exists.
 */
export async function loadNamespaceMessages(
	locale: Locale,
	namespace: string,
): Promise<FlatMessages> {
	const [target, english] = await Promise.all([
		readNamespace(locale, namespace),
		locale === defaultLocale
			? Promise.resolve(null)
			: readNamespace(defaultLocale, namespace),
	]);

	if (!target && !english) return {};
	if (!target) return { ...(english ?? {}) };
	if (!english) return { ...target };

	// English provides the fallback floor; target overrides any translated key.
	return { ...english, ...target };
}

/**
 * Load multiple namespaces and return a SINGLE flat messages object.
 * Later namespaces in the list override earlier ones on key collision.
 *
 * `jquery.i18n` used a single flat keyspace with file-level prefixes like
 * `common_*`, `home_*`, `inflation_*`, so collisions between files are rare
 * in practice.
 */
export async function loadMessages(
	locale: Locale,
	namespaces: readonly string[],
): Promise<FlatMessages> {
	const chunks = await Promise.all(
		namespaces.map((ns) => loadNamespaceMessages(locale, ns)),
	);
	return Object.assign({}, ...chunks);
}

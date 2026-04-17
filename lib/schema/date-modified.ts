/**
 * Derive each page's `dateModified` from its English JSON translation
 * file's `@metadata.last-updated` field.
 *
 * This makes the schema `dateModified` + the sitemap `<lastmod>` automatic:
 * translators/editors already bump the English JSON last-updated date when
 * they change content, so no second manual update is needed.
 *
 * Falls back to today's date if the file is missing / lacks the metadata.
 */

import { promises as fs } from "node:fs";
import path from "node:path";

import { getPage } from "../pages";

const I18N_EN_ROOT = path.join(process.cwd(), "i18n", "en");

/** Cache keyed by namespace → last-updated string. Lifetime = build process. */
const cache = new Map<string, string>();

/** `YYYY-MM-DD` for today in UTC. */
function todayISO(): string {
	return new Date().toISOString().slice(0, 10);
}

/**
 * Read `@metadata.last-updated` from an English namespace JSON file.
 * Returns `null` if the file is missing or the field is absent.
 */
async function readLastUpdated(namespace: string): Promise<string | null> {
	const cached = cache.get(namespace);
	if (cached !== undefined) return cached;

	const filePath = path.join(I18N_EN_ROOT, `${namespace}_en.json`);
	let raw: string;
	try {
		raw = await fs.readFile(filePath, "utf8");
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
	} catch {
		return null;
	}

	if (!parsed || typeof parsed !== "object") return null;
	const meta = (parsed as Record<string, unknown>)["@metadata"];
	if (!meta || typeof meta !== "object") return null;
	const val = (meta as Record<string, unknown>)["last-updated"];
	if (typeof val !== "string") return null;

	cache.set(namespace, val);
	return val;
}

/**
 * Get the `dateModified` ISO date for a given slug.
 * Looks up the namespace via `getPage()`, reads the English JSON's
 * `@metadata.last-updated`, and falls back to today's date otherwise.
 */
export async function getDateModified(slug: string): Promise<string> {
	const page = getPage(slug);
	if (!page || !page.namespace) return todayISO();

	const lastUpdated = await readLastUpdated(page.namespace);
	return lastUpdated ?? todayISO();
}

/** Get `dateModified` directly from a namespace (when the page slug is abstract). */
export async function getDateModifiedFromNamespace(
	namespace: string,
): Promise<string> {
	const lastUpdated = await readLastUpdated(namespace);
	return lastUpdated ?? todayISO();
}

#!/usr/bin/env node
/**
 * Remove the /signs, /postcards, /sign-success, /postcard-success pages
 * and all associated resources (route files, i18n JSON files across all
 * locales, and corresponding image directories).
 *
 * Idempotent — safe to run multiple times.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const SLUGS = ['signs', 'postcards', 'sign-success', 'postcard-success'];
const IMG_SLUGS = ['signs', 'postcards']; // only these have /img dirs

function rmrf(target) {
	if (!fs.existsSync(target)) return false;
	fs.rmSync(target, { recursive: true, force: true });
	return true;
}

// 1) Remove route directories under app/[locale]/<slug>
for (const slug of SLUGS) {
	const dir = path.join(ROOT, 'app', '[locale]', slug);
	const removed = rmrf(dir);
	console.log(`${removed ? 'removed' : 'skip   '} ${path.relative(ROOT, dir)}`);
}

// 2) Remove i18n JSON files across all locales
const i18nRoot = path.join(ROOT, 'i18n');
if (fs.existsSync(i18nRoot)) {
	const locales = fs.readdirSync(i18nRoot).filter((d) => {
		return fs.statSync(path.join(i18nRoot, d)).isDirectory();
	});
	for (const locale of locales) {
		for (const slug of SLUGS) {
			const filename = `${slug}_${locale}.json`;
			const target = path.join(i18nRoot, locale, filename);
			if (fs.existsSync(target)) {
				fs.unlinkSync(target);
				console.log(`removed i18n/${locale}/${filename}`);
			}
		}
	}
}

// 3) Remove image directories (public/img and root img)
for (const slug of IMG_SLUGS) {
	for (const base of [path.join(ROOT, 'public', 'img'), path.join(ROOT, 'img')]) {
		const dir = path.join(base, slug);
		const removed = rmrf(dir);
		if (removed) console.log(`removed ${path.relative(ROOT, dir)}`);
	}
}

// 4) Remove .next build artifacts (stale cache)
const nextServerApp = path.join(ROOT, '.next', 'server', 'app');
if (fs.existsSync(nextServerApp)) {
	const entries = fs.readdirSync(nextServerApp);
	for (const entry of entries) {
		const full = path.join(nextServerApp, entry);
		// match slugs directly
		if (SLUGS.includes(entry)) {
			rmrf(full);
			console.log(`removed .next/server/app/${entry}`);
			continue;
		}
		// match "<locale>/<slug>" directories and ".segments" variants
		if (!fs.statSync(full).isDirectory()) continue;
		for (const slug of SLUGS) {
			const child = path.join(full, slug);
			if (fs.existsSync(child)) {
				rmrf(child);
				console.log(`removed .next/server/app/${entry}/${slug}`);
			}
			const segments = path.join(full, `${slug}.segments`);
			if (fs.existsSync(segments)) {
				rmrf(segments);
				console.log(`removed .next/server/app/${entry}/${slug}.segments`);
			}
		}
	}
}

console.log('\nDone.');

#!/usr/bin/env node
/**
 * French manifest refresh — inflation namespace translator.
 *
 * Per-currency × 13 currencies + shared non-currency labels / stories /
 * sources / manifest-changed keys.
 *
 * Informal "tu/ton/tes" register throughout (the dominant register in
 * French Bitcoin education content — Cryptoast, Grand Angle Crypto,
 * StackinSat, Bitcoin en Français). Numeric format uses French
 * convention: space thousands separators + comma decimals, `%` with a
 * non-breaking space (`1,42 %`). Long-scale "billion" = 10^12 but
 * modern French finance writing uses "mille milliards" or, very
 * commonly, "billion" — we use "billions" so "10,82 billions $" reads
 * correctly (matches English "trillion").
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"fr.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
// `longName`         : used after "si tu épargnes en X" — plural form.
// `longNameSingDef`  : singular with definite article (used after "le X perd
//                      de la valeur") — e.g. "dollar américain" → "le dollar
//                      américain".
// `noun`/`nounPlural`: for "chaque X" / "plus de X".
// `label` / `existenceTitle` / `debtTitle` feed the stat-card labels.

const CURRENCY = {
	usd: {
		longName: "dollars américains",
		noun: "dollar",
		nounPlural: "dollars",
		label: "Dollar américain",
		existenceTitle: "Dollars américains en circulation",
		debtTitle: "Dette publique fédérale totale",
	},
	eur: {
		longName: "euros",
		noun: "euro",
		nounPlural: "euros",
		label: "Euro",
		existenceTitle: "Euros en circulation",
		debtTitle: "Dette publique de la zone euro",
	},
	aud: {
		longName: "dollars australiens",
		noun: "dollar australien",
		nounPlural: "dollars australiens",
		label: "Dollar australien",
		existenceTitle: "Dollars australiens en circulation",
		debtTitle: "Dette publique de l’Australie",
	},
	brl: {
		longName: "réals brésiliens",
		noun: "réal",
		nounPlural: "réals",
		label: "Réal brésilien",
		existenceTitle: "Réals en circulation",
		debtTitle: "Dette publique du Brésil",
	},
	cad: {
		longName: "dollars canadiens",
		noun: "dollar canadien",
		nounPlural: "dollars canadiens",
		label: "Dollar canadien",
		existenceTitle: "Dollars canadiens en circulation",
		debtTitle: "Dette publique du Canada",
	},
	gbp: {
		longName: "livres sterling",
		noun: "livre",
		nounPlural: "livres",
		label: "Livre sterling",
		existenceTitle: "Livres en circulation",
		debtTitle: "Dette publique du Royaume-Uni",
	},
	ils: {
		longName: "shekels israéliens",
		noun: "shekel",
		nounPlural: "shekels",
		label: "Shekel israélien",
		existenceTitle: "Shekels en circulation",
		debtTitle: "Dette publique d’Israël",
	},
	inr: {
		longName: "roupies indiennes",
		noun: "roupie",
		nounPlural: "roupies",
		label: "Roupie indienne",
		existenceTitle: "Roupies en circulation",
		debtTitle: "Dette publique de l’Inde",
	},
	jpy: {
		longName: "yens japonais",
		noun: "yen",
		nounPlural: "yens",
		label: "Yen japonais",
		existenceTitle: "Yens en circulation",
		debtTitle: "Dette publique du Japon",
	},
	mxn: {
		longName: "pesos mexicains",
		noun: "peso",
		nounPlural: "pesos",
		label: "Peso mexicain",
		existenceTitle: "Pesos mexicains en circulation",
		debtTitle: "Dette publique du Mexique",
	},
	nzd: {
		longName: "dollars néo-zélandais",
		noun: "dollar néo-zélandais",
		nounPlural: "dollars néo-zélandais",
		label: "Dollar néo-zélandais",
		existenceTitle: "Dollars néo-zélandais en circulation",
		debtTitle: "Dette publique de la Nouvelle-Zélande",
	},
	php: {
		longName: "pesos philippins",
		noun: "peso",
		nounPlural: "pesos",
		label: "Peso philippin",
		existenceTitle: "Pesos philippins en circulation",
		debtTitle: "Dette publique des Philippines",
	},
	thb: {
		longName: "bahts thaïlandais",
		noun: "baht",
		nounPlural: "bahts",
		label: "Baht thaïlandais",
		existenceTitle: "Bahts en circulation",
		debtTitle: "Dette publique de la Thaïlande",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Si tu épargnes en ${c.longName}, tu as sans doute remarqué que ton argent achète moins chaque année. Il te faut plus de ${c.nounPlural} pour acheter la même quantité de choses. Il te faut plus de ${c.nounPlural} pour maintenir ton niveau de vie.`;
		case "intro_2":
			return `Mais ce n’est pas une fatalité.`;
		case "intro_highlight":
			return `Au cours des quatre dernières années, celles et ceux qui épargnent en Bitcoin voient leur vie devenir moins chère.`;
		case "proof_h2":
			return `Voici la preuve : ton argent perd de la valeur`;
		case "proof_p1":
			return `Chaque ${c.noun} sur ton compte bancaire peut acheter moins chaque année. C’est parce qu’il n’existe aucune limite fixe au nombre de ${c.nounPlural} qui peuvent être créés.`;
		case "proof_p2":
			return `Cette offre illimitée est la cause première de l’inflation. Ces dernières années, la quantité de ${c.nounPlural} en circulation a augmenté de manière spectaculaire.`;
		case "proof_p3":
			return `Quand plus de monnaie est créée à partir de rien, les prix de tout augmentent. Cela inclut les matières premières que les entreprises achètent pour fabriquer leurs produits, ce qui se traduit par des prix plus élevés pour toi.`;
		case "proof_p4":
			return `À mesure que la dette publique continue d’augmenter, davantage de monnaie est imprimée parce que de moins en moins de personnes veulent prêter au gouvernement.`;
		case "proof_p5_before":
			return `Si tu ne peux pas emprunter d’argent, tu ne peux pas le dépenser. Mais quand le gouvernement`;
		case "proof_p5_link":
			return `ne peut pas emprunter`;
		case "proof_p5_after":
			return `, il imprime simplement davantage de monnaie.`;
		case "proof_p6":
			return `Plus de dette publique signifie plus de création monétaire. Plus de création monétaire signifie plus d’inflation. Et rien n’indique que cela va s’arrêter.`;
		case "btc_h2":
			return `Bitcoin n’a pas d’inflation`;
		case "btc_p1":
			return `L’inflation signifie que ton argent achète moins au fil du temps. Bitcoin est une meilleure monnaie parce qu’il n’a pas d’inflation.`;
		case "btc_p2_before":
			return `Les ${c.longName} ont une offre illimitée, ce qui signifie qu’on peut en imprimer davantage à tout moment.`;
		case "btc_p2_link":
			return `Bitcoin est rare`;
		case "btc_p2_after":
			return `, avec un plafond fixe de 21 millions de bitcoins. Personne ne peut en créer davantage.`;
		case "btc_p3":
			return `Historiquement, Bitcoin a gagné du pouvoir d’achat au fil du temps, alors que les ${c.longName} en ont perdu. Beaucoup de personnes utilisent Bitcoin comme compte d’épargne à long terme — de l’argent qu’elles laissent croître pendant des années sans y toucher.`;
		case "btc_p4":
			return `Préfères-tu épargner en ${c.longName}, qui achètent moins au fil du temps ? Ou en Bitcoin, qui historiquement achète plus au fil du temps ?`;
		case "freedom_h2":
			return `Bitcoin est aussi un outil de liberté`;
		case "freedom_p1":
			return `Personne ne contrôle le réseau Bitcoin. Aucun gouvernement ni entreprise ne le gère. Il est conçu pour protéger ta liberté et ton argent.`;
		case "freedom_p2":
			return `Partout dans le monde, des personnes utilisent déjà Bitcoin pour défendre leur liberté — même quand leurs gouvernements refusent de les aider ou tentent de les en empêcher.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Pouvoir d’achat perdu en 4 ans";
		case "stat_source_bpr":
			return "Source : Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "En savoir plus →",
	inflation_freedom_scarce_title: "Rare",
	inflation_freedom_scarce_desc:
		"Il n’y aura jamais plus de 21 millions de bitcoins. Personne ne peut en imprimer davantage.",
	inflation_freedom_decentralized_title: "Décentralisé",
	inflation_freedom_decentralized_desc:
		"Bitcoin n’est contrôlé par aucune entité — ni gouvernement, ni entreprise.",
	inflation_freedom_permissionless_title: "Sans permission",
	inflation_freedom_permissionless_desc:
		"N’importe qui, n’importe où, peut se connecter au réseau. Personne ne peut t’en empêcher.",
	inflation_freedom_sovereign_title: "Souverain",
	inflation_freedom_sovereign_desc:
		"Un système nouveau, indépendant des politiciens et de leurs promesses rompues.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 millions",
	inflation_stat_bitcoin_numeric: "(21 000 000)",
	inflation_stat_bitcoin_detail: "Fixé pour toujours",
	inflation_stat_bitcoin_source: "Source : livre blanc Bitcoin →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Aujourd’hui",
	inflation_stat_currency_counting: "et ça continue de grimper…",
	inflation_stat_currency_detail_4yr_lost:
		"Pouvoir d’achat perdu en 4 ans",
	inflation_stat_currency_source_cpi: "Source : FRED IPC →",
	inflation_stat_currency_source_debt: "Source : FRED dette publique →",
	inflation_stat_currency_source_m1: "Source : FRED masse monétaire M1 →",
	inflation_stat_currency_source_m1_short: "Source : FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Pouvoir d’achat gagné en 4 ans",
	inflation_stat_btc_source_bpr: "Source : Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"Des travailleurs ont retrouvé l’accès à leur argent grâce à Bitcoin, après que leurs comptes bancaires avaient été gelés.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Des manifestants ont utilisé Bitcoin pour financer leur mouvement, après que les banques avaient refusé de travailler avec eux.",
	inflation_story_pennsylvania_title: "Pennsylvanie",
	inflation_story_pennsylvania_desc:
		"Le minage de Bitcoin a nettoyé des déchets de charbon que le gouvernement refusait de traiter.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Le minage de Bitcoin a contribué à maintenir le réseau électrique en fonctionnement pendant une grande tempête.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — graphique de performance sur 4 ans (toutes les monnaies)",
	sources_bitcoin_source_code:
		"Code source de Bitcoin — le plafond d’offre de 21 millions",
	sources_canadian_trucker:
		"Manifestation des camionneurs canadiens — Bitcoin utilisé pour contourner des comptes bancaires gelés (YouTube)",
	sources_mempool_space:
		"Mempool.space — données sur l’offre et le minage de Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — comment Bitcoin alimente les manifestations EndSARS au Nigeria",
	sources_pennsylvania_mining:
		"Le minage de Bitcoin en Pennsylvanie récupère le méthane des déchets de charbon (YouTube)",
	sources_texas_mining:
		"Le minage de Bitcoin et le réseau électrique du Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin n’a pas d’inflation, mais ton argent, si.",
	inflation_choose: "Choisis ta monnaie et vois la preuve",
	inflation_choose_another: "← Choisir une autre monnaie",
	inflation_sticker_learn: "Découvre comment Bitcoin peut t’aider.",
	inflation_sticker_lets_find_out: "Allons le découvrir.",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}

		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		let m = e.key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = "stat_" + m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		m = e.key.match(/^inflation_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		unmatched.push(e.key);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-inflation (fr): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();

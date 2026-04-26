#!/usr/bin/env node
/**
 * Japanese (ja) manifest refresh — inflation namespace translator.
 *
 * Japanese conventions:
 * - Japanese script: kanji + hiragana + katakana for foreign words.
 * - "Bitcoin" rendered as "ビットコイン" in body copy; "Bitcoin" kept in
 *   Latin for brand prominence (e.g. labels, footers) — but for the
 *   inflation page educational copy, ビットコイン reads more naturally.
 * - Currency names use katakana (ドル, ユーロ, 円, ペソ, レアル, ルピー, etc.)
 *   plus the country (米ドル, 豪ドル, カナダドル, etc.).
 * - Numerals: Arabic numerals are standard for fintech / data-heavy
 *   copy. "21 million" → "2,100万" or "2100万" — bitcoin.rocks uses
 *   "2,100万" (matches the 万-based number system).
 * - Polite register (です/ます), educational but friendly tone.
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
	"ja.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
//  noun       = currency noun used in copy (米ドル, ユーロ, 円, …)
//  label      = stat card label (米ドル, ユーロ, 円, …) — same as noun for ja
//  existenceTitle  = "<currency> 流通量" / "発行済み<currency>"
//  debtTitle  = "<country> 政府の総債務"
// Japanese uses no plural forms; counters are positional. Templates
// embed the noun directly without "in".

const CURRENCY = {
	usd: {
		noun: "米ドル",
		label: "米ドル",
		country: "アメリカ",
		existenceTitle: "流通している米ドル",
		debtTitle: "アメリカ政府の総債務",
	},
	eur: {
		noun: "ユーロ",
		label: "ユーロ",
		country: "ユーロ圏",
		existenceTitle: "流通しているユーロ",
		debtTitle: "ユーロ圏政府の総債務",
	},
	aud: {
		noun: "豪ドル",
		label: "豪ドル",
		country: "オーストラリア",
		existenceTitle: "流通している豪ドル",
		debtTitle: "オーストラリア政府の総債務",
	},
	brl: {
		noun: "ブラジルレアル",
		label: "ブラジルレアル",
		country: "ブラジル",
		existenceTitle: "流通しているブラジルレアル",
		debtTitle: "ブラジル政府の総債務",
	},
	cad: {
		noun: "カナダドル",
		label: "カナダドル",
		country: "カナダ",
		existenceTitle: "流通しているカナダドル",
		debtTitle: "カナダ政府の総債務",
	},
	gbp: {
		noun: "英ポンド",
		label: "英ポンド",
		country: "イギリス",
		existenceTitle: "流通している英ポンド",
		debtTitle: "イギリス政府の総債務",
	},
	ils: {
		noun: "イスラエルシェケル",
		label: "イスラエルシェケル",
		country: "イスラエル",
		existenceTitle: "流通しているイスラエルシェケル",
		debtTitle: "イスラエル政府の総債務",
	},
	inr: {
		noun: "インドルピー",
		label: "インドルピー",
		country: "インド",
		existenceTitle: "流通しているインドルピー",
		debtTitle: "インド政府の総債務",
	},
	jpy: {
		noun: "日本円",
		label: "日本円",
		country: "日本",
		existenceTitle: "流通している日本円",
		debtTitle: "日本政府の総債務",
	},
	mxn: {
		noun: "メキシコペソ",
		label: "メキシコペソ",
		country: "メキシコ",
		existenceTitle: "流通しているメキシコペソ",
		debtTitle: "メキシコ政府の総債務",
	},
	nzd: {
		noun: "ニュージーランドドル",
		label: "ニュージーランドドル",
		country: "ニュージーランド",
		existenceTitle: "流通しているニュージーランドドル",
		debtTitle: "ニュージーランド政府の総債務",
	},
	php: {
		noun: "フィリピンペソ",
		label: "フィリピンペソ",
		country: "フィリピン",
		existenceTitle: "流通しているフィリピンペソ",
		debtTitle: "フィリピン政府の総債務",
	},
	thb: {
		noun: "タイバーツ",
		label: "タイバーツ",
		country: "タイ",
		existenceTitle: "流通しているタイバーツ",
		debtTitle: "タイ政府の総債務",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `${c.noun}で貯金している方なら、お金で買えるものが減っていることに気づいているかもしれません。同じものを買うのに、より多くの${c.noun}が必要になります。同じ生活水準を保つだけでも、より多くの${c.noun}が必要になるのです。`;
		case "intro_2":
			return `しかし、それが当たり前である必要はありません。`;
		case "intro_highlight":
			return `この4年間、ビットコインで貯金してきた人たちにとって、生活はむしろ安くなりました。`;
		case "proof_h2":
			return `その証拠：あなたのお金は価値を失い続けている`;
		case "proof_p1":
			return `銀行口座にある${c.noun}は、毎年その価値を失っていきます。これは、${c.noun}をいくら作れるかに上限がないからです。`;
		case "proof_p2":
			return `この無制限の供給こそが、インフレの主な原因です。ここ数年で、流通している${c.noun}の量は劇的に増加しました。`;
		case "proof_p3":
			return `お金が無から生み出されると、すべてが値上がりします。企業が製品を作るために購入する原材料も含まれ、それはあなたにとっての値上げを意味します。`;
		case "proof_p4":
			return `政府の債務が増えるにつれて、政府への融資に応じる人が減るため、政府はさらに多くのお金を刷ることになります。`;
		case "proof_p5_before":
			return `借金ができなければ、支出はできません。しかし政府が`;
		case "proof_p5_link":
			return `借りられないとき`;
		case "proof_p5_after":
			return `、政府はただお金を刷るのです。`;
		case "proof_p6":
			return `政府の債務が増えれば増えるほど、お金を刷る量も増えます。お金を刷れば刷るほど、インフレも進みます。そしてその先に終わりは見えません。`;
		case "btc_h2":
			return `ビットコインにはインフレがありません`;
		case "btc_p1":
			return `インフレとは、時間の経過とともにお金で買えるものが減っていくことです。ビットコインはインフレがないため、より優れたお金です。`;
		case "btc_p2_before":
			return `${c.label}は供給に上限がないため、いつでももっと刷ることができます。`;
		case "btc_p2_link":
			return `ビットコインは希少です`;
		case "btc_p2_after":
			return `。最大供給量は2,100万ビットコインだからです。誰もこれ以上ビットコインを刷ることはできません。`;
		case "btc_p3":
			return `歴史的に、ビットコインは時間とともに購買力を高めてきましたが、${c.label}は購買力を失ってきました。多くの人がビットコインを長期の貯蓄口座として使い、価値が育つ間、何年も手をつけずに置いておきます。`;
		case "btc_p4":
			return `あなたはどちらを選びますか？ ${c.noun}で貯金して、時間とともに買えるものが減っていく${c.noun}を持つか。それとも、歴史的に時間とともに買えるものが増えていくビットコインで貯金するか。`;
		case "freedom_h2":
			return `ビットコインは自由のためのツールでもあります`;
		case "freedom_p1":
			return `ビットコイン・ネットワークは誰のものでもありません。どの政府も企業もそれを支配していません。あなたの自由とお金を守るために設計されています。`;
		case "freedom_p2":
			return `今日、世界中の人々が、自分の政府が助けてくれない、あるいは止めようとするときでさえ、ビットコインを使って自由を守っています。`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "過去4年間で失われた購買力";
		case "stat_source_bpr":
			return "出典：Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "もっと詳しく →",
	inflation_freedom_scarce_title: "希少",
	inflation_freedom_scarce_desc:
		"ビットコインは2,100万を超えて存在することはありません。誰もそれ以上刷ることはできません。",
	inflation_freedom_decentralized_title: "分散型",
	inflation_freedom_decentralized_desc:
		"ビットコインを支配する組織はありません — 政府も、企業も。",
	inflation_freedom_permissionless_title: "許可不要",
	inflation_freedom_permissionless_desc:
		"誰でも、どこからでも、ネットワークに参加できます。誰もあなたを止めることはできません。",
	inflation_freedom_sovereign_title: "主権",
	inflation_freedom_sovereign_desc:
		"政治家とその破られた約束から独立した、新しいシステム。",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "ビットコイン",
	inflation_stat_bitcoin_value: "2,100万",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "永遠に固定",
	inflation_stat_bitcoin_source: "出典：ビットコイン・ホワイトペーパー →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "現在",
	inflation_stat_currency_counting: "そして増え続けています…",
	inflation_stat_currency_detail_4yr_lost:
		"過去4年間で失われた購買力",
	inflation_stat_currency_source_cpi: "出典：FRED 消費者物価指数 →",
	inflation_stat_currency_source_debt:
		"出典：FRED 政府債務 →",
	inflation_stat_currency_source_m1:
		"出典：FRED 狭義のマネーサプライ →",
	inflation_stat_currency_source_m1_short: "出典：FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr:
		"過去4年間で得られた購買力",
	inflation_stat_btc_source_bpr: "出典：Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "カナダ",
	inflation_story_canada_desc:
		"労働者たちは、銀行口座を凍結された後、ビットコインを使って自分のお金にアクセスしました。",
	inflation_story_nigeria_title: "ナイジェリア",
	inflation_story_nigeria_desc:
		"抗議者たちは、銀行に締め出された後、ビットコインを使って運動の資金を集めました。",
	inflation_story_pennsylvania_title: "ペンシルベニア州",
	inflation_story_pennsylvania_desc:
		"ビットコインのマイニングが、政府が処理を拒んだ石炭廃棄物を浄化しています。",
	inflation_story_texas_title: "テキサス州",
	inflation_story_texas_desc:
		"ビットコインのマイニングが、大型嵐の最中も電気を維持するのに役立ちました。",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4年間のパフォーマンスチャート（全通貨）",
	sources_bitcoin_source_code:
		"ビットコイン・ソースコード — 2,100万の供給上限",
	sources_canadian_trucker:
		"カナダのトラック運転手の抗議 — 凍結された銀行口座を回避するために使われたビットコイン（YouTube）",
	sources_mempool_space:
		"Mempool.space — ビットコインの供給とマイニングのデータ",
	sources_nigeria_endsars:
		"Quartz Africa — ビットコインがナイジェリアのEndSARS抗議をどう支えたか",
	sources_pennsylvania_mining:
		"ペンシルベニア州のビットコイン・マイニングがメタン廃棄物を再利用（YouTube）",
	sources_texas_mining:
		"テキサス州のビットコイン・マイニングと電力網（YouTube）",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"ビットコインにはインフレがありませんが、あなたのお金にはあります。",
	inflation_choose: "通貨を選んで証拠を見る",
	inflation_choose_another: "← 別の通貨を選ぶ",
	inflation_sticker_learn:
		"ビットコインがどう役立つかを学ぼう。",
	inflation_sticker_lets_find_out: "確かめてみましょう。",
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
		`translate-inflation (ja): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();

#!/usr/bin/env node
/**
 * Japanese (ja) manifest refresh — non-inflation namespaces, part 3.
 * Covers: business/* (accounting, wallets, why, faq, index, maps,
 * maps-success, sticker-success, sticker-language-success, stickers,
 * sticker-files/english/index).
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

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source":
		"Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source":
		"satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source":
		"bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result":
		"\u2212$10",
	"business/accounting::accounting_description":
		"ビットコインを帳簿で受け入れるためのわかりやすいガイド — ハイブリッド・ウォレット、取得原価、キャピタルゲイン、そして会計士に相談するタイミング。",
	"business/accounting::accounting_s1_c1":
		"ビットコインを受け入れる最もシンプルな方法は、決済が入ったその瞬間に受け取ったビットコインの 100% を自動的にドル（または現地通貨）に売却するハイブリッド・ウォレットを使うことです。",
	"business/accounting::accounting_s1_c2":
		"この設定なら、帳簿は今日と全く同じように見えます — 最終的な数字は毎回ドルです。取得原価も、キャピタルゲインも、新しいスプレッドシートも必要ありません。",
	"business/accounting::accounting_s2":
		"一部のビットコインを保持する場合：取得原価の追跡",
	"business/accounting::accounting_s2_c1":
		"一部のビジネスは、すべてを自動変換する代わりに、受け取ったビットコインの一部を保持することを選びます。あなたがそうなら、追加で必要な主なステップは取得原価の追跡です — 受け取った日のビットコイン決済のドル価値です。",
	"business/accounting::accounting_s2_c2":
		"ビジネスを完全にビットコインで考えていても、ほとんどの税務当局は依然としてドル価値の報告を求めます。良いニュース：取引ごとにたった 2 つの数字 — 受け取ったビットコインの量とその日のドル価値だけです。",
	"business/accounting::accounting_s2_c3":
		"以下のツールを使って検索を自動化し、毎日価格を確認する必要をなくしましょう。",
	"business/accounting::accounting_s3":
		"保持していたビットコインの使用または売却",
	"business/accounting::accounting_s3_c1":
		"すべての決済を自動的にドルに変換しているなら、このセクションは飛ばしてください — あなたには適用されません。",
	"business/accounting::accounting_s3_c2":
		"一部のビットコインを保持し、後で使用または売却することにした場合、売却価格を同じ取得原価のスプレッドシートに追加してください。受け取ったときのビットコインの価値と使用または売却したときの価値の差がキャピタルゲインまたはロスです。",
	"business/accounting::accounting_s3_c3": "簡単な 2 つの例：",
	"business/accounting::accounting_s4":
		"ビットコインに精通したプロが必要ですか？",
	"business/accounting::accounting_s4_c1":
		"これを任せたい場合 — または、あなたのビットコイン会計がハイブリッド・ウォレットで処理できるよりも複雑な場合 — ビジネス向けビットコイン会計を専門とする Satoshi Pacioli Accounting Services を強くお勧めします。",
	"business/accounting::bitcoin_business_accounting_guide":
		"ビジネス向けビットコイン会計",
	"business/accounting::accounting_card_bpr_label":
		"ビットコイン価格",
	"business/accounting::accounting_card_bpr_title":
		"ビットコインの現在または過去のドル価格を調べる",
	"business/accounting::accounting_card_pacioli_label":
		"ビットコイン会計士",
	"business/accounting::accounting_card_spreadsheet_label":
		"EXCEL インポート",
	"business/accounting::accounting_card_spreadsheet_title":
		"ビットコイン価格を Excel に自動的に取り込む",
	"business/accounting::accounting_card_wallets_label":
		"ハイブリッド・ウォレット",
	"business/accounting::accounting_card_wallets_title":
		"おすすめのビジネス・ウォレットを見る",
	"business/accounting::accounting_disclaimer":
		"このガイドは情報提供のみを目的とし、税務アドバイスとは見なされません。あなたの状況に固有の税務アドバイスについては、資格のある会計士にご相談ください。",
	"business/accounting::accounting_disclaimer_label":
		"ご注意ください",
	"business/accounting::accounting_example_feb_1": "2 月 1 日",
	"business/accounting::accounting_example_gain_badge":
		"キャピタルゲイン",
	"business/accounting::accounting_example_gain_explain":
		"$10 のキャピタルゲインを記録します。",
	"business/accounting::accounting_example_jan_1": "1 月 1 日",
	"business/accounting::accounting_example_loss_badge":
		"キャピタルロス",
	"business/accounting::accounting_example_loss_explain":
		"$10 のキャピタルロスを記録します。",
	"business/accounting::accounting_example_received_label":
		"受領",
	"business/accounting::accounting_example_sold_label":
		"売却または使用",
	"business/accounting::accounting_hero_subtitle":
		"あなたのビジネスでビットコインを受け入れることが、会計を複雑にする必要はありません。短いバージョンと、痛みなく行うためのツールとプロをご紹介します。",
	"business/accounting::accounting_intro_c1":
		"すでに現金やカードを受け入れているなら、ビットコインをビジネスの帳簿に追加するのは見た目より簡単です。2 つの道があります：到着したらすべてのビットコイン決済を自動的にドルに変換する（新しい会計は不要）、または一部をビットコインのまま保持する（追跡する数字が少し増えます）。",
	"business/accounting::accounting_intro_c2":
		"このガイドでは両方を案内します — あなたのビジネスに合うものを選び、自信を持ってビットコインの受け入れを始められます。",
	"business/accounting::accounting_s1":
		"簡単な道：自動的にドルに変換する",
	"business/accounting::accounting_s3_c6":
		"以上です。基本的な計算は、他の評価益や評価損を生む資産の会計処理と全く同じです。",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — ビットコインの現在および過去のドル価格",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — ビジネス向けビットコイン会計",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — 暗号通貨価格を Excel にインポート",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"すべてのビットコイン・ウォレットは相互運用可能です — あなたのビジネスに合うものを選びましょう。無料、即時決済、チャージバックなし。",
	"business/wallets::sources_breez_business":
		"Breez — ビットコイン専用 Lightning ウォレット",
	"business/wallets::sources_ibex":
		"IBEX — Lightning 決済インフラ",
	"business/wallets::sources_opennode":
		"OpenNode — ビットコイン決済処理",
	"business/wallets::sources_square":
		"Square — ビットコイン決済を受け入れる",
	"business/wallets::sources_zaprite":
		"Zaprite — ビジネス向けビットコイン請求書発行",
	"business/wallets::wallets_hero_subtitle":
		"ビットコイン・ウォレットは無料です。あなたのビジネスに合うものを選び — 対面、オンライン、または請求書ベース — 数分でビットコインの受け入れを始めましょう。",
	"business/wallets::wallets_section_invoice":
		"請求書ベースのビジネス向けウォレット",
	"business/wallets::wallets_section_invoice_intro":
		"クライアントに請求書を発行する場合（コンサルティング、フリーランス、B2B サービス）、請求書発行を中心に作られたウォレットを使いましょう。クライアントは数クリックでビットコイン請求書を支払えます。",
	"business/wallets::wallets_section_multiple":
		"複数の従業員がいるビジネス向けウォレット",
	"business/wallets::wallets_section_multiple_intro":
		"レジで決済を受けるチームがいる場合、複数の従業員ログインをサポートするウォレットを選びましょう — そうすればすべての従業員が独自の PIN を持ち、誰がどの決済を受けたかの監査証跡をクリーンに保てます。",
	"business/wallets::wallets_section_online":
		"オンライン・ビジネス向けウォレット",
	"business/wallets::wallets_section_online_intro":
		"ウェブサイトで販売していますか？これらのウォレットはオンラインストアに接続し、世界中どこからでも顧客からビットコインを受け入れられます — チャージバックなし、加盟店アカウント不要。",
	"business/wallets::wallets_section_sole":
		"個人経営のビジネス向けウォレット",
	"business/wallets::wallets_section_sole_intro":
		"自分で店舗、カフェ、スタジオ、サービスを運営しているなら、これらのウォレットのどれでも機能します。決済をビットコインで保持したいか、各決済の一部を現地通貨に自動変換したいかで選びましょう。",
	"business/wallets::wallets_strike_note":
		"Strike Business なら、手数料ゼロで即時決済のビットコインと Lightning 決済を受け入れられます。対面、オンライン、請求書ベースの決済をサポートし、現地通貨へのオプションの自動変換も可能です。",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"英語のステッカー・ファイルをダウンロードして、自分の「ビットコインで支払えます」ステッカーを印刷しましょう。",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"自分の英語版「ビットコインで支払えます」ステッカーを印刷して、顧客にビットコインを受け入れていることを知らせましょう。",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"英語の「ビットコインで支払えます」ステッカー・ファイルをダウンロード",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"ビットコインがここで使えます",
	"business/why::why_good_for_you":
		"ビットコインはあなたにも素晴らしい",
	"business/why::why_learn_more_lowercase": "もっと詳しく →",
	"business/why::why_s1_c1":
		"インフレは、お金がより多く印刷されたり何もないところから作られたりすると起こります。これにより、あなたのポケットの中のお金は時間とともに価値を失います — そしてそれが、価格が毎年上がり続ける理由です。",
	"business/why::why_s1_c2":
		"ビットコインには 2,100 万コインの固定供給があります。どの政府、銀行、企業もそれ以上印刷することはできません。あなたのビットコイン貯金は静かに価値を失う代わりに、時間を超えて価値を保持します。",
	"business/why::why_s2_c1":
		"ここ数年、米国の複数の銀行が取り付け騒ぎで破綻しました。あまりにも多くの顧客が一度に引き出そうとしたとき、銀行はみんなに払い戻すための現金を持っていませんでした。",
	"business/why::why_s2_c2":
		"あなたのお金をただ保管する代わりに、銀行はその大部分を貸し出して投資します。それらの投資が悪くなる、または預金者が信頼を失うと、銀行は破綻し、あなたの預金は凍結されたり失われたりします。",
	"business/why::why_s2_c3":
		"ビットコインなら、自分のお金を自分のウォレットに直接保持できます。銀行なし。仲介者なし。取り付け騒ぎなし。",
	"business/why::why_s3_c1":
		"クレジットカード、PayPal、または従来の銀行口座と違い、ビットコインを使うのに誰の許可も必要ありません。",
	"business/why::why_s3_c2":
		"誰もあなたの口座を凍結したり、決済をブロックしたり、ネットワークから切断したりすることはできません。これは検閲や没収を恐れることなく自由に使える、歴史上初めての金融システムです。",
	"business/why::why_s4_c1":
		"ビットコインはしばしば誤解されますが、世界で多くの良いことを静かに行っています。",
	"business/why::why_s4_c2":
		"人権活動家が自由のために戦うのを助け、埋立地や油田からの世界のメタン排出を削減し、電力網を安定化させ、国立公園のような公共財に資金を提供しています。",
	"business/why::why_biz_s1": "より低い手数料、ビジネスにより多く",
	"business/why::why_biz_s1_c1":
		"ビットコイン決済は、すべての売上から 2〜3% を取る銀行とクレジットカード会社をスキップします。ビジネスはあなたが支払うものをより多く保持できます — それはしばしばあなたにとってのより良い価格とより良いサービスを意味します。",
	"business/why::why_biz_s2": "即時決済、チャージバックなし",
	"business/why::why_biz_s2_c1":
		"ビットコイン決済は、あなたのウォレットからビジネスへ直接、数秒で決済されます。銀行が資金を解放するのを何日も待つこともなく、コストのかかるチャージバック紛争もありません — ビジネスは詐欺と戦う代わりに顧客にサービスを提供することに集中できます。",
	"business/why::why_biz_s3":
		"無料で受け入れられ、誰にでも開かれている",
	"business/why::why_biz_s3_c1":
		"ビジネスがビットコインを受け入れるための契約、月額料金、初期費用はありません。そして世界中の何百万人ものビットコイン・ユーザーが、それを受け入れる加盟店を積極的に探しています — このビジネスに新しい顧客への無料の露出を提供します。",
	"business/why::why_business_cta_intro":
		"ビジネスを運営していて、ビットコインの受け入れを始めたいですか？",
	"business/why::why_business_cta_link":
		"仕組みを見る →",
	"business/why::why_for_business":
		"ビットコインがこのビジネスに素晴らしい理由",
	"business/why::why_for_business_intro":
		"ビットコインを受け入れることで、ビジネスはすべての売上をより多く保持し、チャージバックなしで即時に支払いを受け、世界中のビットコイン・ユーザーにリーチできます — 契約ゼロ、月額料金ゼロ。",
	"business/why::why_good_for_you_intro":
		"ビットコインはレジで役立つだけではありません — それは貯金、プライバシー、取引の自由を守る、より優れた形のお金です。簡単な概要をご紹介します。",
	"business/why::why_hero_subtitle":
		"あなたは「ビットコインで支払えます」のステッカーをスキャンしました。それが素晴らしいニュースである理由をご紹介します — このビジネスにとっても、あなたにとっても。",
	"business/why::why_intro_c1":
		"あなたがいるビジネスはビットコインを受け入れています — モダンでオープンソースの決済ネットワークで、銀行や仲介者が手数料を取ることなく、世界中どこでも誰でも使えます。",
	"business/why::why_intro_c2":
		"以下は、なぜビットコインを受け入れることがこのビジネスにとって良いか、そして顧客であるあなたにとってビットコインを使うことが良い理由の短いバージョンです。",
	"business/why::why_next_business_label":
		"ビットコインを受け入れる",
	"business/why::why_next_business_title":
		"あなたのビジネスでビットコインを受け入れる",
	"business/why::why_next_buy_label": "ビットコインを買う",
	"business/why::why_next_buy_title":
		"最初のビットコインを買う",
	"business/why::why_next_learn_label": "もっと学ぶ",
	"business/why::why_next_learn_title":
		"ビットコインについてもっと学ぶ",
	"business/why::why_next_wallet_label":
		"ウォレットを手に入れる",
	"business/why::why_next_wallet_title":
		"自分のビットコイン・ウォレットを手に入れる",
	"business/why::why_whats_next_heading": "次はどこへ？",
	"business/why::why_whats_next_intro":
		"これがビットコイン・ステッカーの初めてのスキャンなら、ここから行くのに最も役立つ場所をご紹介します。",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"加盟店がビットコインの受け入れを始める前に最もよく尋ねる質問への短い回答 — 手数料、決済、ウォレット、チャージバック、コストなど。",
	"business/faq::faq_intro_c1":
		"以下の質問をタップすると回答が展開されます。ビットコインの受け入れを始める準備ができたら、ページ下部のビジネス向けリソースが各ステップを案内します。",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "会計",
	"business/index::biz_label_faq": "よくある質問",
	"business/index::biz_label_maps": "加盟店マップ",
	"business/index::biz_label_rewards": "報酬",
	"business/index::biz_label_stickers": "ステッカー",
	"business/index::biz_label_wallets": "ウォレット",
	"business/index::biz_meta_description":
		"あなたのビジネスでビットコインを受け入れて、より低い手数料、即時決済、チャージバックなし、より多くの顧客を得ましょう。",
	"business/index::business_hero_subtitle":
		"より低い手数料で決済を受け、即時に支払いを受け、何百万人もの新しい顧客にリーチしましょう — 契約ゼロ、隠れたコストゼロ。",
	"business/index::business_intro_c1":
		"ビットコインは、あなたのビジネスにより速く、より安く、よりプライベートな支払い方法を与えます。仲介者なし。チャージバックなし。契約なし。ただ顧客からあなたへ直接、数秒で決済されるお金です。",
	"business/index::business_intro_c2":
		"以下は、なぜビットコインがビジネスに良いかの短いバージョンです — そしてその下には、今日それを受け入れ始めるために必要なすべてのリソースがあります。",
	"business/index::business_resources_heading":
		"ビットコインを受け入れるために必要なすべて",
	"business/index::business_resources_intro":
		"これらのリソースを自分のペースで進めてください。それぞれが短く実用的なガイドです。",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"あなたのビジネスについて教えてください",
	"business/maps::biz_maps_form_intro":
		"掲載に必要なのは少しの詳細だけです。住所データはマップにビジネスを送信するのに必要な期間だけ保存されます。",
	"business/maps::biz_maps_hero_subtitle":
		"BTC Map — ビットコイン受け入れ加盟店のオープンな世界ディレクトリ — にあなたのビジネスを無料で掲載し、近くのビットコイン・ユーザーがあなたを見つけ、あなたのビジネスでビットコインを使えるようにしましょう。",
	"business/maps::biz_maps_hero_title":
		"あなたのビジネスをビットコイン加盟店マップに載せる",
	"business/maps::biz_maps_intro_c1":
		"ビットコイン・ユーザーは積極的に支出する場所を探しています。マップにあなたのビジネスを載せると、近くで食事、買い物、宿泊する場所を探しているすべてのビットコイン・ユーザーの目の前に置かれます — 完全に無料で。",
	"business/maps::biz_maps_intro_c2":
		"以下の短いフォームに記入していただければ、私たちがあなたのビジネスを BTC Map と他のビットコイン加盟店マップに送信します。",
	"business/maps::biz_maps_meta_description":
		"BTC Map と他のビットコイン加盟店マップにあなたのビジネスを無料で掲載し、近くのビットコイン・ユーザーがあなたを見つけられるようにしましょう。",
	"business/maps::biz_maps_placeholder_address": "番地",
	"business/maps::biz_maps_placeholder_category":
		"カテゴリー（例：レストラン、カフェ、ホテル）",
	"business/maps::biz_maps_placeholder_city": "市",
	"business/maps::biz_maps_placeholder_country": "国",
	"business/maps::biz_maps_placeholder_name": "ビジネス名",
	"business/maps::biz_maps_placeholder_region":
		"州／省／地域",
	"business/maps::biz_maps_placeholder_website":
		"ウェブサイト（任意）",
	"business/maps::biz_maps_view_map_cta": "BTC Map を見る",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map":
		"BTC Map を見る",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"ビジネスを送信していただきありがとうございます。まもなくビットコイン加盟店マップに掲載いたします。",
	"business/maps-success::biz_maps_success_hero_title":
		"リクエストを受け付けました 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"あなたのビジネスは 1〜2 週間以内に BTC Map と他のビットコイン加盟店ディレクトリに掲載されます。マップを正確に保つため、すべての送信を手作業で確認しています。",
	"business/maps-success::biz_maps_success_timeline_c2":
		"掲載が公開されると、近くのビットコイン・ユーザーがあなたのビジネスを見つけて、そこでビットコインを使えるようになります。",
	"business/maps-success::biz_maps_success_timeline_header":
		"次に何が起こるか",
	"business/maps-success::biz_maps_success_view_c1":
		"待っている間に、世界中で成長するビットコイン受け入れビジネスのネットワークを見るには BTC Map をご覧ください。",
	"business/maps-success::biz_maps_success_view_header":
		"あなたが表示される場所を見る",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"あなたの言語の「ビットコインで支払えます」ステッカー・ファイルをリクエストしていただきありがとうございます。",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"リクエストを受け付けました 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"3〜4 週間以内にステッカー・ファイルを作成して公開します。準備ができ次第、私たちのステッカー・ファイル・ページから無料でダウンロードして印刷できるようになります。",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"ステッカー・ファイルはバッチでリリースされるため、あなたの言語が公開されるまで数週間かかる場合があります。お待ちいただきありがとうございます！",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"次に何が起こるか",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"大量注文する",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"別の無料パックをリクエストする",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"無料の「ビットコインで支払えます」ステッカーは、3 枚のステッカーが入った無地の白い封筒で 2〜4 週間で届きます。",
	"business/sticker-success::biz_sticker_success_hero_title":
		"ステッカーを発送しました 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"3 枚のステッカーがあなたのビジネスに足りない場合は、別の無料パックをリクエストするか、私たちが使っているのと同じ印刷会社で大量注文してください。",
	"business/sticker-success::biz_sticker_success_more_header":
		"もっとステッカーが必要ですか？",
	"business/sticker-success::biz_sticker_success_tip_1":
		"顧客が入店する前に見られるよう、玄関や窓に",
	"business/sticker-success::biz_sticker_success_tip_2":
		"レジ、POS 端末、または決済エリアの近くに",
	"business/sticker-success::biz_sticker_success_tip_3":
		"メニュー、価格表、またはチップの瓶に",
	"business/sticker-success::biz_sticker_success_tip_4":
		"所有していない、または貼る許可のない場所には貼らない",
	"business/sticker-success::biz_sticker_success_tips_header":
		"ステッカーを貼るのに良い場所",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"顧客にビットコインを受け入れていることを知らせましょう。あなたのビジネスに貼るための「ビットコインで支払えます」ステッカーの無料パックを注文してください。",
	"business/stickers::biz_stickers_hero_title":
		"無料の「ビットコインで支払えます」ステッカー",
	"business/stickers::biz_stickers_intro_c1":
		"ビットコインを受け入れるのは仕事の半分にすぎません — 顧客もそれを知る必要があります。これらの小さな「ビットコインで支払えます」ステッカーは、玄関、レジ、メニュー、または顧客が支払う前に見るその他の場所に貼るようデザインされています。",
	"business/stickers::biz_stickers_intro_c2":
		"米国またはカナダ国内のどこにでも無料パックを郵送します。または、世界中どこでも自分で印刷できます。",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 カナダ — 郵送無料",
	"business/stickers::biz_stickers_option_print":
		"🌍 グローバル — 自分で印刷",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 米国 — 郵送無料",
	"business/stickers::biz_stickers_placeholder_translation1":
		"「Bitcoin Accepted Here」の翻訳",
	"business/stickers::biz_stickers_placeholder_translation2":
		"「Scan to learn why Bitcoin is good for business.」の翻訳",
	"business/stickers::biz_stickers_print_c1":
		"どこに住んでいても、自分で「ビットコインで支払えます」ステッカーを印刷できます。下の言語をクリックすると、ステッカー・ファイルと印刷の説明をダウンロードできます。",
	"business/stickers::biz_stickers_print_header":
		"自分でステッカー・ファイルを印刷する",
	"business/stickers::biz_stickers_request_c1":
		"あなたの母国語の「ビットコインで支払えます」ステッカー・ファイルをリクエストするには、下のフォームに記入してください。準備ができ次第お知らせします。",
	"business/stickers::biz_stickers_request_header":
		"あなたの言語が見当たりませんか？",
	"business/stickers::biz_stickers_step_description":
		"米国とカナダの住所には無料パックを発送します。世界中の他の場所では、自分で印刷できます。",
	"business/stickers::biz_stickers_step_header":
		"ステッカーをどう受け取りますか？",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part3 (ja): filled ${filled}, already-done ${skipped}`,
	);
}

main();

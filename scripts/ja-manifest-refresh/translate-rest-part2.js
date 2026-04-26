#!/usr/bin/env node
/**
 * Japanese (ja) manifest refresh — non-inflation namespaces, part 2.
 * Covers: common, index, get-involved, nostr/index, flyers, wallets,
 * lightning, buy, compound-inflation-calculator, stickers,
 * sticker-success, sticker-language-success, sticker-files/index.
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

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "言語を追加",
	"common::common_next_buy_bitcoin": "ビットコインを買う",
	"common::common_next_buy_bitcoin_desc":
		"安全にビットコインを買う方法を学ぶ",
	"common::common_next_calculate": "あなたのインフレを計算する",
	"common::common_next_calculate_desc":
		"インフレが時間とともにあなたの給与にどう影響するかを見る",
	"common::common_next_get_wallet": "ウォレットを手に入れる",
	"common::common_next_get_wallet_desc":
		"最初のビットコイン・ウォレットを手に入れる — 無料です",
	"common::common_next_keep_learning": "学び続ける",
	"common::common_next_keep_learning_desc":
		"ビットコインがどう世界を改善しているかを見る",
	"common::common_source_bls_cpi":
		"米国労働統計局 — 消費者物価指数（CPI）",
	"common::common_source_fred_money_supply_index":
		"米連邦準備経済データ（FRED） — マネーサプライ（カテゴリインデックス）",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — \u201CCan a Treasury Auction Fail?\u201D",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "次は？",
	"common::common_sticker_files_mission_5": "パックをリクエスト",
	"common::common_site_tagline":
		"すべての人のためのビットコイン教育。",
	"common::common_source_btc_map":
		"BTC Map — ビットコイン受け入れ加盟店の世界ディレクトリ",
	"common::common_source_btcpayserver":
		"BTCPay Server — 無料・オープンソース・自己ホスト型ビットコイン決済処理",
	"common::common_source_oshi":
		"Oshi — 加盟店向けビットコイン報酬プラットフォーム",
	"common::common_source_strike_business":
		"Strike — ビジネス向けビットコイン＆Lightning 決済",
	"common::common_sources_group_bitcoin": "ビットコインのデータ",
	"common::common_sources_group_cpi": "インフレ／消費者物価指数",
	"common::common_sources_group_debt": "政府債務",
	"common::common_sources_group_money": "マネーサプライ・データ",
	"common::common_sources_group_stories": "実世界の例",
	"common::common_sticker_files_mission_6":
		"の英語ステッカーを無料で。",
	"common::common_sticker_files_next_flyers_label": "チラシ",
	"common::common_sticker_files_next_flyers_title":
		"ビットコイン・チラシを印刷する",
	"common::common_sticker_files_next_languages_label":
		"ステッカー・ファイル",
	"common::common_sticker_files_next_languages_title":
		"他の言語のステッカー・ファイルを見る",
	"common::common_sticker_files_print_these":
		"ワンクリックで印刷",
	"common::common_sticker_name_bdhi_black":
		"\u300CBitcoin Doesn't Have Inflation\u300D ステッカー（黒）",
	"common::common_sticker_name_bdhi_orange":
		"\u300CBitcoin Doesn't Have Inflation\u300D ステッカー（オレンジ）",
	"common::common_sticker_name_caution":
		"\u300CCaution! Melting Ice Cube\u300D ビットコイン・ステッカー",
	"common::common_sticker_name_cure_inflation":
		"\u300CCure Inflation\u300D ビットコイン・ステッカー",
	"common::common_sticker_name_danger":
		"\u300CDanger! Inflation Ahead\u300D ビットコイン・ステッカー",
	"common::common_sticker_name_fix":
		"\u300CFix The Money, Fix The World\u300D ビットコイン・ステッカー",
	"common::common_sticker_name_got_inflation":
		"\u300CGot Inflation?\u300D ビットコイン・ステッカー",
	"common::common_sticker_name_study":
		"\u300CStudy Bitcoin\u300D ステッカー",
	"common::common_sticker_name_warning":
		"\u300CWarning! Inflation is Stealing Your Savings\u300D ビットコイン・ステッカー",
	"common::common_sticker_name_what_if":
		"\u300CWhat if your money didn't have inflation?\u300D ビットコイン・ステッカー",
	"common::common_sticker_tips_heading": "ステッカーのコツ",
	"common::common_sticker_tips_intro":
		"ステッカーを印刷したら、見られる場所に貼りましょう！良い場所は：",
	"common::common_sticker_tips_list_1":
		"人目につく公共の場所",
	"common::common_sticker_tips_list_2":
		"すぐに剥がされそうにない場所（ステッカーは恒久的なダメージは与えません）",
	"common::common_sticker_tips_list_3":
		"簡単に貼り付く表面（金属、プラスチック、ガラス）",
	"common::common_sticker_tips_list_4":
		"私有地、看板、ATM、ガソリンポンプの上には貼らない",
	"common::common_stickers_printer_prefix": "私たちは",
	"common::common_stickers_printer_suffix":
		"を使っていますが、どのステッカー会社でも構いません。",
});

/* ─────────────── index (homepage) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "貯金する",
	"index::home_card_label_art_1": "比較してみよう",
	"index::home_card_label_art_2": "広めよう",
	"index::home_card_label_art_3": "ストリート・アート",
	"index::home_card_label_bank_runs": "完全準備制",
	"index::home_card_label_bonds": "比較してみよう",
	"index::home_card_label_business_1": "違いは何か？",
	"index::home_card_label_business_2": "ビットコイン決済を受け入れる",
	"index::home_card_label_cash": "比較してみよう",
	"index::home_card_label_cbdc": "オープン？クローズ？",
	"index::home_card_label_coding_1": "インタラクティブなチュートリアル",
	"index::home_card_label_coding_2": "ハードウェアを作る",
	"index::home_card_label_coding_3": "コーディング・パズル",
	"index::home_card_label_crowdfunding_1": "EndSARS 抗議",
	"index::home_card_label_crowdfunding_2": "止められないお金",
	"index::home_card_label_crowdfunding_3":
		"あなたのプロジェクトに資金を",
	"index::home_card_label_crypto": "違いは何か？",
	"index::home_card_label_energy_1": "電力網の安定化",
	"index::home_card_label_energy_4": "デマンドレスポンス",
	"index::home_card_label_energy_5": "農村電化",
	"index::home_card_label_energy_6": "再生可能エネルギーへのインセンティブ",
	"index::home_card_label_environment_1": "メタン削減",
	"index::home_card_label_environment_2": "国立公園を救った",
	"index::home_card_label_environment_3":
		"最も環境に優しい産業",
	"index::home_card_label_environment_4": "フレアガスの削減",
	"index::home_card_label_equality_1": "希望と機会",
	"index::home_card_label_equality_2": "ゲームチェンジャー",
	"index::home_card_label_food_1": "食料価格",
	"index::home_card_label_food_2": "農場と土壌",
	"index::home_card_label_freedom_1": "権威主義体制",
	"index::home_card_label_freedom_2": "唯一無二のツール",
	"index::home_card_label_get_started_1": "初心者向け基礎",
	"index::home_card_label_get_started_2": "最初のウォレット",
	"index::home_card_label_get_started_3": "ビットコインを買う",
	"index::home_card_label_gold": "どちらが優れている？",
	"index::home_card_label_housing_1": "手頃な住宅",
	"index::home_card_label_human_rights_1": "人権の擁護",
	"index::home_card_label_human_rights_2": "草の根の普及",
	"index::home_card_label_human_rights_3": "グローバルな影響",
	"index::home_card_label_inflation":
		"ビットコインはより優れたお金",
	"index::home_card_label_networks_1": "ネットワークのライブビュー",
	"index::home_card_label_networks_2": "比較してみよう",
	"index::home_card_label_payments_1": "違いは何か？",
	"index::home_card_label_payments_2": "速くて安い決済",
	"index::home_card_label_payments_3": "送金",
	"index::home_card_label_payments_4": "決済を受ける",
	"index::home_card_label_politics_1": "政治のパラドックス",
	"index::home_card_label_politics_2": "行動を起こそう",
	"index::home_card_label_property_rights_1": "比較してみよう",
	"index::home_card_label_property_rights_2": "真の所有権",
	"index::home_card_label_salary": "あなたの給与を守る",
	"index::home_card_label_self_custody_1":
		"ビットコイン・ウォレット・ガイド",
	"index::home_card_label_self_custody_2":
		"最も重要なステップ",
	"index::home_card_label_self_custody_3": "主権のあるお金",
	"index::home_card_label_war_1": "終わりなき戦争を終わらせる",
	"index::home_card_label_war_2": "退役軍人を支援する",
	"index::home_card_label_war_3": "戦時の脱出",
	"index::home_h1":
		"ビットコインは、より良い世界を築くための、より優れたお金です。",
	"index::home_nav_about": "サイト紹介",
	"index::home_nav_get_involved": "参加する",
	"index::home_nav_learn": "学ぶ",
	"index::home_source_prefix": "出典：",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"参加してビットコインを広めよう",
	"get-involved::get_involved_business_content_1":
		"ビットコインの循環経済の構築に協力したいですか？最も簡単な方法は、地元のビジネスがビットコイン決済を受け入れ始めるのを助けることです。",
	"get-involved::get_involved_business_content_2":
		"受け入れに前向きそうなビジネスを知っていますか？オーナーを私たちの",
	"get-involved::get_involved_business_content_3":
		"ビットコイン・ビジネス・ページにご案内ください。",
	"get-involved::get_involved_description":
		"私たちの無料リソースは、ビットコインの普及を広めることを容易にします。ステッカー、チラシ、ビジネス向け「ビットコインで支払えます」ステッカー、そして誰でも貢献できるオープンソースのコードベース。",
	"get-involved::get_involved_header":
		"参加してビットコインを広めよう。",
	"get-involved::get_involved_intro_5":
		"あなたはそれを変える手助けができます。ビットコインがもたらす希望を周りの人に広めるための無料リソースをいくつか用意しました。",
	"get-involved::get_involved_biz_stickers_note":
		"すでにビットコインを受け入れていますか？無料の「ビットコインで支払えます」ステッカーで顧客に知らせましょう。米国またはカナダのどの住所にもパックを発送します。または、世界中どこでも自分で印刷できます。",
	"get-involved::get_involved_card_biz_stickers_label":
		"「ここで使えます」ステッカー",
	"get-involved::get_involved_card_biz_stickers_source":
		"出典：bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"あなたのビジネス用の無料「ビットコインで支払えます」ステッカー",
	"get-involved::get_involved_card_business_label":
		"ビジネス向けビットコイン",
	"get-involved::get_involved_card_business_source":
		"出典：bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"ビジネスがビットコイン決済を始めるために必要なすべて",
	"get-involved::get_involved_card_flyers_label": "印刷可能なチラシ",
	"get-involved::get_involved_card_flyers_source":
		"出典：bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"無料のビットコイン・チラシをダウンロードして印刷",
	"get-involved::get_involved_card_github_label": "オープンソース",
	"get-involved::get_involved_card_github_source":
		"出典：GitHub →",
	"get-involved::get_involved_card_github_title":
		"GitHub で bitcoin.rocks に貢献する",
	"get-involved::get_involved_card_stickers_label":
		"無料ステッカー",
	"get-involved::get_involved_card_stickers_source":
		"出典：bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"無料のビットコイン・ステッカーパックを自宅にお届け",
	"get-involved::get_involved_flyers_content_1":
		"チラシは、ビットコインをコミュニティに紹介する最も簡単な方法の 1 つです。無料の印刷可能なビットコイン・チラシをダウンロードし、好きなだけコピーを印刷して、コミュニティの掲示板、コーヒーショップ、ミートアップ、その他人が集まる場所に貼りましょう。",
	"get-involved::get_involved_flyers_content_2":
		"各チラシには魅力的な見出しと、好奇心のある読者を bitcoin.rocks に誘導して詳しく学んでもらう QR コードが含まれています。",
	"get-involved::get_involved_flyers_content_3":
		"ステッカーと違い、チラシは世界中どこからでもオンデマンドで印刷できます — 必要なのはプリンタと数分だけです。",
	"get-involved::get_involved_flyers_header":
		"チラシを印刷して貼る",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks の無料印刷可能ビットコイン・チラシのプレビュー",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks は、MIT ライセンスのもとで提供される無料のオープンソース・プロジェクトです。私たちの使命は、教育を通じてビットコインの普及を加速させることです — 一人ではできません。",
	"get-involved::get_involved_github_content_2":
		"開発者、デザイナー、ライター、翻訳者、誰でも貢献できる方法があります。世界中の人々が母国語でビットコインについて学べるよう、コンテンツをより多くの言語に翻訳してくれる貢献者を特に歓迎しています。",
	"get-involved::get_involved_github_content_3":
		"リポジトリをフォークし、プルリクエストを開き、Issue を立て、またはプロジェクトにスターを付けてサポートを示してください。すべての貢献がビットコインをより多くの人に届けるのを助けます。",
	"get-involved::get_involved_github_header":
		"GitHub で貢献する",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks の無料ビットコイン・テキスト・ステッカーパック",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone・Android・Web",
	"nostr/index::nostr_platform_web": "ウェブブラウザ",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr はオンライン・コミュニケーションのための新しい分散型プロトコルです — どの単一企業も管理せず、ビットコインの zap がネイティブに組み込まれており、フォロワーを失うことなくクライアント間を移動できます。",
	"nostr/index::nostr_amethyst_f1": "豊富な機能とカスタマイズ",
	"nostr/index::nostr_amethyst_f2":
		"別途ビットコイン・ウォレットが必要",
	"nostr/index::nostr_amethyst_f3": "100% 無料",
	"nostr/index::nostr_damus_f1":
		"使い慣れた Twitter ライクなインターフェース",
	"nostr/index::nostr_damus_f2":
		"別途ビットコイン・ウォレットが必要",
	"nostr/index::nostr_damus_f3": "100% 無料",
	"nostr/index::nostr_download_heading":
		"無料の Nostr クライアントをダウンロード",
	"nostr/index::nostr_download_intro":
		"Nostr クライアントは Nostr ネットワークで読み書きできる無料アプリです。すべて相互運用可能です — いつでもクライアントを切り替え、フォロワーやコンテンツを保持できます。",
	"nostr/index::nostr_hero_subtitle":
		"Nostr はオンラインで通信するための新しい分散型プロトコルです — どの単一企業も管理せず、ビットコインの zap が組み込まれており、フォロワーを失うことなくアプリ間を移動できます。",
	"nostr/index::nostr_hero_title": "Nostr とは何か？",
	"nostr/index::nostr_intro_c1":
		"Nostr はメールに似ています：誰もプロトコルを所有しておらず、誰でもその上にアプリを構築でき、好きなアプリを選べます。Twitter や Facebook と違い、検閲、プラットフォーム追放、降格処分を行える中央集権的な企業はありません。",
	"nostr/index::nostr_intro_c2":
		"以下は、なぜ Nostr が重要かの短いバージョンです — そして今日始めるのに必要なすべての無料 Nostr クライアントです。",
	"nostr/index::nostr_iris_f1":
		"とてもシンプル — インストール不要",
	"nostr/index::nostr_iris_f2":
		"テストアカウントで Nostr を試す簡単な方法",
	"nostr/index::nostr_iris_f3": "100% 無料",
	"nostr/index::nostr_learn_more_label": "もっと深く",
	"nostr/index::nostr_learn_more_title":
		"nostr.how で Nostr について詳しく学ぶ",
	"nostr/index::nostr_primal_f1": "最初の推奨クライアント",
	"nostr/index::nostr_primal_f2":
		"ビットコイン zap ウォレット内蔵",
	"nostr/index::nostr_primal_f3": "100% 無料",
	"nostr/index::nostr_s1": "プラットフォームではなくプロトコル",
	"nostr/index::nostr_s1_c1":
		"Nostr は、検閲、プラットフォーム追放、降格処分を恐れることなくオンラインで通信できる新しいプロトコルです。",
	"nostr/index::nostr_s1_c2":
		"Twitter や Facebook のようなプラットフォームは単一企業によって管理されていますが、Nostr プロトコルは誰も管理していません。",
	"nostr/index::nostr_s2": "移動の自由",
	"nostr/index::nostr_s2_c1":
		"Nostr はメールに似ています。誰もメール・プロトコルを管理しておらず、誰でもその上にクライアント（Gmail、Hotmail など）を構築できます。",
	"nostr/index::nostr_s2_c2":
		"誰も Nostr プロトコルも管理しておらず、誰でもその上にクライアント（Damus、Amethyst など）を構築できます。",
	"nostr/index::nostr_s2_c3":
		"あるクライアントの動作が気に入らない場合は、フォロワーやコンテンツを失うことなく、シームレスに Nostr アカウントを別のクライアントに移動できます。",
	"nostr/index::nostr_s3": "ビットコインが組み込まれている",
	"nostr/index::nostr_s3_c1":
		"ビットコインは Nostr プロトコルにネイティブに組み込まれています。気に入ったコンテンツを見つけたら、感謝の気持ちとして簡単にビットコインを zap できます！",
	"nostr/index::nostr_s3_c2":
		"Twitter や Facebook のような中央集権的なプラットフォームでは、中央集権的な企業があなたのコンテンツから収益を得ます。しかし Nostr のようなオープンプロトコルでは、あなたが自分のコンテンツから収益を得ます。",
	"nostr/index::sources_damus": "Damus — iPhone Nostr クライアント",
	"nostr/index::sources_iris":
		"Iris — ブラウザベースの Nostr クライアント",
	"nostr/index::sources_nostr_how":
		"nostr.how — Nostr とは何か？",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — オープンソースの仕様",
	"nostr/index::sources_primal":
		"Primal — ビットコイン zap ウォレット内蔵の Nostr クライアント",
	"nostr/index::what_is_nostr": "Nostr とは何か？",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"これらのビットコイン・チラシを印刷して掲示する方法",
	"flyers::flyers_hero_subtitle":
		"無料で印刷可能なビットコイン・チラシ。公共の場に掲示して、より多くの人にビットコインについて学んでもらいましょう。",
	"flyers::flyers_hero_title":
		"ビットコイン・チラシを印刷して貼る",
	"flyers::flyers_next_get_stickers": "広めよう",
	"flyers::flyers_next_get_stickers_desc":
		"無料のビットコイン・ステッカーパックを注文する",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — ウォレットを選ぶ",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — メタル・ビットコイン・シード・ストレージ・レビュー",
	"wallets::wallets_lightning_cta_label": "Lightning ネットワーク",
	"wallets::sources_blockstream_green":
		"Blockstream Green — 自己管理型ビットコイン・ウォレット",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — ビットコイン・ハードウェア・ウォレット",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 ハードウェア・ウォレット",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q ハードウェア・ウォレット",
	"wallets::sources_passport":
		"Foundation Devices — Passport ハードウェア・ウォレット",
	"wallets::sources_seedsigner":
		"SeedSigner — オープンソースの DIY ビットコイン署名デバイス",
	"wallets::wallets_grid_heading":
		"人気のビットコイン・ウォレット",
	"wallets::wallets_header_subtitle":
		"ウォレットを選び、鍵を守り、ビットコインを完全にコントロールするためのステップバイステップ・ガイド。",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "私たちの",
	"lightning::lightning_grid_heading":
		"人気の Lightning ウォレット",
	"lightning::lightning_hardware_cta_label":
		"ハードウェア・ウォレット",
	"lightning::lightning_header_subtitle":
		"Lightning なら 1 セント未満の手数料で数秒でビットコインを送れます — 使う予定のビットコイン量に合ったウォレットを選びましょう。",
	"lightning::lightning_s1_c4_end": "詳しくは。",
	"lightning::lightning_s1_c4_link":
		"ビットコイン・ハードウェア・ウォレット・ガイド",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning ウォレット",
	"lightning::sources_breez_lightning":
		"Breez — 自己管理型 Lightning ウォレット",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning ネットワークのドキュメント",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — カストディアル Lightning ウォレット",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "ビットコインの買い方",
	"buy::buy_step_1_header": "国を選ぶ",
	"buy::buy_step_2_header": "支払い方法を選ぶ",
	"buy::buy_step_3_header": "購入オプション",
	"buy::buy_step_4_header": "ビットコインを安全に保管する",
	"buy::buy_header_subtitle":
		"最初のビットコインを買うためのシンプルなステップバイステップ・ガイド。",
	"buy::buy_howto_name": "ビットコインの買い方",
	"buy::buy_meta_description":
		"私たちのステップバイステップ・ガイドで、ビットコインを安全に買う方法を学びましょう。国と支払い方法を選んで、あなたに最適なビットコイン購入オプションを見つけましょう。",
	"buy::buy_step_1_eyebrow": "ステップ 1",
	"buy::buy_step_2_eyebrow": "ステップ 2",
	"buy::buy_step_3_eyebrow": "ステップ 3",
	"buy::buy_step_4_eyebrow": "ステップ 4",
	"buy::buy_storage_cta_label": "次のステップ",
	"buy::sources_bisq":
		"Bisq — 分散型ピアツーピア・ビットコイン取引所",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — 世界のビットコイン ATM ディレクトリ",
	"buy::sources_kraken": "Kraken — 老舗のビットコイン取引所",
	"buy::sources_relai":
		"Relai — スイスのビットコイン専用自己管理アプリ",
	"buy::sources_river":
		"River — ビットコイン専用の購入・マイニング・カストディ",
	"buy::sources_strike_lightning":
		"Strike — Lightning ネットワーク対応でビットコインを買う",
	"buy::sources_swan":
		"Swan Bitcoin — ビットコイン専用ドルコスト平均法",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"米連邦準備経済データ（FRED） — 全都市消費者向け消費者物価指数",
	"compound-inflation-calculator::sources_fred_m1":
		"米連邦準備経済データ（FRED） — M1 マネーサプライ",
	"compound-inflation-calculator::cic_calculator_heading":
		"インフレギャップを計算する",
	"compound-inflation-calculator::cic_cta_label": "次のステップ",
	"compound-inflation-calculator::cic_hero_subtitle":
		"インフレに追いつくには給与をどれだけ上げる必要があるかを見ましょう。",
	"compound-inflation-calculator::cic_next_explore_topics":
		"他のトピックを探す",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"ビットコインがお金、自由、エネルギー、その他にどう関係しているかを見ましょう。",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"インフレの仕組みを学ぶ",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "ビットコイン",
	"stickers::stickers_flyers_link_before":
		"ついでに、自分の",
	"stickers::stickers_instructions_1":
		"郵送先住所を入力していただければ、無料のビットコイン・ステッカーパックを郵送でお届けします。ステッカーは無地の白い封筒で発送されます。",
	"stickers::stickers_btn_choose_pack":
		"このパックを選ぶ",
	"stickers::stickers_bulk_c1":
		"数枚以上のステッカーが欲しいですか？",
	"stickers::stickers_bulk_c2":
		"私たちが使っているのと同じ印刷会社で大量注文できます",
	"stickers::stickers_bulk_c3":
		" — 多く買うほどステッカー 1 枚あたりが安くなります。",
	"stickers::stickers_bulk_cta": "ステッカーを大量注文する",
	"stickers::stickers_bulk_header": "ステッカーを大量注文する",
	"stickers::stickers_hero_subtitle":
		"無料のビットコイン・ステッカーパックを注文して公共の場に貼り、より多くの人にビットコインについて学んでもらいましょう。",
	"stickers::stickers_hero_title":
		"無料のビットコイン・ステッカー",
	"stickers::stickers_intro_c1":
		"私たちの使命は、ビットコイン・ステッカーを公共の場に貼ることで、より多くの人をオレンジピル化する手助けをすることです。すべてのステッカーには、",
	"stickers::stickers_intro_c3": "インフレ",
	"stickers::stickers_intro_c4":
		"以下からステッカーパックを選び、入手方法を選んでください — 米国またはカナダの方には無料パックを郵送し、世界中どこでも自分で印刷できます。",
	"stickers::stickers_mail_header":
		"無料ステッカーをお届けします",
	"stickers::stickers_next_print_flyers": "広め続けよう",
	"stickers::stickers_next_print_flyers_desc":
		"公共の場に貼るための無料ビットコイン・チラシを印刷する",
	"stickers::stickers_option_bulk":
		"📦 グローバル — 大量注文",
	"stickers::stickers_option_canada":
		"🇨🇦 カナダ — 郵送無料",
	"stickers::stickers_option_print":
		"🌍 グローバル — 自分で印刷",
	"stickers::stickers_option_usa":
		"🇺🇸 米国 — 郵送無料",
	"stickers::stickers_print_c1":
		"どこに住んでいても、自分でステッカーを印刷して参加できます。下の言語をクリックすると、ステッカー・ファイルと印刷の説明をダウンロードできます。",
	"stickers::stickers_print_c2":
		"すべてのステッカーがすべての言語で利用できるわけではありません。",
	"stickers::stickers_print_header":
		"自分でステッカー・ファイルを印刷する",
	"stickers::stickers_request_c1":
		"あなたの母国語のステッカー・ファイルをリクエストするには、下のフォームに記入してください。準備ができ次第お知らせします。",
	"stickers::stickers_request_header":
		"あなたの言語が見当たりませんか？",
	"stickers::stickers_share_c2":
		"任意の Nostr クライアントで",
	"stickers::stickers_share_c3":
		"を検索してフォローしてください。",
	"stickers::stickers_signs_pack_description":
		"警告、危険、注意スタイルの看板にビットコインのメッセージ — 注目を集めて立ち止まって読ませるようデザインされています。",
	"stickers::stickers_step_1_description":
		"各パックには、ビットコインについて教える QR コード付きのビットコイン・ステッカーが異なるセットで含まれています。",
	"stickers::stickers_step_1_eyebrow": "ステップ 1",
	"stickers::stickers_step_1_header":
		"ステッカーパックを選ぶ",
	"stickers::stickers_step_2_description":
		"米国とカナダの住所には無料パックを発送します。世界中の他の場所では、自分で印刷するか大量注文できます。",
	"stickers::stickers_step_2_eyebrow": "ステップ 2",
	"stickers::stickers_step_2_header":
		"ステッカーをどう受け取りますか？",
	"stickers::stickers_text_pack_description":
		"公共の場で好奇心を呼び起こすようデザインされた、ビットコインのスローガンとワンライナーの組み合わせ。",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"大量注文する",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Nostr でシェア",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Nostr とは何か？",
	"sticker-success::sticker_success_bulk_header":
		"もっとステッカーが欲しいですか？",
	"sticker-success::sticker_success_hero_title":
		"ステッカーを発送しました 🎉",
	"sticker-success::sticker_success_share_header":
		"ステッカーを貼った場所をシェアしよう",
	"sticker-success::sticker_success_tips_header":
		"ステッカーを貼るのに良い場所",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"リクエストを受け付けました 🎉",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"これらのビットコイン・ステッカー・ファイルで自分のステッカーを印刷しましょう。",
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
		`translate-rest-part2 (ja): filled ${filled}, already-done ${skipped}`,
	);
}

main();

/**
 * Creates Japanese (ja) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ja';
const today = '2026-04-02';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "404エラー | ページが見つかりません",
	"404_message": "この壊れたページは全然イケてない",
	"404_home": "ホームに戻る"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "bitcoin.rocksについて — 2022年からのビットコイン教育",
	"about_description": "bitcoin.rocksは2022年に設立された無料のオープンソースのビットコイン教育ウェブサイトです。私たちの使命は、教育を通じてビットコインの普及を加速することです。",
	"about_header": "サイト紹介",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "私たちの使命",
	"about_mission_1": "bitcoin.rocksは2022年にシンプルな使命をもって設立されました：教育を通じてビットコインの普及を加速すること。",
	"about_mission_2": "私たちは、ビットコインに興味を持った人に最初に共有するリンクとして存在しています。ビットコインがいかにより良い世界を築いているかを説明する、親しみやすくわかりやすい出発点です。",
	"about_mission_3": "多くの人がビットコインを誤解しているか、まだ正しく紹介されたことがありません。私たちは、誰もが理解できる無料で質の高い教育コンテンツを提供することで、この状況を変えたいと考えています。",
	"about_what_we_do_header": "私たちの活動",
	"about_what_we_do_1": "私たちはビットコイン初心者のための無料の教育コンテンツを作成しています。ウェブサイトでは、インフレーション、自己管理、ウォレット、ライトニングネットワーク、ビットコインと他の資産や決済システムとの比較などのトピックを扱っています。",
	"about_what_we_do_2a": "私たちは",
	"about_what_we_do_2b": "無料のビットコインステッカー",
	"about_what_we_do_2c": "をご自宅にお届けし、あなたのコミュニティでビットコインの認知度を広めるお手伝いをしています。毎月何百人もの人々がこれらのステッカーのQRコードをスキャンしてビットコインについて学んでいます。",
	"about_what_we_do_3a": "また、",
	"about_what_we_do_3b": "印刷可能なチラシ",
	"about_what_we_do_3c": "と",
	"about_what_we_do_3d": "ビジネスキット",
	"about_what_we_do_3e": "を提供し、地元のビジネスにビットコイン決済を導入したい方をサポートしています。",
	"about_what_we_do_4": "私たちのすべてのコンテンツはビットコインに関する予備知識ゼロを前提としています。ビットコイン初心者であっても、共有するリソースを探している熟練のビットコイナーであっても、bitcoin.rocksはあなたのためのサイトです。",
	"about_editorial_header": "私たちの編集方針",
	"about_editorial_1": "bitcoin.rocksのすべてのコンテンツは厳選され、事実確認されています。データや統計を引用する際には出典を明記し、ご自身で情報を確認できるようにしています。",
	"about_editorial_2": "TIME誌、Forbes、MIT Technology Review、Lyn Aldenなど、信頼できる情報源にリンクしています。事実が明確に提示されれば、ビットコインは自ら語ると信じています。",
	"about_editorial_3": "コンテンツは定期的に見直し、更新され、正確性と鮮度を確保しています。すべてのコンテンツはビットコイン教育のみに焦点を当てています。",
	"about_open_source_header": "オープンソース",
	"about_open_source_1a": "bitcoin.rocksはMITライセンスの下で公開されている無料のオープンソースプロジェクトです。私たちのコードベースのすべてが",
	"about_open_source_1b": "GitHub上で",
	"about_open_source_1c": "公開されています。",
	"about_open_source_2": "誰でもbitcoin.rocksに貢献できます。特に、世界中の人々にコンテンツを届けるお手伝いをしてくれる翻訳者を歓迎しています。",
	"about_open_source_3": "ボランティア翻訳者コミュニティのおかげで、bitcoin.rocksは現在21言語で利用可能であり、さらに増え続けています。",
	"about_open_source_contribute": "貢献方法について。",
	"about_contact_header": "お問い合わせ",
	"about_contact_1": "皆様からのご連絡をお待ちしております。ご質問、ご提案、または単にご挨拶したい場合でも、いつでもお気軽にどうぞ。",
	"about_contact_email": "メール：",
	"about_contact_nostr": "Nostr：",
	"about_contact_github": "GitHub："
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "ステッカーは2〜4週間以内にお届けします。届くまでの間、ステッカーを貼る良い場所を考えてみてください！",
	"sticker_success_2": "ステッカーを貼るのに良い場所：",
	"sticker_success_list_1": "人々の目に留まる公共の場所",
	"sticker_success_list_2": "すぐに剥がされにくい場所（ステッカーは永久的な損傷を与えません）",
	"sticker_success_list_3": "貼りやすい表面（金属、プラスチック、ガラス）",
	"sticker_success_list_4": "私有地、標識の上、ATM、ガスポンプには貼らないでください",
	"sticker_success_3": "他の人がステッカーをどこに貼っているか見たいですか？",
	"sticker_success_flyers_bar_new": "新着！",
	"sticker_success_flyers_bar_cta": "ビットコインチラシを印刷して掲示しよう →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "リクエストを正常に受け付けました。",
	"sticker_language_success_2": "新しいファイルはまとめて公開しているため、ダウンロード可能になるまで数週間かかる場合があります。またお越しください！"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "ポストカードは1〜2週間以内にお届けします。",
	"postcard_success_2": "ビットコインの普及を加速するために、知り合いにこれらのポストカードを送っていただきありがとうございます！"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "看板は1〜2週間以内にお届けします。届くまでの間、看板を設置する良い場所を考えてみてください！",
	"sign_success_3": "他の人が看板をどこに設置しているか見たいですか？",
	"signs_share_header": "看板スポットを共有しよう",
	"signs_share_c1": "Nostrで看板スポットの写真を共有してくれれば、satsをzapします！satsはビットコインの端数です。",
	"signs_btn_share_on_nostr": "NOSTRで共有する",
	"signs_btn_what_is_nostr": "NOSTRとは？"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "複利インフレ計算機",
	"cic_description": "この複利インフレ計算機を使って、インフレに追いつくために給与をどれだけ上げる必要があるか確認しましょう。",
	"what_can_i_do_about": "どうすればいいのか",
	"what_can_i_do_about_2": "インフレ対策は？",
	"cic_inflation_cta": "ビットコインでインフレから脱却する"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Nostrでマトリックスから脱出しよう",
	"nostr_header": "NOSTRでマトリックスから脱出しよう"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostrとは？",
	"what_is_nostr_header": "NOSTRとは？"
});

console.log('\nDone! Simple files created for Japanese (ja).');

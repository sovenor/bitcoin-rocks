/**
 * Creates Japanese (ja) translation files for all business/ pages.
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

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "ビットコインはビジネスに最適",
	"biz_header": "ビットコインはビジネスに最適",
	"biz_s1": "最低金額なしの低手数料",
	"biz_s1_c1": "ビットコインを使えば、現金と同様に顧客から直接支払いを受け取ることができます。ビットコインネットワークは、高額な手数料を取る銀行やクレジットカード会社などの仲介者なしで運営されています。",
	"biz_s2": "即時決済",
	"biz_s2_c1": "現金と同様に、ビットコインの支払いは即座に決済されます。クレジットカード会社や銀行からの支払いを待つ必要はありません。すぐにお金にアクセスできます。",
	"biz_s3": "チャージバックや不正取引なし",
	"biz_s3_c1": "ビットコインの支払いはあなたと顧客の間で直接行われるため、チャージバックでお金を取り戻されることはありません。",
	"biz_s3_c2": "偽造ビットコインはビットコインネットワーク上で送信できないため、ビジネスに損害を与える不正取引を心配する必要はありません。",
	"biz_s4": "より多くの顧客を獲得",
	"biz_s4_c1": "何百万人もの人々がビットコインを所有しており、受け入れてくれる場所でビットコインを使いたいと考えています。",
	"biz_s4_c2": "ビットコインを受け入れるだけで、あなたのビジネスはビットコイン加盟店マップに掲載され、新しいビットコイン顧客に無料で露出できます。",
	"biz_s4_c3": "ビットコインの受け入れは100%無料です。契約や隠れた手数料はありません。"
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "ビットコインがビジネスに最適な理由を学ぶ",
	"why_header": "ビットコインはビジネスに最適",
	"why_good_for_you": "ビットコインはあなたにも最適！",
	"why_learn_more_lowercase": "詳しく見る。",
	"why_s1": "ビットコインにはインフレがない",
	"why_s1_c1": "インフレは、お金がより多く印刷されたり、何もないところから作り出されたりすると起こります。これにより、時間の経過とともにお金の価値が下がります。",
	"why_s1_c2": "ビットコインは固定供給量があるため、誰もビットコインを追加で印刷することはできません。",
	"why_s2": "ビットコインには取り付け騒ぎがない",
	"why_s2_c1": "過去数年間で、取り付け騒ぎにより複数の米国の銀行が破綻しました。",
	"why_s2_c2": "銀行はあなたのお金をただ預かるのではなく、投資や貸出に回しています。それらの投資がうまくいかなければ、あなたに返すのに十分なお金がありません。",
	"why_s2_c3": "そしてFDIC保険基金は、保険をかけている100ドルに対してわずか1ドルしかありません。",
	"why_s3": "ビットコインは許可不要",
	"why_s3_c1": "従来の金融ネットワークとは異なり、ビットコインの使用に許可は必要ありません。",
	"why_s3_c2": "つまり、いかなる理由があっても誰もあなたのビットコイン使用を止めることはできません。検閲や差し押さえの恐れなく使用できる初めての金融ネットワークです。",
	"why_s4": "ビットコインはより良い世界を築いている",
	"why_s4_c1": "ビットコインは誤解されがちなテクノロジーですが、より良い世界を築いています。",
	"why_s4_c2": "ビットコインは人権活動家が自由のために戦うことを可能にし、世界のメタン排出量を削減し、国立公園を救い、その他にも多くのことを成し遂げています。"
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "あなたのビジネスでビットコイン決済を受け入れる",
	"guide_header": "あなたのビジネスでビットコインを受け入れる準備はできましたか？"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "ビットコイン受け入れに関するよくある質問",
	"faq_description": "ビジネスでのビットコイン決済の受け入れについて質問がありますか？",
	"faq_header": "ビットコイン決済の受け入れについて質問がありますか？",
	"faq_s1": "ビットコインとは？",
	"faq_s1_c1": "ビットコインには2つの側面があります：デジタルマネーとコンピューターネットワークです。",
	"faq_s1_c2": "ビットコインネットワークを使って、ビットコイン（デジタルマネー）を他の人に直接送ることができます。",
	"faq_s1_c3": "ビットコインネットワークは銀行やクレジットカード会社などの仲介者や中央機関なしで運営されるため、それらの取引手数料を回避できます。",
	"faq_s1_c4": "ビットコインの取引は迅速に最終決済が完了し（10分）、チャージバックされることはないため、あなたのお金はあなたのものだと安心して眠れます。",
	"faq_s2": "ビットコインはビジネスにどのようなメリットがありますか？",
	"faq_s2_c1": "ビットコインを使えば、より低い手数料で支払いを受け入れ、より多くの顧客を獲得できます。ビットコイン決済は最低金額なしの低手数料で、即時決済され、チャージバックや不正取引の影響を受けません。",
	"faq_s2_c2": "ビットコインの受け入れは無料で、ビットコイン加盟店マップにビジネスを掲載し、ビットコインユーザーがあなたのビジネスを簡単に見つけられるようにします。",
	"faq_s2_c3": "ビットコインがビジネスに最適なすべての理由を見る。",
	"faq_s3": "ビットコイン決済はどのように受け入れますか？",
	"faq_s3_c1": "ビットコイン決済を受け入れるために必要なのは、無料のビットコインウォレットだけです。",
	"faq_s3_c2": "ウォレットガイドで素早く簡単にセットアップし、今日からビットコイン受け入れのメリットを得ましょう！",
	"faq_s3_c3": "ウォレットガイドを見る",
	"faq_s4": "受け取ったビットコインを現地通貨に換金できますか？",
	"faq_s4_c1": "はい！ハイブリッドウォレットを使用すれば、受け取ったビットコインを支払い受領と同時に自動的に現地通貨に換金できます。",
	"faq_s4_c2": "ウォレットガイドで素早く簡単にセットアップできます。",
	"faq_s4_c3": "また、受け取った支払いの一部をビットコインとして保持することもできます。ビットコインでの貯蓄には多くのメリットがあります：",
	"faq_s4_c4": "ビットコインは完全準備金の金融システムです。",
	"faq_s4_c5": "ビットコインにはインフレがありません。",
	"faq_s4_c6": "これらのメリットにより、ビットコインは長期的にお金を貯める優れた方法です。",
	"faq_s4_c7": "ビットコイン決済をすべてドルに換金する場合でも、はるかに低い手数料で支払いを受け入れながら、より多くの潜在顧客にリーチできるメリットがあります。",
	"faq_s5": "対面でビットコイン決済を受け入れられますか？",
	"faq_s5_c1": "はい！ビットコインウォレットを使って、対面でのビットコイン決済を簡単に受け入れられます。",
	"faq_s5_c2": "ウォレットガイドで、あなたのビジネスに最適なビットコインウォレットを選びましょう。",
	"faq_s5_c3": "ウォレットガイドを見る",
	"faq_s6": "オンラインでビットコイン決済を受け入れられますか？",
	"faq_s6_c1": "はい！既存のオンラインストアで簡単にビットコイン決済を受け入れられます。",
	"faq_s6_c2": "詳しくはウォレットガイドをご覧ください。",
	"faq_s7": "ビットコインを受け入れていることを顧客にどう伝えればよいですか？",
	"faq_s7_c1": "無料の「Bitcoin Accepted Here」ステッカーを提供しています。ビジネスに掲示して、ビットコイン決済を受け付けていることを顧客に知らせましょう。",
	"faq_s7_c2": "こちらからステッカーをリクエストしてください。",
	"faq_s7_c3": "また、ビットコイン加盟店マップに無料でビジネスを掲載し、ビットコインを受け入れるビジネスで使いたいと考えている何百万人ものビットコインユーザーにアピールできます。",
	"faq_s7_c4": "今すぐ掲載する。",
	"faq_s8": "ビットコインを受け入れることでどのように顧客を増やせますか？",
	"faq_s8_c1": "ビットコインを受け入れるビジネスでビットコインを使いたいと考えている何百万人ものビットコインユーザーがいます。",
	"faq_s8_c2": "ビットコイン決済を受け入れるだけで、無料のビットコイン加盟店マップに掲載され、新しい潜在顧客にアピールできます。",
	"faq_s8_c3": "今すぐ掲載する。",
	"faq_s9": "ビットコインの受け入れにはいくらかかりますか？",
	"faq_s9_c1": "ビジネスでのビットコインの受け入れは100%無料です。契約や隠れた手数料はありません。",
	"faq_s9_c2": "ウォレットガイドをチェックして、今日からビットコイン決済の受け入れを始めましょう。"
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "ビットコイン決済の受け入れ方",
	"wallets_header": "無料のビットコインウォレットを入手してビットコイン決済を受け入れよう",
	"wallets_intro_1": "すべてのビットコインウォレットは相互運用可能なので、顧客はどのウォレットを使っていてもビットコインで支払いができます。",
	"wallets_intro_2": "ビットコイン専用ウォレット：",
	"wallets_intro_3": "これらはビットコインの全メリットを引き出す純粋なビットコインウォレットです：仲介者なし、低手数料、チャージバックや不正取引なし。",
	"wallets_intro_4": "ハイブリッドウォレット：",
	"wallets_intro_5": "顧客から支払いを受けると同時に、ビットコインの任意の割合をドルに換金できます。手数料はクレジットカードよりも低いですが、純粋なビットコイン決済よりは高くなります。",
	"wallets_intro_6": "どちらもビットコインを受け入れる優れた方法です。使用する具体的なウォレットは、ビジネスの規模とタイプによって異なります。",
	"wallets_choice_sole": "個人事業主向けウォレット",
	"wallets_choice_multiple": "複数従業員のビジネス向けウォレット",
	"wallets_choice_online": "オンラインビジネス向けウォレット",
	"wallets_choice_invoice": "請求書ベースのビジネス向けウォレット",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "既存のSquare POSターミナルやオンラインストア連携でビットコイン決済を受け入れられます。ビットコイン決済の受け入れがこれほど簡単になったことはありません。",
	"wallets_feature_bitcoin_only": "ビットコイン専用ウォレット",
	"wallets_feature_no_info": "情報入力不要",
	"wallets_feature_in_person": "対面決済のみ",
	"wallets_feature_settles_bitcoin": "100%ビットコインで決済",
	"wallets_feature_hybrid": "ハイブリッドウォレット",
	"wallets_feature_info": "ビジネス情報の入力が必要",
	"wallets_feature_in_person_online": "対面＆オンライン決済",
	"wallets_feature_settles_both": "ビットコイン＆ドルで決済",
	"wallets_feature_multiple_employees": "複数従業員対応（BPT）",
	"wallets_feature_self_hosted": "セルフホスティング＝手数料0%",
	"wallets_feature_online_store": "オンラインストア連携",
	"wallets_feature_invoicing": "無料の請求書ソフトウェア",
	"wallets_get_wallet": "ウォレットを入手"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "ビットコインビジネス会計ガイド",
	"accounting_description": "ビジネス会計でビットコイン決済を適切に処理する方法を学びましょう。",
	"accounting_header": "ビットコイン会計ガイド",
	"accounting_s1_c1": "ビットコインの受け入れには、低手数料での決済受付やより多くの顧客獲得など、多くのメリットがあります。",
	"accounting_s1_c2": "ウォレットガイドのハイブリッドウォレットを使用し、受け取ったビットコインの100%を自動的にドルに売却する場合、現在の会計処理を変更する必要はありません。",
	"accounting_s1_c3": "ウォレットガイドを見る。",
	"accounting_s1_c4": "ただし、受け取ったビットコインの一部をビットコインのまま保持する場合、会計のためにいくつかの詳細を記録する必要があります。最初は難しく感じるかもしれませんが、実際にはとてもシンプルです。",
	"accounting_s1_c5": "注意：このガイドは情報提供のみを目的としており、税務アドバイスとはみなされません。",
	"accounting_s1_c6": "税務アドバイスが必要な場合は、ビットコイン会計を専門とする会計事務所Satoshi Pacioli Accounting Servicesを強くお勧めします。",
	"accounting_s2": "取得原価の追跡",
	"accounting_s2_c1": "取得原価の追跡は、ドル会計とビットコイン会計の最大の違いです。ビジネスをビットコインベースで見ている場合でも、税金申告では各取引のドル価値を報告する必要があります。",
	"accounting_s2_c2": "QuickBooksを使用している場合は、Bitcoin Syncプラグインを使って自動的に行えます。",
	"accounting_s2_c3": "QuickBooksを使用していない場合は、ビットコイン会計を専門とするSatoshi Pacioli Accounting Servicesをお勧めします。",
	"accounting_s2_c4": "手動で行う場合は、受け取ったビットコインの量と、その日のビットコイン取引のドル価値を記録するだけです。",
	"accounting_s2_c5": "ビットコインの現在のドル価格はこちらで確認できます。",
	"accounting_s2_c6": "この情報をExcelスプレッドシートに記録し、会計士に渡してください。",
	"accounting_s2_c7": "このデータをExcelに自動的にインポートすることもできます。",
	"accounting_s2_c8": "過去の日のビットコインの過去のドル価格も確認できるため、毎日行う必要はありません。",
	"accounting_s3": "ビットコインの使用または売却",
	"accounting_s3_c1": "ウォレットガイドのハイブリッドウォレットを使用し、受け取ったビットコインの100%を自動的にドルに売却する場合、現在の会計処理を変更する必要はありません。",
	"accounting_s3_c2": "ウォレットガイドを見る。",
	"accounting_s3_c3": "しばらく保持した後にビットコインの一部を使用または売却する場合は、売却価格を取得原価を追跡するExcelスプレッドシートに追加するだけです。",
	"accounting_s3_c4": "例えば、1月1日に100ドル相当のビットコインを受け取り、2月1日に110ドルの新しい価値で売却または使用した場合、会計で10ドルのキャピタルゲインを記録する必要があります。",
	"accounting_s3_c5": "これは逆のパターンでも同様です。例えば、1月1日に100ドル相当のビットコインを受け取り、2月1日に90ドルの新しい価値で売却または使用した場合、会計で10ドルのキャピタルロスを記録する必要があります。",
	"accounting_s4": "さらに助けが必要です",
	"accounting_s4_c1": "ビットコインをビジネス会計に統合するためにさらに助けが必要な場合は、ビットコイン会計を専門とするSatoshi Pacioli Accounting Servicesを強くお勧めします。",
	"accounting_s4_c2": "Satoshi Pacioli Accounting Servicesについて詳しく知る。"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "ビットコイン加盟店マップ - 無料でビジネスを掲載",
	"maps_header": "ビットコイン加盟店マップに掲載してより多くの顧客を獲得しよう",
	"maps_request_details": "以下にビジネス情報を入力すると、無料でビットコイン加盟店マップに掲載します。これにより、ビットコイナーがあなたのビジネスを見つけてビットコインを使えるようになります！",
	"maps_view": "マップをこちらで見る。"
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "あなたのビジネスは1〜2週間以内にビットコイン加盟店マップに掲載されます。",
	"kit_success_2": "マップをこちらで見る。"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "ビットコインビジネスキット",
	"kit_header": "自分でビットコインビジネスキットを印刷しよう",
	"kit_request": "無料キットをリクエスト",
	"kit_request_details": "各ビットコインビジネスキットには、地元のビジネスにビットコイン受け入れを簡単に促進するための2つのパンフレットが含まれています。",
	"kit_country_global_print": "グローバル — 自分で印刷する",
	"kit_enter_address": "住所を入力すると、無料のビットコインビジネスキットを白い封筒でお届けします。住所データはキットの発送後に削除されます。",
	"kit_print_details": "どこに住んでいても、自分でパンフレットを印刷して参加できます！印刷を避けたい場合は、デジタルビジネスキットをビジネスに送ることもできます。",
	"kit_view_files": "ファイルを見る",
	"kit_digital_kit": "デジタルキット",
	"kit_resources": "各キットにはこれらの無料リソースへのリンクが含まれています"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "ビットコインビジネスキットは1〜2週間以内に白い封筒でお届けします。"
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "「Bitcoin Accepted Here」ステッカー",
	"stickers_header": "無料の「BITCOIN ACCEPTED HERE」ステッカーを入手しよう",
	"stickers_request": "無料ステッカーを入手",
	"stickers_request_details": "これらの無料「Bitcoin Accepted Here」ステッカーで、ビットコイン決済を受け付けていることを顧客に知らせましょう。",
	"stickers_country_global_print": "グローバル — 自分で印刷する",
	"stickers_request_instructions": "白い封筒で3枚の「Bitcoin Accepted Here」ステッカーをお届けします。ビジネスに3枚以上必要な場合は、複数回リクエストしてください。住所データはステッカーの発送後に削除されます。",
	"stickers_print_details": "どこに住んでいても、自分で「Bitcoin Accepted Here」ステッカーを印刷できます！下の言語をクリックしてステッカーファイルと手順を確認してください。",
	"stickers_request_language": "お探しの言語がありませんか？以下のフォームに記入して、お住まいの言語の「Bitcoin Accepted Here」ステッカーファイルをリクエストしてください。"
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "ステッカーは1〜2週間以内に白い封筒でお届けします。各封筒には3枚のステッカーが入っています。ビジネスに3枚以上必要な場合は、別のパックをリクエストしてください！"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "3〜4週間以内にステッカーファイルを作成して公開します。お待ちいただきありがとうございます！"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "自分でビットコインビジネスキットを印刷する",
	"english_bbk_files_description": "パンフレットファイルをここからダウンロードしてください。",
	"english_header": "英語のビットコインビジネスキットパンフレットを印刷する"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "英語の「Bitcoin Accepted Here」ステッカーファイル",
	"english_biz_sticker_files_description": "英語のステッカーファイルをダウンロードして、自分でBitcoin Accepted Hereステッカーを印刷しましょう。",
	"english_header": "英語の「BITCOIN ACCEPTED HERE」ステッカーファイルをダウンロード"
});

console.log('\nDone! Business files created for Japanese (ja).');

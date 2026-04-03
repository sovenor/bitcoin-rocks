/**
 * Creates Japanese (ja) translation files for remaining content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

// bank-runs
writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "ビットコインには取り付け騒ぎがない",
	"bank_runs_header": "ビットコインには取り付け騒ぎがない",
	"bank_runs_header_2": "しかしあなたの銀行にはあるかもしれない",
	"bank_runs_what": "取り付け騒ぎとは何ですか？",
	"bank_runs_what_content_1": "取り付け騒ぎとは、あまりにも多くの人が同時に銀行からお金を引き出そうとした時に起こります。",
	"bank_runs_what_content_2": "銀行が引き出しに対応するのに十分なお金を持っていない場合、取り付け騒ぎが起きると完全に崩壊する可能性があります。",
	"bank_runs_how": "取り付け騒ぎはどのように起こるのですか？",
	"bank_runs_how_content_1": "私たちの銀行システムは「部分準備制度」であり、銀行はあなたのお金を金庫に保管してあなたが使うか引き出すのを待っているだけではありません。",
	"bank_runs_how_content_2": "代わりに、銀行はあなたのお金を貸し出したり投資したりします。これによりあなたのお金は長期間ロックされる可能性がありますが、銀行はいつでもお金を引き出せると約束しています。",
	"bank_runs_how_content_3": "では、銀行がすでにあなたのお金を貸し出したり投資したりした後に、お金を引き出そうとしたらどうなるでしょうか？",
	"bank_runs_how_content_4": "あなただけが引き出そうとしているなら問題ありません。銀行は他の人のお金を使ってあなたに渡すだけです。しかし、あまりにも多くの人が同時に引き出そうとしたらどうなるでしょうか？",
	"bank_runs_how_content_5": "2023年3月にシリコンバレー銀行で取り付け騒ぎが起きた時、アメリカの多くの人がそれを知りました。",
	"bank_runs_how_content_6": "銀行は顧客のお金を最長30年間ロックされる国債に投資していました。さらに悪いことに、これらの債券の価値が最近急落していたため、シリコンバレー銀行は債券を売って預金者のお金を回収することさえできませんでした。債務超過でした。預金者の引き出しに対応するのに十分なお金がありませんでした。",
	"bank_runs_how_content_7": "より多くの人がこれを知るにつれ、問題はさらに悪化しました。より多くの引き出し要求が来ましたが、多くは処理されませんでした。何千もの企業が銀行の破綻により従業員に給料を支払えないことに気づきました。",
	"bank_runs_how_content_8": "FDICが介入し、預金者を全額保護することに同意しました。問題解決？正確にはそうではありません…",
	"bank_runs_fdic": "FDIC保険は私のお金を守ってくれますか？",
	"bank_runs_fdic_content_1": "FDIC保険は銀行が破綻した場合に預金者を保護するように設計されています。預金は預金者1人あたり25万ドルまで保険されます。素晴らしいですね？",
	"bank_runs_fdic_content_2": "正確にはそうではありません。銀行が破綻した場合、FDICはどこからお金を得るのでしょうか？1,250億ドルの保険基金があります。",
	"bank_runs_fdic_content_3": "大金に聞こえますが、保険している預金額と比較すると：約10兆ドル、つまり10,000億ドルです。",
	"bank_runs_fdic_content_4": "FDICは自社のウェブサイトで、保険基金に預金の1%強しかカバーできるお金がないことを示しています。",
	"bank_runs_fdic_content_5": "FDIC保険基金を超える銀行破綻が発生した場合、米国政府が預金者を全額保護するためにお金を印刷する可能性が高い（保証はされない）です。",
	"bank_runs_fdic_content_6": "しかし、お金の印刷はインフレを引き起こすため、良い解決策ではありません。",
	"bank_runs_safe": "部分準備制度を使わない銀行はありますか？",
	"bank_runs_safe_content_1": "一部の銀行は預金者の資金を貸し出したり投資したりしない「安全な銀行」を試みてきました。",
	"bank_runs_safe_content_2": "これらの安全な銀行は取り付け騒ぎのリスクがゼロになるにもかかわらず、連邦準備制度理事会によって申請が却下されています。つまり、銀行として合法的に運営することができません。",
	"bank_runs_safe_content_3": "運営がブロックされているため、今日部分準備制度を使わない銀行は存在しません。",
	"bank_runs_safe_content_4": "幸いなことに、自分自身の銀行になることで部分準備制度から脱退する方法があります。いいえ、マットレスの下に現金を詰め込む話ではありません。",
	"bank_runs_safe_content_5": "現金での貯蓄は依然としてインフレに脆弱です。",
	"bank_runs_safe_content_6": "私たちが話しているのはビットコインです：自分自身の銀行になることを可能にする新しい金融システムです。",
	"bank_runs_protect": "ビットコインは取り付け騒ぎから守ってくれますか？",
	"bank_runs_protect_content_1": "はい、ビットコインは完全準備金の金融システムです。",
	"bank_runs_protect_content_2": "ビットコインを自分のウォレットに引き出す限り、取り付け騒ぎはビットコインでは不可能です。ビットコインを取引所やビットコインETFのようなラッパーに預けたままにしないでください。",
	"bank_runs_protect_content_3": "シンプルなビットコインウォレットガイドをチェックして、自分のウォレットに引き出す方法を学びましょう。",
	"bank_runs_protect_content_4": "ビットコインで、ついにお金をコントロールできるようになります。"
});

// wallets
writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "ビットコインウォレットガイド",
	"wallets_description": "さまざまなビットコインウォレットがあり、重要な点で異なります。これらのシンプルな質問をすることで、自分に合ったウォレットを判断できます。",
	"wallets_header": "ビットコインを安全に保管する方法",
	"wallets_s1_c1": "ビットコインウォレットは相互運用可能なので、どのウォレットを使っていても誰にでもビットコインを送ることができます。",
	"wallets_s1_c2": "さまざまなビットコインウォレットがあり、重要な点で異なります。これらのシンプルな質問をすることで、自分に合ったウォレットを判断できます：",
	"wallets_question_1": "自己管理ウォレットですか？",
	"wallets_s2_c1": "ビットコインの革新の一つは、銀行のようなカストディアンに頼ることなく保管できる能力です。",
	"wallets_s2_c2": "取引所やETFでビットコインを保有している場合、ビットコインの自由のメリットを失います。",
	"wallets_s2_c3": "自己管理ウォレットはビットコインの全力を引き出します：自由なお金。",
	"wallets_s2_c4": "自己管理ウォレットでは、あなただけがお金を使ったり転送したりする能力を持ちます。自己管理ウォレットを使うと、誰もあなたのお金の送受信を止めることはできません。",
	"wallets_s2_c5": "自己管理ウォレットは非カストディアルウォレットとも呼ばれます。",
	"wallets_s3_c1": "カストディアルウォレットは、あなたがお金をコントロールしていないウォレットです。",
	"wallets_s3_c2": "これらのウォレットは銀行システムに近く、第三者がお金へのアクセスを提供してくれることを信頼する必要があります。ビットコインが取引所にある場合、カストディアルウォレットを使用しています。",
	"wallets_s3_c3": "ビットコインETFを購入した場合、自己管理への引き出しができないカストディアルウォレットを使用しています。",
	"wallets_s3_c4": "カストディアルウォレットは便利に見えるかもしれませんが、カストディアンはいつでもすべてのユーザー資金を盗む技術的な能力を持っています。",
	"wallets_s3_c5": "鍵がなければコインもなし！",
	"wallets_question_2": "ホットですかコールドですか？",
	"wallets_s4_c1": "コールドウォレットは、ビットコインの鍵をインターネットに一度も触れさせない方法で保管します。",
	"wallets_s4_c2": "これにより、窃盗犯がビットコインを盗もうとする際の攻撃ベクトルが大幅に制限され、頻繁に送金する必要のない大量のビットコインに最適です。",
	"wallets_s4_c3": "コールドウォレットはコールドストレージとしても知られる長期貯蓄口座と考えることができます。",
	"wallets_s5_c1": "ホットウォレットは、スマートフォンのようなインターネットに接続されたデバイスにビットコインの鍵を保管します。",
	"wallets_s5_c2": "ホットウォレットは一般的に安全と考えられていますが、コールドウォレットよりもセキュリティの脆弱性が多い可能性があります。",
	"wallets_s5_c3": "ホットウォレットは物理的な財布のように考えることができます。全財産を財布に入れることはありませんが、少額のお金を入れておくでしょう。",
	"wallets_s5_c4": "ホットウォレットにより、コールドストレージから全財産を取り出すことなくビットコインを使うことがはるかに簡単になります。",
	"wallets_question_3": "リカバリーフレーズのバックアップ方法は？",
	"wallets_s6_c1": "ビットコインウォレットを設定すると、デバイスがリカバリーフレーズを生成します。このリカバリーフレーズ（シードフレーズとも呼ばれる）には12語または24語が含まれます。",
	"wallets_s6_c2": "ウォレットへのアクセスを失った場合やデバイスが動作しなくなった場合、このリカバリーフレーズを新しいウォレットに入力してビットコインへのアクセスを回復できます。",
	"wallets_s6_c3": "ほとんどのウォレットにはリカバリーフレーズを書き留めるための用紙が含まれていますが、多くの人はこのフレーズをスチールにバックアップすることを好みます。これにより、火災や洪水などの自然災害でリカバリーフレーズを失う可能性が大幅に低下します。",
	"wallets_s6_c4": "Jameson Loppが70のスチールバックアップキットをテストし、自分に合ったものを選ぶ手助けをしています。",
	"wallets_s6_c5": "Jamesonのメタルビットコインバックアップガイドはこちら。",
	"wallets_s6_c6": "またはスクロールを続けてビットコインウォレットのオプションを探索してください。",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN",
	"wallets_coldcard_mk5": "COLDCARD MK5",
	"wallets_coldcard_q": "COLDCARD Q",
	"wallets_blockstream_jade": "BLOCKSTREAM JADE",
	"wallets_foundation_passport": "FOUNDATION PASSPORT",
	"wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "ライトニングウォレットガイドをお探しですか？",
	"wallets_starter_wallet": "おすすめの初心者ウォレット",
	"wallets_mobile_app": "モバイルアプリ",
	"wallets_2fa_support": "二要素認証対応",
	"wallets_air_gap_mode": "エアギャップモード",
	"wallets_air_gap_camera": "エアギャップモード＋カメラ",
	"wallets_bitcoin_only": "ビットコイン専用",
	"wallets_security_features": "豊富なセキュリティ機能",
	"wallets_free": "100%無料",
	"wallets_coldcard_mk5_costs": "価格$189",
	"wallets_coldcard_q_costs": "価格$289",
	"wallets_blockstream_jade_costs": "価格$79",
	"wallets_foundation_passport_costs": "価格$199",
	"wallets_seedsigner_costs": "部品代$50",
	"wallets_very_affordable": "非常にお手頃",
	"wallets_pair_with_phone": "スマートフォンとペアリング",
	"wallets_battery": "充電式バッテリー",
	"wallets_build_your_own": "自分で組み立てる",
	"wallets_qwerty_keyboard": "フルQWERTYキーボード",
	"wallets_qr_scanner": "QRコードスキャナー"
});

// buy
writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "ビットコインの購入方法 - ステップバイステップガイド",
	"buy_header": "ビットコインの購入方法",
	"buy_intro_c1": "初めてビットコインを購入するのは大変に感じるかもしれませんが、ステップに分けると実際にはとてもシンプルです。",
	"buy_intro_c2": "このガイドでは、ビットコインを安全に購入し、自分のウォレットに保管するプロセスを説明します。",
	"buy_step_1_header": "ステップ1：国を選択する",
	"buy_step_1_description": "国によって利用可能なビットコイン購入オプションが異なります。あなたの国を選択して最適なオプションを確認しましょう。",
	"buy_search_countries": "国を検索",
	"buy_country_united_states": "アメリカ合衆国", "buy_country_australia": "オーストラリア", "buy_country_austria": "オーストリア", "buy_country_belgium": "ベルギー", "buy_country_brazil": "ブラジル", "buy_country_canada": "カナダ", "buy_country_france": "フランス", "buy_country_germany": "ドイツ", "buy_country_ireland": "アイルランド", "buy_country_italy": "イタリア", "buy_country_netherlands": "オランダ", "buy_country_new_zealand": "ニュージーランド", "buy_country_spain": "スペイン", "buy_country_united_kingdom": "イギリス", "buy_country_argentina": "アルゼンチン", "buy_country_chile": "チリ", "buy_country_colombia": "コロンビア", "buy_country_costa_rica": "コスタリカ", "buy_country_czech_republic": "チェコ共和国", "buy_country_denmark": "デンマーク", "buy_country_el_salvador": "エルサルバドル", "buy_country_estonia": "エストニア", "buy_country_finland": "フィンランド", "buy_country_greece": "ギリシャ", "buy_country_guatemala": "グアテマラ", "buy_country_hong_kong": "香港", "buy_country_hungary": "ハンガリー", "buy_country_iceland": "アイスランド", "buy_country_india": "インド", "buy_country_israel": "イスラエル", "buy_country_japan": "日本", "buy_country_latvia": "ラトビア", "buy_country_lithuania": "リトアニア", "buy_country_luxembourg": "ルクセンブルク", "buy_country_malta": "マルタ", "buy_country_mexico": "メキシコ", "buy_country_norway": "ノルウェー", "buy_country_panama": "パナマ", "buy_country_poland": "ポーランド", "buy_country_portugal": "ポルトガル", "buy_country_romania": "ルーマニア", "buy_country_singapore": "シンガポール", "buy_country_slovakia": "スロバキア", "buy_country_slovenia": "スロベニア", "buy_country_south_africa": "南アフリカ", "buy_country_south_korea": "韓国", "buy_country_sweden": "スウェーデン", "buy_country_switzerland": "スイス", "buy_country_thailand": "タイ", "buy_country_turkey": "トルコ", "buy_country_ukraine": "ウクライナ", "buy_country_uruguay": "ウルグアイ",
	"buy_step_2_header": "ステップ2：支払い方法を選択する",
	"buy_step_2_description": "ビットコインを購入するには主に2つの方法があります：銀行振込と現金。それぞれに異なる利点があります。",
	"buy_method_bank_transfer": "銀行振込",
	"buy_method_bank_fast": "迅速＆簡単",
	"buy_method_bank_less_private": "プライバシーが低い",
	"buy_method_bank_description": "銀行振込はビットコインを購入する最も一般的な方法です。迅速で便利であり、通常は手数料が低いです。",
	"buy_method_choose_bank": "銀行振込を選択",
	"buy_method_cash": "現金",
	"buy_method_cash_private": "よりプライベート",
	"buy_method_cash_limited": "限られたオプション",
	"buy_method_cash_description": "現金での購入はよりプライバシーが高いですが、オプションが少なく、対面取引やビットコインATMの使用が必要な場合があります。",
	"buy_method_choose_cash": "現金を選択",
	"buy_step_3_header": "ステップ3：購入オプション",
	"buy_step_3_description": "あなたの国と支払い方法に基づく最適なビットコイン購入オプションはこちらです：",
	"buy_platform_recommended": "おすすめ",
	"buy_platform_strike_description": "Strikeは低手数料と即時ライトニングネットワーク対応で、ビットコインを購入する最も迅速で簡単な方法です。",
	"buy_platform_swan_description": "Swan Bitcoinはドルコスト平均法と教育リソースを備えたビットコイン専用サービスを提供しています。",
	"buy_platform_river_description": "Riverはビットコインの購入、マイニング、カストディサービスを教育とセキュリティに重点を置いて提供しています。",
	"buy_platform_coinsquare_description": "Coinsquareは強力な規制遵守と顧客サポートを備えたカナダのビットコイン取引所です。",
	"buy_platform_kraken_description": "Krakenは高度な取引機能と強力なセキュリティを備えた老舗のビットコイン取引所です。",
	"buy_platform_atm_description": "ビットコインATMでは現金で即座にビットコインを購入できます。Coin ATM Radarで近くのATMを探しましょう。",
	"buy_platform_bisq_description": "Bisqは本人確認なしでプライベートなビットコイン取引を可能にする分散型ピアツーピア取引所です。",
	"buy_platform_feature_instant": "即時購入",
	"buy_platform_feature_low_fees": "低手数料",
	"buy_platform_feature_lightning": "ライトニングネットワーク",
	"buy_platform_feature_dca": "ドルコスト平均法",
	"buy_platform_feature_education": "教育リソース",
	"buy_platform_feature_withdrawal": "簡単な引き出し",
	"buy_platform_feature_mining": "ビットコインマイニング",
	"buy_platform_feature_custody": "カストディサービス",
	"buy_platform_feature_canadian": "カナダ特化",
	"buy_platform_feature_regulated": "規制された取引所",
	"buy_platform_feature_support": "カスタマーサポート",
	"buy_platform_feature_established": "老舗プラットフォーム",
	"buy_platform_feature_security": "強固なセキュリティ",
	"buy_platform_feature_advanced": "高度な機能",
	"buy_platform_feature_cash": "現金購入",
	"buy_platform_feature_anonymous": "より匿名性が高い",
	"buy_platform_feature_p2p": "ピアツーピア",
	"buy_platform_feature_private": "プライベート取引",
	"buy_platform_feature_decentralized": "分散型",
	"buy_platform_relai_description": "Relaiはスイスのビットコイン専用アプリで、自己管理ウォレット、自動投資機能、ヨーロッパユーザー向けの低手数料を提供しています。",
	"buy_platform_feature_bitcoin_only": "ビットコイン専用",
	"buy_platform_feature_self_custody": "自己管理ウォレット",
	"buy_platform_feature_auto_invest": "自動投資プラン",
	"buy_platform_feature_european": "ヨーロッパ特化",
	"buy_step_4_header": "ステップ4：ビットコインを安全に保管する",
	"buy_step_4_c1": "ビットコインを購入した後、最も重要なステップは秘密鍵を自分で管理する自分のウォレットに移すことです。",
	"buy_step_4_c2": "取引所にビットコインを置いたままにするのはリスクがあります。なぜなら、実際にはビットコインを所有しているのはあなたではなく取引所だからです。",
	"buy_step_4_c3": "自分の秘密鍵を管理すれば、ビットコインの真の所有権を持ち、誰もそれを奪うことはできません。",
	"buy_step_4_c4": "あなたのニーズに合った適切なビットコインウォレットの選び方を学びましょう：",
	"buy_cta_wallets": "ビットコインウォレットガイドを見る"
});

// lightning
writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "ビットコインライトニングウォレットガイド",
	"lightning_description": "ライトニングウォレットにより、個人の主権を維持しながらビットコインを迅速かつ安価に送ることができます。",
	"lightning_header": "ライトニングウォレットガイド",
	"lightning_s1_c1": "ライトニングにより、ビットコインの支払いを迅速かつ安価に送ることができます。",
	"lightning_s1_c2": "ライトニングの使用にはトレードオフがあることを知っておくことが重要です。より速く、より安いビットコイン決済と引き換えに、セキュリティの一部を犠牲にすることがよくあります。",
	"lightning_s1_c3": "一般的に、ライトニングは少額のビットコインにのみ使用すべきです。大量のビットコインはハードウェアウォレットにのみ保管すべきです。",
	"lightning_s1_c4": "詳しくはハードウェアウォレットガイドをご覧ください。",
	"lightning_s1_c5": "すべてのライトニングウォレットが同じではありません。1つのシンプルな質問をすることで、自分にとって適切なトレードオフのバランスを持つウォレットを判断できます：",
	"lightning_question_1": "自分に適切なトレードオフのバランスは？",
	"lightning_s2_c1": "ビットコインの革新の一つは、銀行のようなカストディアンに頼ることなく保管できる能力です。自己管理ウォレットはビットコインの全力を引き出します。",
	"lightning_s2_c2": "自己管理ウォレットでは、あなただけがお金を使ったり転送したりする能力を持ちます。誰もあなたを止めたり、検閲したり、盗んだりすることはできません。これらは非カストディアルウォレットとも呼ばれます。",
	"lightning_s2_c3": "ライトニングを最も主権的に使う方法は、自分のノードを運用することです。",
	"lightning_s2_c4": "このガイドは自分のノードを必要としないシンプルなライトニングウォレットに焦点を当てています。",
	"lightning_s2_c5": "非カストディアルのライトニングウォレットを使っていても、ウォレット作成者が悪意のあるアプリ更新をプッシュして資金を盗まないことを信頼していることを知っておくことが重要です。",
	"lightning_s3_c1": "カストディアルウォレットは、あなたがお金をコントロールしていないウォレットです。",
	"lightning_s3_c2": "これらのウォレットは銀行システムに近く、第三者がお金へのアクセスを提供してくれることを信頼する必要があります。ビットコインが取引所にある場合、カストディアルウォレットを使用しています。",
	"lightning_s3_c3": "カストディアルウォレットは便利に見えるかもしれませんが、カストディアンはいつでもすべてのユーザー資金を盗む技術的な能力を持っています。",
	"lightning_s3_c4": "使いやすさのために、少額のビットコインにカストディアルライトニングウォレットを好む人もいます。ただし覚えておいてください：鍵がなければコインもなし！",
	"lightning_question_2": "ウォレットを選ぶ",
	"lightning_s4_c1": "これらすべてを念頭に置いて、自分にとって適切なトレードオフのバランスを持つライトニングウォレットを選びましょう。",
	"phoenix": "PHOENIX",
	"breez": "BREEZ",
	"mutiny_wallet": "MUTINY WALLET",
	"wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "豊富な機能",
	"lightning_mobile_app": "モバイルアプリ",
	"lightning_free": "100%無料",
	"lightning_merchants": "加盟店に最適",
	"lightning_starter": "おすすめの初心者ウォレット",
	"lightning_browser": "ブラウザベース",
	"lightning_custodial": "完全カストディアルウォレット",
	"lightning_cta_hardware": "ビットコインハードウェアウォレットガイドをお探しですか？"
});

// stickers
writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "bitcoin.rocksの無料ビットコインステッカー",
	"stickers_description": "公共の場所にビットコインステッカーを貼って、周りの人をオレンジピルしよう。",
	"stickers_header": "無料ビットコインステッカー",
	"stickers_choose_header": "ステッカーパックを選ぼう",
	"stickers_choose_c1": "私たちの使命は、公共の場所にビットコインステッカーを貼ることで、より多くの人をオレンジピルするお手伝いをすることです。すべてのステッカーには教育ページにリンクするQRコードが付いています：",
	"stickers_choose_c2": "ビットコイン",
	"stickers_choose_c3": "インフレ",
	"stickers_choose_c4": "下からステッカーパックを選んでください",
	"stickers_text_pack": "テキストパック",
	"stickers_signs_pack": "サインパック",
	"stickers_instructions_1": "住所を入力すると、無料のビットコインステッカーパックを郵送でお届けします！ステッカーは白い封筒で発送されます。",
	"stickers_instructions_2": "住所データはステッカーの発送後に削除されます。",
	"stickers_share_header": "ステッカースポットを共有しよう",
	"stickers_share_c1": "Nostrでステッカースポットを共有し、他の人がステッカーをどこに貼っているか見ましょう。",
	"stickers_btn_share_on_nostr": "NOSTRで共有する",
	"stickers_btn_what_is_nostr": "NOSTRとは？",
	"stickers_flyers_link_before": "ついでに、自分で",
	"stickers_flyers_link_text": "ビットコインチラシ",
	"stickers_flyers_link_after": "を印刷して掲示し、さらに多くの人をオレンジピルしよう。",
	"stickers_country_global_print": "グローバル — 自分で印刷する",
	"stickers_country_global_order": "グローバル — まとめて注文する",
	"placeholder_name_optional": "名前（任意）",
	"placeholder_address_line_1": "住所1",
	"placeholder_address_line_2": "住所2（任意）",
	"placeholder_city": "市区町村",
	"placeholder_state": "都道府県",
	"placeholder_province": "州",
	"placeholder_zip_code": "郵便番号",
	"placeholder_postal_code": "郵便番号",
	"placeholder_language": "言語",
	"placeholder_which_stickers": "どのステッカー？",
	"placeholder_email_optional": "通知を受け取るメールアドレスを入力（任意）"
});

// postcards
writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "bitcoin.rocksの無料ビットコインポストカード",
	"postcards_description": "無料のビットコインポストカードパックを入手して、知り合いにビットコインを紹介しよう。",
	"postcards_header": "ポストカードプログラムは終了しました",
	"postcards_program_closed_message": "無料ビットコインポストカードプログラムは終了しました。郵便を通じてビットコイン教育を広めることに参加してくださった皆様、ありがとうございました！",
	"postcards_sticker_alternative_header": "代わりに無料ビットコインステッカーを入手しよう",
	"postcards_sticker_alternative_message": "無料ステッカープログラムでビットコインの認知度を広め続けましょう！ビットコインステッカーは公共の場所での共有に最適で、教育コンテンツにリンクするQRコードが付いています。",
	"postcards_sticker_cta": "無料ステッカーを入手",
	"postcards_step_2": "ポストカードの見た目",
	"postcards_instructions_4": "知り合いにビットコインを紹介しやすくするために、これらのポストカードを作りました！住所とスタンプを追加してポストカードを投函するだけです。",
	"postcards_instructions_5": "私たちの使命はビットコインの普及を加速することです。無料ステッカーを入手して公共の場所に貼ることでお手伝いいただけます！",
	"postcards_instructions_6": "ビットコインについてもっと学ぶことで恩恵を受ける人は周りにいるはずです。今日、ビットコインステッカーを共有しましょう！"
});

// signs
writeFile(`signs_${lang}.json`, {
	"signs_description": "アメリカ中にビットコインの看板を設置するお手伝いをしてください！",
	"signs_title": "bitcoin.rocksの無料ビットコイン看板",
	"signs_choose_header": "アメリカ中にビットコインの看板を設置するお手伝いをしていただき、ありがとうございます！",
	"signs_choose_c1": "看板はすべてなくなりました！私たちの使命は教育を通じてビットコインの普及を加速することです。",
	"signs_choose_c2": "多くの皆さんが無料のビットコイン看板を公共の場所に設置することでお手伝いしてくれました。すべての看板には教育ページにリンクするQRコードが付いています：",
	"signs_choose_c3": "インフレ",
	"signs_choose_c4": "素晴らしいコミュニティのおかげで、何千人もの人々にリーチし、ビットコインの世界への最初の一歩を踏み出すお手伝いができました。",
	"signs_share_header": "看板スポットを共有しよう",
	"signs_share_c1": "Nostrで看板スポットの写真を共有し、他の人がどこに看板を設置しているか見ましょう。",
	"signs_btn_share_on_nostr": "NOSTRで共有する",
	"signs_btn_what_is_nostr": "NOSTRとは？",
	"signs_instructions_1": "住所を入力すると、ビットコイン看板10枚を箱で郵送でお届けします！",
	"signs_instructions_2": "住所データは看板の発送後に削除されます。"
});

// flyers
writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "bitcoin.rocksの無料ビットコインチラシ",
	"flyers_description": "ビットコインチラシを自宅で印刷して公共の場所に掲示し、周りの人をオレンジピルしよう。",
	"flyers_header_1": "印刷して掲示しよう",
	"flyers_header_2": "ビットコインチラシ",
	"flyers_intro_header": "ビットコインチラシの印刷と掲示方法",
	"flyers_intro_c1": "私たちの使命は、公共の場所にビットコインチラシを掲示することで、より多くの人をオレンジピルするお手伝いをすることです。このチラシには",
	"flyers_intro_c2": "教育的なビットコインウェブサイト",
	"flyers_intro_c3": "インフレ",
	"flyers_intro_c4": "このチラシを自宅や印刷ショップで印刷してください。その後、掲示板、街中の電柱、その他人々が見てビットコインについて学べる公共の場所に掲示してください。",
	"flyers_intro_c5": "ついでに、私たちの",
	"flyers_intro_c6": "無料ビットコインステッカー",
	"flyers_intro_c7": "もリクエストして、さらに多くの人をオレンジピルしましょう。",
	"flyers_btn_download": "チラシをダウンロード",
	"flyers_btn_print": "チラシを印刷",
	"flyers_share_header": "チラシスポットを共有しよう",
	"flyers_share_c1": "Nostrでチラシスポットを共有し、他の人がチラシをどこに掲示しているか見ましょう。",
	"flyers_btn_share_on_nostr": "NOSTRで共有する",
	"flyers_btn_what_is_nostr": "NOSTRとは？"
});

// get-involved
writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "参加してビットコインを広めよう",
	"get_involved_description": "無料のリソースでビットコインの普及を簡単にします。",
	"get_involved_header": "参加しよう",
	"get_involved_header_2": "ビットコインを広めよう",
	"get_involved_intro_1": "現在の世界の状態に暮らすのは憂鬱になることがあります。",
	"get_involved_intro_2": "私たちのお金は壊れています。その結果、社会の基本的な部分も壊れています。",
	"get_involved_intro_3": "すでにビットコインに関わっているなら、ビットコインがもたらす希望の感覚を知っているでしょう。より良いお金によって可能になるより明るい未来への希望。",
	"get_involved_intro_4": "しかし、あなたの周りの多くの人はビットコインについて知りません。あなたと同じ壊れた世界に暮らしていますが、暗闘を乗り越えるための希望の光がありません。",
	"get_involved_intro_5": "しかし、あなたはそれを変えることができます。ビットコインがもたらす希望を周りの人に広めるための無料リソースをいくつか用意しました。",
	"get_involved_sticker_header": "公共の場所にステッカーを貼る",
	"get_involved_sticker_content_1": "誰とも交流せずに、周りの人にビットコインについて教育するお手伝いができます。無料のビットコインステッカーを公共の場所に貼るだけです。",
	"get_involved_sticker_content_2": "毎月何百人もの人がこれらのステッカーのQRコードをスキャンしています。インフレステッカーは",
	"get_involved_sticker_content_3": "インフレ対策としてのビットコイン",
	"get_involved_sticker_content_4": "についてのページにリンクしています。他のステッカーは",
	"get_involved_sticker_content_5": "ビットコインがより良い世界を築いている",
	"get_involved_sticker_content_6": "ことを示す教育ホームページにリンクしています。これらのステッカーを人々の目に留まるコミュニティの場所に貼ることで、周りの人がビットコインの世界への最初の一歩を踏み出すお手伝いができます。",
	"get_involved_request_a": "リクエストする",
	"get_involved_sticker_pack": "ステッカーパック",
	"get_involved_postcard_header": "ポストカードを送る",
	"get_involved_postcard_content_1": "知り合いに無料のポストカードを送ることで、ビットコインの希望を広めるお手伝いができます。",
	"get_involved_postcard_content_2": "各ポストカードの裏面には、ビットコインについての説得力のある説明文と詳しく学ぶためのQRコードが付いています。",
	"get_involved_postcard_content_3": "誰かにビットコインのポストカードを送ることで、ビットコインを新しい視点から見てもらうお手伝いができます。",
	"get_involved_postcard_pack": "ポストカードパック",
	"get_involved_business_header": "ビジネスを参加させる",
	"get_involved_business_content_1": "ビットコイン循環経済の構築に貢献したいですか？ビットコインビジネスキットで、ビジネスにビットコイン決済の受け入れについてアプローチするのが簡単になります。",
	"get_involved_business_content_2": "各ビジネスキットには、ビットコイン決済を受け入れるメリットを強調するチラシが含まれています。各チラシにはさまざまな",
	"get_involved_business_content_3": "無料のビットコインビジネスリソース",
	"get_involved_business_kit": "ビジネスキット"
});

console.log('\nDone! Content files created for Japanese (ja).');

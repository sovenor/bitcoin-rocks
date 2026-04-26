#!/usr/bin/env node
/**
 * Japanese (ja) manifest refresh — non-inflation namespaces, part 1.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "ホームに戻る",
	"404::404_message": "ビットコインはイケてるけど、この壊れたページはイケてない。",
	"404::404_not_found_short": "見つかりませんでした",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"地元の店舗がビットコイン決済を簡単に導入できるよう、無料のビジネス向けリソースを提供しています。私たちのビットコイン・ビジネス・ページでは、ビットコインがビジネスに役立つ理由、ウォレットとPOSの選び方を解説し、無料の「ビットコインで支払えます」ステッカーを提供しています。",
	"about::about_card_business_label": "ビジネス向けリソース",
	"about::about_card_business_source": "出典：bitcoin.rocks →",
	"about::about_card_business_title":
		"ビジネスがビットコイン決済を始めるために必要なすべて",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "出典：GitHub →",
	"about::about_card_contact_github_title":
		"github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "貢献する",
	"about::about_card_contribute_source": "出典：GitHub →",
	"about::about_card_contribute_title":
		"bitcoin.rocks に貢献する方法を学ぶ",
	"about::about_card_email_label": "メール",
	"about::about_card_email_source": "出典：メール →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "印刷可能なチラシ",
	"about::about_card_flyers_source": "出典：bitcoin.rocks →",
	"about::about_card_flyers_title":
		"あなたのコミュニティ用のビットコイン・チラシをダウンロードして印刷",
	"about::about_card_github_label": "リポジトリ",
	"about::about_card_github_source": "出典：GitHub →",
	"about::about_card_github_title": "GitHub で bitcoin.rocks を見る",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "出典：Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "無料ステッカー",
	"about::about_card_stickers_source": "出典：bitcoin.rocks →",
	"about::about_card_stickers_title":
		"無料のビットコイン・ステッカーを自宅にお届け",
	"about::about_editorial_2":
		"私たちは、米連邦準備制度（FRED）、米国労働統計局、FDIC、国際連合、ワールド・ゴールド・カウンシル、Forbes、MIT Technology Review、Lyn Alden、James Lavish などの信頼できる情報源にリンクしています。事実が明確に提示されれば、ビットコインは自ら語ると信じています。",
	"about::about_flyers_blurb":
		"私たちは、ミートアップで配布したり、コミュニティの掲示板に貼ったり、ポストに投函したりできる印刷用チラシをデザインしています — 好奇心を呼び起こし、bitcoin.rocks で詳しく学んでもらうためのシンプルな方法です。",
	"about::about_header": "bitcoin.rocks について",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks は",
	"about::about_mission_1b":
		"によって 2022 年に、シンプルな使命のもとで設立されました：教育を通じてビットコインの普及を加速させること。",
	"about::about_open_source_2":
		"bitcoin.rocks は、MIT ライセンスのもとで提供される無料のオープンソース・プロジェクトです。誰でも bitcoin.rocks に貢献できます。特に、世界中の人々にコンテンツを届ける手助けをしてくれる翻訳者を歓迎しています。",
	"about::about_page_description":
		"bitcoin.rocks は、2022 年に設立された無料・オープンソースのビットコイン教育サイトです。私たちの使命は、教育を通じてビットコインの普及を加速させることです。",
	"about::about_stickers_blurb":
		"無料のビットコイン・ステッカーをご自宅にお届けします。あなたのコミュニティでビットコインの認知を広げるのに役立ちます。毎月数百人の人々がこれらのステッカーの QR コードをスキャンしてビットコインについて学んでいます。",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"ビットコインには取り付け騒ぎがありません",
	"bank-runs::bank_runs_bitcoin_p1":
		"ビットコインは完全準備制のシステムです。あなたは銀行にお金を預けているのではありません。あなた自身が銀行になります。あなたの知らないところであなたのお金が貸し出されることはありません。なぜなら、あなただけがあなたのお金にアクセスできるからです。",
	"bank-runs::bank_runs_bitcoin_p2":
		"取引所や ETF にラップされた形ではなく、自分のウォレットでビットコインを保有している限り、取り付け騒ぎは起こり得ません。",
	"bank-runs::bank_runs_bitcoin_p3":
		"ビットコインなら、本当の意味で自分のお金をコントロールできます。",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"2020 年 3 月 26 日以降、米国の銀行は準備金を 0% で保有することが認められています。",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"銀行の準備率",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"出典：米連邦準備制度 →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"完全準備制 — 預金保険は不要です。",
	"bank-runs::bank_runs_card_btc_fdic_label": "ビットコインの保護",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"出典：ビットコイン・ホワイトペーパー →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"すべてのビットコインはオンチェーンに存在し、貸し出されることはありません。",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"ビットコインの準備率",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"出典：ビットコイン・ホワイトペーパー →",
	"bank-runs::bank_runs_card_fdic_detail":
		"1,539 億ドルの保険基金に対し、保護対象の預金は 10 兆 8,200 億ドル（2025 年 12 月）。",
	"bank-runs::bank_runs_card_fdic_label": "FDIC の保護",
	"bank-runs::bank_runs_card_fdic_source":
		"出典：FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "ケーススタディ",
	"bank-runs::bank_runs_card_svb_source":
		"出典：ワシントン大学ロースクール →",
	"bank-runs::bank_runs_card_svb_title":
		"シリコンバレー銀行の取り付け騒ぎがどう起こったかを学ぶ",
	"bank-runs::bank_runs_card_wallet_label": "次のステップ",
	"bank-runs::bank_runs_card_wallet_source": "ここから始める →",
	"bank-runs::bank_runs_card_wallet_title":
		"自分のビットコイン・ウォレットを手に入れる方法を学ぶ",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC 保険は預金の約 1% しかカバーしていません",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC 保険は預金者一人あたり 25 万ドルまでの預金を保護します。しかし、その保険基金は保護すべき総預金額に比べて非常に小さいのです。",
	"bank-runs::bank_runs_fdic_p2_a":
		"大規模な銀行破綻が起きた場合、政府は不足分を埋めるためにお金を刷る可能性が高く、その結果さらなる",
	"bank-runs::bank_runs_fdic_p2_link": "インフレ。",
	"bank-runs::bank_runs_header":
		"ビットコインには取り付け騒ぎがありませんが、あなたの銀行にはあるかもしれません。",
	"bank-runs::bank_runs_page_description":
		"銀行は部分準備銀行制度のもとで、あなたの預金を貸し出しています。一度に多くの人が引き出すと、銀行は破綻する可能性があります。ビットコインは完全準備制のシステムであり、取り付け騒ぎは起こり得ません。",
	"bank-runs::bank_runs_svb_heading":
		"シリコンバレー銀行：実際の例",
	"bank-runs::bank_runs_svb_p1_a":
		"2023 年 3 月、シリコンバレー銀行は顧客の預金を長期の",
	"bank-runs::bank_runs_svb_p1_b":
		"これらの債券が価値を失ったとき、SVB は引き出しに対応できませんでした。銀行は支払不能に陥りました。",
	"bank-runs::bank_runs_svb_p1_link": "国債。",
	"bank-runs::bank_runs_svb_p2":
		"何千もの企業が従業員に給料を支払えなくなりました。FDIC が介入しましたが、それはより大きな疑問を提起しました：あなたのお金は本当に安全なのか？",
	"bank-runs::bank_runs_what_p1":
		"銀行はあなたの預金を金庫に保管しているわけではありません。彼らはあなたのお金を貸し出し、投資します — それが部分準備銀行制度と呼ばれるものです。",
	"bank-runs::bank_runs_what_p2":
		"あまりにも多くの人が同時に引き出そうとすると、銀行はみんなに支払うのに十分な現金を持っていません。それが取り付け騒ぎです — そして銀行を完全に崩壊させる可能性があります。",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">銀行</span>の違い',
	"bitcoin-vs-banks::point_1_summary_1":
		"インターネット接続があれば誰でもビットコインを使えます — それは",
	"bitcoin-vs-banks::point_1_summary_2": "許可不要です。",
	"bitcoin-vs-banks::point_1_summary_3":
		"銀行はポリシーや政府の規則に基づいて口座を拒否、凍結、または閉鎖できます。",
	"bitcoin-vs-banks::point_2_summary_1":
		"ビットコイン・ネットワークはメンテナンス時間や祝日なしで 24 時間 365 日稼働しています。銀行は営業時間が限られ、週末は休みで、システム停止の時間帯もあります。",
	"bitcoin-vs-banks::point_3_summary_1":
		"すべてのビットコイン取引は、誰でも監査できる公開ブロックチェーン上にあります。銀行は顧客が独立して検証できないプライベートな帳簿を運営しています。",
	"bitcoin-vs-banks::point_4_summary_1":
		"ビットコインなら、自分の秘密鍵を自分で保管します — 私たちのシンプルな",
	"bitcoin-vs-banks::point_4_summary_2": "ビットコイン・ウォレット",
	"bitcoin-vs-banks::point_4_summary_3":
		"ガイドをご覧ください。銀行はあなたのお金を保管し、いつでも凍結、制限、制約することができます。",
	"bitcoin-vs-banks::point_5_summary_1":
		"ビットコインの手数料は透明で予測可能です。銀行は時間の経過とともに、隠れた口座手数料、当座貸越手数料、送金手数料、ATM 手数料を積み上げます。",
	"bitcoin-vs-banks::point_6_summary_1":
		"ビットコインでは、実際に所有しているものだけを使うことができます。銀行は当座貸越を許可し、その特権に対して連鎖的なペナルティ手数料を請求します。",
	"bitcoin-vs-banks::point_7_summary_1":
		"いったんブロードキャストされると、ビットコイン取引は停止または取り消しできません。銀行はポリシーや政府の命令に基づいて取引をブロック、凍結、取り消すことができます。",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">債券</span>の違い',
	"bitcoin-vs-bonds::point_1_summary_1":
		"債券が「リスクフリー」なのは名目上だけです — インフレ、金利の動き、デフォルトリスクのすべてが実質リターンを蝕みます。",
	"bitcoin-vs-bonds::point_1_summary_2":
		"ビットコインには透明なボラティリティがありますが、隠れたカウンターパーティリスクはありません。",
	"bitcoin-vs-bonds::point_2_summary_1": "",
	"bitcoin-vs-bonds::point_2_summary_2": "インフレ",
	"bitcoin-vs-bonds::point_2_summary_3":
		"が債券利回りを上回ると、債券保有者は毎年実質購買力を失います。ビットコインの 2,100 万枚の上限は、インフレで価値を失うことがありません。",
	"bitcoin-vs-bonds::point_3_summary_1":
		"債券市場は危機の際に凍結する可能性があります — シリコンバレー銀行は、価値を失った債券を抱え込んだことが一因で崩壊しました。",
	"bitcoin-vs-bonds::point_3_summary_2": "取り付け騒ぎ",
	"bitcoin-vs-bonds::point_3_summary_3":
		"がどう起こり、なぜビットコインがそれを回避するかをご覧ください。ビットコインは流動性危機なしに 24 時間 365 日グローバルに取引されます。",
	"bitcoin-vs-bonds::point_4_summary_1":
		"国債入札は買い手が十分にいないときに失敗することがあります — ご覧ください",
	"bitcoin-vs-bonds::point_4_summary_2": "2022 年の弱い入札を。",
	"bitcoin-vs-bonds::point_4_summary_3":
		"ビットコインの価格は、失敗し得る中央入札なしに、オープン市場で継続的に発見されます。",
	"bitcoin-vs-bonds::point_5_summary_1":
		"債券の利回りは購入時に固定されます。経済が好況になっても、通貨が崩壊しても、あなたのリターンは変わりません。",
	"bitcoin-vs-bonds::point_5_summary_2":
		"ビットコインは、普及が進み需要が固定供給と出会うにつれて、大幅な価値上昇の余地があります。",
	"bitcoin-vs-bonds::point_6_summary_1":
		"ほとんどの債券は銀行やブローカーを通じて保有されており、カウンターパーティリスクが加わります。ビットコインは",
	"bitcoin-vs-bonds::point_6_summary_2": "ウォレット",
	"bitcoin-vs-bonds::point_6_summary_3":
		"で自己管理でき、そのリスクを完全に排除できます。",
	"bitcoin-vs-bonds::point_7_summary_1":
		"債券は、政府が返済することに完全に依存しています。政府がデフォルトしたり、債務をインフレで帳消しにしたりすると、債券保有者は損失を被ります。",
	"bitcoin-vs-bonds::point_7_summary_2":
		"ビットコインは、いかなる政府や政治的権威からも独立して運営されています。",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">現金</span>の違い',
	"bitcoin-vs-cash::point_1_summary_1":
		"ビットコインはインターネット経由で世界中どこへでも数分で移動します。現金には物理的な存在か信頼できる運び手が必要です — 20 ドル札をメールで送ることはできません。",
	"bitcoin-vs-cash::point_2_summary_1":
		"ビットコインはどこでも同じように機能します。現金は地理、為替レート、地域の受け入れに制限されます。",
	"bitcoin-vs-cash::point_3_summary_1":
		'政府は一夜にして現金を無効化することができます — <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">インド</a>は 2016 年にそれを行いました。通貨無効化がなくても、現金は',
	"bitcoin-vs-cash::point_3_summary_2": "インフレ",
	"bitcoin-vs-cash::point_3_summary_3":
		"によって価値を失います。ビットコインはいかなる政府や機関によっても無効化できません。",
	"bitcoin-vs-cash::point_4_summary_1":
		"現金は、時に巧妙に偽造される可能性があります。ビットコインは偽造を数学的に不可能にする暗号技術を使用しています。",
	"bitcoin-vs-cash::point_5_summary_1":
		"ビットコインには中央権威がありません。現金は政府が発行し、自由に増刷したり、デザインを変更したり、紙幣を無効にしたりできます。",
	"bitcoin-vs-cash::point_6_summary_1":
		"現金は盗難、火災、紛失、没収に脆弱です。ビットコインは",
	"bitcoin-vs-cash::point_6_summary_2": "自己管理",
	"bitcoin-vs-cash::point_6_summary_3":
		"でスマートフォンやハードウェアデバイスに安全に保管できます。",
	"bitcoin-vs-cash::point_7_summary_1":
		"ビットコインは 1 億サトシに分割でき、あらゆるサイズのマイクロペイメントが可能です。現金には最小単位があります — 1 セントを分割することはできません。",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">CBDC</span>の違い',
	"bitcoin-vs-cbdc::point_10_summary_1":
		"ビットコインはこれまでに構築された中で最も安全なコンピューティング・ネットワークであり、一度もハッキングされたことがありません。CBDC は何度もハッキングされてきた銀行と政府に依存しています。",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"ビットコインで取引することを誰もあなたから止めることはできません。CBDC は、政府と中央銀行があらゆる支払いを管理できるように設計されており、あなたのプライバシーと自由を制限します。",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"ビットコインには有効期限がなく、月額料金もありません。CBDC は有効期限が切れるようにプログラムでき、将来のための貯蓄を妨げる可能性があります。",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"ビットコインには 2,100 万 BTC のハードキャップがあります。CBDC には供給上限がなく、政府が好きなだけお金を増やせます — それが",
	"bitcoin-vs-cbdc::point_3_summary_2": "インフレ",
	"bitcoin-vs-cbdc::point_3_summary_3":
		"を引き起こします。",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"ビットコインのアドレスはあなたの実名とは紐付けられません。CBDC は政府発行の身分証に直接リンクされており、大規模な金融監視と検閲を可能にします。",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"ビットコインのルールは、何万もの独立したノードによって検証されます。CBDC は政府と中央銀行の手に集中しており、ネットワークの完全な支配権を握っています。",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"誰でもビットコイン・ノードを運用してネットワークのルールを検証できます。CBDC ではユーザーがノードを運用することは許されません — 中央権威を信頼するしかありません。",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"自己管理されたビットコインは誰にも凍結されません。CBDC は政府と中央銀行が瞬時に口座を凍結できるように設計されています。",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"ビットコインは、",
	"bitcoin-vs-cbdc::point_8_summary_2": "ウォレット",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"で自己管理するとき、あなたのお金の完全なコントロールを与えてくれます。CBDC は銀行や政府のような管理者を信頼してお金を保管してもらう必要があります。",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"ビットコインの金融政策はコードに固定されており、変更できません。CBDC は政治家によって自由に再プログラムでき、お金を刷り過ぎると",
	"bitcoin-vs-cbdc::point_9_summary_2": "インフレ",
	"bitcoin-vs-cbdc::point_9_summary_3":
		"を引き起こします。",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_point_7": "反脆弱",
	"bitcoin-vs-crypto::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">暗号資産</span>の違い',
	"bitcoin-vs-crypto::point_1_summary_1":
		"ビットコインのプロトコルは 2009 年以来根本的に変わっておらず、予測可能なルールを提供しています。ほとんどの暗号資産プロジェクトはプロトコルやトークノミクスを絶えず変更したり、新しいバージョンへフォークしたりします。",
	"bitcoin-vs-crypto::point_2_summary_1":
		"ビットコインは世界中の何万もの独立したノード上で稼働しています。ほとんどの暗号資産プロジェクトは財団、企業、または小規模な開発チームによって管理されており、彼らは一方的な変更を加えることができます。",
	"bitcoin-vs-crypto::point_3_summary_1":
		"ビットコインには 2,100 万コインのハードキャップがあります — 最も希少なデジタル資産です。ほとんどの暗号資産プロジェクトには無制限の供給量や、新しいトークンを自由に発行するメカニズムがあり、保有者を希薄化させます。",
	"bitcoin-vs-crypto::point_4_summary_1":
		"ビットコインには 1 つの目的があります：ピアツーピアのデジタル通貨。誰でも理解して使うことができます。ほとんどの暗号資産は、安全に使うために技術的な専門知識が必要な複雑なスマートコントラクトや DeFi を含みます。",
	"bitcoin-vs-crypto::point_5_summary_1":
		"ビットコインのプルーフ・オブ・ワークは、メインネットへの攻撃が成功することなく 15 年以上稼働しています。ほとんどの暗号資産プロジェクトは、実戦で検証されていない実験的な合意メカニズムを使用しています。",
	"bitcoin-vs-crypto::point_6_summary_1":
		"ビットコインはデジタル通貨です — 価値の保存手段であり交換手段。ほとんどの暗号資産トークンは、実世界での価値が不明確な投機的なユーティリティ・トークンやガバナンス・トークンです。",
	"bitcoin-vs-crypto::point_7_summary_1":
		"ビットコインは攻撃を受けるたびに強くなり、あらゆる危機、禁止、批判を生き延びてきました。ほとんどの暗号資産プロジェクトは、規制、技術的、または市場の圧力で崩壊します。",
	"bitcoin-vs-crypto::point_8_summary_1":
		"ビットコインには CEO もなく、企業もなく、単一障害点もありません。ほとんどの暗号資産プロジェクトはベンチャーキャピタル、特定のリーダーシップ、または 1 つの企業の存続に依存しています。",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">美術品</span>の違い',
	"bitcoin-vs-fine-art::point_1_summary_1":
		"すべてのビットコインは同一で交換可能です。すべての美術品はユニークです — 創作、歴史、状態、来歴が異なるため、直接比較は非常に困難です。",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"ビットコインは誰でもアクセスできるグローバル市場で 24 時間 365 日取引されます。美術品には専門のオークションハウス、プライベートディーラー、ギャラリーが必要であり、売却までに数ヶ月かかることもあります。",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"ビットコインの売買手数料は 1% 未満で、しばしばずっと少額です。美術品の売買では、買い手プレミアム、コミッション、保険、輸送、鑑定費用で 30〜40% を消費します。",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"ビットコインは 1 億サトシに分割でき、どんなサイズの取引にも最適です。絵画の一部や彫刻の角を、カウンターパーティリスクなしに所有することはできません。",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"ビットコインの所有権と真正性は、誰でもオンチェーンで暗号学的に検証できます。美術品の鑑定は高額で時間がかかり、それでも贋作者にしばしば騙され、作品の価値を一夜で失います。",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"適切にバックアップされたビットコインは、洪水、火災、地震、盗難に耐えます。美術品はあらゆる物理的破壊に脆弱で、保険ですべてをカバーすることはほとんどありません。",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"インターネット接続と少しのお金があれば、誰でもビットコインを買えます。美術品への投資は、オークションへのアクセスと専門知識を持つ富裕なコレクターに事実上限定されます。",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">金</span>の違い',
	"bitcoin-vs-gold::point_1_summary_1":
		"ビットコインは低い手数料でインターネット経由で瞬時に送れます。金は所有権を移転するのに物理的に輸送する必要があります。",
	"bitcoin-vs-gold::point_2_summary_1":
		"ビットコインはインターネット経由で送れるデジタルネイティブの資産です。オンライン金はデジタル IOU です — 金属そのものではなく、保管者からの約束だけを所有しているのです。",
	"bitcoin-vs-gold::point_3_summary_1":
		'ビットコインには 2,100 万 BTC のハードキャップがあります。金の供給は<a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">年間約 1.6%</a>増え、あなたの取り分は縮小します — 法定通貨の',
	"bitcoin-vs-gold::point_3_summary_2": "インフレ",
	"bitcoin-vs-gold::point_3_summary_3":
		"よりは少ないですが、それでもインフレです。",
	"bitcoin-vs-gold::point_4_summary_1":
		"金価格が上がると、より多くの金が採掘され、価格を押し下げます。ビットコインの供給は非弾力的です — 価格がどれだけ高くなっても、永遠に 2,100 万枚しかありません。",
	"bitcoin-vs-gold::point_5_summary_1":
		"何万もの独立したノードがビットコイン・ネットワークを検証しています。ほとんどの物理的な金は、いくつかの大規模な保管庫に置かれています。",
	"bitcoin-vs-gold::point_6_summary_1":
		"誰でもフルノードを運用することで本物のビットコインを検証できます — それは単なるアプリです。物理的な金を検証するには溶かす必要があり、内部はタングステンかもしれません。",
	"bitcoin-vs-gold::point_7_summary_1":
		"ビットコインは 1 億サトシに分割でき、どんなサイズの購入にも最適です。金は小さな取引のために簡単に分割できません。",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">不動産</span>の違い',
	"bitcoin-vs-real-estate::point_1_summary_1":
		"ビットコインは世界中どこへでも瞬時に移動します。不動産は 1 つの場所に固定されており、地域の経済、政治、自然のリスクにさらされます。",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"ビットコインは 1 億サトシに分割できます。不動産は部分的に売却できません — キッチンだけを譲ったり寝室の半分を買ったりすることはできません。",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"ビットコインは政府が管理できない分散型ネットワーク上で運営されます。不動産は厳しく規制されています — ゾーニング、家賃規制、土地収用、差し押さえがすべて適用されます。",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"ビットコインはメンテナンス不要です。不動産は修理、リノベーション、保険、物件管理、テナントの問題などを必要とします。",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"ビットコインには継続的な税金がありません — 売るときにキャピタルゲイン税を払うだけです。不動産は収入に関係なく毎年固定資産税を支払う必要があります。",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"適切にバックアップされたビットコインは、火災、洪水、地震に耐えます。不動産はあらゆる災害に脆弱で、保険ですべてをカバーすることはほとんどありません。",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"すべてのビットコインは同一で交換可能です。すべての物件はユニークであり、価格設定や比較が困難です。",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"ビットコインはインターネット接続のある誰でも 24 時間 365 日グローバルに取引できます。不動産の売却は地元の買い手に限定され、書類手続きで何ヶ月もかかることがあります。",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"ビットコインは誰でも直接的な個人所有を可能にします。自宅を超えた投資としての不動産購入は住宅価格を押し上げ、手頃さを低下させ、住宅危機を煽ります。",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">株式</span>の違い',
	"bitcoin-vs-stocks::point_1_summary_1":
		"ビットコインはあなたが完全に所有する直接資産です。株式は会社の一部です — その価値は、あなたが管理できない経営、業績、決定に依存します。",
	"bitcoin-vs-stocks::point_2_summary_1":
		"ビットコインには 2,100 万 BTC のハードキャップがあります。企業はいつでも新株を発行でき、既存株主を希薄化させます — 法定通貨の",
	"bitcoin-vs-stocks::point_2_summary_2": "インフレ",
	"bitcoin-vs-stocks::point_2_summary_3":
		"が現金を希薄化するのと同じです。ビットコインなら、あなたの取り分は決して縮小しません。",
	"bitcoin-vs-stocks::point_3_summary_1":
		"ビットコインには CEO もなく、単一障害点もありません。株式はリーダーシップに大きく依存しています — 1 つの悪い決定や離脱で価格が暴落することがあります。",
	"bitcoin-vs-stocks::point_4_summary_1":
		"ビットコインの価格はオープンなグローバル市場から来ます。株式の評価は、過大評価された株を覆い隠す可能性のある PER のような指標に依存します。",
	"bitcoin-vs-stocks::point_5_summary_1":
		"ビットコインは世界中で 24 時間 365 日取引されます。株式市場は平日の営業時間にしか開いていません。",
	"bitcoin-vs-stocks::point_6_summary_1": "ビットコインは",
	"bitcoin-vs-stocks::point_6_summary_2": "自己管理",
	"bitcoin-vs-stocks::point_6_summary_3":
		"でシンプルなアプリで保管できます — ブローカーは不要です。株式はブローカーに預けられ、ブローカーが破綻するとカウンターパーティリスクにさらされます。",
	"bitcoin-vs-stocks::point_7_summary_1":
		"ビットコインの固定供給量は、信頼できるインフレヘッジになります。一部の株式はインフレを上回りますが、そうでない株式もあります — 保証はありません。",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		'<span class="orange">ビットコイン</span>と<span class="asset">Visa</span>の違い',
	"bitcoin-vs-visa::point_1_summary_1":
		"ビットコインは、誰でも許可なく参加して使えるオープンなネットワークです。Visa は金融機関が管理する閉鎖的なシステムであり、アクセスを拒否できます — 特に銀行口座を持たない人や十分に銀行サービスを受けられない人に対して。",
	"bitcoin-vs-visa::point_2_summary_1":
		"ビットコイン取引には加盟店手数料がかかりません。Visa は通常、取引ごとに加盟店に約 3% を請求します — あなたのビジネスは",
	"bitcoin-vs-visa::point_2_summary_2": "ビットコイン決済",
	"bitcoin-vs-visa::point_2_summary_3":
		"を受け入れることでお金を節約できます。",
	"bitcoin-vs-visa::point_3_summary_1":
		"すべてのビットコイン取引は公開・監査可能なブロックチェーン上にあります。Visa は閉鎖的で独自のシステムを運営しており、顧客は何も独立して検証できません。",
	"bitcoin-vs-visa::point_4_summary_1":
		"ビットコインはいかなる中央権威にも凍結されません。Visa はいつでも口座を凍結したり、取引をブロックしたり、サービスを拒否したりできます。",
	"bitcoin-vs-visa::point_5_summary_1":
		"ビットコインは最終決済です — 自分が所有しているものだけを使えます。クレジットカードは、年率 25% を超える金利でしばしば借金を作ります。",
	"bitcoin-vs-visa::point_6_summary_1": "ビットコインなら",
	"bitcoin-vs-visa::point_6_summary_2": "自己管理",
	"bitcoin-vs-visa::point_6_summary_3":
		"を行うことができ、銀行や決済処理業者は不要です。クレジットカードには常に仲介者が必要です。",
	"bitcoin-vs-visa::point_7_summary_1":
		"ビットコインは営業時間なしで世界中 24 時間 365 日機能します。Visa には営業時間、メンテナンス時間、地理的制限があり、取引をブロックできます。",
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
		`translate-rest-part1 (ja): filled ${filled}, already-done ${skipped}`,
	);
}

main();

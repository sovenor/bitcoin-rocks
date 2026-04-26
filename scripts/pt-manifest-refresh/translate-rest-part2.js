#!/usr/bin/env node
/**
 * Portuguese (European PT) manifest refresh — part 2 of non-inflation
 * namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
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
	"pt.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Serviços de contabilidade Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Um guia simples para contabilizar pagamentos em Bitcoin — carteiras híbridas, custo de aquisição, mais-valias e quando contactar o teu contabilista.",
	"business/accounting::accounting_s1_c1":
		"A forma mais fácil de aceitar Bitcoin é usar uma carteira híbrida que vende automaticamente 100 % do Bitcoin que recebes por dólares (ou pela tua moeda local) assim que o pagamento entra.",
	"business/accounting::accounting_s1_c2":
		"Com esta configuração, a tua contabilidade fica exatamente como hoje — o valor final é em dólares de cada vez. Sem custo de aquisição, sem mais-valias, sem novas folhas de cálculo.",
	"business/accounting::accounting_s2":
		"Se guardares algum Bitcoin: regista o teu custo de aquisição",
	"business/accounting::accounting_s2_c1":
		"Alguns negócios optam por ficar com uma parte do Bitcoin que recebem em vez de o converter automaticamente todo. Se for esse o teu caso, o passo adicional é registar o custo de aquisição — o valor em dólares de cada pagamento em Bitcoin no dia em que o recebeste.",
	"business/accounting::accounting_s2_c2":
		"Mesmo que penses no teu negócio puramente em Bitcoin, a maior parte das autoridades fiscais continua a querer que reportes o valor em dólares. A boa notícia: são apenas dois números por transação — a quantidade de Bitcoin que recebeste e o seu valor em dólares nesse dia.",
	"business/accounting::accounting_s2_c3":
		"Usa as ferramentas em baixo para automatizar as consultas, para não teres de verificar os preços todos os dias.",
	"business/accounting::accounting_s3":
		"Gastar ou vender Bitcoin que guardaste",
	"business/accounting::accounting_s3_c1":
		"Se converteres cada pagamento automaticamente em dólares, salta esta secção — não se aplica a ti.",
	"business/accounting::accounting_s3_c2":
		"Se guardaste algum Bitcoin e depois decides gastá-lo ou vendê-lo, adiciona o preço de venda à mesma folha de cálculo do custo de aquisição. A diferença entre o que o Bitcoin custou quando o recebeste e o que custa quando o gastas ou vendes é uma mais-valia ou menos-valia.",
	"business/accounting::accounting_s3_c3": "Dois exemplos rápidos:",
	"business/accounting::accounting_s4":
		"Precisas de um profissional que perceba de Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Se preferires que outra pessoa trate disto — ou se a tua contabilidade de Bitcoin for mais complexa do que uma carteira híbrida consegue resolver — recomendamos vivamente os Satoshi Pacioli Accounting Services, uma firma especializada em contabilidade de Bitcoin para empresas.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Contabilidade de Bitcoin para a tua empresa",
	"business/accounting::accounting_card_bpr_label": "PREÇO DO BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Consulta preços atuais ou históricos do Bitcoin em dólares",
	"business/accounting::accounting_card_pacioli_label":
		"CONTABILISTA DE BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"IMPORTAR PARA O EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Importa automaticamente preços de Bitcoin para o Excel",
	"business/accounting::accounting_card_wallets_label": "CARTEIRAS HÍBRIDAS",
	"business/accounting::accounting_card_wallets_title":
		"Vê as nossas carteiras recomendadas para empresas",
	"business/accounting::accounting_disclaimer":
		"Este guia tem apenas fins informativos e não constitui aconselhamento fiscal. Para aconselhamento específico à tua situação, contacta um contabilista qualificado.",
	"business/accounting::accounting_disclaimer_label":
		"Aviso de responsabilidade",
	"business/accounting::accounting_example_feb_1": "1 de fevereiro",
	"business/accounting::accounting_example_gain_badge": "Mais-valia",
	"business/accounting::accounting_example_gain_explain":
		"Registas uma mais-valia de 10 $.",
	"business/accounting::accounting_example_jan_1": "1 de janeiro",
	"business/accounting::accounting_example_loss_badge": "Menos-valia",
	"business/accounting::accounting_example_loss_explain":
		"Registas uma menos-valia de 10 $.",
	"business/accounting::accounting_example_received_label": "Recebido",
	"business/accounting::accounting_example_sold_label":
		"Vendido ou gasto",
	"business/accounting::accounting_hero_subtitle":
		"Aceitar Bitcoin na tua empresa não tem de complicar a tua contabilidade. Aqui está a versão curta — mais ferramentas e especialistas que a tornam indolor.",
	"business/accounting::accounting_intro_c1":
		"Se já aceitas dinheiro ou cartões, juntar Bitcoin à contabilidade da tua empresa é mais fácil do que parece. Tens dois caminhos: converter automaticamente cada pagamento em Bitcoin para dólares assim que entra (sem nova contabilidade), ou guardar algum em Bitcoin (precisas de registar alguns números adicionais).",
	"business/accounting::accounting_intro_c2":
		"Este guia percorre ambos os caminhos — para que escolhas o que se adequa à tua empresa e comeces a aceitar Bitcoin com tranquilidade.",
	"business/accounting::accounting_s1":
		"O caminho fácil: conversão automática para dólares",
	"business/accounting::accounting_s3_c6":
		"E é só isto. A matemática básica é a mesma que usarias para qualquer outro ativo que sobe ou desce de valor.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — preço atual e histórico do Bitcoin em dólares",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — contabilidade de Bitcoin para empresas",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — importar preços de criptomoedas para o Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Respostas curtas às perguntas que os comerciantes costumam fazer antes de começar a aceitar Bitcoin — taxas, liquidação, carteiras, estornos, custos e mais.",
	"business/faq::faq_intro_c1":
		"Clica em qualquer pergunta abaixo para abrir a resposta. Quando estiveres pronto para começar a aceitar Bitcoin, os recursos para empresas no fim da página guiam-te passo a passo.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "CONTABILIDADE",
	"business/index::biz_label_faq": "PERGUNTAS FREQUENTES",
	"business/index::biz_label_maps": "MAPAS DE COMERCIANTES",
	"business/index::biz_label_rewards": "RECOMPENSAS",
	"business/index::biz_label_stickers": "AUTOCOLANTES",
	"business/index::biz_label_wallets": "CARTEIRAS",
	"business/index::biz_meta_description":
		"Aceita Bitcoin na tua empresa com taxas mais baixas, liquidação imediata, sem estornos, e ganha mais clientes.",
	"business/index::business_hero_subtitle":
		"Recebe pagamentos com taxas mais baixas, liquidação instantânea e chega a milhões de novos clientes — sem contratos nem custos ocultos.",
	"business/index::business_intro_c1":
		"O Bitcoin dá à tua empresa uma forma mais rápida, mais barata e mais privada de receber pagamentos. Sem intermediários. Sem estornos. Sem contratos. Apenas dinheiro que liquida em segundos, diretamente do cliente para ti.",
	"business/index::business_intro_c2":
		"Em baixo, a versão curta de por que é que o Bitcoin é bom para os negócios — e a seguir, todos os recursos de que precisas para começar a aceitá-lo hoje.",
	"business/index::business_resources_heading":
		"Tudo o que precisas para aceitar Bitcoin",
	"business/index::business_resources_intro":
		"Percorre estes recursos ao teu próprio ritmo. Cada um é um guia curto e prático.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Conta-nos sobre a tua empresa",
	"business/maps::biz_maps_form_intro":
		"Só precisamos de alguns dados para te pôr no mapa. Guardamos os dados de morada apenas o tempo necessário para enviar a tua empresa para os mapas.",
	"business/maps::biz_maps_hero_subtitle":
		"Adiciona a tua empresa gratuitamente ao BTC Map — um diretório aberto e global de comerciantes que aceitam Bitcoin — para que os utilizadores de Bitcoin perto de ti te encontrem e gastem Bitcoin contigo.",
	"business/maps::biz_maps_hero_title":
		"Coloca a tua empresa nos mapas de comerciantes de Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Os utilizadores de Bitcoin procuram ativamente locais onde gastar o seu dinheiro. Estar no mapa expõe a tua empresa a cada utilizador de Bitcoin que procura um sítio próximo para comer, comprar ou ficar — totalmente grátis.",
	"business/maps::biz_maps_intro_c2":
		"Basta preencher o pequeno formulário em baixo e nós enviamos a tua empresa para o BTC Map e outros mapas de comerciantes de Bitcoin.",
	"business/maps::biz_maps_meta_description":
		"Adiciona a tua empresa gratuitamente ao BTC Map e a outros mapas de comerciantes de Bitcoin, para que os utilizadores de Bitcoin perto de ti te encontrem.",
	"business/maps::biz_maps_placeholder_address": "Rua e número",
	"business/maps::biz_maps_placeholder_category":
		"Categoria (p. ex. restaurante, café, hotel)",
	"business/maps::biz_maps_placeholder_city": "Cidade",
	"business/maps::biz_maps_placeholder_country": "País",
	"business/maps::biz_maps_placeholder_name": "Nome da empresa",
	"business/maps::biz_maps_placeholder_region":
		"Região / província / estado",
	"business/maps::biz_maps_placeholder_website": "Site (opcional)",
	"business/maps::biz_maps_view_map_cta": "Ver BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Ver BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Obrigado por submeteres a tua empresa. Em breve vamos pôr-te nos mapas de comerciantes de Bitcoin.",
	"business/maps-success::biz_maps_success_hero_title":
		"Pedido recebido 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"A tua empresa será adicionada ao BTC Map e a outros diretórios de comerciantes de Bitcoin em 1 a 2 semanas. Revemos cada submissão manualmente para manter a precisão dos mapas.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Assim que a tua listagem estiver online, os utilizadores de Bitcoin perto de ti vão encontrar a tua empresa e vão gastar Bitcoin contigo.",
	"business/maps-success::biz_maps_success_timeline_header":
		"O que acontece a seguir",
	"business/maps-success::biz_maps_success_view_c1":
		"Enquanto esperas, dá uma vista de olhos ao BTC Map para veres a rede crescente de empresas em todo o mundo que aceitam Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Vê onde irás aparecer",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Descarrega ficheiros de autocolantes em inglês para imprimires os teus próprios autocolantes de «Aceita-se Bitcoin».",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Imprime os teus próprios autocolantes de «Aceita-se Bitcoin» em inglês para informares os clientes de que aceitas Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Descarregar ficheiros de autocolantes em inglês de «Aceita-se Bitcoin»",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Obrigado por solicitares ficheiros de autocolantes de «Aceita-se Bitcoin» na tua língua.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Pedido recebido 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Vamos criar e publicar os teus ficheiros de autocolantes em 3 a 4 semanas. Assim que estiverem prontos, podes descarregá-los e imprimi-los gratuitamente a partir da nossa página de ficheiros de autocolantes.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Publicamos os ficheiros de autocolantes em lotes, por isso podem passar várias semanas até a tua língua ser ativada. Obrigado pela paciência!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"O que acontece a seguir",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Encomendar a granel",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Pedir outro pacote gratuito",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Vais receber os teus autocolantes gratuitos de «Aceita-se Bitcoin» em 2 a 4 semanas, num envelope branco simples com 3 autocolantes.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Os teus autocolantes estão a caminho 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Se 3 autocolantes não forem suficientes para a tua empresa, sente-te à vontade para pedir outro pacote gratuito — ou encomenda a granel à mesma gráfica que usamos.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Precisas de mais autocolantes?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Na tua porta ou na montra principal, para que os clientes os vejam antes de entrarem",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Junto à caixa, no terminal de pagamento ou onde os clientes pagam",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Em ementas, listas de preços ou caixas de gorjetas",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Não os coloques em locais que não te pertencem nem onde não tenhas autorização para colar autocolantes",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Bons sítios para colocar os teus autocolantes",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Mostra aos clientes que aceitas Bitcoin. Pede um pacote gratuito de autocolantes de «Aceita-se Bitcoin» para colocares no teu estabelecimento.",
	"business/stickers::biz_stickers_hero_title":
		"Autocolantes gratuitos de «Aceita-se Bitcoin»",
	"business/stickers::biz_stickers_intro_c1":
		"Aceitar Bitcoin é só metade do trabalho — os teus clientes também precisam de saber. Estes pequenos autocolantes de «Aceita-se Bitcoin» foram concebidos para serem colocados na porta principal, na caixa, no menu ou em qualquer sítio onde os clientes os vejam antes de pagarem.",
	"business/stickers::biz_stickers_intro_c2":
		"Enviamos-te um pacote gratuito para qualquer morada nos EUA ou no Canadá, ou podes imprimir os teus em qualquer parte do mundo.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Canadá — gratuito por correio",
	"business/stickers::biz_stickers_option_print":
		"🌍 Em todo o mundo — imprime os teus",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 EUA — gratuito por correio",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Tradução da expressão «Bitcoin Accepted Here»",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Tradução da expressão «Scan to learn why Bitcoin is good for business.»",
	"business/stickers::biz_stickers_print_c1":
		"Podes imprimir os teus próprios autocolantes de «Aceita-se Bitcoin» onde quer que vivas. Clica na tua língua em baixo para descarregar os ficheiros e instruções de impressão.",
	"business/stickers::biz_stickers_print_header":
		"Imprime os teus próprios ficheiros de autocolantes",
	"business/stickers::biz_stickers_request_c1":
		"Preenche o formulário em baixo para solicitares ficheiros de autocolantes de «Aceita-se Bitcoin» na tua língua local. Avisamos-te quando estiverem prontos.",
	"business/stickers::biz_stickers_request_header":
		"Não vês a tua língua?",
	"business/stickers::biz_stickers_step_description":
		"Enviamos pacotes gratuitos para moradas nos EUA e no Canadá. Em qualquer outro lugar do mundo, podes imprimir os teus.",
	"business/stickers::biz_stickers_step_header":
		"Como queres os teus autocolantes?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Todas as carteiras de Bitcoin funcionam em conjunto — escolhe a que se adequa à tua empresa. Gratuita, liquidação instantânea, sem estornos.",
	"business/wallets::sources_breez_business":
		"Breez — carteira Lightning só de Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — infraestrutura de pagamentos Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — processador de pagamentos Bitcoin",
	"business/wallets::sources_square":
		"Square — aceita pagamentos em Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — faturação em Bitcoin para empresas",
	"business/wallets::wallets_hero_subtitle":
		"As carteiras de Bitcoin são gratuitas. Escolhe a que se adequa à tua empresa — presencial, online ou por faturação — e começa a aceitar Bitcoin em minutos.",
	"business/wallets::wallets_section_invoice":
		"Carteiras para empresas que faturam clientes",
	"business/wallets::wallets_section_invoice_intro":
		"Se faturas clientes (consultoria, freelancer, serviços B2B), usa uma carteira construída em torno da faturação. O cliente paga a fatura de Bitcoin com poucos cliques.",
	"business/wallets::wallets_section_multiple":
		"Carteiras para empresas com vários funcionários",
	"business/wallets::wallets_section_multiple_intro":
		"Se tens uma equipa que recebe pagamentos na caixa, escolhe uma carteira que suporte vários inícios de sessão de funcionários — para que cada funcionário tenha o seu próprio PIN e mantenhas registos claros de quem recebeu cada pagamento.",
	"business/wallets::wallets_section_online":
		"Carteiras para empresas online",
	"business/wallets::wallets_section_online_intro":
		"Vendes online? Estas carteiras ligam-se à tua loja online e aceitam Bitcoin de qualquer cliente em qualquer parte do mundo — sem estornos e sem necessidade de uma conta de comerciante.",
	"business/wallets::wallets_section_sole":
		"Carteiras para empresas em nome individual",
	"business/wallets::wallets_section_sole_intro":
		"Se geres uma loja, café, estúdio ou serviço sozinho, qualquer uma destas carteiras serve. Escolhe consoante quiseres ficar com os pagamentos em Bitcoin ou converter automaticamente uma parte de cada pagamento para a tua moeda local.",
	"business/wallets::wallets_strike_note":
		"O Strike Business permite-te aceitar pagamentos em Bitcoin e Lightning com taxas zero e liquidação instantânea. Suporta pagamentos presenciais, online e por faturação, com conversão automática opcional para a tua moeda local.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Aceita-se Bitcoin",
	"business/why::why_good_for_you":
		"Por que é que o Bitcoin também é bom para ti",
	"business/why::why_learn_more_lowercase": "Saber mais →",
	"business/why::why_s1_c1":
		"A inflação acontece quando se imprime mais dinheiro ou se cria do nada. Faz com que o dinheiro no teu bolso perca valor com o tempo — e é por isso que os preços sobem ano após ano.",
	"business/why::why_s1_c2":
		"O Bitcoin tem uma oferta fixa de 21 milhões de moedas. Nenhum governo, banco ou empresa pode imprimir mais. As tuas poupanças em Bitcoin mantêm o seu valor com o tempo, em vez de o perderem em silêncio.",
	"business/why::why_s2_c1":
		"Nos últimos anos, muitos bancos americanos colapsaram devido a corridas aos bancos. Quando demasiados clientes tentaram levantar ao mesmo tempo, os bancos não tinham dinheiro suficiente para pagar a todos.",
	"business/why::why_s2_c2":
		"Em vez de simplesmente guardarem o teu dinheiro, os bancos emprestam-no e investem a maior parte. Se esses investimentos falharem — ou os depositantes perderem a confiança — o banco pode colapsar e os teus depósitos podem ser congelados ou perdidos.",
	"business/why::why_s2_c3":
		"Com Bitcoin, podes guardar o teu dinheiro diretamente na tua própria carteira. Sem banco. Sem intermediários. Sem corridas aos bancos.",
	"business/why::why_s3_c1":
		"Ao contrário dos cartões de crédito, do PayPal ou das contas bancárias tradicionais, o Bitcoin não exige a permissão de ninguém.",
	"business/why::why_s3_c2":
		"Ninguém pode congelar a tua conta, bloquear um pagamento ou desligar-te da rede. É o primeiro sistema financeiro da história que podes usar livremente, sem medo de censura ou confisco.",
	"business/why::why_s4_c1":
		"O Bitcoin é frequentemente mal compreendido, mas faz silenciosamente muito bem ao mundo.",
	"business/why::why_s4_c2":
		"Já ajudou ativistas dos direitos humanos na sua luta pela liberdade, reduziu emissões mundiais de metano de aterros e poços de petróleo, estabilizou redes elétricas e financiou bens públicos como parques nacionais.",
	"business/why::why_biz_s1":
		"Taxas mais baixas, mais para o negócio",
	"business/why::why_biz_s1_c1":
		"Os pagamentos em Bitcoin contornam os bancos e as empresas de cartões que ficam com 2-3 % de cada venda. A empresa fica com mais do que pagas — o que muitas vezes significa melhores preços e melhor serviço para ti.",
	"business/why::why_biz_s2":
		"Liquidação instantânea, sem estornos",
	"business/why::why_biz_s2_c1":
		"Os pagamentos em Bitcoin liquidam em segundos, diretamente da tua carteira para o negócio. Sem esperar dias até o banco libertar os fundos, e sem disputas caras de estornos — o que significa que o negócio se pode focar em servir os clientes em vez de combater fraudes.",
	"business/why::why_biz_s3":
		"Aceitação gratuita, aberta a todos",
	"business/why::why_biz_s3_c1":
		"Não há contratos, mensalidades nem custos de instalação para um negócio começar a aceitar Bitcoin. E milhões de utilizadores de Bitcoin em todo o mundo procuram ativamente comerciantes que o aceitem — dando a este negócio exposição gratuita a novos clientes.",
	"business/why::why_business_cta_intro":
		"Tens um negócio e queres começar a aceitar Bitcoin?",
	"business/why::why_business_cta_link":
		"Vê como funciona →",
	"business/why::why_for_business":
		"Por que é que o Bitcoin é bom para este negócio",
	"business/why::why_for_business_intro":
		"Ao aceitar Bitcoin, este negócio fica com mais de cada venda, recebe instantaneamente sem estornos e chega a uma audiência global de utilizadores de Bitcoin — tudo sem contratos nem mensalidades.",
	"business/why::why_good_for_you_intro":
		"O Bitcoin não é apenas útil na caixa — é uma forma melhor de dinheiro que protege as tuas poupanças, a tua privacidade e a tua liberdade de transacionar. Aqui está um resumo rápido.",
	"business/why::why_hero_subtitle":
		"Acabaste de digitalizar um autocolante de «Aceita-se Bitcoin». Aqui está por que é que isso é uma boa notícia — para este negócio e para ti.",
	"business/why::why_intro_c1":
		"O negócio em que estás aceita Bitcoin — uma rede de pagamentos moderna e de código aberto que qualquer pessoa, em qualquer parte do mundo, pode usar, sem que os bancos e os intermediários levem uma fatia.",
	"business/why::why_intro_c2":
		"Em baixo, a versão curta de por que é que é bom para este negócio aceitar Bitcoin, mais por que é que é bom para ti, enquanto cliente, usar Bitcoin.",
	"business/why::why_next_business_label": "ACEITA BITCOIN",
	"business/why::why_next_business_title":
		"Aceita Bitcoin na tua empresa",
	"business/why::why_next_buy_label": "COMPRA BITCOIN",
	"business/why::why_next_buy_title": "Compra o teu primeiro Bitcoin",
	"business/why::why_next_learn_label": "APRENDE MAIS",
	"business/why::why_next_learn_title": "Aprende mais sobre o Bitcoin",
	"business/why::why_next_wallet_label": "OBTÉM UMA CARTEIRA",
	"business/why::why_next_wallet_title":
		"Obtém a tua própria carteira de Bitcoin",
	"business/why::why_whats_next_heading": "Para onde ir agora?",
	"business/why::why_whats_next_intro":
		"Se for a tua primeira vez a digitalizar um autocolante de Bitcoin, aqui ficam os locais mais úteis para visitar a seguir.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p":
		"Entre pares (diretamente entre utilizadores)",
	"buy::buy_bitcoin_guide": "Como comprar Bitcoin",
	"buy::buy_step_1_header": "Escolhe o teu país",
	"buy::buy_step_2_header": "Escolhe o teu método de pagamento",
	"buy::buy_step_3_header": "As tuas opções de compra",
	"buy::buy_step_4_header": "Guarda o teu Bitcoin em segurança",
	"buy::buy_header_subtitle":
		"Um guia simples passo a passo para comprares o teu primeiro Bitcoin.",
	"buy::buy_howto_name": "Como comprar Bitcoin",
	"buy::buy_meta_description":
		"Aprende a comprar Bitcoin em segurança com o nosso guia passo a passo. Escolhe o teu país e método de pagamento para encontrares as melhores opções para ti.",
	"buy::buy_step_1_eyebrow": "Passo 1",
	"buy::buy_step_2_eyebrow": "Passo 2",
	"buy::buy_step_3_eyebrow": "Passo 3",
	"buy::buy_step_4_eyebrow": "Passo 4",
	"buy::buy_storage_cta_label": "Próximo passo",
	"buy::sources_bisq":
		"Bisq — plataforma de troca descentralizada entre pares de Bitcoin",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — diretório global de caixas Bitcoin",
	"buy::sources_kraken":
		"Kraken — plataforma de troca de Bitcoin estabelecida",
	"buy::sources_relai":
		"Relai — aplicação suíça de autocustódia de Bitcoin",
	"buy::sources_river":
		"River — compra, mineração e custódia só de Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — compra de Bitcoin com suporte para Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — compra recorrente (DCA) só de Bitcoin",
	"buy::buy_bitcoin": "Comprar Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Adicionar uma língua",
	"common::common_next_buy_bitcoin": "Comprar Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Aprende a comprar Bitcoin em segurança",
	"common::common_next_calculate": "Calcula a tua inflação",
	"common::common_next_calculate_desc":
		"Vê como a inflação afeta o teu salário ao longo do tempo",
	"common::common_next_get_wallet": "Obtém uma carteira",
	"common::common_next_get_wallet_desc":
		"Obtém a tua primeira carteira de Bitcoin — é grátis",
	"common::common_next_keep_learning": "Continua a aprender",
	"common::common_next_keep_learning_desc":
		"Vê como o Bitcoin está a melhorar o mundo",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — Índice de Preços no Consumidor (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — oferta monetária (índice por categoria)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — «Pode falhar um leilão do Tesouro?»",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "O que se segue?",
	"common::common_sticker_files_mission_5": "pede um pacote",
	"common::common_site_tagline": "Educação sobre Bitcoin para todos.",
	"common::common_source_btc_map":
		"BTC Map — diretório mundial de comerciantes que aceitam Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — processador de pagamentos Bitcoin auto-hospedado, gratuito e de código aberto",
	"common::common_source_oshi":
		"Oshi — plataforma de recompensas em Bitcoin para comerciantes",
	"common::common_source_strike_business":
		"Strike — pagamentos em Bitcoin e Lightning para empresas",
	"common::common_sources_group_bitcoin": "Dados de Bitcoin",
	"common::common_sources_group_cpi":
		"Inflação / índice de preços no consumidor",
	"common::common_sources_group_debt": "Dívida pública",
	"common::common_sources_group_money": "Dados de oferta monetária",
	"common::common_sources_group_stories": "Exemplos do mundo real",
	"common::common_sticker_files_mission_6":
		"autocolantes gratuitos em inglês.",
	"common::common_sticker_files_next_flyers_label": "Panfletos",
	"common::common_sticker_files_next_flyers_title":
		"Imprime um panfleto de Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"Ficheiros de autocolantes",
	"common::common_sticker_files_next_languages_title":
		"Vê ficheiros de autocolantes noutras línguas",
	"common::common_sticker_files_print_these":
		"IMPRIME-OS COM 1 CLIQUE",
	"common::common_sticker_name_bdhi_black":
		"Autocolante «Bitcoin Doesn\u2019t Have Inflation» (preto)",
	"common::common_sticker_name_bdhi_orange":
		"Autocolante «Bitcoin Doesn\u2019t Have Inflation» (laranja)",
	"common::common_sticker_name_caution":
		"Autocolante de Bitcoin «Caution! Melting Ice Cube»",
	"common::common_sticker_name_cure_inflation":
		"Autocolante de Bitcoin «Cure Inflation»",
	"common::common_sticker_name_danger":
		"Autocolante de Bitcoin «Danger! Inflation Ahead»",
	"common::common_sticker_name_fix":
		"Autocolante de Bitcoin «Fix The Money, Fix The World»",
	"common::common_sticker_name_got_inflation":
		"Autocolante de Bitcoin «Got Inflation?»",
	"common::common_sticker_name_study":
		"Autocolante «Study Bitcoin»",
	"common::common_sticker_name_warning":
		"Autocolante de Bitcoin «Warning! Inflation is Stealing Your Savings»",
	"common::common_sticker_name_what_if":
		"Autocolante de Bitcoin «What if your money didn\u2019t have inflation?»",
	"common::common_sticker_tips_heading": "Dicas para os autocolantes",
	"common::common_sticker_tips_intro":
		"Assim que tiveres impresso os teus autocolantes, coloca-os onde as pessoas os vejam! Bons sítios incluem:",
	"common::common_sticker_tips_list_1":
		"espaços públicos onde as pessoas reparem neles",
	"common::common_sticker_tips_list_2":
		"locais onde seja improvável que sejam removidos depressa (os autocolantes não causam danos permanentes)",
	"common::common_sticker_tips_list_3":
		"superfícies onde adiram bem (metal, plástico, vidro)",
	"common::common_sticker_tips_list_4":
		"NÃO em propriedade privada, sinais de trânsito, caixas multibanco ou bombas de combustível",
	"common::common_stickers_printer_prefix": "Nós usamos a",
	"common::common_stickers_printer_suffix":
		"mas podes usar qualquer gráfica de autocolantes.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — índice de preços no consumidor para todos os consumidores urbanos",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — oferta monetária M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Calcula o teu fosso de inflação",
	"compound-inflation-calculator::cic_cta_label": "Próximo passo",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Descobre quanto o teu salário tem de aumentar para acompanhar a inflação.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Explora mais tópicos",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Vê como o Bitcoin se relaciona com o dinheiro, a liberdade, a energia e mais.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Aprende como funciona a inflação",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Como imprimir e afixar estes panfletos de Bitcoin",
	"flyers::flyers_hero_subtitle":
		"Panfletos de Bitcoin gratuitos e imprimíveis. Afixa-os em espaços públicos para ajudares mais pessoas a aprender sobre Bitcoin.",
	"flyers::flyers_hero_title": "Imprime e afixa panfletos de Bitcoin",
	"flyers::flyers_next_get_stickers": "Espalha a palavra",
	"flyers::flyers_next_get_stickers_desc":
		"Pede um pacote gratuito de autocolantes de Bitcoin",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Envolve-te e ajuda a divulgar o Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Queres ajudar a construir uma economia circular de Bitcoin? A forma mais fácil é ajudar os negócios locais a começar a aceitar pagamentos em Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Conheces um negócio que estaria aberto a isso? Envia o proprietário para a nossa página",
	"get-involved::get_involved_business_content_3":
		"Bitcoin para empresas.",
	"get-involved::get_involved_description":
		"Os nossos recursos gratuitos facilitam a divulgação da adoção do Bitcoin. Autocolantes, panfletos, autocolantes de «Aceita-se Bitcoin» para empresas e código aberto a que todos podem contribuir.",
	"get-involved::get_involved_header":
		"Envolve-te e ajuda a divulgar o Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Podes ajudar a mudar isto. Criámos alguns recursos gratuitos que tornam fácil divulgar a esperança que o Bitcoin traz na tua comunidade.",
	"get-involved::get_involved_biz_stickers_note":
		"Já aceitas Bitcoin? Mostra aos teus clientes com os nossos autocolantes gratuitos de «Aceita-se Bitcoin». Enviamos um pacote para qualquer morada nos EUA ou no Canadá, ou podes imprimir os teus em qualquer parte do mundo.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Autocolantes «Aceita-se aqui»",
	"get-involved::get_involved_card_biz_stickers_source":
		"Fonte: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Autocolantes gratuitos de «Aceita-se Bitcoin» para a tua empresa",
	"get-involved::get_involved_card_business_label":
		"Bitcoin para empresas",
	"get-involved::get_involved_card_business_source":
		"Fonte: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Tudo o que uma empresa precisa para começar a aceitar pagamentos em Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Panfletos imprimíveis",
	"get-involved::get_involved_card_flyers_source":
		"Fonte: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Descarrega e imprime um panfleto gratuito de Bitcoin",
	"get-involved::get_involved_card_github_label": "Código aberto",
	"get-involved::get_involved_card_github_source": "Fonte: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Contribui para o bitcoin.rocks no GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Autocolantes gratuitos",
	"get-involved::get_involved_card_stickers_source":
		"Fonte: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Pede um pacote gratuito de autocolantes de Bitcoin à tua porta",
	"get-involved::get_involved_flyers_content_1":
		"Os panfletos são uma das formas mais fáceis de apresentar o Bitcoin na tua comunidade. Descarrega o nosso panfleto gratuito e imprimível de Bitcoin, imprime tantas cópias quantas quiseres e afixa-as em quadros de avisos, cafés, encontros ou onde as pessoas se juntem.",
	"get-involved::get_involved_flyers_content_2":
		"Cada panfleto tem um título chamativo e um código QR que leva os leitores curiosos para o bitcoin.rocks para aprenderem mais.",
	"get-involved::get_involved_flyers_content_3":
		"Ao contrário dos autocolantes, os panfletos podem ser impressos a pedido em qualquer parte do mundo — só precisas de uma impressora e alguns minutos.",
	"get-involved::get_involved_flyers_header":
		"Imprime e afixa um panfleto",
	"get-involved::get_involved_flyers_image_alt":
		"Pré-visualização do panfleto gratuito e imprimível de Bitcoin do bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"O bitcoin.rocks é um projeto gratuito e de código aberto sob licença MIT. A nossa missão é acelerar a adoção do Bitcoin através da educação — e não conseguimos fazê-lo sozinhos.",
	"get-involved::get_involved_github_content_2":
		"Sejas developer, designer, redator ou tradutor, há uma forma de ajudar. Damos as boas-vindas em particular aos contribuidores que possam traduzir o nosso conteúdo para mais línguas, para que pessoas em todo o mundo possam aprender sobre Bitcoin na sua língua materna.",
	"get-involved::get_involved_github_content_3":
		"Faz fork ao nosso repositório, abre um pull request, cria uma issue ou dá uma estrela ao projeto. Cada contribuição ajuda o Bitcoin a chegar a mais pessoas.",
	"get-involved::get_involved_github_header":
		"Contribui no GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Um pacote de autocolantes gratuitos de texto de Bitcoin do bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "poupança",
	"index::home_card_label_art_1": "Vamos comparar",
	"index::home_card_label_art_2": "Espalha a palavra",
	"index::home_card_label_art_3": "Arte de rua",
	"index::home_card_label_bank_runs": "Sistema de reserva total",
	"index::home_card_label_bonds": "Vamos comparar",
	"index::home_card_label_business_1": "Qual é a diferença?",
	"index::home_card_label_business_2": "Aceita pagamentos em Bitcoin",
	"index::home_card_label_cash": "Vamos comparar",
	"index::home_card_label_cbdc": "Aberto ou fechado?",
	"index::home_card_label_coding_1": "Curso interativo",
	"index::home_card_label_coding_2": "Constrói hardware",
	"index::home_card_label_coding_3": "Desafios de programação",
	"index::home_card_label_crowdfunding_1": "Protestos EndSARS",
	"index::home_card_label_crowdfunding_2": "Dinheiro que não pode ser parado",
	"index::home_card_label_crowdfunding_3": "Financia o teu projeto",
	"index::home_card_label_crypto": "Qual é a diferença?",
	"index::home_card_label_energy_1": "Estabilização da rede elétrica",
	"index::home_card_label_energy_4": "Gestão da procura",
	"index::home_card_label_energy_5": "Eletrificação rural",
	"index::home_card_label_energy_6": "Incentivos a energias renováveis",
	"index::home_card_label_environment_1": "Redução de metano",
	"index::home_card_label_environment_2": "Salvou um parque nacional",
	"index::home_card_label_environment_3": "A indústria mais verde",
	"index::home_card_label_environment_4": "Reduz a queima de gás",
	"index::home_card_label_equality_1": "Esperança e oportunidades",
	"index::home_card_label_equality_2": "O grande igualador",
	"index::home_card_label_food_1": "Preços dos alimentos",
	"index::home_card_label_food_2": "Quintas e terra",
	"index::home_card_label_freedom_1": "Regimes autoritários",
	"index::home_card_label_freedom_2": "Uma ferramenta única",
	"index::home_card_label_get_started_1":
		"Conceitos básicos para iniciantes",
	"index::home_card_label_get_started_2": "A tua primeira carteira",
	"index::home_card_label_get_started_3": "Compra Bitcoin",
	"index::home_card_label_gold": "Qual é melhor?",
	"index::home_card_label_housing_1": "Habitação acessível",
	"index::home_card_label_human_rights_1":
		"Promover os direitos humanos",
	"index::home_card_label_human_rights_2": "Adoção popular",
	"index::home_card_label_human_rights_3": "Pegada global",
	"index::home_card_label_inflation": "O Bitcoin é melhor dinheiro",
	"index::home_card_label_networks_1": "Visualização ao vivo da rede",
	"index::home_card_label_networks_2": "Vamos comparar",
	"index::home_card_label_payments_1": "Qual é a diferença?",
	"index::home_card_label_payments_2": "Pagamentos rápidos e baratos",
	"index::home_card_label_payments_3": "Remessas internacionais",
	"index::home_card_label_payments_4": "Aceita pagamentos",
	"index::home_card_label_politics_1": "O paradoxo político",
	"index::home_card_label_politics_2": "Aposta forte",
	"index::home_card_label_property_rights_1": "Vamos comparar",
	"index::home_card_label_property_rights_2": "Propriedade real",
	"index::home_card_label_salary": "Protege o teu salário",
	"index::home_card_label_self_custody_1":
		"Guia de carteiras de Bitcoin",
	"index::home_card_label_self_custody_2": "O passo mais importante",
	"index::home_card_label_self_custody_3": "Dinheiro soberano",
	"index::home_card_label_war_1": "Pôr fim a guerras intermináveis",
	"index::home_card_label_war_2": "Ajuda a veteranos",
	"index::home_card_label_war_3": "Escapar à guerra",
	"index::home_h1":
		"O Bitcoin é melhor dinheiro a construir um mundo melhor.",
	"index::home_nav_about": "Sobre",
	"index::home_nav_get_involved": "Envolve-te",
	"index::home_nav_learn": "Aprender",
	"index::home_source_prefix": "Fonte:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon e Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Consulta o nosso",
	"lightning::lightning_grid_heading":
		"Carteiras Lightning populares",
	"lightning::lightning_hardware_cta_label":
		"Carteiras de hardware",
	"lightning::lightning_header_subtitle":
		"O Lightning permite-te enviar Bitcoin em segundos por uma fração de cêntimo — escolhe uma carteira cujos compromissos correspondam ao quanto Bitcoin planeias gastar.",
	"lightning::lightning_s1_c4_end": "para mais informação.",
	"lightning::lightning_s1_c4_link":
		"Guia de carteiras de hardware de Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — carteira Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — carteira Lightning de autocustódia",
	"lightning::sources_lightning_labs":
		"Lightning Labs — documentação para a Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — carteira Lightning custodial",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android e Web",
	"nostr/index::nostr_platform_web": "Navegador Web",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"O Nostr é um novo protocolo descentralizado para comunicação online — nenhuma empresa é dona dele, os zaps de Bitcoin estão integrados e podes mudar de cliente sem perder seguidores.",
	"nostr/index::nostr_amethyst_f1":
		"Muitas funcionalidades e opções de personalização",
	"nostr/index::nostr_amethyst_f2":
		"Requer uma carteira de Bitcoin separada",
	"nostr/index::nostr_amethyst_f3": "100 % gratuito",
	"nostr/index::nostr_damus_f1":
		"Interface familiar ao estilo Twitter",
	"nostr/index::nostr_damus_f2":
		"Requer uma carteira de Bitcoin separada",
	"nostr/index::nostr_damus_f3": "100 % gratuito",
	"nostr/index::nostr_download_heading":
		"Descarrega um cliente Nostr gratuito",
	"nostr/index::nostr_download_intro":
		"Os clientes Nostr são aplicações gratuitas que te permitem ler e escrever na rede Nostr. Funcionam todos em conjunto — podes mudar de cliente a qualquer momento e manter os teus seguidores e conteúdo.",
	"nostr/index::nostr_hero_subtitle":
		"O Nostr é um novo protocolo descentralizado para comunicação online — nenhuma empresa é dona dele, os zaps de Bitcoin estão integrados e podes mudar de aplicação sem perder seguidores.",
	"nostr/index::nostr_hero_title": "O que é o Nostr?",
	"nostr/index::nostr_intro_c1":
		"O Nostr é como o e-mail: o protocolo não pertence a ninguém, qualquer pessoa pode construir uma aplicação por cima e tu escolhes a que melhor te serve. Ao contrário do Twitter ou do Facebook, não há uma empresa central que te possa censurar, banir ou despromover.",
	"nostr/index::nostr_intro_c2":
		"Em baixo, a versão curta de por que é que o Nostr é importante — e a seguir, todos os clientes Nostr gratuitos de que precisas para começar hoje.",
	"nostr/index::nostr_iris_f1":
		"Extremamente simples — não requer instalação",
	"nostr/index::nostr_iris_f2":
		"Forma fácil de experimentar o Nostr com uma conta de teste",
	"nostr/index::nostr_iris_f3": "100 % gratuito",
	"nostr/index::nostr_learn_more_label": "APROFUNDA",
	"nostr/index::nostr_learn_more_title":
		"Aprende mais sobre o Nostr em nostr.how",
	"nostr/index::nostr_primal_f1": "O nosso primeiro cliente recomendado",
	"nostr/index::nostr_primal_f2":
		"Carteira integrada de zaps de Bitcoin",
	"nostr/index::nostr_primal_f3": "100 % gratuito",
	"nostr/index::nostr_s1": "Um protocolo, não uma plataforma",
	"nostr/index::nostr_s1_c1":
		"O Nostr é um novo protocolo que te permite comunicar online sem medo de censura, banimento ou despromoção.",
	"nostr/index::nostr_s1_c2":
		"Plataformas como o Twitter e o Facebook são controladas por uma única empresa, mas o protocolo Nostr não é controlado por ninguém.",
	"nostr/index::nostr_s2": "Liberdade de movimento",
	"nostr/index::nostr_s2_c1":
		"O Nostr é como o e-mail. Ninguém controla o protocolo de e-mail, e qualquer pessoa pode construir um cliente por cima dele (como o Gmail, Hotmail, etc.).",
	"nostr/index::nostr_s2_c2":
		"O protocolo Nostr também não é controlado por ninguém, e qualquer pessoa pode construir um cliente por cima dele (como o Damus, Amethyst, etc.).",
	"nostr/index::nostr_s2_c3":
		"Se não gostares da forma como um cliente específico funciona, podes mover a tua conta Nostr para outro cliente sem perderes os teus seguidores ou conteúdo.",
	"nostr/index::nostr_s3": "O Bitcoin está integrado",
	"nostr/index::nostr_s3_c1":
		"O Bitcoin está integrado no protocolo Nostr. Quando vires conteúdo de que gostas, podes facilmente enviar ao autor um «zap de Bitcoin» como agradecimento.",
	"nostr/index::nostr_s3_c2":
		"Em plataformas centralizadas como o Twitter e o Facebook, uma empresa central ganha dinheiro com o teu conteúdo. Mas em protocolos abertos como o Nostr, és tu que ganhas dinheiro com o teu próprio conteúdo.",
	"nostr/index::sources_damus": "Damus — cliente Nostr para iPhone",
	"nostr/index::sources_iris": "Iris — cliente Nostr no navegador",
	"nostr/index::sources_nostr_how": "nostr.how — O que é o Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Protocolo Nostr — especificação de código aberto",
	"nostr/index::sources_primal":
		"Primal — cliente Nostr com carteira integrada de zaps de Bitcoin",
	"nostr/index::what_is_nostr": "O que é o Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Imprime os teus próprios autocolantes de Bitcoin usando estes ficheiros.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Pedido recebido 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Encomendar a granel",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Partilhar no Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"O que é o Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Precisas de mais autocolantes?",
	"sticker-success::sticker_success_hero_title":
		"Os teus autocolantes estão a caminho 🎉",
	"sticker-success::sticker_success_share_header":
		"Partilha onde colocaste os autocolantes",
	"sticker-success::sticker_success_tips_header":
		"Bons sítios para colocar autocolantes",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"E uma vez que comeces, imprime e afixa também os teus próprios",
	"stickers::stickers_instructions_1":
		"Insere a tua morada postal e enviamos-te um pacote gratuito de autocolantes de Bitcoin pelo correio. Os teus autocolantes chegarão num envelope branco simples.",
	"stickers::stickers_btn_choose_pack": "Escolhe este pacote",
	"stickers::stickers_bulk_c1":
		"Queres mais do que alguns autocolantes?",
	"stickers::stickers_bulk_c2":
		"Encomenda-os a granel à mesma gráfica que usamos",
	"stickers::stickers_bulk_c3":
		"— quanto mais comprares, mais barato fica por unidade.",
	"stickers::stickers_bulk_cta": "Comprar autocolantes a granel",
	"stickers::stickers_bulk_header":
		"Encomenda autocolantes a granel",
	"stickers::stickers_hero_subtitle":
		"Pede um pacote gratuito de autocolantes de Bitcoin e afixa-os em espaços públicos para ajudares mais pessoas a aprender sobre Bitcoin.",
	"stickers::stickers_hero_title": "Autocolantes gratuitos de Bitcoin",
	"stickers::stickers_intro_c1":
		"A nossa missão é ajudar-te a «laranja-pildorar» mais pessoas colando autocolantes de Bitcoin em espaços públicos. Todos os nossos autocolantes têm códigos QR que levam para páginas educativas sobre",
	"stickers::stickers_intro_c3": "inflação",
	"stickers::stickers_intro_c4":
		"Escolhe um pacote de autocolantes em baixo e escolhe como queres recebê-los — enviamos um pacote gratuito a qualquer pessoa nos EUA ou no Canadá, ou podes imprimir os teus em qualquer parte do mundo.",
	"stickers::stickers_mail_header":
		"Enviamos os teus autocolantes gratuitamente pelo correio",
	"stickers::stickers_next_print_flyers": "Espalha mais a mensagem",
	"stickers::stickers_next_print_flyers_desc":
		"Imprime panfletos gratuitos de Bitcoin e afixa-os em locais públicos",
	"stickers::stickers_option_bulk":
		"📦 Em todo o mundo — encomenda a granel",
	"stickers::stickers_option_canada":
		"🇨🇦 Canadá — gratuito por correio",
	"stickers::stickers_option_print":
		"🌍 Em todo o mundo — imprime os teus",
	"stickers::stickers_option_usa":
		"🇺🇸 EUA — gratuito por correio",
	"stickers::stickers_print_c1":
		"Podes envolver-te imprimindo os teus próprios autocolantes onde quer que vivas. Clica na tua língua em baixo para descarregar os ficheiros e instruções de impressão.",
	"stickers::stickers_print_c2":
		"Nem todos os autocolantes estão disponíveis em todas as línguas.",
	"stickers::stickers_print_header":
		"Imprime os teus próprios ficheiros de autocolantes",
	"stickers::stickers_request_c1":
		"Preenche o formulário em baixo para solicitares ficheiros de autocolantes na tua língua local. Avisamos-te quando estiverem prontos.",
	"stickers::stickers_request_header":
		"Não vês a tua língua?",
	"stickers::stickers_share_c2":
		"Segue-nos no Nostr procurando por",
	"stickers::stickers_share_c3":
		"em qualquer cliente Nostr.",
	"stickers::stickers_signs_pack_description":
		"Sinais de aviso, atenção e perigo com mensagens de Bitcoin — concebidos para chamar a atenção e fazer as pessoas parar e ler.",
	"stickers::stickers_step_1_description":
		"Cada pacote contém um conjunto diferente de autocolantes de Bitcoin com códigos QR que ensinam as pessoas sobre Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "PASSO 1",
	"stickers::stickers_step_1_header":
		"Escolhe um pacote de autocolantes",
	"stickers::stickers_step_2_description":
		"Enviamos pacotes gratuitos para moradas nos EUA e no Canadá. Em qualquer outro lugar do mundo, podes imprimir os teus ou encomendar a granel.",
	"stickers::stickers_step_2_eyebrow": "PASSO 2",
	"stickers::stickers_step_2_header":
		"Como queres os teus autocolantes?",
	"stickers::stickers_text_pack_description":
		"Uma mistura de slogans e monólogos de Bitcoin concebida para despertar curiosidade em espaços públicos.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Escolhe a tua carteira",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — análises de armazenamento metálico para sementes de Bitcoin",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — carteira de Bitcoin de autocustódia",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — carteira de hardware de Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — carteira de hardware Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — carteira de hardware Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — carteira de hardware Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — dispositivo DIY de assinatura, de código aberto, para transações de Bitcoin",
	"wallets::wallets_grid_heading": "Carteiras populares de Bitcoin",
	"wallets::wallets_header_subtitle":
		"Um guia passo a passo para escolheres uma carteira, protegeres as tuas chaves e tomares total controlo do teu Bitcoin.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let missing = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		} else {
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (pt): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();

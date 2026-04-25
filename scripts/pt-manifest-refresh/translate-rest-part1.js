#!/usr/bin/env node
/**
 * Portuguese (European PT) manifest refresh — part 1 of non-inflation
 * namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Voltar à página inicial",
	"404::404_message":
		"O Bitcoin é fantástico, mas esta página partida não é.",
	"404::404_not_found_short": "Não encontrada",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Oferecemos recursos gratuitos para empresas que tornam fácil para os negócios locais começarem a aceitar Bitcoin. A nossa página Bitcoin para empresas explica por que é que o Bitcoin é bom para o negócio, como escolher uma carteira e um terminal de pagamento, e oferece autocolantes gratuitos de «Aceita-se Bitcoin».",
	"about::about_card_business_label": "Recursos para empresas",
	"about::about_card_business_source": "Fonte: bitcoin.rocks →",
	"about::about_card_business_title":
		"Tudo o que uma empresa precisa para começar a aceitar pagamentos em Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Fonte: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Contribuir",
	"about::about_card_contribute_source": "Fonte: GitHub →",
	"about::about_card_contribute_title":
		"Aprende como contribuir para o projeto bitcoin.rocks",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Fonte: e-mail →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Panfletos imprimíveis",
	"about::about_card_flyers_source": "Fonte: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Descarrega e imprime panfletos de Bitcoin para a tua comunidade",
	"about::about_card_github_label": "Repositório",
	"about::about_card_github_source": "Fonte: GitHub →",
	"about::about_card_github_title": "Vê o bitcoin.rocks no GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Fonte: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Autocolantes gratuitos",
	"about::about_card_stickers_source": "Fonte: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Recebe autocolantes de Bitcoin gratuitos à tua porta",
	"about::about_editorial_2":
		"Citamos fontes fiáveis como a Reserva Federal (FRED), o Bureau of Labor Statistics dos EUA, a FDIC, a ONU, o World Gold Council, a Forbes, a MIT Technology Review, a Lyn Alden e o James Lavish. Acreditamos que, quando os factos são apresentados com clareza, o Bitcoin fala por si.",
	"about::about_flyers_blurb":
		"Concebemos panfletos imprimíveis que podes partilhar em encontros, afixar em quadros de avisos ou colocar em caixas de correio — uma forma simples de despertar curiosidade e encaminhar as pessoas para o bitcoin.rocks, onde podem aprender mais.",
	"about::about_header": "Sobre o bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "O bitcoin.rocks foi fundado pelo utilizador",
	"about::about_mission_1b":
		"em 2022 com uma missão simples: acelerar a adoção do Bitcoin através da educação.",
	"about::about_open_source_2":
		"O bitcoin.rocks é um projeto gratuito e de código aberto, sob licença MIT. Todos são bem-vindos a contribuir. Damos as boas-vindas em particular aos tradutores, que ajudam a tornar o nosso conteúdo acessível a pessoas em todo o mundo.",
	"about::about_open_source_header": "Código aberto",
	"about::about_page_description":
		"O bitcoin.rocks é um site educativo, gratuito e de código aberto sobre Bitcoin, fundado em 2022. A nossa missão é acelerar a adoção do Bitcoin através da educação.",
	"about::about_stickers_blurb":
		"Enviamos autocolantes de Bitcoin gratuitos diretamente para a tua porta, para que possas ajudar a divulgar o Bitcoin na tua comunidade. Todos os meses, centenas de pessoas digitalizam os códigos QR destes autocolantes para aprender mais sobre o Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"O Bitcoin não tem corridas aos bancos",
	"bank-runs::bank_runs_bitcoin_p1":
		"O Bitcoin é um sistema de reserva total. Não pões o teu dinheiro num banco. És o teu próprio banco. O teu dinheiro não é emprestado sem que saibas, porque a única pessoa com acesso a ele és tu.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Desde que mantenhas o teu bitcoin na tua própria carteira — não numa exchange nem embrulhado num ETF — as corridas aos bancos são impossíveis.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Com o Bitcoin, tens controlo verdadeiro sobre o teu dinheiro.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Desde 26 de março de 2020, os bancos americanos já não são obrigados a manter quaisquer reservas mínimas.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Rácio de reservas bancárias",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Fonte: Reserva Federal →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sistema de reserva total — não é necessário seguro de depósitos.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Cobertura do Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Fonte: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Cada bitcoin existe na blockchain — nada é emprestado.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Rácio de reservas do Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Fonte: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Fundo de seguro de 153,9 mil milhões de $ contra 10,82 biliões de $ em depósitos segurados (dez. de 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Cobertura da FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Fonte: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Estudo de caso",
	"bank-runs::bank_runs_card_svb_source":
		"Fonte: Faculdade de Direito da Universidade de Washington →",
	"bank-runs::bank_runs_card_svb_title":
		"Vê como aconteceu a corrida ao Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Próximo passo",
	"bank-runs::bank_runs_card_wallet_source": "Começa aqui →",
	"bank-runs::bank_runs_card_wallet_title":
		"Aprende como obter a tua própria carteira de Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"O seguro da FDIC cobre cerca de 1 % dos depósitos",
	"bank-runs::bank_runs_fdic_p1":
		"O seguro da FDIC protege depósitos até 250.000 $ por depositante. Mas o fundo de seguro é pequeno em relação ao total dos depósitos que supostamente protege.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Num colapso bancário generalizado, o governo provavelmente imprimiria dinheiro para cobrir a diferença — provocando mais",
	"bank-runs::bank_runs_fdic_p2_link": "inflação.",
	"bank-runs::bank_runs_header":
		"O Bitcoin não tem corridas aos bancos, mas o teu banco pode ter.",
	"bank-runs::bank_runs_page_description":
		"Os bancos emprestam os teus depósitos através da banca de reserva fracionária. Se demasiadas pessoas levantarem ao mesmo tempo, os bancos podem colapsar. O Bitcoin é um sistema de reserva total — as corridas aos bancos são impossíveis.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: um exemplo real",
	"bank-runs::bank_runs_svb_p1_a":
		"Em março de 2023, o Silicon Valley Bank colapsou depois de ter investido os depósitos dos seus clientes em",
	"bank-runs::bank_runs_svb_p1_b":
		"Quando esses títulos perderam valor, o SVB não conseguiu cobrir os levantamentos. O banco tornou-se insolvente.",
	"bank-runs::bank_runs_svb_p1_link": "obrigações do governo a longo prazo.",
	"bank-runs::bank_runs_svb_p2":
		"Milhares de empresas não conseguiram pagar aos seus funcionários. A FDIC interveio — mas surgiu uma questão maior: estará o teu dinheiro realmente em segurança?",
	"bank-runs::bank_runs_what_p1":
		"Os bancos não guardam os teus depósitos num cofre. Emprestam e investem o teu dinheiro — a isto chama-se banca de reserva fracionária.",
	"bank-runs::bank_runs_what_p2":
		"Se demasiadas pessoas tentarem levantar ao mesmo tempo, o banco não tem dinheiro suficiente para pagar a todos. Isso é uma corrida ao banco — e pode levar ao colapso total do banco.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e os <span class=\"asset\">bancos</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"O Bitcoin pode ser usado por qualquer pessoa com ligação à Internet — é ",
	"bitcoin-vs-banks::point_1_summary_2": "sem permissões.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Os bancos podem recusar, congelar ou encerrar contas com base nas suas próprias regras ou em regulamentos governamentais.",
	"bitcoin-vs-banks::point_2_summary_1":
		"A rede Bitcoin funciona 24/7/365 sem janelas de manutenção nem feriados. Os bancos têm horários limitados, fecham aos fins de semana e sofrem cortes operacionais.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Cada transação Bitcoin está numa blockchain pública que qualquer um pode verificar. Os bancos mantêm livros contabilísticos privados que os clientes não conseguem auditar de forma independente.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Com o Bitcoin, és tu próprio o custodiante das tuas chaves privadas — consulta o nosso guia simples sobre ",
	"bitcoin-vs-banks::point_4_summary_2": "carteiras de Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Os bancos mantêm a custódia do teu dinheiro e podem congelá-lo, restringi-lo ou bloqueá-lo a qualquer momento.",
	"bitcoin-vs-banks::point_5_summary_1":
		"As taxas do Bitcoin são transparentes e previsíveis. Os bancos acumulam gradualmente comissões ocultas por contas, descobertos, transferências e caixas multibanco.",
	"bitcoin-vs-banks::point_6_summary_1":
		"O Bitcoin permite-te gastar apenas o que realmente tens. Os bancos permitem descobertos e depois cobram-te uma série de comissões de penalização por isso.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Uma vez enviada uma transação Bitcoin, não pode ser parada nem revertida. Os bancos podem bloquear, congelar ou cancelar transações com base em regras ou ordens governamentais.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e as <span class=\"asset\">obrigações</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"As obrigações são «sem risco» apenas no nome — a inflação, as flutuações das taxas de juro e o risco de incumprimento erodem os retornos reais.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"O Bitcoin tem volatilidade transparente, mas nenhum risco oculto de contraparte.",
	"bitcoin-vs-bonds::point_2_summary_1": "Quando a",
	"bitcoin-vs-bonds::point_2_summary_2": "inflação",
	"bitcoin-vs-bonds::point_2_summary_3":
		"ultrapassa os rendimentos das obrigações, os detentores perdem poder de compra real todos os anos. O limite de 21 milhões do Bitcoin não pode ser diluído pela inflação.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Os mercados de obrigações podem congelar durante crises — o Silicon Valley Bank colapsou em parte porque tinha obrigações que perderam valor. Vê como acontecem as",
	"bitcoin-vs-bonds::point_3_summary_2": "corridas aos bancos",
	"bitcoin-vs-bonds::point_3_summary_3":
		" e por que é que o Bitcoin as evita. O Bitcoin é negociado 24/7 a nível mundial sem crises de liquidez.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Os leilões de obrigações governamentais podem falhar quando não há compradores suficientes — vê o",
	"bitcoin-vs-bonds::point_4_summary_2": "leilão fraco de 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"O preço do Bitcoin é descoberto continuamente em mercados abertos, sem um leilão central que possa falhar.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Os rendimentos das obrigações são fixados no momento da compra. Mesmo que a economia cresça ou a moeda colapse, o teu retorno mantém-se igual.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"O Bitcoin tem margem significativa para crescer à medida que a adoção aumenta e a procura encontra uma oferta fixa.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"A maioria das obrigações é mantida em custódia através de bancos ou corretoras, adicionando risco de contraparte. O Bitcoin pode ser mantido em autocustódia com uma",
	"bitcoin-vs-bonds::point_6_summary_2": "carteira",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — eliminando esse risco por completo.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"As obrigações dependem por completo do reembolso da dívida pelos governos. Se um governo entrar em incumprimento ou reduzir a dívida através da inflação, os detentores perdem.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"O Bitcoin funciona independentemente de qualquer governo ou autoridade política.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e o <span class=\"asset\">dinheiro</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"O Bitcoin viaja para qualquer lugar do mundo pela Internet em minutos. O dinheiro físico exige presença física ou mensageiros de confiança — não consegues enviar uma nota de vinte por e-mail.",
	"bitcoin-vs-cash::point_2_summary_1":
		"O Bitcoin funciona da mesma forma em todo o lado. O dinheiro está limitado pela geografia, pelas taxas de câmbio e pela aceitação local.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Os governos podem invalidar o dinheiro de um dia para o outro — a <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Índia</a> fê-lo em 2016. Mas mesmo sem desmonetização, o dinheiro perde valor devido à",
	"bitcoin-vs-cash::point_3_summary_2": "inflação.",
	"bitcoin-vs-cash::point_3_summary_3":
		"O Bitcoin não pode ser invalidado por nenhum governo nem autoridade.",
	"bitcoin-vs-cash::point_4_summary_1":
		"O dinheiro pode ser falsificado, por vezes de forma convincente. O Bitcoin usa criptografia que torna a falsificação matematicamente impossível.",
	"bitcoin-vs-cash::point_5_summary_1":
		"O Bitcoin não tem autoridade central. O dinheiro é emitido por governos que podem imprimir mais, alterar designs ou retirar notas de circulação à vontade.",
	"bitcoin-vs-cash::point_6_summary_1":
		"O dinheiro físico é vulnerável ao roubo, ao fogo, à perda e ao confisco. O Bitcoin pode ser ",
	"bitcoin-vs-cash::point_6_summary_2": "guardado em autocustódia em segurança",
	"bitcoin-vs-cash::point_6_summary_3":
		" no teu telemóvel ou num dispositivo de hardware.",
	"bitcoin-vs-cash::point_7_summary_1":
		"O Bitcoin pode ser dividido em 100 milhões de satoshis, permitindo micropagamentos de qualquer dimensão. O dinheiro físico tem denominações mínimas — não consegues partir um cêntimo.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e as <span class=\"asset\">moedas digitais de bancos centrais (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Ninguém te pode impedir de transacionar com Bitcoin. As CBDC foram concebidas para que governos e bancos centrais controlem cada pagamento, limitando a tua privacidade e a tua liberdade.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"O Bitcoin nunca expira e não tem comissões mensais. As CBDC podem ser programadas para expirar, desincentivando-te a poupar para o futuro.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"O Bitcoin tem um limite fixo de 21 milhões de BTC. As CBDC não têm limite de oferta e permitem aos governos expandir a oferta monetária à vontade — causando",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflação.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Os endereços Bitcoin não estão ligados à tua identidade real. As CBDC estão diretamente ligadas à identidade governamental, permitindo vigilância em massa e censura financeira.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"As regras do Bitcoin são verificadas por dezenas de milhares de nós independentes. As CBDC são centralizadas em governos e bancos centrais que detêm controlo total sobre a rede.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Qualquer pessoa pode correr um nó Bitcoin e verificar as regras da rede. As CBDC não permitem que os utilizadores corram nós — tens de confiar numa autoridade central.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"O Bitcoin em autocustódia não pode ser congelado por ninguém. As CBDC foram concebidas para que governos e bancos centrais possam congelar contas instantaneamente.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"O Bitcoin dá-te controlo total sobre o teu dinheiro quando o guardas numa",
	"bitcoin-vs-cbdc::point_8_summary_2": "carteira.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"As CBDC exigem confiança em custodiantes como bancos ou governos que guardam o dinheiro por ti.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"A política monetária do Bitcoin está fixada no código e não pode mudar. As CBDC podem ser reprogramadas à vontade dos políticos, causando",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflação",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", quando se imprime demasiado dinheiro.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"O Bitcoin é a rede informática mais segura alguma vez construída e nunca foi pirateada. As CBDC dependem de bancos e governos que já foram pirateados inúmeras vezes.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e as <span class=\"asset\">criptomoedas</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"O protocolo Bitcoin praticamente não mudou desde 2009 e fornece regras previsíveis. A maioria dos projetos cripto está constantemente a alterar protocolos, a tokenómica ou a fazer fork em novas versões.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"O Bitcoin corre em dezenas de milhares de nós independentes em todo o mundo. A maioria dos projetos cripto é controlada por fundações, empresas ou pequenos grupos de developers que podem fazer alterações unilaterais.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"O Bitcoin tem um limite fixo de 21 milhões de moedas — o ativo digital mais escasso. A maioria dos projetos cripto tem oferta ilimitada ou mecanismos para criar arbitrariamente novos tokens, diluindo os detentores.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"O Bitcoin tem um único propósito: dinheiro digital entre pares. Toda a gente o consegue compreender e utilizar. A maioria das criptomoedas inclui smart contracts ou DeFi complexos que requerem conhecimentos técnicos para serem usados em segurança.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"A Prova de Trabalho do Bitcoin tem funcionado sem um ataque bem-sucedido à cadeia principal há mais de 15 anos. A maioria dos projetos cripto usa consensos experimentais que não foram testados a fundo.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"O Bitcoin é dinheiro digital — reserva de valor e meio de troca. A maioria dos tokens cripto é constituída por tokens especulativos de utilidade ou de governança com valor real pouco claro.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"O Bitcoin fortalece-se sob ataque e sobreviveu a todas as crises, proibições e críticas. A maioria dos projetos cripto colapsa sob pressão regulatória, técnica ou de mercado.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"O Bitcoin não tem CEO, empresa nem um único ponto de falha. A maioria dos projetos cripto depende de investidores de capital de risco, de uma liderança específica ou da sobrevivência de uma única empresa.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e as <span class=\"asset\">belas-artes</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Cada bitcoin é idêntico e intercambiável. Cada obra de arte é única — diferente proveniência, história, condição e linhagem tornam a comparação direta extremamente difícil.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"O Bitcoin é negociado 24/7 num mercado global acessível a todos. As belas-artes exigem leiloeiras especializadas, marchands privados ou galerias, e as vendas podem demorar meses.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Comprar ou vender Bitcoin custa menos de 1 % em comissões, frequentemente muito menos. As vendas de arte acumulam 30-40 % em comissões de comprador, prémios, seguros, transporte e taxas de autenticação.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"O Bitcoin pode ser dividido em 100 milhões de satoshis, o que o torna ideal para transações de qualquer dimensão. Não consegues possuir parte de um quadro nem o canto de uma escultura sem risco de contraparte.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"A propriedade e autenticidade do Bitcoin podem ser verificadas criptograficamente por qualquer pessoa na blockchain. A autenticação de arte é cara, demorada e regularmente enganada por falsificadores — destruindo o valor de uma obra de um dia para o outro.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"O Bitcoin corretamente protegido sobrevive a inundações, incêndios, terramotos e roubos. As belas-artes são vulneráveis a todos os tipos de desastre físico, e os seguros raramente cobrem tudo.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Qualquer pessoa com ligação à Internet e algum dinheiro pode comprar Bitcoin. O investimento em arte está, na prática, limitado a colecionadores ricos com acesso a leilões e conhecimentos especializados.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e o <span class=\"asset\">ouro</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"O Bitcoin pode ser enviado instantaneamente pela Internet com taxas baixas. O ouro tem de ser enviado fisicamente para transferir a propriedade.",
	"bitcoin-vs-gold::point_2_summary_1":
		"O Bitcoin é um ativo nativamente digital que podes transferir pela Internet. O ouro online é um IOU digital — apenas possuis uma promessa de um custodiante, não o metal em si.",
	"bitcoin-vs-gold::point_3_summary_1":
		"O Bitcoin tem um limite fixo de 21 milhões de BTC. A oferta de ouro cresce cerca de <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % por ano</a>, encolhendo a tua fatia — menos do que a",
	"bitcoin-vs-gold::point_3_summary_2": "inflação",
	"bitcoin-vs-gold::point_3_summary_3":
		" do fiat, mas ainda assim inflação.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Quando os preços do ouro sobem, é extraído mais ouro, empurrando o preço para baixo. A oferta do Bitcoin é inelástica — por mais que o preço suba, haverá sempre apenas 21 milhões.",
	"bitcoin-vs-gold::point_5_summary_1":
		"A rede Bitcoin é verificada por dezenas de milhares de nós independentes. A maior parte do ouro físico encontra-se em poucos cofres de grande dimensão.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Qualquer pessoa pode verificar Bitcoin autêntico correndo um nó completo — é apenas uma aplicação. Verificar ouro físico exige fundi-lo; pode ter tungsténio dentro.",
	"bitcoin-vs-gold::point_7_summary_1":
		"O Bitcoin pode ser dividido em 100 milhões de satoshis, o que o torna ideal para compras de qualquer dimensão. O ouro não pode ser facilmente dividido para transações mais pequenas.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e o <span class=\"asset\">imobiliário</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"O Bitcoin movimenta-se instantaneamente para qualquer lugar do mundo. O imobiliário está fixado a uma localização e exposto a riscos económicos, políticos e ambientais locais.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"O Bitcoin pode ser dividido em 100 milhões de satoshis. O imobiliário não pode ser vendido parcialmente — não consegues vender uma cozinha nem comprar metade de um quarto.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"O Bitcoin funciona numa rede descentralizada que nenhum governo pode controlar. O imobiliário é fortemente regulado — zoneamento, controlo de rendas, expropriação e apreensão são tudo aplicáveis.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"O Bitcoin não exige manutenção. O imobiliário exige reparações, renovações, seguros, gestão de propriedade e lidar com problemas de inquilinos.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"O Bitcoin não está sujeito a impostos contínuos — só pagas mais-valias quando vendes. O imobiliário paga IMI/imposto de propriedade anual, independentemente do rendimento.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"O Bitcoin corretamente protegido sobrevive a incêndios, inundações e terramotos. O imobiliário é vulnerável a todos os desastres, e os seguros raramente cobrem tudo.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Cada bitcoin é idêntico e intercambiável. Cada propriedade imobiliária é única, o que dificulta a avaliação e a comparação.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"O Bitcoin é negociado globalmente 24/7 para qualquer pessoa com acesso à Internet. As vendas imobiliárias estão limitadas a compradores locais e podem demorar meses a fechar com burocracia.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"O Bitcoin permite a propriedade individual direta para qualquer pessoa. Comprar imobiliário como investimento, para além da residência principal, encarece os preços da habitação, reduz a disponibilidade e cria uma crise habitacional.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e as <span class=\"asset\">ações</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"O Bitcoin é um ativo direto que possuis por completo. As ações são participações numa empresa — o seu valor depende da gestão, do desempenho e de decisões que não controlas.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"O Bitcoin tem um limite fixo de 21 milhões de BTC. As empresas podem emitir novas ações a qualquer momento e diluir os acionistas existentes — tal como a",
	"bitcoin-vs-stocks::point_2_summary_2": "inflação",
	"bitcoin-vs-stocks::point_2_summary_3":
		" do fiat dilui o dinheiro. Com Bitcoin, a tua fatia nunca encolhe.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"O Bitcoin não tem CEO nem um único ponto de falha. As ações dependem fortemente da gestão — uma má decisão ou a saída de uma pessoa-chave pode afundar o preço.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"O preço do Bitcoin vem de mercados globais abertos. A avaliação de ações baseia-se em métricas como o P/E que podem ocultar ações sobrevalorizadas.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"O Bitcoin é negociado 24/7 em todo o mundo. Os mercados acionistas só estão abertos em dias úteis durante o horário de negociação.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Com o Bitcoin, podes passar para a",
	"bitcoin-vs-stocks::point_6_summary_2": "autocustódia",
	"bitcoin-vs-stocks::point_6_summary_3":
		" com uma simples aplicação — não precisas de corretor. As ações ficam em custódia em corretoras, expondo-te a risco de contraparte se colapsarem.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"A oferta fixa do Bitcoin torna-o uma proteção fiável contra a inflação. Algumas ações vencem a inflação, outras não — não há garantia.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"A diferença entre <span class=\"orange\">Bitcoin</span> e a <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"O Bitcoin é uma rede aberta a que qualquer pessoa pode aderir sem permissão. A Visa é um sistema fechado controlado por instituições financeiras que podem negar o acesso — em particular a pessoas sem banco ou com acesso bancário limitado.",
	"bitcoin-vs-visa::point_2_summary_1":
		"As transações Bitcoin não têm comissões para o comerciante. A Visa cobra tipicamente aos comerciantes cerca de 3 % por transação — a tua empresa pode poupar dinheiro a aceitar",
	"bitcoin-vs-visa::point_2_summary_2": "pagamentos em Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Cada transação Bitcoin está numa blockchain pública e verificável. A Visa opera um sistema fechado e proprietário em que os clientes não conseguem verificar nada de forma independente.",
	"bitcoin-vs-visa::point_4_summary_1":
		"O Bitcoin não pode ser congelado por nenhuma autoridade central. A Visa pode congelar contas, bloquear transações ou negar serviço a qualquer momento.",
	"bitcoin-vs-visa::point_5_summary_1":
		"O Bitcoin é liquidação final — só gastas o que tens. Os cartões de crédito criam dívida com taxas de juro que ultrapassam frequentemente os 25 % ao ano.",
	"bitcoin-vs-visa::point_6_summary_1": "O Bitcoin permite-te passar para a",
	"bitcoin-vs-visa::point_6_summary_2": "autocustódia",
	"bitcoin-vs-visa::point_6_summary_3":
		" sem precisares de um banco nem de um processador de pagamentos. Os cartões de crédito exigem sempre intermediários.",
	"bitcoin-vs-visa::point_7_summary_1":
		"O Bitcoin funciona 24/7 a nível global, sem horário comercial. A Visa tem horários operacionais, janelas de manutenção e restrições geográficas que podem bloquear transações.",
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
			const ns = e.namespace;
			if (
				ns === "404" ||
				ns === "about" ||
				ns === "bank-runs" ||
				ns.startsWith("bitcoin-vs-")
			) {
				missing++;
				missingKeys.push(lookupKey);
			}
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (pt): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();

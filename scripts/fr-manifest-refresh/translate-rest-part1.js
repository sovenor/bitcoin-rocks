#!/usr/bin/env node
/**
 * French manifest refresh — part 1 of non-inflation namespaces.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Retour à l’accueil",
	"404::404_message":
		"Bitcoin est génial, mais cette page cassée, non.",
	"404::404_not_found_short": "Introuvable",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Nous proposons des ressources gratuites qui facilitent l’acceptation de Bitcoin par les commerces locaux. Notre page Bitcoin pour les entreprises explique pourquoi Bitcoin est bon pour le business, comment choisir un wallet et un terminal de paiement, et propose des autocollants gratuits « Bitcoin accepté ici ».",
	"about::about_card_business_label": "Ressources pour entreprises",
	"about::about_card_business_source": "Source : bitcoin.rocks →",
	"about::about_card_business_title":
		"Tout ce dont une entreprise a besoin pour commencer à accepter les paiements en Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Source : GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Contribuer",
	"about::about_card_contribute_source": "Source : GitHub →",
	"about::about_card_contribute_title":
		"Découvre comment contribuer au projet bitcoin.rocks",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Source : e-mail →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Flyers imprimables",
	"about::about_card_flyers_source": "Source : bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Télécharge et imprime des flyers Bitcoin pour ta communauté",
	"about::about_card_github_label": "Dépôt",
	"about::about_card_github_source": "Source : GitHub →",
	"about::about_card_github_title": "Voir bitcoin.rocks sur GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Source : Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Autocollants gratuits",
	"about::about_card_stickers_source": "Source : bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Reçois gratuitement des autocollants Bitcoin à ta porte",
	"about::about_editorial_2":
		"Nous citons des sources fiables comme la Réserve fédérale (FRED), le Bureau of Labor Statistics des États-Unis, la FDIC, l’ONU, le World Gold Council, Forbes, MIT Technology Review, Lyn Alden et James Lavish. Nous pensons que lorsque les faits sont présentés clairement, Bitcoin parle de lui-même.",
	"about::about_flyers_blurb":
		"Nous concevons des flyers imprimables que tu peux partager lors de rencontres, afficher sur des tableaux ou glisser dans des boîtes aux lettres — un moyen simple d’éveiller la curiosité et de rediriger les gens vers bitcoin.rocks, où ils peuvent en apprendre davantage.",
	"about::about_header": "À propos de bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks a été fondé par l’utilisateur",
	"about::about_mission_1b":
		"en 2022 avec une mission simple : accélérer l’adoption de Bitcoin par l’éducation.",
	"about::about_open_source_2":
		"bitcoin.rocks est un projet gratuit et open source sous licence MIT. Tout le monde peut contribuer. Nous accueillons particulièrement les traducteurs, qui aident à rendre nos contenus accessibles à des personnes du monde entier.",
	"about::about_open_source_header": "Open source",
	"about::about_page_description":
		"bitcoin.rocks est un site web éducatif, gratuit et open source sur Bitcoin, fondé en 2022. Notre mission est d’accélérer l’adoption de Bitcoin par l’éducation.",
	"about::about_stickers_blurb":
		"Nous envoyons gratuitement des autocollants Bitcoin directement à ta porte, pour que tu puisses contribuer à faire connaître Bitcoin dans ta communauté. Chaque mois, des centaines de personnes scannent les QR codes de ces autocollants pour en apprendre davantage sur Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin ne connaît pas de panique bancaire",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin est un système à réserve pleine. Tu ne déposes pas ton argent dans une banque. Tu es ta propre banque. Ton argent n’est pas prêté à ton insu, parce que la seule personne qui y a accès, c’est toi.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Tant que tu gardes tes bitcoins dans ton propre wallet — pas sur une plateforme d’échange ni dans un ETF — les paniques bancaires sont impossibles.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Avec Bitcoin, tu contrôles vraiment ton argent.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Depuis le 26 mars 2020, les banques américaines ne sont plus tenues de conserver la moindre réserve obligatoire.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Ratio de réserves bancaires",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Source : Réserve fédérale →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Système à réserve pleine — aucune assurance-dépôts nécessaire.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Couverture Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Source : livre blanc Bitcoin →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Chaque bitcoin existe sur la blockchain — rien n’est prêté.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Ratio de réserves de Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Source : livre blanc Bitcoin →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Fonds d’assurance de 153,9 milliards $ contre 10,82 billions $ de dépôts assurés (déc. 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Couverture de la FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Source : FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Étude de cas",
	"bank-runs::bank_runs_card_svb_source":
		"Source : University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Regarde comment la panique bancaire de Silicon Valley Bank s’est déroulée",
	"bank-runs::bank_runs_card_wallet_label": "Prochaine étape",
	"bank-runs::bank_runs_card_wallet_source": "Commence ici →",
	"bank-runs::bank_runs_card_wallet_title":
		"Apprends à obtenir ton propre wallet Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"L’assurance FDIC couvre environ 1 % des dépôts",
	"bank-runs::bank_runs_fdic_p1":
		"L’assurance FDIC protège les dépôts jusqu’à 250 000 $ par déposant. Mais le fonds d’assurance est minuscule par rapport au total des dépôts qu’il est censé protéger.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Lors d’un effondrement bancaire généralisé, le gouvernement imprimerait probablement de la monnaie pour combler l’écart — provoquant davantage d’",
	"bank-runs::bank_runs_fdic_p2_link": "inflation.",
	"bank-runs::bank_runs_header":
		"Bitcoin ne connaît pas de panique bancaire, mais ta banque peut.",
	"bank-runs::bank_runs_page_description":
		"Les banques prêtent tes dépôts via le système de réserves fractionnaires. Si trop de monde retire en même temps, les banques peuvent s’effondrer. Bitcoin est un système à réserve pleine — les paniques bancaires sont impossibles.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank : un exemple concret",
	"bank-runs::bank_runs_svb_p1_a":
		"En mars 2023, Silicon Valley Bank s’est effondrée après avoir investi les dépôts de ses clients dans des",
	"bank-runs::bank_runs_svb_p1_b":
		"Quand ces obligations ont perdu de la valeur, SVB n’a pas pu couvrir les retraits. La banque est devenue insolvable.",
	"bank-runs::bank_runs_svb_p1_link":
		"obligations d’État à long terme.",
	"bank-runs::bank_runs_svb_p2":
		"Des milliers d’entreprises n’ont pas pu payer leurs employés. La FDIC est intervenue — mais une question plus large a émergé : ton argent est-il vraiment en sécurité ?",
	"bank-runs::bank_runs_what_p1":
		"Les banques ne gardent pas tes dépôts dans un coffre-fort. Elles prêtent et investissent ton argent — c’est ce qu’on appelle le système à réserves fractionnaires.",
	"bank-runs::bank_runs_what_p2":
		"Si trop de personnes essaient de retirer en même temps, la banque n’a pas assez de liquidités pour rembourser tout le monde. C’est une panique bancaire — et cela peut entraîner l’effondrement complet de la banque.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et les <span class=\"asset\">banques</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin peut être utilisé par n’importe qui disposant d’une connexion internet — il est ",
	"bitcoin-vs-banks::point_1_summary_2": "sans permission.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Les banques peuvent refuser, geler ou fermer des comptes selon leurs propres règles ou selon la réglementation.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Le réseau Bitcoin fonctionne 24 h/24, 7 j/7, 365 j/an sans fenêtre de maintenance ni jour férié. Les banques ont des horaires limités, ferment le week-end et subissent des pannes opérationnelles.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Chaque transaction Bitcoin est inscrite sur une blockchain publique que tout le monde peut vérifier. Les banques tiennent des livres de comptes privés que les clients ne peuvent pas auditer de manière indépendante.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Avec Bitcoin, tu conserves toi-même tes clés privées — consulte notre guide simple des ",
	"bitcoin-vs-banks::point_4_summary_2": "wallets Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Les banques conservent la garde de ton argent et peuvent le geler, le restreindre ou le bloquer à tout moment.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Les frais de Bitcoin sont transparents et prévisibles. Les banques empilent progressivement des frais cachés pour les comptes, les découverts, les virements et les distributeurs.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin te permet de dépenser uniquement ce que tu possèdes réellement. Les banques autorisent les découverts et te facturent ensuite une série de frais de pénalité.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Une fois une transaction Bitcoin envoyée, elle ne peut être ni arrêtée ni annulée. Les banques peuvent bloquer, geler ou annuler des transactions selon leurs règles ou sur ordre du gouvernement.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et les <span class=\"asset\">obligations</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Les obligations sont « sans risque » seulement de nom — l’inflation, les variations de taux d’intérêt et le risque de défaut érodent les rendements réels.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin a une volatilité transparente, mais aucun risque de contrepartie caché.",
	"bitcoin-vs-bonds::point_2_summary_1": "Quand l’",
	"bitcoin-vs-bonds::point_2_summary_2": "inflation",
	"bitcoin-vs-bonds::point_2_summary_3":
		"dépasse les rendements obligataires, les détenteurs d’obligations perdent du pouvoir d’achat réel chaque année. Le plafond de 21 millions de Bitcoin ne peut pas être dilué par l’inflation.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Les marchés obligataires peuvent se figer en période de crise — Silicon Valley Bank s’est effondrée en partie parce qu’elle détenait des obligations qui ont perdu de la valeur. Vois comment les",
	"bitcoin-vs-bonds::point_3_summary_2": "paniques bancaires",
	"bitcoin-vs-bonds::point_3_summary_3":
		" se produisent et pourquoi Bitcoin les évite. Bitcoin se négocie 24 h/24 à l’échelle mondiale sans crise de liquidité.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Les adjudications d’obligations d’État peuvent échouer quand il n’y a pas assez d’acheteurs — regarde la",
	"bitcoin-vs-bonds::point_4_summary_2": "faible adjudication de 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Le prix de Bitcoin se découvre en continu sur des marchés ouverts, sans enchère centrale qui puisse échouer.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Les rendements obligataires sont fixés au moment de l’achat. Même si l’économie se développe ou si la monnaie s’effondre, ton rendement reste le même.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin a une marge de progression significative à mesure que l’adoption s’étend et que la demande rencontre une offre fixe.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"La plupart des obligations sont conservées via des banques ou des courtiers, ce qui ajoute un risque de contrepartie. Bitcoin peut être auto-custodié avec un",
	"bitcoin-vs-bonds::point_6_summary_2": "wallet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — supprimant complètement ce risque.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Les obligations dépendent entièrement du remboursement de la dette par les gouvernements. Si un gouvernement fait défaut ou réduit sa dette par l’inflation, les détenteurs d’obligations y perdent.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin fonctionne indépendamment de tout gouvernement ou autorité politique.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et l’<span class=\"asset\">argent liquide</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin voyage n’importe où dans le monde par internet, en quelques minutes. L’argent liquide exige une présence physique ou des messagers de confiance — on n’envoie pas un billet de vingt par e-mail.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin fonctionne partout de la même façon. L’argent liquide est limité par la géographie, les taux de change et l’acceptation locale.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Les gouvernements peuvent invalider l’argent liquide du jour au lendemain — l’<a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Inde</a> l’a fait en 2016. Mais même sans démonétisation, l’argent liquide perd de la valeur à cause de l’",
	"bitcoin-vs-cash::point_3_summary_2": "inflation.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin ne peut être invalidé par aucun gouvernement ou autorité.",
	"bitcoin-vs-cash::point_4_summary_1":
		"L’argent liquide peut être contrefait, parfois de manière convaincante. Bitcoin utilise une cryptographie qui rend la contrefaçon mathématiquement impossible.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin n’a pas d’autorité centrale. L’argent liquide est émis par des gouvernements qui peuvent en imprimer davantage, changer les designs ou retirer des billets à leur guise.",
	"bitcoin-vs-cash::point_6_summary_1":
		"L’argent liquide est vulnérable au vol, au feu, à la perte et à la confiscation. Bitcoin peut être",
	"bitcoin-vs-cash::point_6_summary_2": "auto-custodié en toute sécurité",
	"bitcoin-vs-cash::point_6_summary_3":
		" sur ton téléphone ou sur un appareil matériel.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin est divisible en 100 millions de satoshis, ce qui permet des micropaiements de toute taille. L’argent liquide a des coupures minimales — on ne peut pas fractionner un centime.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et les <span class=\"asset\">monnaies numériques de banque centrale (MNBC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Personne ne peut t’empêcher d’effectuer des transactions en Bitcoin. Les MNBC sont conçues pour que les gouvernements et les banques centrales contrôlent chaque paiement, limitant ta vie privée et ta liberté.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin n’expire jamais et n’a pas de frais mensuels. Les MNBC peuvent être programmées pour expirer, te dissuadant d’épargner pour l’avenir.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin a un plafond fixe de 21 millions de BTC. Les MNBC n’ont aucune limite d’offre et permettent aux gouvernements d’étendre la masse monétaire à volonté — provoquant de l’",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflation.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Les adresses Bitcoin ne sont pas liées à ton identité réelle. Les MNBC sont directement rattachées à une identité gouvernementale, permettant surveillance de masse et censure financière.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Les règles de Bitcoin sont vérifiées par des dizaines de milliers de nœuds indépendants. Les MNBC sont centralisées entre les mains des gouvernements et des banques centrales qui ont le contrôle total du réseau.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"N’importe qui peut faire tourner un nœud Bitcoin et vérifier les règles du réseau. Les MNBC ne permettent pas aux utilisateurs de faire tourner des nœuds — tu dois faire confiance à une autorité centrale.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Un Bitcoin auto-custodié ne peut être gelé par personne. Les MNBC sont conçues pour que les gouvernements et les banques centrales puissent geler des comptes instantanément.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin te donne le contrôle total de ton argent quand tu le conserves dans un",
	"bitcoin-vs-cbdc::point_8_summary_2": "wallet.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Les MNBC exigent la confiance envers des dépositaires comme les banques ou les gouvernements qui détiennent l’argent pour toi.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"La politique monétaire de Bitcoin est fixée dans le code et ne peut pas changer. Les MNBC peuvent être reprogrammées selon le bon vouloir des responsables politiques, provoquant de l’",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflation",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", quand trop de monnaie est imprimée.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin est le réseau informatique le plus sûr jamais construit et n’a jamais été piraté. Les MNBC reposent sur des banques et des gouvernements qui ont été piratés d’innombrables fois.",
	"bitcoin-vs-cbdc::cbdc": "MNBC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et les <span class=\"asset\">cryptomonnaies</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Le protocole de Bitcoin a très peu changé depuis 2009 et offre des règles prévisibles. La plupart des projets crypto changent constamment de protocole, de tokenomics ou se forkent en nouvelles versions.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin tourne sur des dizaines de milliers de nœuds indépendants dans le monde entier. La plupart des projets crypto sont contrôlés par des fondations, des entreprises ou de petits groupes de développeurs qui peuvent faire des changements unilatéraux.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin a un plafond fixe de 21 millions de coins — l’actif numérique le plus rare. La plupart des projets crypto ont une offre illimitée ou des mécanismes pour créer arbitrairement de nouveaux tokens, diluant les détenteurs.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin a un seul objectif : de la monnaie numérique en pair à pair. Tout le monde peut la comprendre et l’utiliser. La plupart des cryptos incluent des smart contracts ou de la DeFi complexes qui exigent des compétences techniques pour être utilisés en toute sécurité.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"La Preuve de Travail de Bitcoin fonctionne sans aucune attaque réussie sur la chaîne principale depuis plus de 15 ans. La plupart des projets crypto utilisent des mécanismes de consensus expérimentaux qui n’ont pas été testés en profondeur.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin est de la monnaie numérique — réserve de valeur et moyen d’échange. La plupart des tokens crypto sont des tokens spéculatifs d’utilité ou de gouvernance dont la valeur réelle est floue.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin se renforce sous les attaques et a survécu à toutes les crises, interdictions et critiques. La plupart des projets crypto s’effondrent sous la pression réglementaire, technique ou de marché.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin n’a ni PDG, ni entreprise, ni point unique de défaillance. La plupart des projets crypto dépendent d’investisseurs en capital-risque, d’un leadership spécifique ou de la survie d’une seule entreprise.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et les <span class=\"asset\">beaux-arts</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Chaque bitcoin est identique et interchangeable. Chaque œuvre d’art est unique — provenance, histoire, état et lignée différents rendent la comparaison directe extrêmement difficile.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin se négocie 24 h/24 sur un marché mondial accessible à tous. Les beaux-arts exigent des maisons de vente spécialisées, des marchands privés ou des galeries, et les ventes peuvent prendre des mois.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Acheter ou vendre du Bitcoin coûte moins de 1 % en frais, souvent beaucoup moins. Les ventes d’art cumulent 30-40 % en commissions d’acheteur, frais, assurance, transport et frais d’authentification.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin est divisible en 100 millions de satoshis, ce qui le rend idéal pour des transactions de toute taille. Tu ne peux pas posséder une partie d’un tableau ou le coin d’une sculpture sans risque de contrepartie.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"La propriété et l’authenticité de Bitcoin peuvent être vérifiées cryptographiquement par n’importe qui sur la blockchain. L’authentification des œuvres est chère, longue, et régulièrement trompée par des faussaires — détruisant la valeur d’une œuvre du jour au lendemain.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin correctement sauvegardé survit aux inondations, aux incendies, aux tremblements de terre et aux vols. Les beaux-arts sont vulnérables à tous les types de catastrophes physiques, et les assurances couvrent rarement tout.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"N’importe qui avec une connexion internet et un peu d’argent peut acheter du Bitcoin. L’investissement dans l’art est en pratique réservé aux collectionneurs fortunés ayant accès aux enchères et à une expertise spécialisée.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et l’<span class=\"asset\">or</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin peut être envoyé instantanément par internet avec des frais faibles. L’or doit être expédié physiquement pour transférer la propriété.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin est un actif nativement numérique que tu peux transférer par internet. L’or en ligne est un IOU numérique — tu ne possèdes qu’une promesse d’un dépositaire, pas le métal lui-même.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin a un plafond fixe de 21 millions de BTC. L’offre d’or croît d’environ <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % par an</a>, réduisant ta part — moins que l’",
	"bitcoin-vs-gold::point_3_summary_2": "inflation",
	"bitcoin-vs-gold::point_3_summary_3":
		" des monnaies fiduciaires, mais c’est quand même de l’inflation.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Quand les prix de l’or montent, on extrait davantage d’or, ce qui fait baisser à nouveau le prix. L’offre de Bitcoin est inélastique — peu importe à quel point le prix grimpe, il y en aura toujours seulement 21 millions.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Le réseau Bitcoin est vérifié par des dizaines de milliers de nœuds indépendants. La majorité de l’or physique se trouve dans quelques grandes chambres fortes.",
	"bitcoin-vs-gold::point_6_summary_1":
		"N’importe qui peut vérifier l’authenticité d’un Bitcoin en faisant tourner un nœud complet — c’est juste une application. Vérifier de l’or physique demande de le faire fondre ; il pourrait contenir du tungstène à l’intérieur.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin est divisible en 100 millions de satoshis, ce qui le rend idéal pour des achats de toute taille. L’or ne peut pas être facilement divisé pour des transactions plus petites.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et l’<span class=\"asset\">immobilier</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin se déplace instantanément partout dans le monde. L’immobilier est ancré dans un lieu et exposé aux risques économiques, politiques et environnementaux locaux.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin est divisible en 100 millions de satoshis. L’immobilier ne peut pas être vendu partiellement — tu ne peux pas vendre une cuisine ni acheter une demi-chambre.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin fonctionne sur un réseau décentralisé qu’aucun gouvernement ne peut contrôler. L’immobilier est fortement réglementé — zonage, contrôle des loyers, expropriation et saisie s’appliquent tous.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin ne demande aucun entretien. L’immobilier exige des réparations, des rénovations, une assurance, une gestion locative et la gestion des problèmes des locataires.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin n’est pas soumis à des impôts permanents — tu ne paies des plus-values qu’à la vente. L’immobilier paie des taxes foncières annuelles indépendamment des revenus.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin correctement sauvegardé survit aux incendies, aux inondations et aux tremblements de terre. L’immobilier est vulnérable à toutes les catastrophes, et les assurances couvrent rarement tout.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Chaque bitcoin est identique et interchangeable. Chaque bien immobilier est unique, ce qui rend difficile la valorisation et la comparaison.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin se négocie mondialement 24 h/24 pour quiconque dispose d’internet. Les ventes immobilières sont limitées aux acheteurs locaux et peuvent prendre des mois à finaliser avec leur paperasse.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin permet à n’importe qui la propriété directe individuelle. Acheter de l’immobilier comme placement au-delà de la résidence principale fait grimper les prix du logement, réduit la disponibilité et crée une crise du logement.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et les <span class=\"asset\">actions</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin est un actif direct que tu possèdes entièrement. Les actions sont des parts d’une entreprise — leur valeur dépend de la direction, des performances et de décisions que tu ne contrôles pas.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin a un plafond fixe de 21 millions de BTC. Les entreprises peuvent émettre de nouvelles actions à tout moment et diluer les actionnaires existants — tout comme l’",
	"bitcoin-vs-stocks::point_2_summary_2": "inflation",
	"bitcoin-vs-stocks::point_2_summary_3":
		" fiduciaire dilue l’argent liquide. Avec Bitcoin, ta part ne rétrécit jamais.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin n’a ni PDG, ni point unique de défaillance. Les actions dépendent fortement du management — une mauvaise décision ou le départ d’une personne clé peut faire plonger le cours.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Le prix de Bitcoin provient de marchés mondiaux ouverts. La valorisation des actions repose sur des ratios comme le P/E qui peuvent dissimuler des actions surévaluées.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin se négocie 24 h/24 dans le monde entier. Les marchés boursiers ne sont ouverts qu’en semaine pendant les heures de cotation.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Avec Bitcoin, tu peux passer à l’",
	"bitcoin-vs-stocks::point_6_summary_2": "auto-custody",
	"bitcoin-vs-stocks::point_6_summary_3":
		" avec une simple application — pas besoin de courtier. Les actions sont conservées chez des courtiers, ce qui t’expose à un risque de contrepartie s’ils s’effondrent.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"L’offre fixe de Bitcoin en fait une couverture fiable contre l’inflation. Certaines actions battent l’inflation, d’autres non — rien n’est garanti.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"La différence entre <span class=\"orange\">Bitcoin</span> et <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin est un réseau ouvert auquel tout le monde peut se joindre sans permission. Visa est un système fermé contrôlé par des institutions financières qui peuvent refuser l’accès — surtout aux personnes non bancarisées ou mal bancarisées.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Les transactions Bitcoin n’ont pas de frais pour le commerçant. Visa facture en général aux commerçants environ 3 % par transaction — ton entreprise peut économiser en acceptant les",
	"bitcoin-vs-visa::point_2_summary_2": "paiements en Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Chaque transaction Bitcoin est inscrite sur une blockchain publique et vérifiable. Visa exploite un système fermé et propriétaire où les clients ne peuvent rien vérifier de manière indépendante.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin ne peut être gelé par aucune autorité centrale. Visa peut geler des comptes, bloquer des transactions ou refuser le service à tout moment.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin est un règlement définitif — tu ne dépenses que ce que tu as. Les cartes de crédit créent de la dette avec des taux d’intérêt qui dépassent souvent 25 % par an.",
	"bitcoin-vs-visa::point_6_summary_1":
		"Bitcoin te permet de passer à l’",
	"bitcoin-vs-visa::point_6_summary_2": "auto-custody",
	"bitcoin-vs-visa::point_6_summary_3":
		" sans banque ni prestataire de paiement. Les cartes de crédit exigent toujours des intermédiaires.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin fonctionne 24 h/24, 7 j/7 à l’échelle mondiale, sans heures d’ouverture. Visa a des horaires d’exploitation, des fenêtres de maintenance et des restrictions géographiques qui peuvent bloquer des transactions.",
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
		`translate-rest-part1 (fr): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();

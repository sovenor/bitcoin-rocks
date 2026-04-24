#!/usr/bin/env node
/**
 * French manifest refresh — part 2 of non-inflation namespaces.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/index,
 *         sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Services de comptabilité Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Un guide simple pour comptabiliser les paiements en Bitcoin — wallets hybrides, prix de revient, plus-values et quand faire appel à ton comptable.",
	"business/accounting::accounting_s1_c1":
		"La manière la plus simple d’accepter Bitcoin, c’est d’utiliser un wallet hybride qui convertit automatiquement 100 % des bitcoins reçus en dollars (ou ta monnaie locale) dès que le paiement arrive.",
	"business/accounting::accounting_s1_c2":
		"Avec cette configuration, ta comptabilité ressemble exactement à ce qu’elle est aujourd’hui — le montant final est en dollars à chaque fois. Pas de prix de revient, pas de plus-values, pas de nouveau tableur.",
	"business/accounting::accounting_s2":
		"Si tu gardes du Bitcoin : suis ton prix de revient",
	"business/accounting::accounting_s2_c1":
		"Certaines entreprises choisissent de garder une partie du Bitcoin qu’elles reçoivent plutôt que de le convertir automatiquement. Si c’est ton cas, l’étape supplémentaire consiste à suivre le prix de revient — la valeur en dollars de chaque paiement Bitcoin le jour où tu l’as reçu.",
	"business/accounting::accounting_s2_c2":
		"Même si tu penses à ton entreprise uniquement en Bitcoin, la plupart des administrations fiscales veulent quand même que tu déclares la valeur en dollars. Bonne nouvelle : ce n’est que deux chiffres par transaction — la quantité de Bitcoin reçue et sa valeur en dollars ce jour-là.",
	"business/accounting::accounting_s2_c3":
		"Utilise les outils ci-dessous pour automatiser les recherches, afin de ne pas avoir à vérifier les prix chaque jour.",
	"business/accounting::accounting_s3":
		"Dépenser ou vendre le Bitcoin que tu as gardé",
	"business/accounting::accounting_s3_c1":
		"Si tu convertis chaque paiement automatiquement en dollars, saute cette section — elle ne te concerne pas.",
	"business/accounting::accounting_s3_c2":
		"Si tu as gardé du Bitcoin puis décides de le dépenser ou de le vendre, ajoute le prix de vente au même tableur que le prix de revient. La différence entre le coût du Bitcoin quand tu l’as reçu et son coût quand tu le dépenses ou le vends est une plus-value ou une moins-value.",
	"business/accounting::accounting_s3_c3": "Deux exemples rapides :",
	"business/accounting::accounting_s4":
		"Besoin d’un pro qui comprend Bitcoin ?",
	"business/accounting::accounting_s4_c1":
		"Si tu préfères laisser quelqu’un d’autre s’en occuper — ou si ta comptabilité Bitcoin est plus complexe qu’un wallet hybride ne peut gérer — nous recommandons vivement Satoshi Pacioli Accounting Services, un cabinet spécialisé dans la comptabilité Bitcoin pour les entreprises.",
	"business/accounting::bitcoin_business_accounting_guide":
		"La comptabilité Bitcoin pour ton entreprise",
	"business/accounting::accounting_card_bpr_label": "PRIX DE BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Recherche les prix actuels ou historiques de Bitcoin en dollars",
	"business/accounting::accounting_card_pacioli_label":
		"COMPTABLE BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"IMPORT VERS EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Importe automatiquement les prix de Bitcoin dans Excel",
	"business/accounting::accounting_card_wallets_label":
		"WALLETS HYBRIDES",
	"business/accounting::accounting_card_wallets_title":
		"Consulte nos wallets recommandés pour les entreprises",
	"business/accounting::accounting_disclaimer":
		"Ce guide est fourni à titre informatif uniquement et ne constitue pas un conseil fiscal. Pour des conseils fiscaux adaptés à ta situation, contacte un comptable qualifié.",
	"business/accounting::accounting_disclaimer_label": "À noter",
	"business/accounting::accounting_example_feb_1": "1er février",
	"business/accounting::accounting_example_gain_badge": "Plus-value",
	"business/accounting::accounting_example_gain_explain":
		"Tu enregistres une plus-value de 10 $.",
	"business/accounting::accounting_example_jan_1": "1er janvier",
	"business/accounting::accounting_example_loss_badge": "Moins-value",
	"business/accounting::accounting_example_loss_explain":
		"Tu enregistres une moins-value de 10 $.",
	"business/accounting::accounting_example_received_label": "Reçu",
	"business/accounting::accounting_example_sold_label":
		"Vendu ou dépensé",
	"business/accounting::accounting_hero_subtitle":
		"Accepter Bitcoin dans ton entreprise n’a pas à compliquer ta comptabilité. Voici la version courte — plus des outils et des experts pour que ce soit indolore.",
	"business/accounting::accounting_intro_c1":
		"Si tu acceptes déjà les espèces ou les cartes, ajouter Bitcoin à la comptabilité de ton entreprise est plus simple qu’il n’y paraît. Tu as deux chemins : convertir automatiquement chaque paiement Bitcoin en dollars dès qu’il arrive (pas de nouvelle comptabilité), ou garder une partie en Bitcoin (il faut suivre quelques chiffres supplémentaires).",
	"business/accounting::accounting_intro_c2":
		"Ce guide passe en revue les deux chemins — pour que tu choisisses celui qui correspond à ton entreprise et commences à accepter Bitcoin sereinement.",
	"business/accounting::accounting_s1":
		"Le chemin facile : conversion automatique en dollars",
	"business/accounting::accounting_s3_c6":
		"Et c’est tout. Les calculs de base sont les mêmes que pour n’importe quel autre actif qui monte ou baisse.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — prix actuel et historique de Bitcoin en dollars",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — comptabilité Bitcoin pour les entreprises",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — importer les prix des cryptomonnaies dans Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Réponses rapides aux questions que se posent souvent les commerçants avant d’accepter Bitcoin — frais, règlement, wallets, rétrofacturations, coûts et plus.",
	"business/faq::faq_intro_c1":
		"Clique sur n’importe quelle question ci-dessous pour déplier la réponse. Quand tu es prêt à commencer à accepter Bitcoin, les ressources pour entreprises en bas de page te guident étape par étape.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "COMPTABILITÉ",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "CARTES DES COMMERÇANTS",
	"business/index::biz_label_rewards": "RÉCOMPENSES",
	"business/index::biz_label_stickers": "AUTOCOLLANTS",
	"business/index::biz_label_wallets": "WALLETS",
	"business/index::biz_meta_description":
		"Accepte Bitcoin dans ton entreprise avec des frais plus bas, un règlement instantané, sans rétrofacturations, et attire plus de clients.",
	"business/index::business_hero_subtitle":
		"Encaisse avec des frais plus bas, règle instantanément et touche des millions de nouveaux clients — sans contrats ni coûts cachés.",
	"business/index::business_intro_c1":
		"Bitcoin donne à ton entreprise un moyen d’encaisser plus rapide, moins cher et plus confidentiel. Pas d’intermédiaires. Pas de rétrofacturations. Pas de contrats. Juste de l’argent qui se règle en quelques secondes, directement du client à toi.",
	"business/index::business_intro_c2":
		"Ci-dessous la version courte des raisons pour lesquelles Bitcoin est bon pour le business — et en-dessous, toutes les ressources dont tu as besoin pour commencer à l’accepter dès aujourd’hui.",
	"business/index::business_resources_heading":
		"Tout ce qu’il te faut pour accepter Bitcoin",
	"business/index::business_resources_intro":
		"Parcours ces ressources à ton rythme. Chacune est un guide court et pratique.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Parle-nous de ton entreprise",
	"business/maps::biz_maps_form_intro":
		"Nous avons juste besoin de quelques informations pour te mettre sur la carte. Nous ne gardons les données d’adresse que le temps nécessaire pour soumettre ton entreprise aux cartes.",
	"business/maps::biz_maps_hero_subtitle":
		"Ajoute gratuitement ton entreprise à BTC Map — un annuaire ouvert et mondial de commerçants qui acceptent Bitcoin — pour que les utilisateurs de Bitcoin proches te trouvent et dépensent du Bitcoin chez toi.",
	"business/maps::biz_maps_hero_title":
		"Mets ton entreprise sur les cartes des commerçants Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Les utilisateurs de Bitcoin cherchent activement où dépenser leur argent. Figurer sur la carte expose ton entreprise à chaque utilisateur de Bitcoin qui cherche où manger, faire ses courses ou dormir — totalement gratuit.",
	"business/maps::biz_maps_intro_c2":
		"Remplis simplement le court formulaire ci-dessous et nous soumettrons ton entreprise à BTC Map et aux autres cartes des commerçants Bitcoin.",
	"business/maps::biz_maps_meta_description":
		"Ajoute gratuitement ton entreprise à BTC Map et aux autres cartes des commerçants Bitcoin, pour que les utilisateurs de Bitcoin proches te trouvent.",
	"business/maps::biz_maps_placeholder_address":
		"Rue et numéro",
	"business/maps::biz_maps_placeholder_category":
		"Catégorie (par ex. restaurant, café, hôtel)",
	"business/maps::biz_maps_placeholder_city": "Ville",
	"business/maps::biz_maps_placeholder_country": "Pays",
	"business/maps::biz_maps_placeholder_name": "Nom de l’entreprise",
	"business/maps::biz_maps_placeholder_region":
		"Région / province / état",
	"business/maps::biz_maps_placeholder_website":
		"Site web (facultatif)",
	"business/maps::biz_maps_view_map_cta": "Voir BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Voir BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Merci d’avoir soumis ton entreprise. Nous te mettrons bientôt sur les cartes des commerçants Bitcoin.",
	"business/maps-success::biz_maps_success_hero_title":
		"Demande reçue 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Ton entreprise sera ajoutée à BTC Map et aux autres annuaires de commerçants Bitcoin d’ici 1 à 2 semaines. Nous examinons chaque soumission manuellement pour garder les cartes précises.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Une fois ton inscription en ligne, les utilisateurs de Bitcoin proches trouveront ton entreprise et viendront dépenser leurs bitcoins chez toi.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Ce qui se passe maintenant",
	"business/maps-success::biz_maps_success_view_c1":
		"En attendant, jette un œil à BTC Map pour voir le réseau grandissant d’entreprises du monde entier qui acceptent Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Regarde où tu apparaîtras",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Télécharge les fichiers d’autocollants en anglais pour imprimer tes propres autocollants « Bitcoin accepté ici ».",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Imprime tes propres autocollants « Bitcoin accepté ici » en anglais pour que tes clients sachent que tu acceptes Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Télécharge les fichiers d’autocollants en anglais « Bitcoin Accepted Here »",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Merci d’avoir demandé des fichiers d’autocollants « Bitcoin accepté ici » dans ta langue.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Demande reçue 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Nous créerons et publierons tes fichiers d’autocollants d’ici 3 à 4 semaines. Une fois prêts, tu pourras les télécharger et les imprimer gratuitement depuis notre page des fichiers d’autocollants.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Nous publions les fichiers d’autocollants par lots, alors il peut se passer plusieurs semaines avant que ta langue soit disponible. Merci pour ta patience !",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Ce qui se passe maintenant",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Commander en gros",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Demander un autre pack gratuit",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Tu recevras tes autocollants gratuits « Bitcoin accepté ici » sous 2 à 4 semaines, dans une enveloppe blanche simple contenant 3 autocollants.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Tes autocollants sont en route 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Si 3 autocollants ne suffisent pas pour ton entreprise, n’hésite pas à demander un autre pack gratuit — ou commande en gros chez le même imprimeur que nous.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Besoin de plus d’autocollants ?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Sur ta porte principale ou ta vitrine, pour que les clients les voient avant d’entrer",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Près de la caisse, sur le terminal de paiement ou là où les clients règlent",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Sur les menus, les listes de prix ou les pots à pourboires",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Ne les colle pas dans des lieux qui ne t’appartiennent pas ou où tu n’as pas l’autorisation de coller des autocollants",
	"business/sticker-success::biz_sticker_success_tips_header":
		"De bons endroits pour coller tes autocollants",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Fais savoir à tes clients que tu acceptes Bitcoin. Commande un pack gratuit d’autocollants « Bitcoin accepté ici » à coller dans ton commerce.",
	"business/stickers::biz_stickers_hero_title":
		"Autocollants gratuits « Bitcoin accepté ici »",
	"business/stickers::biz_stickers_intro_c1":
		"Accepter Bitcoin, c’est à moitié le travail — tes clients doivent aussi le savoir. Ces petits autocollants « Bitcoin accepté ici » sont conçus pour être collés sur la porte d’entrée, à la caisse, sur le menu ou partout où les clients les verront avant de payer.",
	"business/stickers::biz_stickers_intro_c2":
		"Nous t’envoyons un pack gratuit à n’importe quelle adresse aux États-Unis ou au Canada, ou tu peux imprimer les tiens n’importe où dans le monde.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Canada — gratuit par la poste",
	"business/stickers::biz_stickers_option_print":
		"🌍 Dans le monde entier — imprime les tiens",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 États-Unis — gratuit par la poste",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Traduction de la phrase « Bitcoin Accepted Here »",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Traduction de la phrase « Scan to learn why Bitcoin is good for business. »",
	"business/stickers::biz_stickers_print_c1":
		"Tu peux imprimer tes propres autocollants « Bitcoin accepté ici » où que tu vives. Clique sur ta langue ci-dessous pour télécharger les fichiers d’autocollants et les instructions d’impression.",
	"business/stickers::biz_stickers_print_header":
		"Imprime tes propres fichiers d’autocollants",
	"business/stickers::biz_stickers_request_c1":
		"Remplis le formulaire ci-dessous pour demander des fichiers d’autocollants « Bitcoin accepté ici » dans ta langue locale. Nous te préviendrons dès qu’ils seront prêts.",
	"business/stickers::biz_stickers_request_header":
		"Tu ne vois pas ta langue ?",
	"business/stickers::biz_stickers_step_description":
		"Nous envoyons des packs gratuits aux adresses aux États-Unis et au Canada. Partout ailleurs dans le monde, tu peux imprimer les tiens.",
	"business/stickers::biz_stickers_step_header":
		"Comment veux-tu tes autocollants ?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Tous les wallets Bitcoin fonctionnent ensemble — choisis celui qui correspond à ton entreprise. Gratuit, règlement instantané, sans rétrofacturations.",
	"business/wallets::sources_breez_business":
		"Breez — wallet Lightning uniquement Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — infrastructure de paiements Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — processeur de paiements Bitcoin",
	"business/wallets::sources_square":
		"Square — accepte les paiements en Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — facturation en Bitcoin pour les entreprises",
	"business/wallets::wallets_hero_subtitle":
		"Les wallets Bitcoin sont gratuits. Choisis celui qui correspond à ton entreprise — en magasin, en ligne ou sur facture — et commence à accepter Bitcoin en quelques minutes.",
	"business/wallets::wallets_section_invoice":
		"Wallets pour les entreprises qui facturent leurs clients",
	"business/wallets::wallets_section_invoice_intro":
		"Si tu factures des clients (conseil, freelance, services B2B), utilise un wallet conçu autour de la facturation. Le client règle la facture Bitcoin en quelques clics.",
	"business/wallets::wallets_section_multiple":
		"Wallets pour les entreprises avec plusieurs employés",
	"business/wallets::wallets_section_multiple_intro":
		"Si tu as une équipe qui encaisse à la caisse, choisis un wallet qui gère plusieurs connexions d’employés — pour que chaque employé ait son propre code PIN et que tu gardes des traces claires de qui a reçu chaque paiement.",
	"business/wallets::wallets_section_online":
		"Wallets pour les entreprises en ligne",
	"business/wallets::wallets_section_online_intro":
		"Tu vends en ligne ? Ces wallets se connectent à ta boutique en ligne et acceptent Bitcoin de n’importe quel client dans le monde — sans rétrofacturations et sans besoin de compte marchand.",
	"business/wallets::wallets_section_sole":
		"Wallets pour les entreprises individuelles",
	"business/wallets::wallets_section_sole_intro":
		"Si tu gères seul une boutique, un café, un studio ou un service, chacun de ces wallets fera l’affaire. Choisis selon que tu veux garder les paiements en Bitcoin ou convertir automatiquement une partie de chaque paiement dans ta monnaie locale.",
	"business/wallets::wallets_strike_note":
		"Strike Business te permet d’accepter les paiements en Bitcoin et Lightning avec des frais nuls et un règlement instantané. Il prend en charge les paiements en magasin, en ligne et sur facture, avec conversion automatique facultative dans ta monnaie locale.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin est accepté ici",
	"business/why::why_good_for_you":
		"Pourquoi Bitcoin est aussi bon pour toi",
	"business/why::why_learn_more_lowercase": "En savoir plus →",
	"business/why::why_s1_c1":
		"L’inflation se produit quand davantage de monnaie est imprimée ou créée à partir de rien. Elle fait perdre de la valeur à l’argent dans ta poche au fil du temps — et c’est pour ça que les prix montent année après année.",
	"business/why::why_s1_c2":
		"Bitcoin a une offre fixe de 21 millions de coins. Aucun gouvernement, banque ou entreprise ne peut en créer davantage. Ton épargne en Bitcoin conserve sa valeur dans le temps au lieu de la perdre silencieusement.",
	"business/why::why_s2_c1":
		"Ces dernières années, de nombreuses banques américaines se sont effondrées à cause de paniques bancaires. Quand trop de clients ont essayé de retirer en même temps, les banques n’avaient pas assez de liquidités pour les rembourser tous.",
	"business/why::why_s2_c2":
		"Au lieu de simplement garder ton argent, les banques prêtent et investissent la majeure partie. Si ces investissements échouent — ou si les déposants perdent confiance — la banque peut s’effondrer et tes dépôts peuvent être gelés ou perdus.",
	"business/why::why_s2_c3":
		"Avec Bitcoin, tu peux garder ton argent directement dans ton propre wallet. Pas de banque. Pas d’intermédiaires. Pas de panique bancaire.",
	"business/why::why_s3_c1":
		"Contrairement aux cartes de crédit, à PayPal ou aux comptes bancaires traditionnels, Bitcoin n’exige la permission de personne.",
	"business/why::why_s3_c2":
		"Personne ne peut geler ton compte, bloquer un paiement ou te déconnecter du réseau. C’est le premier système financier de l’histoire que tu peux utiliser librement, sans crainte de censure ou de confiscation.",
	"business/why::why_s4_c1":
		"Bitcoin est souvent mal compris, mais il fait silencieusement beaucoup de bien dans le monde.",
	"business/why::why_s4_c2":
		"Il a aidé des défenseurs des droits humains dans leur lutte pour la liberté, réduit les émissions mondiales de méthane provenant des décharges et des puits de pétrole, stabilisé des réseaux électriques et financé des biens publics comme des parcs nationaux.",
	"business/why::why_biz_s1":
		"Frais plus bas, plus pour le commerce",
	"business/why::why_biz_s1_c1":
		"Les paiements en Bitcoin contournent les banques et les sociétés de cartes qui prélèvent 2 à 3 % sur chaque vente. Le commerce garde davantage de ce que tu paies — ce qui signifie souvent de meilleurs prix et un meilleur service pour toi.",
	"business/why::why_biz_s2":
		"Règlement instantané, sans rétrofacturations",
	"business/why::why_biz_s2_c1":
		"Les paiements en Bitcoin se règlent en quelques secondes, directement de ton wallet au commerce. Pas de délai de plusieurs jours avant que la banque libère les fonds, et pas de coûteux litiges de rétrofacturation — ce qui signifie que le commerce peut se concentrer sur ses clients au lieu de lutter contre la fraude.",
	"business/why::why_biz_s3":
		"Acceptation gratuite, ouverte à tous",
	"business/why::why_biz_s3_c1":
		"Pas de contrats, de frais mensuels ni de frais de démarrage pour qu’un commerce accepte Bitcoin. Et des millions d’utilisateurs de Bitcoin dans le monde cherchent activement des commerçants qui l’acceptent — offrant à ce commerce une exposition gratuite à de nouveaux clients.",
	"business/why::why_business_cta_intro":
		"Tu as un commerce et tu veux commencer à accepter Bitcoin ?",
	"business/why::why_business_cta_link":
		"Découvre comment ça marche →",
	"business/why::why_for_business":
		"Pourquoi Bitcoin est bon pour ce commerce",
	"business/why::why_for_business_intro":
		"En acceptant Bitcoin, ce commerce garde davantage sur chaque vente, encaisse instantanément sans rétrofacturations et touche une audience mondiale d’utilisateurs de Bitcoin — le tout sans contrats ni frais mensuels.",
	"business/why::why_good_for_you_intro":
		"Bitcoin n’est pas seulement utile à la caisse — c’est une meilleure forme de monnaie qui protège ton épargne, ta vie privée et ta liberté de transiger. Voici un résumé rapide.",
	"business/why::why_hero_subtitle":
		"Tu viens de scanner un autocollant « Bitcoin accepté ici ». Voici pourquoi c’est une bonne nouvelle — pour ce commerce et pour toi.",
	"business/why::why_intro_c1":
		"Le commerce dans lequel tu te trouves accepte Bitcoin — un réseau de paiements moderne et open source que n’importe qui, n’importe où, peut utiliser, sans que les banques et les intermédiaires en prélèvent une part.",
	"business/why::why_intro_c2":
		"Ci-dessous la version courte des raisons pour lesquelles c’est bon pour ce commerce d’accepter Bitcoin, plus pourquoi c’est bon pour toi en tant que client d’utiliser Bitcoin.",
	"business/why::why_next_business_label": "ACCEPTE BITCOIN",
	"business/why::why_next_business_title":
		"Accepte Bitcoin dans ton entreprise",
	"business/why::why_next_buy_label": "ACHÈTE BITCOIN",
	"business/why::why_next_buy_title": "Achète ton premier Bitcoin",
	"business/why::why_next_learn_label": "EN SAVOIR PLUS",
	"business/why::why_next_learn_title": "Apprends-en davantage sur Bitcoin",
	"business/why::why_next_wallet_label": "OBTIENS UN WALLET",
	"business/why::why_next_wallet_title":
		"Obtiens ton propre wallet Bitcoin",
	"business/why::why_whats_next_heading": "Où aller ensuite ?",
	"business/why::why_whats_next_intro":
		"Si c’est la première fois que tu scannes un autocollant Bitcoin, voici les endroits les plus utiles où aller ensuite.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Pair-à-pair (directement entre utilisateurs)",
	"buy::buy_bitcoin_guide": "Comment acheter du Bitcoin",
	"buy::buy_step_1_header": "Choisis ton pays",
	"buy::buy_step_2_header": "Choisis ton mode de paiement",
	"buy::buy_step_3_header": "Tes options d’achat",
	"buy::buy_step_4_header": "Conserve ton Bitcoin en sécurité",
	"buy::buy_header_subtitle":
		"Un guide simple et pas-à-pas pour acheter ton premier Bitcoin.",
	"buy::buy_howto_name": "Comment acheter du Bitcoin",
	"buy::buy_meta_description":
		"Apprends à acheter du Bitcoin en toute sécurité avec notre guide pas-à-pas. Choisis ton pays et ton mode de paiement pour trouver les meilleures options d’achat de Bitcoin pour toi.",
	"buy::buy_step_1_eyebrow": "Étape 1",
	"buy::buy_step_2_eyebrow": "Étape 2",
	"buy::buy_step_3_eyebrow": "Étape 3",
	"buy::buy_step_4_eyebrow": "Étape 4",
	"buy::buy_storage_cta_label": "Prochaine étape",
	"buy::sources_bisq":
		"Bisq — plateforme d’échange Bitcoin décentralisée pair-à-pair",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — annuaire mondial des distributeurs Bitcoin",
	"buy::sources_kraken":
		"Kraken — plateforme d’échange Bitcoin reconnue",
	"buy::sources_relai":
		"Relai — application suisse d’auto-custody Bitcoin",
	"buy::sources_river":
		"River — achat, minage et conservation uniquement Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — achat de Bitcoin avec prise en charge de Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — achat récurrent (DCA) uniquement Bitcoin",
	"buy::buy_bitcoin": "Acheter du Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Ajouter une langue",
	"common::common_next_buy_bitcoin": "Acheter du Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Apprends à acheter du Bitcoin en toute sécurité",
	"common::common_next_calculate": "Calcule ton inflation",
	"common::common_next_calculate_desc":
		"Vois comment l’inflation affecte ton salaire au fil du temps",
	"common::common_next_get_wallet": "Obtiens un wallet",
	"common::common_next_get_wallet_desc":
		"Obtiens ton premier wallet Bitcoin — c’est gratuit",
	"common::common_next_keep_learning": "Continue à apprendre",
	"common::common_next_keep_learning_desc":
		"Vois comment Bitcoin améliore le monde",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — indice des prix à la consommation (IPC)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — masse monétaire (index par catégorie)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — « Une adjudication du Trésor peut-elle échouer ? »",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Quelle est la suite ?",
	"common::common_sticker_files_mission_5": "demande un pack",
	"common::common_site_tagline": "L’éducation Bitcoin pour tout le monde.",
	"common::common_source_btc_map":
		"BTC Map — annuaire mondial des commerçants qui acceptent Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — processeur de paiements Bitcoin auto-hébergé, gratuit et open source",
	"common::common_source_oshi":
		"Oshi — plateforme de récompenses Bitcoin pour les commerçants",
	"common::common_source_strike_business":
		"Strike — paiements Bitcoin et Lightning pour les entreprises",
	"common::common_sources_group_bitcoin": "Données Bitcoin",
	"common::common_sources_group_cpi":
		"Inflation / indice des prix à la consommation",
	"common::common_sources_group_debt": "Dette publique",
	"common::common_sources_group_money": "Données de masse monétaire",
	"common::common_sources_group_stories": "Exemples concrets",
	"common::common_sticker_files_mission_6":
		"d’autocollants gratuits en anglais.",
	"common::common_sticker_files_next_flyers_label": "Flyers",
	"common::common_sticker_files_next_flyers_title":
		"Imprime un flyer Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"Fichiers d’autocollants",
	"common::common_sticker_files_next_languages_title":
		"Voir les fichiers d’autocollants dans d’autres langues",
	"common::common_sticker_files_print_these":
		"IMPRIME-LES EN 1 CLIC",
	"common::common_sticker_name_bdhi_black":
		"Autocollant « Bitcoin Doesn\u2019t Have Inflation » (noir)",
	"common::common_sticker_name_bdhi_orange":
		"Autocollant « Bitcoin Doesn\u2019t Have Inflation » (orange)",
	"common::common_sticker_name_caution":
		"Autocollant Bitcoin « Caution! Melting Ice Cube »",
	"common::common_sticker_name_cure_inflation":
		"Autocollant Bitcoin « Cure Inflation »",
	"common::common_sticker_name_danger":
		"Autocollant Bitcoin « Danger! Inflation Ahead »",
	"common::common_sticker_name_fix":
		"Autocollant Bitcoin « Fix The Money, Fix The World »",
	"common::common_sticker_name_got_inflation":
		"Autocollant Bitcoin « Got Inflation? »",
	"common::common_sticker_name_study":
		"Autocollant « Study Bitcoin »",
	"common::common_sticker_name_warning":
		"Autocollant Bitcoin « Warning! Inflation is Stealing Your Savings »",
	"common::common_sticker_name_what_if":
		"Autocollant Bitcoin « What if your money didn\u2019t have inflation? »",
	"common::common_sticker_tips_heading": "Conseils pour les autocollants",
	"common::common_sticker_tips_intro":
		"Une fois que tu as imprimé tes autocollants, colle-les là où les gens les verront ! Bons emplacements :",
	"common::common_sticker_tips_list_1":
		"espaces publics où les gens les remarqueront",
	"common::common_sticker_tips_list_2":
		"endroits où il est peu probable qu’on les retire tout de suite (les autocollants ne causent pas de dégâts permanents)",
	"common::common_sticker_tips_list_3":
		"surfaces où ils adhèrent bien (métal, plastique, verre)",
	"common::common_sticker_tips_list_4":
		"PAS sur des propriétés privées, des panneaux de signalisation, des distributeurs de billets ou des pompes à essence",
	"common::common_stickers_printer_prefix": "Nous utilisons",
	"common::common_stickers_printer_suffix":
		"mais tu peux utiliser n’importe quel imprimeur d’autocollants.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — indice des prix à la consommation pour tous les consommateurs urbains",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — masse monétaire M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Calcule ton écart d’inflation",
	"compound-inflation-calculator::cic_cta_label": "Prochaine étape",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Découvre de combien ton salaire doit augmenter pour rester au niveau de l’inflation.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Explore d’autres sujets",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Vois comment Bitcoin se rapporte à la monnaie, la liberté, l’énergie et plus.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Apprends comment fonctionne l’inflation",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Comment imprimer et afficher ces flyers Bitcoin",
	"flyers::flyers_hero_subtitle":
		"Des flyers Bitcoin gratuits et imprimables. Affiche-les dans les espaces publics pour aider plus de gens à apprendre sur Bitcoin.",
	"flyers::flyers_hero_title": "Imprime et affiche des flyers Bitcoin",
	"flyers::flyers_next_get_stickers": "Fais passer le mot",
	"flyers::flyers_next_get_stickers_desc":
		"Commande un pack gratuit d’autocollants Bitcoin",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Participe et aide à diffuser Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Tu veux aider à construire une économie Bitcoin circulaire ? Le moyen le plus simple est d’aider les commerces locaux à commencer à accepter les paiements en Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Tu connais un commerce qui serait ouvert à cette idée ? Envoie le propriétaire à notre page",
	"get-involved::get_involved_business_content_3":
		"Bitcoin pour les entreprises.",
	"get-involved::get_involved_description":
		"Nos ressources gratuites facilitent la diffusion de l’adoption de Bitcoin. Autocollants, flyers, autocollants « Bitcoin accepté ici » pour les entreprises et code open source auquel tout le monde peut contribuer.",
	"get-involved::get_involved_header":
		"Participe et aide à diffuser Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Tu peux aider à changer ça. Nous avons créé quelques ressources gratuites qui facilitent la diffusion de l’espoir que Bitcoin apporte dans ta communauté.",
	"get-involved::get_involved_biz_stickers_note":
		"Tu acceptes déjà Bitcoin ? Fais-le savoir à tes clients avec nos autocollants gratuits « Bitcoin accepté ici ». Nous envoyons un pack à n’importe quelle adresse aux États-Unis ou au Canada, ou tu peux imprimer les tiens n’importe où dans le monde.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Autocollants « Accepté ici »",
	"get-involved::get_involved_card_biz_stickers_source":
		"Source : bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Autocollants gratuits « Bitcoin accepté ici » pour ton entreprise",
	"get-involved::get_involved_card_business_label":
		"Bitcoin pour les entreprises",
	"get-involved::get_involved_card_business_source":
		"Source : bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Tout ce dont une entreprise a besoin pour commencer à accepter les paiements en Bitcoin",
	"get-involved::get_involved_card_flyers_label":
		"Flyers imprimables",
	"get-involved::get_involved_card_flyers_source":
		"Source : bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Télécharge et imprime un flyer Bitcoin gratuit",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source": "Source : GitHub →",
	"get-involved::get_involved_card_github_title":
		"Contribue à bitcoin.rocks sur GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Autocollants gratuits",
	"get-involved::get_involved_card_stickers_source":
		"Source : bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Commande un pack gratuit d’autocollants Bitcoin livré à ta porte",
	"get-involved::get_involved_flyers_content_1":
		"Les flyers sont l’un des moyens les plus simples de présenter Bitcoin dans ta communauté. Télécharge notre flyer Bitcoin gratuit et imprimable, fais autant de copies que tu veux et affiche-les sur des tableaux d’affichage, dans les cafés, lors de rencontres ou partout où les gens se réunissent.",
	"get-involved::get_involved_flyers_content_2":
		"Chaque flyer a un titre accrocheur et un QR code qui amène les lecteurs curieux à bitcoin.rocks pour en apprendre davantage.",
	"get-involved::get_involved_flyers_content_3":
		"Contrairement aux autocollants, les flyers peuvent être imprimés à la demande depuis n’importe où dans le monde — il te faut juste une imprimante et quelques minutes.",
	"get-involved::get_involved_flyers_header":
		"Imprime et affiche un flyer",
	"get-involved::get_involved_flyers_image_alt":
		"Aperçu du flyer Bitcoin gratuit et imprimable de bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks est un projet gratuit et open source sous licence MIT. Notre mission est d’accélérer l’adoption de Bitcoin par l’éducation — et nous ne pouvons pas le faire seuls.",
	"get-involved::get_involved_github_content_2":
		"Que tu sois développeur, designer, rédacteur ou traducteur, il y a une façon d’aider. Nous accueillons particulièrement les contributeurs qui peuvent traduire nos contenus dans davantage de langues, pour que des gens du monde entier puissent apprendre sur Bitcoin dans leur langue maternelle.",
	"get-involved::get_involved_github_content_3":
		"Fork notre dépôt, ouvre une pull request, crée une issue ou mets une étoile au projet. Chaque contribution aide à ce que Bitcoin touche plus de gens.",
	"get-involved::get_involved_github_header":
		"Contribue sur GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Un pack d’autocollants texte Bitcoin gratuits de bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "l’épargne",
	"index::home_card_label_art_1": "Comparons",
	"index::home_card_label_art_2": "Fais passer le mot",
	"index::home_card_label_art_3": "Art de rue",
	"index::home_card_label_bank_runs": "Système à réserve pleine",
	"index::home_card_label_bonds": "Comparons",
	"index::home_card_label_business_1": "Quelle est la différence ?",
	"index::home_card_label_business_2": "Accepte les paiements Bitcoin",
	"index::home_card_label_cash": "Comparons",
	"index::home_card_label_cbdc": "Ouvert ou fermé ?",
	"index::home_card_label_coding_1": "Cours interactif",
	"index::home_card_label_coding_2": "Construis du matériel",
	"index::home_card_label_coding_3": "Défis de programmation",
	"index::home_card_label_crowdfunding_1": "Manifestations EndSARS",
	"index::home_card_label_crowdfunding_2": "Une monnaie qu’on ne peut arrêter",
	"index::home_card_label_crowdfunding_3": "Finance ton projet",
	"index::home_card_label_crypto": "Quelle est la différence ?",
	"index::home_card_label_energy_1": "Stabilisation du réseau électrique",
	"index::home_card_label_energy_4": "Gestion de la demande",
	"index::home_card_label_energy_5": "Électrification rurale",
	"index::home_card_label_energy_6": "Incitations aux renouvelables",
	"index::home_card_label_environment_1": "Réduction du méthane",
	"index::home_card_label_environment_2": "A sauvé un parc national",
	"index::home_card_label_environment_3": "L’industrie la plus verte",
	"index::home_card_label_environment_4": "Réduit le torchage du gaz",
	"index::home_card_label_equality_1": "Espoir et opportunité",
	"index::home_card_label_equality_2": "Le grand égalisateur",
	"index::home_card_label_food_1": "Prix de l’alimentation",
	"index::home_card_label_food_2": "Fermes et terres",
	"index::home_card_label_freedom_1": "Régimes autoritaires",
	"index::home_card_label_freedom_2": "Un outil unique",
	"index::home_card_label_get_started_1":
		"Bases pour débutants",
	"index::home_card_label_get_started_2": "Ton premier wallet",
	"index::home_card_label_get_started_3": "Achète du Bitcoin",
	"index::home_card_label_gold": "Lequel est le meilleur ?",
	"index::home_card_label_housing_1": "Logement abordable",
	"index::home_card_label_human_rights_1":
		"Fait avancer les droits humains",
	"index::home_card_label_human_rights_2": "Adoption populaire",
	"index::home_card_label_human_rights_3": "Empreinte mondiale",
	"index::home_card_label_inflation": "Bitcoin est une meilleure monnaie",
	"index::home_card_label_networks_1": "Visualisation en direct du réseau",
	"index::home_card_label_networks_2": "Comparons",
	"index::home_card_label_payments_1": "Quelle est la différence ?",
	"index::home_card_label_payments_2": "Paiements rapides et peu chers",
	"index::home_card_label_payments_3": "Transferts à l’étranger",
	"index::home_card_label_payments_4": "Accepte les paiements",
	"index::home_card_label_politics_1": "Le paradoxe politique",
	"index::home_card_label_politics_2": "Pari fort",
	"index::home_card_label_property_rights_1": "Comparons",
	"index::home_card_label_property_rights_2": "Propriété réelle",
	"index::home_card_label_salary": "Protège ton salaire",
	"index::home_card_label_self_custody_1":
		"Guide des wallets Bitcoin",
	"index::home_card_label_self_custody_2": "L’étape la plus importante",
	"index::home_card_label_self_custody_3": "Monnaie souveraine",
	"index::home_card_label_war_1": "Mettre fin aux guerres sans fin",
	"index::home_card_label_war_2": "Aide aux vétérans",
	"index::home_card_label_war_3": "Échapper à la guerre",
	"index::home_h1":
		"Bitcoin est une meilleure monnaie qui construit un monde meilleur.",
	"index::home_nav_about": "À propos",
	"index::home_nav_get_involved": "Participer",
	"index::home_nav_learn": "Apprendre",
	"index::home_source_prefix": "Source :",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon et Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Consulte notre",
	"lightning::lightning_grid_heading":
		"Wallets Lightning populaires",
	"lightning::lightning_hardware_cta_label":
		"Wallets matériels",
	"lightning::lightning_header_subtitle":
		"Lightning te permet d’envoyer du Bitcoin en quelques secondes pour une fraction de centime — choisis un wallet dont les compromis correspondent à la quantité de Bitcoin que tu comptes dépenser.",
	"lightning::lightning_s1_c4_end": "pour plus d’informations.",
	"lightning::lightning_s1_c4_link":
		"Guide des wallets matériels Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — wallet Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — wallet Lightning auto-custodié",
	"lightning::sources_lightning_labs":
		"Lightning Labs — documentation pour Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — wallet Lightning custodial",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android et web",
	"nostr/index::nostr_platform_web": "Navigateur web",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr est un nouveau protocole décentralisé pour la communication en ligne — aucune entreprise n’en est propriétaire, les zaps Bitcoin sont intégrés, et tu peux changer de client sans perdre tes abonnés.",
	"nostr/index::nostr_amethyst_f1":
		"Nombreuses fonctionnalités et options de personnalisation",
	"nostr/index::nostr_amethyst_f2":
		"Nécessite un wallet Bitcoin séparé",
	"nostr/index::nostr_amethyst_f3": "100 % gratuit",
	"nostr/index::nostr_damus_f1":
		"Interface familière à la Twitter",
	"nostr/index::nostr_damus_f2":
		"Nécessite un wallet Bitcoin séparé",
	"nostr/index::nostr_damus_f3": "100 % gratuit",
	"nostr/index::nostr_download_heading":
		"Télécharge un client Nostr gratuit",
	"nostr/index::nostr_download_intro":
		"Les clients Nostr sont des applications gratuites qui te permettent de lire et écrire sur le réseau Nostr. Ils fonctionnent tous ensemble — tu peux changer de client à tout moment et conserver tes abonnés et ton contenu.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr est un nouveau protocole décentralisé pour la communication en ligne — aucune entreprise n’en est propriétaire, les zaps Bitcoin sont intégrés, et tu peux passer d’une application à l’autre sans perdre tes abonnés.",
	"nostr/index::nostr_hero_title": "Qu’est-ce que Nostr ?",
	"nostr/index::nostr_intro_c1":
		"Nostr fonctionne comme l’e-mail : le protocole n’appartient à personne, n’importe qui peut construire une application par-dessus et tu choisis celle qui te convient le mieux. Contrairement à Twitter ou Facebook, il n’y a pas d’entreprise centrale qui peut te censurer, t’exclure ou te reléguer.",
	"nostr/index::nostr_intro_c2":
		"Ci-dessous la version courte des raisons pour lesquelles Nostr est important — et ensuite tous les clients Nostr gratuits dont tu as besoin pour commencer aujourd’hui.",
	"nostr/index::nostr_iris_f1":
		"Extrêmement simple — aucune installation requise",
	"nostr/index::nostr_iris_f2":
		"Moyen facile d’essayer Nostr avec un compte test",
	"nostr/index::nostr_iris_f3": "100 % gratuit",
	"nostr/index::nostr_learn_more_label": "APPROFONDIS",
	"nostr/index::nostr_learn_more_title":
		"Apprends-en davantage sur Nostr sur nostr.how",
	"nostr/index::nostr_primal_f1": "Notre premier client recommandé",
	"nostr/index::nostr_primal_f2":
		"Wallet de zaps Bitcoin intégré",
	"nostr/index::nostr_primal_f3": "100 % gratuit",
	"nostr/index::nostr_s1": "Un protocole, pas une plateforme",
	"nostr/index::nostr_s1_c1":
		"Nostr est un nouveau protocole qui te permet de communiquer en ligne sans crainte de censure, de bannissement ou de relégation.",
	"nostr/index::nostr_s1_c2":
		"Des plateformes comme Twitter et Facebook sont contrôlées par une seule entreprise, mais le protocole Nostr n’est contrôlé par personne.",
	"nostr/index::nostr_s2": "Libre de se déplacer",
	"nostr/index::nostr_s2_c1":
		"Nostr fonctionne comme l’e-mail. Personne ne contrôle le protocole de l’e-mail, et n’importe qui peut construire un client par-dessus (comme Gmail, Hotmail, etc.).",
	"nostr/index::nostr_s2_c2":
		"Le protocole Nostr n’est pas non plus contrôlé par qui que ce soit, et n’importe qui peut construire un client par-dessus (comme Damus, Amethyst, etc.).",
	"nostr/index::nostr_s2_c3":
		"Si tu n’aimes pas la façon dont un client spécifique fonctionne, tu peux déplacer ton compte Nostr vers un autre client sans perdre tes abonnés ni ton contenu.",
	"nostr/index::nostr_s3": "Bitcoin est intégré",
	"nostr/index::nostr_s3_c1":
		"Bitcoin est intégré au protocole Nostr. Quand tu vois un contenu qui te plaît, tu peux facilement envoyer à son auteur un « zap Bitcoin » en guise de remerciement.",
	"nostr/index::nostr_s3_c2":
		"Sur les plateformes centralisées comme Twitter et Facebook, une entreprise centrale gagne de l’argent grâce à ton contenu. Mais sur des protocoles ouverts comme Nostr, c’est toi qui gagnes de l’argent grâce à ton propre contenu.",
	"nostr/index::sources_damus": "Damus — client Nostr pour iPhone",
	"nostr/index::sources_iris": "Iris — client Nostr dans le navigateur",
	"nostr/index::sources_nostr_how": "nostr.how — Qu’est-ce que Nostr ?",
	"nostr/index::sources_nostr_protocol":
		"Protocole Nostr — spécification open source",
	"nostr/index::sources_primal":
		"Primal — client Nostr avec wallet de zaps Bitcoin intégré",
	"nostr/index::what_is_nostr": "Qu’est-ce que Nostr ?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Imprime tes propres autocollants Bitcoin en utilisant ces fichiers.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Demande reçue 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Commander en gros",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Partager sur Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Qu’est-ce que Nostr ?",
	"sticker-success::sticker_success_bulk_header":
		"Besoin de plus d’autocollants ?",
	"sticker-success::sticker_success_hero_title":
		"Tes autocollants sont en route 🎉",
	"sticker-success::sticker_success_share_header":
		"Partage où tu as collé les autocollants",
	"sticker-success::sticker_success_tips_header":
		"De bons endroits pour coller les autocollants",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Et dès que tu commences, imprime et affiche aussi tes propres",
	"stickers::stickers_instructions_1":
		"Saisis ton adresse postale et nous t’enverrons un pack gratuit d’autocollants Bitcoin par la poste. Tes autocollants arriveront dans une enveloppe blanche simple.",
	"stickers::stickers_btn_choose_pack": "Choisir ce pack",
	"stickers::stickers_bulk_c1":
		"Tu veux plus que quelques autocollants ?",
	"stickers::stickers_bulk_c2":
		"Commande en gros chez le même imprimeur que nous",
	"stickers::stickers_bulk_c3":
		"— plus tu en achètes, moins ils coûtent à l’unité.",
	"stickers::stickers_bulk_cta": "Acheter des autocollants en gros",
	"stickers::stickers_bulk_header":
		"Commande des autocollants en gros",
	"stickers::stickers_hero_subtitle":
		"Commande un pack gratuit d’autocollants Bitcoin et colle-les dans les espaces publics pour aider plus de gens à apprendre sur Bitcoin.",
	"stickers::stickers_hero_title":
		"Autocollants Bitcoin gratuits",
	"stickers::stickers_intro_c1":
		"Notre mission est de t’aider à « pilule-orange » plus de personnes en collant des autocollants Bitcoin dans les espaces publics. Tous nos autocollants ont des QR codes qui renvoient vers des pages éducatives sur l’",
	"stickers::stickers_intro_c3": "inflation",
	"stickers::stickers_intro_c4":
		"Choisis un pack d’autocollants ci-dessous et choisis comment tu les veux — nous enverrons un pack gratuit à toute personne aux États-Unis ou au Canada, ou tu peux imprimer les tiens n’importe où dans le monde.",
	"stickers::stickers_mail_header":
		"Nous t’enverrons tes autocollants gratuits par la poste",
	"stickers::stickers_next_print_flyers": "Diffuse encore plus le message",
	"stickers::stickers_next_print_flyers_desc":
		"Imprime des flyers Bitcoin gratuits et affiche-les dans les lieux publics",
	"stickers::stickers_option_bulk":
		"📦 Dans le monde entier — commande en gros",
	"stickers::stickers_option_canada":
		"🇨🇦 Canada — gratuit par la poste",
	"stickers::stickers_option_print":
		"🌍 Dans le monde entier — imprime les tiens",
	"stickers::stickers_option_usa":
		"🇺🇸 États-Unis — gratuit par la poste",
	"stickers::stickers_print_c1":
		"Tu peux participer en imprimant tes propres autocollants où que tu vives. Clique sur ta langue ci-dessous pour télécharger les fichiers d’autocollants et les instructions d’impression.",
	"stickers::stickers_print_c2":
		"Tous les autocollants ne sont pas disponibles dans toutes les langues.",
	"stickers::stickers_print_header":
		"Imprime tes propres fichiers d’autocollants",
	"stickers::stickers_request_c1":
		"Remplis le formulaire ci-dessous pour demander des fichiers d’autocollants dans ta langue locale. Nous te préviendrons dès qu’ils seront prêts.",
	"stickers::stickers_request_header":
		"Tu ne vois pas ta langue ?",
	"stickers::stickers_share_c2":
		"Suis-nous sur Nostr en cherchant",
	"stickers::stickers_share_c3":
		"dans n’importe quel client Nostr.",
	"stickers::stickers_signs_pack_description":
		"Panneaux d’avertissement, d’attention et d’alerte avec des messages Bitcoin — conçus pour attirer l’œil et faire s’arrêter les gens pour lire.",
	"stickers::stickers_step_1_description":
		"Chaque pack contient un ensemble différent d’autocollants Bitcoin avec des QR codes qui enseignent aux gens ce qu’est Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "ÉTAPE 1",
	"stickers::stickers_step_1_header":
		"Choisis un pack d’autocollants",
	"stickers::stickers_step_2_description":
		"Nous envoyons des packs gratuits aux adresses aux États-Unis et au Canada. Partout ailleurs dans le monde, tu peux imprimer les tiens ou commander en gros.",
	"stickers::stickers_step_2_eyebrow": "ÉTAPE 2",
	"stickers::stickers_step_2_header":
		"Comment veux-tu tes autocollants ?",
	"stickers::stickers_text_pack_description":
		"Un mélange de slogans et d’accroches Bitcoin conçus pour éveiller la curiosité dans les espaces publics.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Choisis ton wallet",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — évaluations de stockage métallique pour les phrases de récupération Bitcoin",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — wallet Bitcoin auto-custodié",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — wallet matériel Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — wallet matériel Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — wallet matériel Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — wallet matériel Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — dispositif de signature DIY open source pour les transactions Bitcoin",
	"wallets::wallets_grid_heading": "Wallets Bitcoin populaires",
	"wallets::wallets_header_subtitle":
		"Un guide pas-à-pas pour choisir un wallet, protéger tes clés et prendre le contrôle complet de ton Bitcoin.",
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
		`translate-rest-part2 (fr): filled ${filled}, already-done ${skipped}`,
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

#!/usr/bin/env node
/**
 * Spanish manifest refresh — part 2 of non-inflation namespaces.
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
	"es.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Servicios contables de Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Una guía sencilla para contabilizar los pagos en Bitcoin — carteras híbridas, coste base, ganancias de capital y cuándo llamar a tu contable.",
	"business/accounting::accounting_s1_c1":
		"La forma más fácil de aceptar Bitcoin es usar una cartera híbrida que vende automáticamente el 100 % del Bitcoin que recibes por dólares (o tu moneda local) tan pronto como entra el pago.",
	"business/accounting::accounting_s1_c2":
		"Con esta configuración, tu contabilidad se ve exactamente como hoy — la cantidad final son dólares cada vez. Sin coste base, sin ganancias de capital, sin hojas de cálculo nuevas.",
	"business/accounting::accounting_s2":
		"Si guardas algo de Bitcoin: rastrea tu coste base",
	"business/accounting::accounting_s2_c1":
		"Algunos negocios eligen quedarse con una parte del Bitcoin que reciben en lugar de convertirlo automáticamente todo. Si ese eres tú, el paso adicional es rastrear el coste base — el valor en dólares de cada pago en Bitcoin el día que lo recibiste.",
	"business/accounting::accounting_s2_c2":
		"Incluso si piensas en tu negocio únicamente en Bitcoin, la mayoría de las autoridades fiscales siguen queriendo que declares el valor en dólares. Buenas noticias: son solo dos números por transacción — la cantidad de Bitcoin que recibiste y su valor en dólares ese día.",
	"business/accounting::accounting_s2_c3":
		"Usa las herramientas de abajo para automatizar las búsquedas, para que no tengas que comprobar los precios cada día.",
	"business/accounting::accounting_s3":
		"Gastar o vender Bitcoin que has guardado",
	"business/accounting::accounting_s3_c1":
		"Si conviertes cada pago automáticamente a dólares, entonces salta esta sección — no se aplica a ti.",
	"business/accounting::accounting_s3_c2":
		"Si has guardado algo de Bitcoin y luego decides gastarlo o venderlo, añade el precio de venta a la misma hoja de cálculo que el coste base. La diferencia entre lo que costó el Bitcoin cuando lo recibiste y lo que cuesta cuando lo gastas o lo vendes es una ganancia o pérdida de capital.",
	"business/accounting::accounting_s3_c3": "Dos ejemplos rápidos:",
	"business/accounting::accounting_s4":
		"¿Necesitas un profesional que entienda Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Si prefieres que otra persona lo gestione — o si tu contabilidad de Bitcoin es más compleja de lo que puede manejar una cartera híbrida — recomendamos encarecidamente Satoshi Pacioli Accounting Services, una firma especializada en contabilidad de Bitcoin para empresas.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Contabilidad de Bitcoin para tu empresa",
	"business/accounting::accounting_card_bpr_label": "PRECIO DE BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Busca precios actuales o históricos de Bitcoin en dólares",
	"business/accounting::accounting_card_pacioli_label": "CONTABLE DE BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"IMPORTAR A EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Importa automáticamente precios de Bitcoin a Excel",
	"business/accounting::accounting_card_wallets_label": "CARTERAS HÍBRIDAS",
	"business/accounting::accounting_card_wallets_title":
		"Consulta nuestras carteras recomendadas para empresas",
	"business/accounting::accounting_disclaimer":
		"Esta guía es solo con fines informativos y no constituye asesoramiento fiscal. Para asesoramiento fiscal específico a tu situación, contacta con un contable cualificado.",
	"business/accounting::accounting_disclaimer_label": "Descargo de responsabilidad",
	"business/accounting::accounting_example_feb_1": "1 de febrero",
	"business/accounting::accounting_example_gain_badge": "Ganancia de capital",
	"business/accounting::accounting_example_gain_explain":
		"Registras una ganancia de capital de 10 $.",
	"business/accounting::accounting_example_jan_1": "1 de enero",
	"business/accounting::accounting_example_loss_badge": "Pérdida de capital",
	"business/accounting::accounting_example_loss_explain":
		"Registras una pérdida de capital de 10 $.",
	"business/accounting::accounting_example_received_label": "Recibido",
	"business/accounting::accounting_example_sold_label":
		"Vendido o gastado",
	"business/accounting::accounting_hero_subtitle":
		"Aceptar Bitcoin en tu empresa no tiene por qué complicar tu contabilidad. Aquí tienes la versión corta — además de herramientas y expertos que la hacen indolora.",
	"business/accounting::accounting_intro_c1":
		"Si ya aceptas efectivo o tarjetas, añadir Bitcoin a la contabilidad de tu empresa es más fácil de lo que parece. Tienes dos caminos: convertir automáticamente cada pago en Bitcoin a dólares en cuanto entra (sin nueva contabilidad), o quedarte con algo en Bitcoin (necesitas rastrear unos cuantos números adicionales).",
	"business/accounting::accounting_intro_c2":
		"Esta guía recorre ambos caminos — para que elijas el que encaje con tu empresa y empieces a aceptar Bitcoin con tranquilidad.",
	"business/accounting::accounting_s1":
		"El camino fácil: conversión automática a dólares",
	"business/accounting::accounting_s3_c6":
		"Y eso es todo. Las matemáticas básicas son las mismas que usarías para cualquier otro activo que suba o baje de valor.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — precio actual e histórico de Bitcoin en dólares",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — contabilidad de Bitcoin para empresas",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — importar precios de criptomonedas a Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Respuestas breves a las preguntas que suelen hacerse los comerciantes antes de empezar a aceptar Bitcoin — comisiones, liquidación, carteras, contracargos, costes y más.",
	"business/faq::faq_intro_c1":
		"Haz clic en cualquier pregunta de abajo para desplegar la respuesta. Cuando estés listo para empezar a aceptar Bitcoin, los recursos para empresas al final de la página te guiarán paso a paso.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "CONTABILIDAD",
	"business/index::biz_label_faq": "PREGUNTAS FRECUENTES",
	"business/index::biz_label_maps": "MAPAS DE COMERCIANTES",
	"business/index::biz_label_rewards": "RECOMPENSAS",
	"business/index::biz_label_stickers": "PEGATINAS",
	"business/index::biz_label_wallets": "CARTERAS",
	"business/index::biz_meta_description":
		"Acepta Bitcoin en tu empresa con comisiones más bajas, liquidación inmediata, sin contracargos, y consigue más clientes.",
	"business/index::business_hero_subtitle":
		"Cobra con comisiones más bajas, liquida al instante y llega a millones de nuevos clientes — sin contratos ni costes ocultos.",
	"business/index::business_intro_c1":
		"Bitcoin le da a tu empresa una forma más rápida, más barata y más privada de cobrar. Sin intermediarios. Sin contracargos. Sin contratos. Solo dinero que se liquida en segundos, directamente del cliente a ti.",
	"business/index::business_intro_c2":
		"A continuación la versión corta de por qué Bitcoin es bueno para los negocios — y debajo, todos los recursos que necesitas para empezar a aceptarlo hoy.",
	"business/index::business_resources_heading":
		"Todo lo que necesitas para aceptar Bitcoin",
	"business/index::business_resources_intro":
		"Recorre estos recursos a tu propio ritmo. Cada uno es una guía breve y práctica.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Cuéntanos sobre tu empresa",
	"business/maps::biz_maps_form_intro":
		"Solo necesitamos algunos datos para ponerte en el mapa. Guardamos los datos de dirección solo el tiempo necesario para enviar tu empresa a los mapas.",
	"business/maps::biz_maps_hero_subtitle":
		"Añade tu empresa gratis a BTC Map — un directorio abierto y global de comerciantes que aceptan Bitcoin — para que los usuarios de Bitcoin cercanos te encuentren y gasten Bitcoin contigo.",
	"business/maps::biz_maps_hero_title":
		"Pon tu empresa en los mapas de comerciantes de Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Los usuarios de Bitcoin buscan activamente lugares donde gastar su dinero. Estar en el mapa expone tu empresa a cada usuario de Bitcoin que busca un lugar cercano para comer, comprar o alojarse — completamente gratis.",
	"business/maps::biz_maps_intro_c2":
		"Solo rellena el breve formulario de abajo y enviaremos tu empresa a BTC Map y otros mapas de comerciantes de Bitcoin.",
	"business/maps::biz_maps_meta_description":
		"Añade tu empresa gratis a BTC Map y otros mapas de comerciantes de Bitcoin, para que los usuarios de Bitcoin cercanos te encuentren.",
	"business/maps::biz_maps_placeholder_address": "Calle y número",
	"business/maps::biz_maps_placeholder_category":
		"Categoría (p. ej. restaurante, cafetería, hotel)",
	"business/maps::biz_maps_placeholder_city": "Ciudad",
	"business/maps::biz_maps_placeholder_country": "País",
	"business/maps::biz_maps_placeholder_name": "Nombre de la empresa",
	"business/maps::biz_maps_placeholder_region":
		"Región / provincia / estado",
	"business/maps::biz_maps_placeholder_website": "Sitio web (opcional)",
	"business/maps::biz_maps_view_map_cta": "Ver BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Ver BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Gracias por enviar tu empresa. Pronto te pondremos en los mapas de comerciantes de Bitcoin.",
	"business/maps-success::biz_maps_success_hero_title":
		"Solicitud recibida 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Tu empresa se añadirá a BTC Map y a otros directorios de comerciantes de Bitcoin en 1 o 2 semanas. Revisamos cada envío manualmente para mantener la precisión de los mapas.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Una vez que tu listado esté en línea, los usuarios de Bitcoin cercanos encontrarán tu empresa y vendrán a gastar Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Qué sucede ahora",
	"business/maps-success::biz_maps_success_view_c1":
		"Mientras esperas, echa un vistazo a BTC Map para ver la creciente red de empresas de todo el mundo que aceptan Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Mira dónde aparecerás",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Descarga archivos de pegatinas en inglés para imprimir tus propias pegatinas de «Se acepta Bitcoin aquí».",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Imprime tus propias pegatinas de «Se acepta Bitcoin aquí» en inglés para hacer saber a los clientes que aceptas Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Descarga archivos de pegatinas en inglés de «Se acepta Bitcoin aquí»",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Gracias por solicitar archivos de pegatinas de «Se acepta Bitcoin aquí» en tu idioma.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Solicitud recibida 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Crearemos y publicaremos tus archivos de pegatinas en 3 o 4 semanas. Una vez estén listos, podrás descargarlos e imprimirlos gratis desde nuestra página de archivos de pegatinas.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Publicamos los archivos de pegatinas en lotes, así que pueden pasar varias semanas antes de que tu idioma se active. ¡Gracias por tu paciencia!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Qué sucede ahora",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Pedir al por mayor",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Solicitar otro paquete gratis",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Recibirás tus pegatinas gratuitas de «Se acepta Bitcoin aquí» en 2 a 4 semanas en un sobre blanco sencillo con 3 pegatinas.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Tus pegatinas están en camino 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Si 3 pegatinas no son suficientes para tu empresa, no dudes en solicitar otro paquete gratis — o pide al por mayor a la misma imprenta que usamos nosotros.",
	"business/sticker-success::biz_sticker_success_more_header":
		"¿Necesitas más pegatinas?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"En tu puerta o escaparate principal, para que los clientes las vean antes de entrar",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Cerca de la caja, en el terminal de pago o donde los clientes paguen",
	"business/sticker-success::biz_sticker_success_tip_3":
		"En menús, listas de precios o botes de propina",
	"business/sticker-success::biz_sticker_success_tip_4":
		"No las pongas en lugares que no te pertenezcan o donde no tengas permiso para pegar pegatinas",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Buenos lugares para poner tus pegatinas",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Haz saber a los clientes que aceptas Bitcoin. Pide un paquete gratuito de pegatinas de «Se acepta Bitcoin aquí» para colocar en tu establecimiento.",
	"business/stickers::biz_stickers_hero_title":
		"Pegatinas gratuitas de «Se acepta Bitcoin aquí»",
	"business/stickers::biz_stickers_intro_c1":
		"Aceptar Bitcoin es solo la mitad del trabajo — tus clientes también deben saberlo. Estas pequeñas pegatinas de «Se acepta Bitcoin aquí» están diseñadas para colocarse en la puerta principal, en la caja, en el menú o en cualquier lugar donde los clientes las vean antes de pagar.",
	"business/stickers::biz_stickers_intro_c2":
		"Te enviaremos un paquete gratuito a cualquier dirección en EE. UU. o Canadá, o puedes imprimir las tuyas en cualquier parte del mundo.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Canadá — gratis por correo",
	"business/stickers::biz_stickers_option_print":
		"🌍 En todo el mundo — imprime las tuyas",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 EE. UU. — gratis por correo",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Traducción de la frase «Bitcoin Accepted Here»",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Traducción de la frase «Scan to learn why Bitcoin is good for business.»",
	"business/stickers::biz_stickers_print_c1":
		"Puedes imprimir tus propias pegatinas de «Se acepta Bitcoin aquí» vivas donde vivas. Haz clic en tu idioma abajo para descargar los archivos de pegatinas e instrucciones de impresión.",
	"business/stickers::biz_stickers_print_header":
		"Imprime tus propios archivos de pegatinas",
	"business/stickers::biz_stickers_request_c1":
		"Rellena el formulario de abajo para solicitar archivos de pegatinas de «Se acepta Bitcoin aquí» en tu idioma local. Te avisaremos cuando estén listos.",
	"business/stickers::biz_stickers_request_header":
		"¿No ves tu idioma?",
	"business/stickers::biz_stickers_step_description":
		"Enviamos paquetes gratuitos a direcciones en EE. UU. y Canadá. En cualquier otro lugar del mundo, puedes imprimir las tuyas.",
	"business/stickers::biz_stickers_step_header":
		"¿Cómo quieres tus pegatinas?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Todas las carteras de Bitcoin funcionan juntas — elige la que encaje con tu empresa. Gratis, liquidación instantánea, sin contracargos.",
	"business/wallets::sources_breez_business":
		"Breez — cartera Lightning solo Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — infraestructura de pagos Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — procesador de pagos Bitcoin",
	"business/wallets::sources_square":
		"Square — acepta pagos en Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — facturación en Bitcoin para empresas",
	"business/wallets::wallets_hero_subtitle":
		"Las carteras de Bitcoin son gratis. Elige la que encaje con tu empresa — presencial, en línea o por facturación — y empieza a aceptar Bitcoin en minutos.",
	"business/wallets::wallets_section_invoice":
		"Carteras para empresas que facturan a clientes",
	"business/wallets::wallets_section_invoice_intro":
		"Si facturas a clientes (consultoría, autónomos, servicios B2B), usa una cartera construida en torno a la facturación. El cliente paga la factura de Bitcoin con unos pocos clics.",
	"business/wallets::wallets_section_multiple":
		"Carteras para empresas con varios empleados",
	"business/wallets::wallets_section_multiple_intro":
		"Si tienes un equipo que cobra en la caja, elige una cartera que admita múltiples inicios de sesión de empleados — para que cada empleado tenga su propio PIN y mantengas registros claros de quién recibió cada pago.",
	"business/wallets::wallets_section_online":
		"Carteras para empresas en línea",
	"business/wallets::wallets_section_online_intro":
		"¿Vendes en línea? Estas carteras se conectan a tu tienda en línea y aceptan Bitcoin de cualquier cliente en cualquier parte del mundo — sin contracargos y sin necesidad de una cuenta de comerciante.",
	"business/wallets::wallets_section_sole":
		"Carteras para empresas unipersonales",
	"business/wallets::wallets_section_sole_intro":
		"Si gestionas una tienda, cafetería, estudio o servicio por tu cuenta, cualquiera de estas carteras te servirá. Elige según si quieres quedarte con los pagos en Bitcoin o convertir automáticamente una parte de cada pago a tu moneda local.",
	"business/wallets::wallets_strike_note":
		"Strike Business te permite aceptar pagos en Bitcoin y Lightning con comisiones cero y liquidación instantánea. Admite pagos presenciales, en línea y con facturación, con conversión automática opcional a tu moneda local.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Se acepta Bitcoin aquí",
	"business/why::why_good_for_you":
		"Por qué Bitcoin también es bueno para ti",
	"business/why::why_learn_more_lowercase": "Más información →",
	"business/why::why_s1_c1":
		"La inflación ocurre cuando se imprime más dinero o se crea de la nada. Hace que el dinero en tu bolsillo pierda valor con el tiempo — y por eso los precios suben año tras año.",
	"business/why::why_s1_c2":
		"Bitcoin tiene una oferta fija de 21 millones de monedas. Ningún gobierno, banco ni empresa puede imprimir más. Tus ahorros en Bitcoin mantienen su valor con el tiempo, en lugar de perderlo silenciosamente.",
	"business/why::why_s2_c1":
		"En los últimos años, muchos bancos estadounidenses han colapsado debido a pánicos bancarios. Cuando demasiados clientes intentaron retirar a la vez, los bancos no tenían suficiente efectivo para pagarles a todos.",
	"business/why::why_s2_c2":
		"En lugar de simplemente guardar tu dinero, los bancos prestan e invierten la mayor parte de él. Si esas inversiones fallan — o los depositantes pierden la confianza — el banco puede colapsar y tus depósitos pueden congelarse o perderse.",
	"business/why::why_s2_c3":
		"Con Bitcoin, puedes guardar tu dinero directamente en tu propia cartera. Sin banco. Sin intermediarios. Sin pánico bancario.",
	"business/why::why_s3_c1":
		"A diferencia de las tarjetas de crédito, PayPal o las cuentas bancarias tradicionales, Bitcoin no requiere el permiso de nadie.",
	"business/why::why_s3_c2":
		"Nadie puede congelar tu cuenta, bloquear un pago ni desconectarte de la red. Es el primer sistema financiero en la historia que puedes usar libremente, sin miedo a la censura o confiscación.",
	"business/why::why_s4_c1":
		"Bitcoin a menudo se malentiende, pero silenciosamente hace mucho bien en el mundo.",
	"business/why::why_s4_c2":
		"Ha ayudado a activistas de derechos humanos en su lucha por la libertad, ha reducido las emisiones mundiales de metano de vertederos y pozos de petróleo, ha estabilizado redes eléctricas y ha financiado bienes públicos como parques nacionales.",
	"business/why::why_biz_s1":
		"Comisiones más bajas, más para el negocio",
	"business/why::why_biz_s1_c1":
		"Los pagos en Bitcoin evitan a los bancos y a las empresas de tarjetas que se quedan un 2-3 % de cada venta. La empresa retiene más de lo que pagas — lo que a menudo significa mejores precios y mejor servicio para ti.",
	"business/why::why_biz_s2":
		"Liquidación instantánea, sin contracargos",
	"business/why::why_biz_s2_c1":
		"Los pagos en Bitcoin se liquidan en segundos, directamente de tu cartera al negocio. Sin esperar días a que el banco libere los fondos, y sin costosas disputas de contracargos — lo que significa que el negocio puede centrarse en atender a los clientes en lugar de luchar contra el fraude.",
	"business/why::why_biz_s3":
		"Aceptación gratuita, abierta a todos",
	"business/why::why_biz_s3_c1":
		"No hay contratos, tarifas mensuales ni costes de puesta en marcha para que un negocio acepte Bitcoin. Y millones de usuarios de Bitcoin en todo el mundo buscan activamente comerciantes que lo acepten — dando a este negocio exposición gratuita a nuevos clientes.",
	"business/why::why_business_cta_intro":
		"¿Tienes un negocio y quieres empezar a aceptar Bitcoin?",
	"business/why::why_business_cta_link":
		"Mira cómo funciona →",
	"business/why::why_for_business":
		"Por qué Bitcoin es bueno para este negocio",
	"business/why::why_for_business_intro":
		"Al aceptar Bitcoin, este negocio se queda con más de cada venta, cobra al instante sin contracargos y llega a una audiencia global de usuarios de Bitcoin — todo sin contratos ni tarifas mensuales.",
	"business/why::why_good_for_you_intro":
		"Bitcoin no solo es útil en la caja — es una forma mejor de dinero que protege tus ahorros, tu privacidad y tu libertad para transaccionar. Aquí tienes un resumen rápido.",
	"business/why::why_hero_subtitle":
		"Acabas de escanear una pegatina de «Se acepta Bitcoin aquí». Aquí tienes por qué eso es una buena noticia — para este negocio y para ti.",
	"business/why::why_intro_c1":
		"El negocio en el que estás acepta Bitcoin — una red de pagos moderna y de código abierto que cualquiera, en cualquier parte del mundo, puede usar, sin que los bancos e intermediarios se lleven una parte.",
	"business/why::why_intro_c2":
		"A continuación la versión corta de por qué es bueno para este negocio aceptar Bitcoin, más por qué es bueno para ti como cliente usar Bitcoin.",
	"business/why::why_next_business_label": "ACEPTA BITCOIN",
	"business/why::why_next_business_title":
		"Acepta Bitcoin en tu empresa",
	"business/why::why_next_buy_label": "COMPRA BITCOIN",
	"business/why::why_next_buy_title": "Compra tu primer Bitcoin",
	"business/why::why_next_learn_label": "APRENDE MÁS",
	"business/why::why_next_learn_title": "Aprende más sobre Bitcoin",
	"business/why::why_next_wallet_label": "CONSIGUE UNA CARTERA",
	"business/why::why_next_wallet_title":
		"Consigue tu propia cartera de Bitcoin",
	"business/why::why_whats_next_heading": "¿Adónde ir ahora?",
	"business/why::why_whats_next_intro":
		"Si es tu primera vez escaneando una pegatina de Bitcoin, aquí tienes los lugares más útiles a los que ir a continuación.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Entre pares (directamente entre usuarios)",
	"buy::buy_bitcoin_guide": "Cómo comprar Bitcoin",
	"buy::buy_step_1_header": "Elige tu país",
	"buy::buy_step_2_header": "Elige tu método de pago",
	"buy::buy_step_3_header": "Tus opciones de compra",
	"buy::buy_step_4_header": "Guarda tu Bitcoin de forma segura",
	"buy::buy_header_subtitle":
		"Una sencilla guía paso a paso para comprar tu primer Bitcoin.",
	"buy::buy_howto_name": "Cómo comprar Bitcoin",
	"buy::buy_meta_description":
		"Aprende a comprar Bitcoin de forma segura con nuestra guía paso a paso. Elige tu país y método de pago para encontrar las mejores opciones de compra de Bitcoin para ti.",
	"buy::buy_step_1_eyebrow": "Paso 1",
	"buy::buy_step_2_eyebrow": "Paso 2",
	"buy::buy_step_3_eyebrow": "Paso 3",
	"buy::buy_step_4_eyebrow": "Paso 4",
	"buy::buy_storage_cta_label": "Siguiente paso",
	"buy::sources_bisq":
		"Bisq — plataforma de intercambio descentralizada entre pares de Bitcoin",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — directorio global de cajeros automáticos de Bitcoin",
	"buy::sources_kraken": "Kraken — plataforma de intercambio de Bitcoin consolidada",
	"buy::sources_relai":
		"Relai — aplicación suiza de autocustodia de Bitcoin",
	"buy::sources_river":
		"River — compra, minería y custodia solo de Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — compra de Bitcoin con soporte para Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — compra promediada (DCA) solo de Bitcoin",
	"buy::buy_bitcoin": "Comprar Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Añadir un idioma",
	"common::common_next_buy_bitcoin": "Comprar Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Aprende a comprar Bitcoin de forma segura",
	"common::common_next_calculate": "Calcula tu inflación",
	"common::common_next_calculate_desc":
		"Mira cómo la inflación afecta a tu salario con el tiempo",
	"common::common_next_get_wallet": "Consigue una cartera",
	"common::common_next_get_wallet_desc":
		"Consigue tu primera cartera de Bitcoin — es gratis",
	"common::common_next_keep_learning": "Sigue aprendiendo",
	"common::common_next_keep_learning_desc":
		"Mira cómo Bitcoin está mejorando el mundo",
	"common::common_source_bls_cpi":
		"Oficina de Estadísticas Laborales de EE. UU. — Índice de Precios al Consumidor (IPC)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — oferta monetaria (índice por categoría)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — «¿Puede fallar una subasta del Tesoro?»",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "¿Qué sigue?",
	"common::common_sticker_files_mission_5": "solicita un paquete",
	"common::common_site_tagline": "Educación sobre Bitcoin para todos.",
	"common::common_source_btc_map":
		"BTC Map — directorio mundial de comerciantes que aceptan Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — procesador de pagos Bitcoin autoalojado, gratuito y de código abierto",
	"common::common_source_oshi":
		"Oshi — plataforma de recompensas en Bitcoin para comerciantes",
	"common::common_source_strike_business":
		"Strike — pagos en Bitcoin y Lightning para empresas",
	"common::common_sources_group_bitcoin": "Datos de Bitcoin",
	"common::common_sources_group_cpi":
		"Inflación / índice de precios al consumidor",
	"common::common_sources_group_debt": "Deuda pública",
	"common::common_sources_group_money": "Datos de oferta monetaria",
	"common::common_sources_group_stories": "Ejemplos del mundo real",
	"common::common_sticker_files_mission_6":
		"pegatinas gratuitas en inglés.",
	"common::common_sticker_files_next_flyers_label": "Folletos",
	"common::common_sticker_files_next_flyers_title":
		"Imprime un folleto de Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"Archivos de pegatinas",
	"common::common_sticker_files_next_languages_title":
		"Mira archivos de pegatinas en otros idiomas",
	"common::common_sticker_files_print_these":
		"IMPRÍMELAS CON 1 CLIC",
	"common::common_sticker_name_bdhi_black":
		"Pegatina «Bitcoin Doesn\u2019t Have Inflation» (negra)",
	"common::common_sticker_name_bdhi_orange":
		"Pegatina «Bitcoin Doesn\u2019t Have Inflation» (naranja)",
	"common::common_sticker_name_caution":
		"Pegatina de Bitcoin «Caution! Melting Ice Cube»",
	"common::common_sticker_name_cure_inflation":
		"Pegatina de Bitcoin «Cure Inflation»",
	"common::common_sticker_name_danger":
		"Pegatina de Bitcoin «Danger! Inflation Ahead»",
	"common::common_sticker_name_fix":
		"Pegatina de Bitcoin «Fix The Money, Fix The World»",
	"common::common_sticker_name_got_inflation":
		"Pegatina de Bitcoin «Got Inflation?»",
	"common::common_sticker_name_study":
		"Pegatina «Study Bitcoin»",
	"common::common_sticker_name_warning":
		"Pegatina de Bitcoin «Warning! Inflation is Stealing Your Savings»",
	"common::common_sticker_name_what_if":
		"Pegatina de Bitcoin «What if your money didn\u2019t have inflation?»",
	"common::common_sticker_tips_heading": "Consejos para las pegatinas",
	"common::common_sticker_tips_intro":
		"Una vez que hayas impreso tus pegatinas, ¡ponlas donde la gente las vea! Buenos lugares incluyen:",
	"common::common_sticker_tips_list_1":
		"espacios públicos donde la gente las note",
	"common::common_sticker_tips_list_2":
		"lugares donde sea poco probable que se retiren enseguida (las pegatinas no causan daños permanentes)",
	"common::common_sticker_tips_list_3":
		"superficies donde se adhieran bien (metal, plástico, vidrio)",
	"common::common_sticker_tips_list_4":
		"NO en propiedad privada, señales de tráfico, cajeros automáticos o surtidores de combustible",
	"common::common_stickers_printer_prefix": "Nosotros usamos",
	"common::common_stickers_printer_suffix":
		"pero puedes usar cualquier imprenta de pegatinas.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — índice de precios al consumidor para todos los consumidores urbanos",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — oferta monetaria M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Calcula tu brecha de inflación",
	"compound-inflation-calculator::cic_cta_label": "Siguiente paso",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Descubre cuánto debe aumentar tu salario para mantenerse a la par con la inflación.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Explora más temas",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Mira cómo Bitcoin se relaciona con el dinero, la libertad, la energía y más.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Aprende cómo funciona la inflación",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Cómo imprimir y colgar estos folletos de Bitcoin",
	"flyers::flyers_hero_subtitle":
		"Folletos de Bitcoin gratuitos e imprimibles. Cuélgalos en espacios públicos para ayudar a que más personas aprendan sobre Bitcoin.",
	"flyers::flyers_hero_title": "Imprime y cuelga folletos de Bitcoin",
	"flyers::flyers_next_get_stickers": "Corre la voz",
	"flyers::flyers_next_get_stickers_desc":
		"Pide un paquete gratuito de pegatinas de Bitcoin",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Participa y ayuda a difundir Bitcoin",
	"get-involved::get_involved_business_content_1":
		"¿Quieres ayudar a construir una economía circular de Bitcoin? La forma más fácil es ayudar a los negocios locales a empezar a aceptar pagos en Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"¿Conoces un negocio que estaría abierto a ello? Envía al propietario a nuestra página",
	"get-involved::get_involved_business_content_3":
		"Bitcoin para empresas.",
	"get-involved::get_involved_description":
		"Nuestros recursos gratuitos facilitan la difusión de la adopción de Bitcoin. Pegatinas, folletos, pegatinas de «Se acepta Bitcoin aquí» para empresas y código abierto al que todos pueden contribuir.",
	"get-involved::get_involved_header":
		"Participa y ayuda a difundir Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Puedes ayudar a cambiar esto. Hemos creado algunos recursos gratuitos que facilitan la difusión de la esperanza que trae Bitcoin en tu comunidad.",
	"get-involved::get_involved_biz_stickers_note":
		"¿Ya aceptas Bitcoin? Haz saber a tus clientes con nuestras pegatinas gratuitas de «Se acepta Bitcoin aquí». Enviamos un paquete a cualquier dirección en EE. UU. o Canadá, o puedes imprimir las tuyas en cualquier parte del mundo.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Pegatinas «Se acepta aquí»",
	"get-involved::get_involved_card_biz_stickers_source":
		"Fuente: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Pegatinas gratuitas de «Se acepta Bitcoin aquí» para tu empresa",
	"get-involved::get_involved_card_business_label":
		"Bitcoin para empresas",
	"get-involved::get_involved_card_business_source":
		"Fuente: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Todo lo que una empresa necesita para empezar a aceptar pagos en Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Folletos imprimibles",
	"get-involved::get_involved_card_flyers_source":
		"Fuente: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Descarga e imprime un folleto gratuito de Bitcoin",
	"get-involved::get_involved_card_github_label": "Código abierto",
	"get-involved::get_involved_card_github_source": "Fuente: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Contribuye a bitcoin.rocks en GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Pegatinas gratuitas",
	"get-involved::get_involved_card_stickers_source":
		"Fuente: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Solicita un paquete gratuito de pegatinas de Bitcoin en tu puerta",
	"get-involved::get_involved_flyers_content_1":
		"Los folletos son una de las formas más fáciles de presentar Bitcoin en tu comunidad. Descarga nuestro folleto gratuito e imprimible de Bitcoin, imprime tantas copias como quieras y cuélgalas en tablones de anuncios, cafeterías, encuentros o donde se reúna la gente.",
	"get-involved::get_involved_flyers_content_2":
		"Cada folleto tiene un título llamativo y un código QR que lleva a los lectores curiosos a bitcoin.rocks para aprender más.",
	"get-involved::get_involved_flyers_content_3":
		"A diferencia de las pegatinas, los folletos pueden imprimirse bajo demanda desde cualquier lugar del mundo — solo necesitas una impresora y unos minutos.",
	"get-involved::get_involved_flyers_header":
		"Imprime y cuelga un folleto",
	"get-involved::get_involved_flyers_image_alt":
		"Vista previa del folleto gratuito e imprimible de Bitcoin de bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks es un proyecto gratuito y de código abierto bajo la licencia MIT. Nuestra misión es acelerar la adopción de Bitcoin a través de la educación — y no podemos hacerlo solos.",
	"get-involved::get_involved_github_content_2":
		"Seas desarrollador, diseñador, redactor o traductor, hay una forma de ayudar. Damos una bienvenida especial a los colaboradores que pueden traducir nuestro contenido a más idiomas, para que personas de todo el mundo puedan aprender sobre Bitcoin en su lengua materna.",
	"get-involved::get_involved_github_content_3":
		"Haz un fork a nuestro repositorio, abre un pull request, crea una issue o dale una estrella al proyecto. Cada contribución ayuda a que Bitcoin llegue a más personas.",
	"get-involved::get_involved_github_header":
		"Contribuye en GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Un paquete de pegatinas gratuitas de texto de Bitcoin de bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "ahorro",
	"index::home_card_label_art_1": "Comparemos",
	"index::home_card_label_art_2": "Corre la voz",
	"index::home_card_label_art_3": "Arte callejero",
	"index::home_card_label_bank_runs": "Sistema de reserva total",
	"index::home_card_label_bonds": "Comparemos",
	"index::home_card_label_business_1": "¿Cuál es la diferencia?",
	"index::home_card_label_business_2": "Acepta pagos en Bitcoin",
	"index::home_card_label_cash": "Comparemos",
	"index::home_card_label_cbdc": "¿Abierto o cerrado?",
	"index::home_card_label_coding_1": "Curso interactivo",
	"index::home_card_label_coding_2": "Construye hardware",
	"index::home_card_label_coding_3": "Retos de programación",
	"index::home_card_label_crowdfunding_1": "Protestas EndSARS",
	"index::home_card_label_crowdfunding_2": "Dinero que no se detiene",
	"index::home_card_label_crowdfunding_3": "Financia tu proyecto",
	"index::home_card_label_crypto": "¿Cuál es la diferencia?",
	"index::home_card_label_energy_1": "Estabilización de la red eléctrica",
	"index::home_card_label_energy_4": "Gestión de la demanda",
	"index::home_card_label_energy_5": "Electrificación rural",
	"index::home_card_label_energy_6": "Incentivos para energías renovables",
	"index::home_card_label_environment_1": "Reducción de metano",
	"index::home_card_label_environment_2": "Salvó un parque nacional",
	"index::home_card_label_environment_3": "La industria más verde",
	"index::home_card_label_environment_4": "Reduce la quema de gas",
	"index::home_card_label_equality_1": "Esperanza y oportunidades",
	"index::home_card_label_equality_2": "El gran igualador",
	"index::home_card_label_food_1": "Precios de los alimentos",
	"index::home_card_label_food_2": "Granjas y tierra",
	"index::home_card_label_freedom_1": "Regímenes autoritarios",
	"index::home_card_label_freedom_2": "Una herramienta única",
	"index::home_card_label_get_started_1":
		"Conceptos básicos para principiantes",
	"index::home_card_label_get_started_2": "Tu primera cartera",
	"index::home_card_label_get_started_3": "Compra Bitcoin",
	"index::home_card_label_gold": "¿Cuál es mejor?",
	"index::home_card_label_housing_1": "Vivienda asequible",
	"index::home_card_label_human_rights_1":
		"Promover los derechos humanos",
	"index::home_card_label_human_rights_2": "Adopción popular",
	"index::home_card_label_human_rights_3": "Huella global",
	"index::home_card_label_inflation": "Bitcoin es mejor dinero",
	"index::home_card_label_networks_1": "Visualización en vivo de la red",
	"index::home_card_label_networks_2": "Comparemos",
	"index::home_card_label_payments_1": "¿Cuál es la diferencia?",
	"index::home_card_label_payments_2": "Pagos rápidos y baratos",
	"index::home_card_label_payments_3": "Remesas al extranjero",
	"index::home_card_label_payments_4": "Acepta pagos",
	"index::home_card_label_politics_1": "La paradoja política",
	"index::home_card_label_politics_2": "Apuesta fuerte",
	"index::home_card_label_property_rights_1": "Comparemos",
	"index::home_card_label_property_rights_2": "Propiedad real",
	"index::home_card_label_salary": "Protege tu salario",
	"index::home_card_label_self_custody_1":
		"Guía de carteras de Bitcoin",
	"index::home_card_label_self_custody_2": "El paso más importante",
	"index::home_card_label_self_custody_3": "Dinero soberano",
	"index::home_card_label_war_1": "Poner fin a guerras interminables",
	"index::home_card_label_war_2": "Ayuda a veteranos",
	"index::home_card_label_war_3": "Escapar de la guerra",
	"index::home_h1":
		"Bitcoin es mejor dinero que construye un mundo mejor.",
	"index::home_nav_about": "Acerca de",
	"index::home_nav_get_involved": "Participa",
	"index::home_nav_learn": "Aprende",
	"index::home_source_prefix": "Fuente:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon y Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Consulta nuestra",
	"lightning::lightning_grid_heading":
		"Carteras Lightning populares",
	"lightning::lightning_hardware_cta_label":
		"Carteras de hardware",
	"lightning::lightning_header_subtitle":
		"Lightning te permite enviar Bitcoin en segundos por una fracción de céntimo — elige una cartera cuyos compromisos se ajusten a cuánto Bitcoin planeas gastar.",
	"lightning::lightning_s1_c4_end": "para más información.",
	"lightning::lightning_s1_c4_link":
		"Guía de carteras de hardware de Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — cartera Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — cartera Lightning autocustodiada",
	"lightning::sources_lightning_labs":
		"Lightning Labs — documentación para Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — cartera Lightning custodial",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android y web",
	"nostr/index::nostr_platform_web": "Navegador web",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr es un nuevo protocolo descentralizado para la comunicación en línea — ninguna empresa es su dueña, los zaps de Bitcoin están integrados y puedes cambiar de cliente sin perder seguidores.",
	"nostr/index::nostr_amethyst_f1":
		"Muchas funciones y opciones de personalización",
	"nostr/index::nostr_amethyst_f2":
		"Requiere una cartera de Bitcoin separada",
	"nostr/index::nostr_amethyst_f3": "100 % gratis",
	"nostr/index::nostr_damus_f1":
		"Interfaz familiar tipo Twitter",
	"nostr/index::nostr_damus_f2":
		"Requiere una cartera de Bitcoin separada",
	"nostr/index::nostr_damus_f3": "100 % gratis",
	"nostr/index::nostr_download_heading":
		"Descarga un cliente de Nostr gratis",
	"nostr/index::nostr_download_intro":
		"Los clientes de Nostr son aplicaciones gratuitas que te permiten leer y escribir en la red Nostr. Todos funcionan juntos — puedes cambiar de cliente en cualquier momento y conservar tus seguidores y contenido.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr es un nuevo protocolo descentralizado para la comunicación en línea — ninguna empresa es su dueña, los zaps de Bitcoin están integrados y puedes cambiar entre aplicaciones sin perder seguidores.",
	"nostr/index::nostr_hero_title": "¿Qué es Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr es como el correo electrónico: el protocolo no pertenece a nadie, cualquiera puede construir una aplicación encima y tú eliges la que mejor te funciona. A diferencia de Twitter o Facebook, no hay una empresa central que pueda censurarte, expulsarte o degradarte.",
	"nostr/index::nostr_intro_c2":
		"A continuación la versión corta de por qué importa Nostr — y luego todos los clientes gratuitos de Nostr que necesitas para empezar hoy.",
	"nostr/index::nostr_iris_f1":
		"Extremadamente sencillo — no requiere instalación",
	"nostr/index::nostr_iris_f2":
		"Forma fácil de probar Nostr con una cuenta de prueba",
	"nostr/index::nostr_iris_f3": "100 % gratis",
	"nostr/index::nostr_learn_more_label": "PROFUNDIZA",
	"nostr/index::nostr_learn_more_title":
		"Aprende más sobre Nostr en nostr.how",
	"nostr/index::nostr_primal_f1": "Nuestro primer cliente recomendado",
	"nostr/index::nostr_primal_f2":
		"Cartera integrada de zaps de Bitcoin",
	"nostr/index::nostr_primal_f3": "100 % gratis",
	"nostr/index::nostr_s1": "Un protocolo, no una plataforma",
	"nostr/index::nostr_s1_c1":
		"Nostr es un nuevo protocolo que te permite comunicarte en línea sin miedo a la censura, al baneo o a la degradación.",
	"nostr/index::nostr_s1_c2":
		"Plataformas como Twitter y Facebook están controladas por una sola empresa, pero el protocolo Nostr no está controlado por nadie.",
	"nostr/index::nostr_s2": "Libertad para moverse",
	"nostr/index::nostr_s2_c1":
		"Nostr es como el correo electrónico. Nadie controla el protocolo de correo electrónico, y cualquiera puede construir un cliente encima (como Gmail, Hotmail, etc.).",
	"nostr/index::nostr_s2_c2":
		"El protocolo Nostr tampoco está controlado por nadie, y cualquiera puede construir un cliente encima (como Damus, Amethyst, etc.).",
	"nostr/index::nostr_s2_c3":
		"Si no te gusta cómo funciona un cliente específico, puedes mover tu cuenta de Nostr a otro cliente sin perder tus seguidores o contenido.",
	"nostr/index::nostr_s3": "Bitcoin está integrado",
	"nostr/index::nostr_s3_c1":
		"Bitcoin está integrado en el protocolo Nostr. Cuando veas contenido que te gusta, puedes enviar fácilmente al autor un «zap de Bitcoin» como agradecimiento.",
	"nostr/index::nostr_s3_c2":
		"En plataformas centralizadas como Twitter y Facebook, una empresa central gana dinero con tu contenido. Pero en protocolos abiertos como Nostr, tú ganas dinero con tu propio contenido.",
	"nostr/index::sources_damus": "Damus — cliente de Nostr para iPhone",
	"nostr/index::sources_iris": "Iris — cliente de Nostr en el navegador",
	"nostr/index::sources_nostr_how": "nostr.how — ¿Qué es Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Protocolo Nostr — especificación de código abierto",
	"nostr/index::sources_primal":
		"Primal — cliente de Nostr con cartera integrada de zaps de Bitcoin",
	"nostr/index::what_is_nostr": "¿Qué es Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Imprime tus propias pegatinas de Bitcoin usando estos archivos.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Solicitud recibida 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Pedir al por mayor",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Compartir en Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"¿Qué es Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"¿Necesitas más pegatinas?",
	"sticker-success::sticker_success_hero_title":
		"Tus pegatinas están en camino 🎉",
	"sticker-success::sticker_success_share_header":
		"Comparte dónde pusiste las pegatinas",
	"sticker-success::sticker_success_tips_header":
		"Buenos lugares para poner pegatinas",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Y una vez empieces, imprime y cuelga también tus propios",
	"stickers::stickers_instructions_1":
		"Introduce tu dirección postal y te enviaremos un paquete gratuito de pegatinas de Bitcoin por correo. Tus pegatinas llegarán en un sobre blanco sencillo.",
	"stickers::stickers_btn_choose_pack": "Elige este paquete",
	"stickers::stickers_bulk_c1":
		"¿Quieres más de unas pocas pegatinas?",
	"stickers::stickers_bulk_c2":
		"Pídelas al por mayor a la misma imprenta que usamos nosotros",
	"stickers::stickers_bulk_c3":
		"— cuantas más compres, más baratas te saldrán por unidad.",
	"stickers::stickers_bulk_cta": "Comprar pegatinas al por mayor",
	"stickers::stickers_bulk_header":
		"Pide pegatinas al por mayor",
	"stickers::stickers_hero_subtitle":
		"Pide un paquete gratuito de pegatinas de Bitcoin y cuélgalas en espacios públicos para ayudar a que más personas aprendan sobre Bitcoin.",
	"stickers::stickers_hero_title": "Pegatinas gratuitas de Bitcoin",
	"stickers::stickers_intro_c1":
		"Nuestra misión es ayudarte a «naranja-pildorar» a más personas pegando pegatinas de Bitcoin en espacios públicos. Todas nuestras pegatinas tienen códigos QR que llevan a páginas educativas sobre la",
	"stickers::stickers_intro_c3": "inflación",
	"stickers::stickers_intro_c4":
		"Elige un paquete de pegatinas abajo y elige cómo las quieres — enviaremos un paquete gratuito a cualquier persona en EE. UU. o Canadá, o puedes imprimir las tuyas en cualquier parte del mundo.",
	"stickers::stickers_mail_header":
		"Te enviaremos tus pegatinas gratis por correo",
	"stickers::stickers_next_print_flyers": "Difunde más el mensaje",
	"stickers::stickers_next_print_flyers_desc":
		"Imprime folletos gratuitos de Bitcoin y cuélgalos en lugares públicos",
	"stickers::stickers_option_bulk":
		"📦 En todo el mundo — pide al por mayor",
	"stickers::stickers_option_canada":
		"🇨🇦 Canadá — gratis por correo",
	"stickers::stickers_option_print":
		"🌍 En todo el mundo — imprime las tuyas",
	"stickers::stickers_option_usa":
		"🇺🇸 EE. UU. — gratis por correo",
	"stickers::stickers_print_c1":
		"Puedes participar imprimiendo tus propias pegatinas vivas donde vivas. Haz clic en tu idioma abajo para descargar los archivos de pegatinas e instrucciones de impresión.",
	"stickers::stickers_print_c2":
		"No todas las pegatinas están disponibles en todos los idiomas.",
	"stickers::stickers_print_header":
		"Imprime tus propios archivos de pegatinas",
	"stickers::stickers_request_c1":
		"Rellena el formulario de abajo para solicitar archivos de pegatinas en tu idioma local. Te avisaremos cuando estén listos.",
	"stickers::stickers_request_header":
		"¿No ves tu idioma?",
	"stickers::stickers_share_c2":
		"Síguenos en Nostr buscando",
	"stickers::stickers_share_c3":
		"en cualquier cliente de Nostr.",
	"stickers::stickers_signs_pack_description":
		"Señales de advertencia, precaución y aviso con mensajes de Bitcoin — diseñadas para llamar la atención y hacer que la gente se detenga y lea.",
	"stickers::stickers_step_1_description":
		"Cada paquete contiene un conjunto diferente de pegatinas de Bitcoin con códigos QR que enseñan a la gente sobre Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "PASO 1",
	"stickers::stickers_step_1_header":
		"Elige un paquete de pegatinas",
	"stickers::stickers_step_2_description":
		"Enviamos paquetes gratuitos a direcciones en EE. UU. y Canadá. En cualquier otro lugar del mundo, puedes imprimir las tuyas o pedir al por mayor.",
	"stickers::stickers_step_2_eyebrow": "PASO 2",
	"stickers::stickers_step_2_header":
		"¿Cómo quieres tus pegatinas?",
	"stickers::stickers_text_pack_description":
		"Una mezcla de eslóganes y monólogos de Bitcoin diseñados para despertar la curiosidad en espacios públicos.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Elige tu cartera",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — reseñas de almacenamiento metálico para semillas de Bitcoin",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — cartera de Bitcoin autocustodiada",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — cartera de hardware de Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — cartera de hardware Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — cartera de hardware Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — cartera de hardware Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — dispositivo de firma DIY de código abierto para transacciones de Bitcoin",
	"wallets::wallets_grid_heading": "Carteras populares de Bitcoin",
	"wallets::wallets_header_subtitle":
		"Una guía paso a paso para elegir una cartera, proteger tus claves y tomar el control total de tu Bitcoin.",
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
		`translate-rest-part2 (es): filled ${filled}, already-done ${skipped}`,
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

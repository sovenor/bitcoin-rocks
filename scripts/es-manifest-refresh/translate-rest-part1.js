#!/usr/bin/env node
/**
 * Spanish manifest refresh — part 1 of non-inflation namespaces.
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
	"es.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Volver al inicio",
	"404::404_message":
		"Bitcoin es increíble, pero esta página rota no lo es.",
	"404::404_not_found_short": "No encontrado",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Ofrecemos herramientas gratuitas para empresas que facilitan a los negocios locales empezar a aceptar Bitcoin. Nuestra página Bitcoin para empresas explica por qué Bitcoin es bueno para el negocio, cómo elegir una cartera y un terminal de pago, y ofrece pegatinas gratuitas de «Se acepta Bitcoin aquí».",
	"about::about_card_business_label": "Herramientas para empresas",
	"about::about_card_business_source": "Fuente: bitcoin.rocks →",
	"about::about_card_business_title":
		"Todo lo que una empresa necesita para empezar a aceptar pagos en Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Fuente: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Contribuir",
	"about::about_card_contribute_source": "Fuente: GitHub →",
	"about::about_card_contribute_title":
		"Aprende cómo contribuir al proyecto bitcoin.rocks",
	"about::about_card_email_label": "Correo electrónico",
	"about::about_card_email_source": "Fuente: correo electrónico →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Folletos imprimibles",
	"about::about_card_flyers_source": "Fuente: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Descarga e imprime folletos de Bitcoin para tu comunidad",
	"about::about_card_github_label": "Repositorio",
	"about::about_card_github_source": "Fuente: GitHub →",
	"about::about_card_github_title": "Ver bitcoin.rocks en GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Fuente: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Pegatinas gratuitas",
	"about::about_card_stickers_source": "Fuente: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Recibe pegatinas de Bitcoin gratuitas en tu puerta",
	"about::about_editorial_2":
		"Citamos fuentes fiables como la Reserva Federal (FRED), la Oficina de Estadísticas Laborales de EE. UU., el FDIC, la ONU, el World Gold Council, Forbes, MIT Technology Review, Lyn Alden y James Lavish. Creemos que cuando los hechos se presentan con claridad, Bitcoin habla por sí mismo.",
	"about::about_flyers_blurb":
		"Diseñamos folletos imprimibles que puedes compartir en encuentros, colocar en tablones de anuncios o dejar en buzones — una forma sencilla de despertar curiosidad y dirigir a la gente a bitcoin.rocks, donde pueden aprender más.",
	"about::about_header": "Acerca de bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks fue fundado por el usuario",
	"about::about_mission_1b":
		"en 2022 con una misión sencilla: acelerar la adopción de Bitcoin a través de la educación.",
	"about::about_open_source_2":
		"bitcoin.rocks es un proyecto gratuito y de código abierto bajo la licencia MIT. Todo el mundo es bienvenido a contribuir. Damos una bienvenida especial a los traductores, que ayudan a hacer nuestro contenido accesible para personas de todo el mundo.",
	"about::about_open_source_header": "Código abierto",
	"about::about_page_description":
		"bitcoin.rocks es un sitio web educativo gratuito y de código abierto sobre Bitcoin, fundado en 2022. Nuestra misión es acelerar la adopción de Bitcoin a través de la educación.",
	"about::about_stickers_blurb":
		"Enviamos pegatinas de Bitcoin gratuitas directamente a tu puerta, para que ayudes a crear conciencia sobre Bitcoin en tu comunidad. Cada mes, cientos de personas escanean los códigos QR de estas pegatinas para aprender más sobre Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin no sufre pánicos bancarios",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin es un sistema de reserva total. No pones tu dinero en un banco. Tú eres tu propio banco. Tu dinero no se presta sin que lo sepas, porque la única persona con acceso a él eres tú.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Mientras mantengas tu bitcoin en tu propia cartera — no en una plataforma de intercambio ni envuelto en un ETF — los pánicos bancarios son imposibles.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Con Bitcoin, tienes el control real de tu dinero.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Desde el 26 de marzo de 2020, los bancos estadounidenses ya no están obligados a mantener ninguna reserva obligatoria.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Ratio de reservas bancarias",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Fuente: Reserva Federal →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Sistema de reserva total — no se requiere seguro de depósitos.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Cobertura de Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Fuente: libro blanco de Bitcoin →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Cada bitcoin existe en la blockchain — nada se presta.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Ratio de reservas de Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Fuente: libro blanco de Bitcoin →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Fondo de seguro de 153,9 mil millones de $ frente a 10,82 billones de $ en depósitos asegurados (dic. de 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Cobertura del FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Fuente: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Estudio de caso",
	"bank-runs::bank_runs_card_svb_source":
		"Fuente: Escuela de Derecho de la Universidad de Washington →",
	"bank-runs::bank_runs_card_svb_title":
		"Mira cómo ocurrió el pánico bancario de Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Siguiente paso",
	"bank-runs::bank_runs_card_wallet_source": "Empieza aquí →",
	"bank-runs::bank_runs_card_wallet_title":
		"Aprende a conseguir tu propia cartera de Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"El seguro del FDIC cubre alrededor del 1 % de los depósitos",
	"bank-runs::bank_runs_fdic_p1":
		"El seguro del FDIC protege depósitos de hasta 250.000 $ por depositante. Pero el fondo de seguro es pequeño en relación con los depósitos totales que se supone que protege.",
	"bank-runs::bank_runs_fdic_p2_a":
		"En un colapso bancario generalizado, el gobierno probablemente imprimiría dinero para cubrir la diferencia — provocando más",
	"bank-runs::bank_runs_fdic_p2_link": "inflación.",
	"bank-runs::bank_runs_header":
		"Bitcoin no sufre pánicos bancarios, pero tu banco sí puede.",
	"bank-runs::bank_runs_page_description":
		"Los bancos prestan tus depósitos mediante la banca de reserva fraccionaria. Si demasiadas personas retiran a la vez, los bancos pueden colapsar. Bitcoin es un sistema de reserva total — los pánicos bancarios son imposibles.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: un ejemplo real",
	"bank-runs::bank_runs_svb_p1_a":
		"En marzo de 2023, Silicon Valley Bank colapsó después de invertir los depósitos de sus clientes en",
	"bank-runs::bank_runs_svb_p1_b":
		"Cuando esos bonos perdieron valor, SVB no pudo cubrir los retiros. El banco se volvió insolvente.",
	"bank-runs::bank_runs_svb_p1_link": "bonos del gobierno a largo plazo.",
	"bank-runs::bank_runs_svb_p2":
		"Miles de empresas no pudieron pagar a sus empleados. El FDIC intervino — pero surgió una pregunta mayor: ¿está realmente seguro tu dinero?",
	"bank-runs::bank_runs_what_p1":
		"Los bancos no guardan tus depósitos en una cámara acorazada. Prestan e invierten tu dinero — esto se llama banca de reserva fraccionaria.",
	"bank-runs::bank_runs_what_p2":
		"Si demasiadas personas intentan retirar a la vez, el banco no tiene suficiente efectivo para pagarles a todos. Eso es un pánico bancario — y puede provocar el colapso total del banco.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y los <span class=\"asset\">bancos</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin puede ser usado por cualquiera con una conexión a internet — es ",
	"bitcoin-vs-banks::point_1_summary_2": "sin permisos.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Los bancos pueden rechazar, congelar o cerrar cuentas según sus propias reglas o regulaciones gubernamentales.",
	"bitcoin-vs-banks::point_2_summary_1":
		"La red Bitcoin funciona 24/7/365 sin ventanas de mantenimiento ni días festivos. Los bancos tienen horarios limitados, cierran los fines de semana y sufren cortes operativos.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Cada transacción de Bitcoin está en una blockchain pública que cualquiera puede verificar. Los bancos mantienen libros de contabilidad privados que los clientes no pueden auditar de forma independiente.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Con Bitcoin, tú mismo custodias tus claves privadas — consulta nuestra sencilla guía de ",
	"bitcoin-vs-banks::point_4_summary_2": "carteras de Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Los bancos mantienen la custodia de tu dinero y pueden congelarlo, restringirlo o bloquearlo en cualquier momento.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Las comisiones de Bitcoin son transparentes y predecibles. Los bancos añaden gradualmente comisiones ocultas por cuentas, descubiertos, transferencias y cajeros automáticos.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin te permite gastar solo lo que realmente tienes. Los bancos permiten descubiertos y luego te cobran una serie de comisiones de penalización por ello.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Una vez enviada una transacción de Bitcoin, no puede detenerse ni revertirse. Los bancos pueden bloquear, congelar o cancelar transacciones según reglas o órdenes gubernamentales.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y los <span class=\"asset\">bonos</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Los bonos son «sin riesgo» solo nominalmente — la inflación, las fluctuaciones de tipos de interés y el riesgo de impago erosionan los rendimientos reales.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin tiene una volatilidad transparente, pero ningún riesgo oculto de contraparte.",
	"bitcoin-vs-bonds::point_2_summary_1": "Cuando la",
	"bitcoin-vs-bonds::point_2_summary_2": "inflación",
	"bitcoin-vs-bonds::point_2_summary_3":
		"supera los rendimientos de los bonos, los tenedores de bonos pierden poder adquisitivo real cada año. El tope de 21 millones de Bitcoin no puede ser diluido por la inflación.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Los mercados de bonos pueden congelarse durante crisis — Silicon Valley Bank colapsó en parte porque tenía bonos que perdieron valor. Mira cómo ocurren los",
	"bitcoin-vs-bonds::point_3_summary_2": "pánicos bancarios",
	"bitcoin-vs-bonds::point_3_summary_3":
		" y por qué Bitcoin los evita. Bitcoin se negocia 24/7 a nivel mundial sin crisis de liquidez.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Las subastas de bonos del gobierno pueden fracasar cuando no hay suficientes compradores — mira la",
	"bitcoin-vs-bonds::point_4_summary_2": "débil subasta de 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"El precio de Bitcoin se descubre continuamente en mercados abiertos sin una subasta central que pueda fallar.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Los rendimientos de los bonos se fijan en el momento de la compra. Aunque la economía crezca o la moneda se derrumbe, tu rendimiento sigue siendo el mismo.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin tiene un margen significativo para crecer a medida que aumenta la adopción y la demanda se encuentra con una oferta fija.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"La mayoría de los bonos se custodian a través de bancos o corredores, añadiendo riesgo de contraparte. Bitcoin puede mantenerse en autocustodia con una",
	"bitcoin-vs-bonds::point_6_summary_2": "cartera",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — eliminando por completo ese riesgo.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Los bonos dependen por completo del reembolso de la deuda por parte de los gobiernos. Si un gobierno incumple o reduce la deuda mediante inflación, los tenedores de bonos pierden.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin funciona independientemente de cualquier gobierno o autoridad política.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y el <span class=\"asset\">efectivo</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin viaja a cualquier lugar del mundo por internet en minutos. El efectivo requiere presencia física o mensajeros de confianza — no puedes enviar un billete de veinte por correo electrónico.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin funciona igual en todas partes. El efectivo está limitado por la geografía, los tipos de cambio y la aceptación local.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Los gobiernos pueden invalidar el efectivo de la noche a la mañana — la <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> lo hizo en 2016. Pero incluso sin desmonetización, el efectivo pierde valor debido a la",
	"bitcoin-vs-cash::point_3_summary_2": "inflación.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin no puede ser invalidado por ningún gobierno ni autoridad.",
	"bitcoin-vs-cash::point_4_summary_1":
		"El efectivo puede falsificarse, a veces de forma convincente. Bitcoin usa criptografía que hace la falsificación matemáticamente imposible.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin no tiene autoridad central. El efectivo es emitido por gobiernos que pueden imprimir más, cambiar diseños o retirar billetes a voluntad.",
	"bitcoin-vs-cash::point_6_summary_1":
		"El efectivo es vulnerable al robo, al fuego, a la pérdida y a la confiscación. Bitcoin puede ",
	"bitcoin-vs-cash::point_6_summary_2": "autocustodiarse con seguridad",
	"bitcoin-vs-cash::point_6_summary_3":
		" en tu teléfono o en un dispositivo de hardware.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin se puede dividir en 100 millones de satoshis, permitiendo micropagos de cualquier tamaño. El efectivo tiene denominaciones mínimas — no se puede partir un céntimo.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y las <span class=\"asset\">monedas digitales de bancos centrales (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Nadie puede impedirte transaccionar con Bitcoin. Las CBDC están diseñadas para que los gobiernos y los bancos centrales controlen cada pago, limitando tu privacidad y tu libertad.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin nunca caduca y no tiene comisiones mensuales. Las CBDC pueden programarse para caducar, desincentivándote a ahorrar para el futuro.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin tiene un tope fijo de 21 millones de BTC. Las CBDC no tienen límite de oferta y permiten a los gobiernos expandir la oferta monetaria a voluntad — causando",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflación.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Las direcciones de Bitcoin no están vinculadas a tu identidad real. Las CBDC están directamente vinculadas a la identidad gubernamental, permitiendo la vigilancia masiva y la censura financiera.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Las reglas de Bitcoin son verificadas por decenas de miles de nodos independientes. Las CBDC están centralizadas en gobiernos y bancos centrales que tienen control total sobre la red.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Cualquiera puede ejecutar un nodo de Bitcoin y verificar las reglas de la red. Las CBDC no permiten a los usuarios ejecutar nodos — tienes que confiar en una autoridad central.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin autocustodiado no puede ser congelado por nadie. Las CBDC están diseñadas para que los gobiernos y bancos centrales puedan congelar cuentas al instante.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin te da control total sobre tu dinero cuando lo guardas en una",
	"bitcoin-vs-cbdc::point_8_summary_2": "cartera.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Las CBDC requieren confianza en custodios como bancos o gobiernos que guardan el dinero por ti.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"La política monetaria de Bitcoin está fijada en el código y no puede cambiar. Las CBDC pueden reprogramarse a voluntad de los políticos, causando",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflación",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", cuando se imprime demasiado dinero.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin es la red informática más segura jamás construida y nunca ha sido hackeada. Las CBDC dependen de bancos y gobiernos que han sido hackeados innumerables veces.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y las <span class=\"asset\">criptomonedas</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"El protocolo de Bitcoin apenas ha cambiado desde 2009 y proporciona reglas predecibles. La mayoría de los proyectos crypto cambian constantemente los protocolos, la tokenómica o se bifurcan en nuevas versiones.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin se ejecuta en decenas de miles de nodos independientes en todo el mundo. La mayoría de los proyectos crypto están controlados por fundaciones, empresas o pequeños grupos de desarrolladores que pueden hacer cambios unilaterales.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin tiene un tope fijo de 21 millones de monedas — el activo digital más escaso. La mayoría de los proyectos crypto tienen oferta ilimitada o mecanismos para crear nuevos tokens arbitrariamente, diluyendo a los tenedores.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin tiene un solo propósito: dinero digital entre pares. Todo el mundo puede entenderlo y usarlo. La mayoría de las criptomonedas incluyen smart contracts o DeFi complejos que requieren conocimientos técnicos para usarse de forma segura.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"La Prueba de Trabajo de Bitcoin ha funcionado sin un ataque exitoso a la cadena principal durante más de 15 años. La mayoría de los proyectos crypto usan consensos experimentales que no han sido probados a fondo.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin es dinero digital — reserva de valor y medio de intercambio. La mayoría de los tokens crypto son tokens especulativos de utilidad o gobernanza con un valor real poco claro.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin se fortalece bajo ataque y ha sobrevivido a todas las crisis, prohibiciones y críticas. La mayoría de los proyectos crypto colapsan bajo presión regulatoria, técnica o de mercado.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin no tiene CEO, empresa ni un único punto de fallo. La mayoría de los proyectos crypto dependen de inversores de capital riesgo, un liderazgo específico o la supervivencia de una sola empresa.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y las <span class=\"asset\">bellas artes</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Cada bitcoin es idéntico e intercambiable. Cada obra de arte es única — diferente procedencia, historia, condición y linaje hacen que la comparación directa sea extremadamente difícil.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin se negocia 24/7 en un mercado global accesible para todos. Las bellas artes requieren casas de subastas especializadas, marchantes privados o galerías, y las ventas pueden tardar meses.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Comprar o vender Bitcoin cuesta menos del 1 % en comisiones, a menudo mucho menos. Las ventas de arte acumulan un 30-40 % en primas del comprador, comisiones, seguros, transporte y tasas de autenticación.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin se puede dividir en 100 millones de satoshis, lo que lo hace ideal para transacciones de cualquier tamaño. No puedes poseer parte de un cuadro o una esquina de una escultura sin riesgo de contraparte.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"La propiedad y autenticidad de Bitcoin pueden verificarse criptográficamente por cualquiera en la blockchain. La autenticación del arte es cara, lenta y regularmente engañada por falsificadores — destruyendo el valor de una obra de la noche a la mañana.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin correctamente respaldado sobrevive a inundaciones, incendios, terremotos y robos. Las bellas artes son vulnerables a todo tipo de desastre físico, y los seguros rara vez cubren todo.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Cualquiera con conexión a internet y un poco de dinero puede comprar Bitcoin. La inversión en arte se limita en la práctica a coleccionistas adinerados con acceso a subastas y conocimientos especializados.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y el <span class=\"asset\">oro</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin puede enviarse al instante por internet con comisiones bajas. El oro debe enviarse físicamente para transferir la propiedad.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin es un activo nativamente digital que puedes transferir por internet. El oro en línea es un IOU digital — solo posees una promesa de un custodio, no el metal en sí.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin tiene un tope fijo de 21 millones de BTC. La oferta de oro crece aproximadamente <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">un 1,6 % anual</a>, reduciendo tu parte — menos que la",
	"bitcoin-vs-gold::point_3_summary_2": "inflación",
	"bitcoin-vs-gold::point_3_summary_3":
		" del fiat, pero aun así inflación.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Cuando los precios del oro suben, se extrae más oro, empujando el precio de vuelta a la baja. La oferta de Bitcoin es inelástica — por mucho que suba el precio, siempre habrá solo 21 millones.",
	"bitcoin-vs-gold::point_5_summary_1":
		"La red Bitcoin es verificada por decenas de miles de nodos independientes. La mayor parte del oro físico se encuentra en unas pocas grandes cámaras acorazadas.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Cualquiera puede verificar Bitcoin auténtico ejecutando un nodo completo — es solo una aplicación. Verificar oro físico requiere fundirlo; podría haber tungsteno dentro.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin se puede dividir en 100 millones de satoshis, lo que lo hace ideal para compras de cualquier tamaño. El oro no se puede dividir fácilmente para transacciones más pequeñas.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y los <span class=\"asset\">bienes raíces</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin se mueve al instante a cualquier lugar del mundo. Los bienes raíces están anclados en una ubicación y expuestos a riesgos económicos, políticos y ambientales locales.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin se puede dividir en 100 millones de satoshis. Los bienes raíces no se pueden vender parcialmente — no puedes vender una cocina ni comprar medio dormitorio.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin funciona en una red descentralizada que ningún gobierno puede controlar. Los bienes raíces están fuertemente regulados — zonificación, control de alquileres, expropiación e incautación son todos aplicables.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin no requiere mantenimiento. Los bienes raíces requieren reparaciones, renovaciones, seguros, gestión de propiedad y lidiar con los problemas de los inquilinos.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin no está sujeto a impuestos continuos — solo pagas impuestos sobre las ganancias de capital cuando vendes. Los bienes raíces pagan impuestos de propiedad anuales independientemente de los ingresos.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin correctamente respaldado sobrevive a incendios, inundaciones y terremotos. Los bienes raíces son vulnerables a todos los desastres, y los seguros rara vez cubren todo.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Cada bitcoin es idéntico e intercambiable. Cada propiedad inmobiliaria es única, lo que dificulta la valoración y la comparación.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin se negocia globalmente 24/7 para cualquier persona con acceso a internet. Las ventas de bienes raíces se limitan a compradores locales y pueden tardar meses en cerrarse con papeleo.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin permite la propiedad individual directa para cualquiera. Comprar bienes raíces como inversión más allá de la residencia principal encarece los precios de la vivienda, reduce la disponibilidad y crea una crisis habitacional.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y las <span class=\"asset\">acciones</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin es un activo directo que posees por completo. Las acciones son participaciones en una empresa — su valor depende de la gestión, el rendimiento y decisiones que tú no controlas.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin tiene un tope fijo de 21 millones de BTC. Las empresas pueden emitir nuevas acciones en cualquier momento y diluir a los accionistas existentes — igual que la",
	"bitcoin-vs-stocks::point_2_summary_2": "inflación",
	"bitcoin-vs-stocks::point_2_summary_3":
		" del fiat diluye el efectivo. Con Bitcoin, tu parte nunca se encoge.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin no tiene CEO ni un único punto de fallo. Las acciones dependen fuertemente de la gestión — una mala decisión o la salida de una persona clave puede hundir el precio.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"El precio de Bitcoin proviene de mercados globales abiertos. La valoración de acciones se basa en métricas como el P/E que pueden ocultar acciones sobrevaloradas.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin se negocia 24/7 en todo el mundo. Los mercados bursátiles solo están abiertos los días laborables durante el horario de negociación.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Con Bitcoin, puedes pasar a la",
	"bitcoin-vs-stocks::point_6_summary_2": "autocustodia",
	"bitcoin-vs-stocks::point_6_summary_3":
		" con una simple aplicación — no necesitas corredor. Las acciones se custodian en casas de bolsa, exponiéndote a riesgo de contraparte si colapsan.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"La oferta fija de Bitcoin lo convierte en una cobertura fiable contra la inflación. Algunas acciones vencen a la inflación, otras no — no hay garantía.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"La diferencia entre <span class=\"orange\">Bitcoin</span> y <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin es una red abierta a la que cualquiera puede unirse sin permiso. Visa es un sistema cerrado controlado por instituciones financieras que pueden negar el acceso — especialmente a personas sin banco o con acceso bancario limitado.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Las transacciones de Bitcoin no tienen comisiones para el comerciante. Visa cobra típicamente a los comerciantes alrededor del 3 % por transacción — tu empresa puede ahorrar dinero aceptando",
	"bitcoin-vs-visa::point_2_summary_2": "pagos en Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Cada transacción de Bitcoin está en una blockchain pública y verificable. Visa opera un sistema cerrado y propietario donde los clientes no pueden verificar nada de forma independiente.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin no puede ser congelado por ninguna autoridad central. Visa puede congelar cuentas, bloquear transacciones o denegar el servicio en cualquier momento.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin es liquidación final — solo gastas lo que tienes. Las tarjetas de crédito crean deuda con tipos de interés que a menudo superan el 25 % anual.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin te permite pasar a la",
	"bitcoin-vs-visa::point_6_summary_2": "autocustodia",
	"bitcoin-vs-visa::point_6_summary_3":
		" sin necesidad de un banco ni de un procesador de pagos. Las tarjetas de crédito siempre requieren intermediarios.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin funciona 24/7 a nivel mundial sin horario comercial. Visa tiene horarios operativos, ventanas de mantenimiento y restricciones geográficas que pueden bloquear transacciones.",
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
		`translate-rest-part1 (es): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();

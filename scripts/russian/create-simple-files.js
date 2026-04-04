/**
 * Creates Russian (ru) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ru';
const today = '2026-04-04';

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
	"404_title": "Ошибка 404 | Страница не найдена",
	"404_message": "ЭТА СЛОМАННАЯ СТРАНИЦА СОВСЕМ НЕ КРУТАЯ",
	"404_home": "ВЕРНУТЬСЯ НА ГЛАВНУЮ"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "О bitcoin.rocks — Обучение Биткоину с 2022 года",
	"about_description": "bitcoin.rocks — это бесплатный образовательный сайт о Биткоине с открытым исходным кодом, основанный в 2022 году. Наша миссия — ускорить принятие Биткоина через образование.",
	"about_header": "О НАС",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Наша миссия",
	"about_mission_1": "bitcoin.rocks был основан в 2022 году с простой миссией: ускорить принятие Биткоина через образование.",
	"about_mission_2": "Мы существуем, чтобы быть первой ссылкой, которой вы поделитесь с тем, кто интересуется Биткоином. Доступная и понятная отправная точка, которая объясняет, как Биткоин строит лучший мир.",
	"about_mission_3": "Слишком многие люди неправильно понимают Биткоин или никогда не получали правильного знакомства с ним. Мы хотим изменить это, предоставляя бесплатный качественный образовательный контент, понятный каждому.",
	"about_what_we_do_header": "Чем мы занимаемся",
	"about_what_we_do_1": "Мы создаём бесплатный образовательный контент для тех, кто только знакомится с Биткоином. Наш сайт охватывает такие темы, как инфляция, самостоятельное хранение, кошельки, сеть Lightning и сравнение Биткоина с другими активами и платёжными системами.",
	"about_what_we_do_2a": "Мы отправляем ",
	"about_what_we_do_2b": "бесплатные стикеры с Биткоином",
	"about_what_we_do_2c": " прямо к вашей двери, чтобы вы могли помочь распространить знания о Биткоине в своём сообществе. Сотни людей ежемесячно сканируют QR-коды на этих стикерах, чтобы узнать о Биткоине.",
	"about_what_we_do_3a": "Мы также предоставляем ",
	"about_what_we_do_3b": "печатные листовки",
	"about_what_we_do_3c": " и ",
	"about_what_we_do_3d": "бизнес-наборы",
	"about_what_we_do_3e": " для всех, кто хочет помочь местным предприятиям начать принимать платежи в Биткоине.",
	"about_what_we_do_4": "Весь наш контент рассчитан на нулевые предварительные знания о Биткоине. Независимо от того, только ли вы знакомитесь с Биткоином или являетесь опытным биткоинером, ищущим ресурсы для распространения — bitcoin.rocks для вас.",
	"about_editorial_header": "Наш редакционный подход",
	"about_editorial_1": "Каждый материал на bitcoin.rocks тщательно отобран и проверен на достоверность. Когда мы ссылаемся на данные или статистику, мы указываем источники, чтобы вы могли проверить информацию самостоятельно.",
	"about_editorial_2": "Мы ссылаемся на надёжные источники, такие как журнал TIME, Forbes, MIT Technology Review, Лин Олден и многие другие. Мы верим, что Биткоин говорит сам за себя, когда факты представлены ясно.",
	"about_editorial_3": "Наш контент регулярно пересматривается и обновляется для обеспечения точности и актуальности. Весь контент посвящён исключительно обучению Биткоину.",
	"about_open_source_header": "Открытый исходный код",
	"about_open_source_1a": "bitcoin.rocks — это бесплатный проект с открытым исходным кодом, лицензированный по лицензии MIT. Весь наш код доступен публично ",
	"about_open_source_1b": "на GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Каждый может внести свой вклад в bitcoin.rocks. Мы особенно приветствуем переводчиков, которые помогают сделать наш контент доступным для людей по всему миру.",
	"about_open_source_3": "Благодаря нашему сообществу добровольных переводчиков, bitcoin.rocks в настоящее время доступен на 26 языках и продолжает расти.",
	"about_open_source_contribute": "Узнайте, как внести свой вклад.",
	"about_contact_header": "Свяжитесь с нами",
	"about_contact_1": "Мы будем рады услышать вас. Если у вас есть вопрос, предложение или вы просто хотите поздороваться — пишите нам в любое время.",
	"about_contact_email": "Электронная почта:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "КАЛЬКУЛЯТОР СЛОЖНОЙ ИНФЛЯЦИИ",
	"cic_description": "Используйте этот калькулятор сложной инфляции, чтобы узнать, насколько должна вырасти ваша зарплата, чтобы не отставать от инфляции.",
	"what_can_i_do_about": "Что я могу сделать с",
	"what_can_i_do_about_2": "инфляцией?",
	"cic_inflation_cta": "Откажитесь от инфляции с помощью Биткоина"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Вы получите свои стикеры через 2–4 недели. Пока вы ждёте, подумайте о хорошем месте для наклеивания стикеров!",
	"sticker_success_2": "Хорошие места для стикеров:",
	"sticker_success_list_1": "в общественных местах, где их увидят люди",
	"sticker_success_list_2": "в местах, где их вряд ли быстро уберут (стикеры не оставляют постоянных повреждений)",
	"sticker_success_list_3": "на поверхностях, к которым они легко прилипают (металл, пластик, стекло)",
	"sticker_success_list_4": "НЕ на частной собственности, не закрывая вывески, банкоматы или бензоколонки",
	"sticker_success_3": "Хотите посмотреть, где другие люди размещают свои стикеры?",
	"sticker_success_flyers_bar_new": "НОВИНКА!",
	"sticker_success_flyers_bar_cta": "Распечатайте и расклейте листовки о Биткоине →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Мы успешно получили ваш запрос.",
	"sticker_language_success_2": "Мы публикуем новые файлы партиями, поэтому может пройти несколько недель, прежде чем эти файлы станут доступны для скачивания. Заходите снова!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Вы получите свои открытки через 1–2 недели.",
	"postcard_success_2": "Спасибо, что помогаете ускорить принятие Биткоина, отправляя эти открытки знакомым!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Вы получите свои вывески через 1–2 недели. Пока вы ждёте, подумайте о хороших местах для размещения вывесок!",
	"sign_success_3": "Хотите посмотреть, где другие люди размещают свои вывески?",
	"signs_share_header": "ПОДЕЛИТЕСЬ СВОИМИ МЕСТАМИ ДЛЯ ВЫВЕСОК",
	"signs_share_c1": "Поделитесь фотографией места, где вы разместили вывеску, с нами в Nostr, и мы отправим вам сатоши! Сатоши — это доли биткоина.",
	"signs_btn_share_on_nostr": "ПОДЕЛИТЬСЯ В NOSTR",
	"signs_btn_what_is_nostr": "ЧТО ТАКОЕ NOSTR?"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Вырвись из Матрицы с Nostr",
	"nostr_header": "ВЫРВИСЬ ИЗ МАТРИЦЫ С NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Что такое Nostr?",
	"what_is_nostr_header": "ЧТО ТАКОЕ NOSTR?"
});

console.log('\nDone! Simple files created for Russian (ru).');

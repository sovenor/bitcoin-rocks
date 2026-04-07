/**
 * Creates Bengali (bn) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'bn';
const today = '2026-04-06';

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
	"404_title": "৪০৪ ত্রুটি | পৃষ্ঠা পাওয়া যায়নি",
	"404_message": "এই ভাঙা পৃষ্ঠাটি মোটেও ভালো না",
	"404_home": "হোম পেজে ফিরে যান"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "bitcoin.rocks সম্পর্কে — ২০২২ থেকে Bitcoin শিক্ষা",
	"about_description": "bitcoin.rocks একটি বিনামূল্যে, ওপেন-সোর্স Bitcoin শিক্ষামূলক ওয়েবসাইট যা ২০২২ সালে প্রতিষ্ঠিত হয়েছিল। আমাদের লক্ষ্য হলো শিক্ষার মাধ্যমে Bitcoin গ্রহণকে ত্বরান্বিত করা।",
	"about_header": "আমাদের সম্পর্কে",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "আমাদের লক্ষ্য",
	"about_mission_1": "bitcoin.rocks ২০২২ সালে একটি সহজ লক্ষ্য নিয়ে প্রতিষ্ঠিত হয়েছিল: শিক্ষার মাধ্যমে Bitcoin গ্রহণকে ত্বরান্বিত করা।",
	"about_mission_2": "আমরা Bitcoin সম্পর্কে কৌতূহলী কারো সাথে শেয়ার করার প্রথম লিংক হিসেবে বিদ্যমান। একটি বন্ধুত্বপূর্ণ, সহজলভ্য শুরুর পয়েন্ট যা ব্যাখ্যা করে কিভাবে Bitcoin একটি উন্নত বিশ্ব গড়ে তুলছে।",
	"about_mission_3": "অনেক মানুষ Bitcoin সম্পর্কে ভুল বোঝে বা তাদের কখনো সঠিকভাবে এর পরিচয় দেওয়া হয়নি। আমরা বিনামূল্যে, উচ্চ-মানের শিক্ষামূলক বিষয়বস্তু প্রদান করে এটি পরিবর্তন করতে চাই যা যে কেউ বুঝতে পারে।",
	"about_what_we_do_header": "আমরা কী করি",
	"about_what_we_do_1": "আমরা Bitcoin নবাগতদের জন্য বিনামূল্যে শিক্ষামূলক বিষয়বস্তু তৈরি করি। আমাদের ওয়েবসাইট মুদ্রাস্ফীতি, স্ব-হেফাজত, ওয়ালেট, লাইটনিং নেটওয়ার্ক, এবং Bitcoin কিভাবে অন্যান্য সম্পদ ও পেমেন্ট সিস্টেমের সাথে তুলনা করে এসব বিষয় কভার করে।",
	"about_what_we_do_2a": "আমরা ",
	"about_what_we_do_2b": "বিনামূল্যে Bitcoin স্টিকার",
	"about_what_we_do_2c": " আপনার দরজায় পাঠাই যাতে আপনি আপনার সম্প্রদায়ে Bitcoin সচেতনতা ছড়াতে সাহায্য করতে পারেন। প্রতি মাসে শত শত মানুষ এই স্টিকারের QR কোড স্ক্যান করে Bitcoin সম্পর্কে শেখে।",
	"about_what_we_do_3a": "আমরা ",
	"about_what_we_do_3b": "প্রিন্টযোগ্য ফ্লায়ার",
	"about_what_we_do_3c": " এবং ",
	"about_what_we_do_3d": "ব্যবসায়িক কিট",
	"about_what_we_do_3e": " প্রদান করি যারা স্থানীয় ব্যবসাকে Bitcoin পেমেন্ট গ্রহণে উৎসাহিত করতে চান।",
	"about_what_we_do_4": "আমাদের সমস্ত বিষয়বস্তু ধরে নেয় যে পাঠকের Bitcoin সম্পর্কে শূন্য পূর্ব জ্ঞান আছে। আপনি Bitcoin-এ নতুন হোন বা শেয়ার করার জন্য সম্পদ খুঁজছেন এমন অভিজ্ঞ Bitcoiner হোন, bitcoin.rocks আপনার জন্য।",
	"about_editorial_header": "আমাদের সম্পাদকীয় দৃষ্টিভঙ্গি",
	"about_editorial_1": "bitcoin.rocks-এর প্রতিটি বিষয়বস্তু যত্নসহকারে কিউরেট এবং তথ্য-যাচাই করা হয়। যখন আমরা তথ্য বা পরিসংখ্যান উদ্ধৃত করি, আমরা সূত্র প্রদান করি যাতে আপনি নিজে তথ্য যাচাই করতে পারেন।",
	"about_editorial_2": "আমরা TIME ম্যাগাজিন, Forbes, MIT Technology Review, Lyn Alden এবং আরও অনেক বিশ্বস্ত সূত্রের লিংক দিই। আমরা বিশ্বাস করি যে তথ্য স্পষ্টভাবে উপস্থাপন করা হলে Bitcoin নিজেই কথা বলে।",
	"about_editorial_3": "আমাদের বিষয়বস্তু নিয়মিত পর্যালোচনা এবং আপডেট করা হয় নির্ভুলতা এবং সতেজতা নিশ্চিত করতে। সমস্ত বিষয়বস্তু বিশেষভাবে Bitcoin শিক্ষায় কেন্দ্রীভূত।",
	"about_open_source_header": "ওপেন সোর্স",
	"about_open_source_1a": "bitcoin.rocks MIT লাইসেন্সের অধীনে একটি বিনামূল্যে, ওপেন-সোর্স প্রকল্প। আমাদের সম্পূর্ণ কোডবেস সর্বজনীনভাবে উপলব্ধ ",
	"about_open_source_1b": "GitHub-এ",
	"about_open_source_1c": "।",
	"about_open_source_2": "যে কেউ bitcoin.rocks-এ অবদান রাখতে পারে। আমরা বিশেষভাবে অনুবাদকদের স্বাগত জানাই যারা আমাদের বিষয়বস্তু বিশ্বজুড়ে মানুষের কাছে পৌঁছানোর জন্য সাহায্য করে।",
	"about_open_source_3": "আমাদের স্বেচ্ছাসেবী অনুবাদকদের সম্প্রদায়ের কল্যাণে, bitcoin.rocks বর্তমানে ৩৫টি ভাষায় উপলব্ধ এবং বাড়ছে।",
	"about_open_source_contribute": "কিভাবে অবদান রাখতে হয় জানুন।",
	"about_contact_header": "যোগাযোগ করুন",
	"about_contact_1": "আমরা আপনার কাছ থেকে শুনতে চাই। আপনার কোনো প্রশ্ন, পরামর্শ, বা শুধু হ্যালো বলতে চাইলে, যেকোনো সময় যোগাযোগ করুন।",
	"about_contact_email": "ইমেইল:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "আপনার স্টিকার ২ থেকে ৪ সপ্তাহের মধ্যে পৌঁছাবে। অপেক্ষা করার সময়, আপনার স্টিকার লাগানোর জন্য ভালো জায়গা ভাবুন!",
	"sticker_success_2": "ভালো স্টিকার স্পট হলো:",
	"sticker_success_list_1": "জনসমক্ষে যেখানে মানুষ দেখতে পাবে",
	"sticker_success_list_2": "এমন জায়গায় যেখান থেকে দ্রুত সরানো হবে না (স্টিকারগুলো কোনো স্থায়ী ক্ষতি করে না)",
	"sticker_success_list_3": "এমন পৃষ্ঠতলে যেখানে সহজে লাগবে (ধাতু, প্লাস্টিক, কাচ)",
	"sticker_success_list_4": "ব্যক্তিগত সম্পত্তি, সাইনবোর্ড, ATM, বা গ্যাস পাম্পে নয়",
	"sticker_success_3": "অন্যরা তাদের স্টিকার কোথায় লাগাচ্ছে দেখতে চান?",
	"sticker_success_flyers_bar_new": "নতুন!",
	"sticker_success_flyers_bar_cta": "Bitcoin ফ্লায়ার প্রিন্ট করুন ও পোস্ট করুন →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "আমরা সফলভাবে আপনার অনুরোধ পেয়েছি।",
	"sticker_language_success_2": "আমরা নতুন ফাইল ব্যাচে প্রকাশ করি, তাই এই ফাইলগুলো ডাউনলোডের জন্য উপলব্ধ হতে কয়েক সপ্তাহ সময় লাগতে পারে। শীঘ্রই আবার দেখুন!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "আপনার পোস্টকার্ড ১ থেকে ২ সপ্তাহের মধ্যে পৌঁছাবে।",
	"postcard_success_2": "আপনার পরিচিত কাউকে এই পোস্টকার্ড পাঠিয়ে Bitcoin গ্রহণ ত্বরান্বিত করতে সাহায্য করার জন্য ধন্যবাদ!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "আপনার সাইনবোর্ড ১ থেকে ২ সপ্তাহের মধ্যে পৌঁছাবে। অপেক্ষা করার সময়, আপনার সাইনবোর্ড লাগানোর জন্য ভালো জায়গা ভাবুন!",
	"sign_success_3": "অন্যরা তাদের সাইনবোর্ড কোথায় লাগাচ্ছে দেখতে চান?",
	"signs_share_header": "আপনার সাইন স্পট শেয়ার করুন",
	"signs_share_c1": "Nostr-এ আপনার সাইন স্পটের ছবি শেয়ার করুন এবং আমরা আপনাকে স্যাট পাঠাবো! স্যাট হলো bitcoin-এর ভগ্নাংশ।",
	"signs_btn_share_on_nostr": "NOSTR-এ শেয়ার করুন",
	"signs_btn_what_is_nostr": "NOSTR কী?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "চক্রবৃদ্ধি মুদ্রাস্ফীতি ক্যালকুলেটর",
	"cic_description": "মুদ্রাস্ফীতির সাথে তাল মিলিয়ে চলতে আপনার বেতন কতটা বাড়াতে হবে তা জানতে এই চক্রবৃদ্ধি মুদ্রাস্ফীতি ক্যালকুলেটর ব্যবহার করুন।",
	"what_can_i_do_about": "মুদ্রাস্ফীতি সম্পর্কে",
	"what_can_i_do_about_2": "আমি কী করতে পারি?",
	"cic_inflation_cta": "Bitcoin দিয়ে মুদ্রাস্ফীতি থেকে বেরিয়ে আসুন"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Nostr দিয়ে ম্যাট্রিক্স থেকে বেরিয়ে আসুন",
	"nostr_header": "NOSTR দিয়ে ম্যাট্রিক্স থেকে বেরিয়ে আসুন"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr কী?",
	"what_is_nostr_header": "NOSTR কী?"
});

console.log('\nDone creating simple files for Bengali (bn).');

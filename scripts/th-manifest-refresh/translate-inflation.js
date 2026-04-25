#!/usr/bin/env node
/**
 * Thai (th) manifest refresh — inflation namespace translator.
 *
 * Fills in `targetTranslation` for the 368 entries in the
 * `inflation` namespace. The namespace contains:
 *   - 13 currency templates × 22 keys (286)
 *   - 53 stat keys
 *   - 9 freedom card keys
 *   - 8 story card keys
 *   - misc page-level keys + 7 source links.
 *
 * Idempotent: re-running re-fills any matching entries.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT = path.resolve(__dirname, "..", "i18n-audit", "reports", "th.json");

// Per-currency Thai labels. All formal/written register.
const CURRENCY = {
	usd: {
		// "If you save in [X], you've probably noticed..." opener
		ifSavePhrase: "หากคุณออมเงินเป็นดอลลาร์สหรัฐ",
		// Plural noun used in "It takes more X to buy..."
		nounPlural: "ดอลลาร์",
		// "more X" in compact form for "You need more X to maintain quality of life"
		nounMore: "ดอลลาร์",
		// Bank account currency name
		nounAccount: "ดอลลาร์",
		// SHOUTY title — uppercase English region; rendered ALL CAPS in Thai often becomes a normal Thai phrase
		label: "ดอลลาร์สหรัฐ",
		existenceTitle: "ดอลลาร์ที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลกลางสหรัฐ",
	},
	eur: {
		ifSavePhrase: "หากคุณออมเงินเป็นยูโร",
		nounPlural: "ยูโร",
		nounMore: "ยูโร",
		nounAccount: "ยูโร",
		label: "ยูโร",
		existenceTitle: "ยูโรที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของยูโรโซน",
	},
	gbp: {
		ifSavePhrase: "หากคุณออมเงินเป็นปอนด์อังกฤษ",
		nounPlural: "ปอนด์",
		nounMore: "ปอนด์",
		nounAccount: "ปอนด์",
		label: "ปอนด์อังกฤษ",
		existenceTitle: "ปอนด์อังกฤษที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของสหราชอาณาจักร",
	},
	cad: {
		ifSavePhrase: "หากคุณออมเงินเป็นดอลลาร์แคนาดา",
		nounPlural: "ดอลลาร์",
		nounMore: "ดอลลาร์",
		nounAccount: "ดอลลาร์",
		label: "ดอลลาร์แคนาดา",
		existenceTitle: "ดอลลาร์แคนาดาที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลแคนาดา",
	},
	aud: {
		ifSavePhrase: "หากคุณออมเงินเป็นดอลลาร์ออสเตรเลีย",
		nounPlural: "ดอลลาร์",
		nounMore: "ดอลลาร์",
		nounAccount: "ดอลลาร์",
		label: "ดอลลาร์ออสเตรเลีย",
		existenceTitle: "ดอลลาร์ออสเตรเลียที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลออสเตรเลีย",
	},
	nzd: {
		ifSavePhrase: "หากคุณออมเงินเป็นดอลลาร์นิวซีแลนด์",
		nounPlural: "ดอลลาร์",
		nounMore: "ดอลลาร์",
		nounAccount: "ดอลลาร์",
		label: "ดอลลาร์นิวซีแลนด์",
		existenceTitle: "ดอลลาร์นิวซีแลนด์ที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลนิวซีแลนด์",
	},
	jpy: {
		ifSavePhrase: "หากคุณออมเงินเป็นเยนญี่ปุ่น",
		nounPlural: "เยน",
		nounMore: "เยน",
		nounAccount: "เยน",
		label: "เยนญี่ปุ่น",
		existenceTitle: "เยนญี่ปุ่นที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลญี่ปุ่น",
	},
	inr: {
		ifSavePhrase: "หากคุณออมเงินเป็นรูปีอินเดีย",
		nounPlural: "รูปี",
		nounMore: "รูปี",
		nounAccount: "รูปี",
		label: "รูปีอินเดีย",
		existenceTitle: "รูปีอินเดียที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลอินเดีย",
	},
	mxn: {
		ifSavePhrase: "หากคุณออมเงินเป็นเปโซเม็กซิโก",
		nounPlural: "เปโซ",
		nounMore: "เปโซ",
		nounAccount: "เปโซ",
		label: "เปโซเม็กซิโก",
		existenceTitle: "เปโซเม็กซิโกที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลเม็กซิโก",
	},
	brl: {
		ifSavePhrase: "หากคุณออมเงินเป็นเรียลบราซิล",
		nounPlural: "เรียล",
		nounMore: "เรียล",
		nounAccount: "เรียล",
		label: "เรียลบราซิล",
		existenceTitle: "เรียลบราซิลที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลบราซิล",
	},
	php: {
		ifSavePhrase: "หากคุณออมเงินเป็นเปโซฟิลิปปินส์",
		nounPlural: "เปโซ",
		nounMore: "เปโซ",
		nounAccount: "เปโซ",
		label: "เปโซฟิลิปปินส์",
		existenceTitle: "เปโซฟิลิปปินส์ที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลฟิลิปปินส์",
	},
	thb: {
		ifSavePhrase: "หากคุณออมเงินเป็นบาทไทย",
		nounPlural: "บาท",
		nounMore: "บาท",
		nounAccount: "บาท",
		label: "บาทไทย",
		existenceTitle: "บาทไทยที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลไทย",
	},
	ils: {
		ifSavePhrase: "หากคุณออมเงินเป็นเชเกลอิสราเอล",
		nounPlural: "เชเกล",
		nounMore: "เชเกล",
		nounAccount: "เชเกล",
		label: "เชเกลอิสราเอล",
		existenceTitle: "เชเกลอิสราเอลที่มีอยู่ในระบบ",
		debtTitle: "หนี้สาธารณะของรัฐบาลอิสราเอล",
	},
};

// Builds the 22 per-currency translations for code `c`.
function currencyBlock(c) {
	const cur = CURRENCY[c];
	return {
		[`inflation_${c}_intro_1`]: `${cur.ifSavePhrase} คุณคงสังเกตเห็นว่ากำลังซื้อของเงินลดลงทุกปี ต้องใช้${cur.nounPlural}มากขึ้นเพื่อซื้ออาหารในปริมาณเท่าเดิม คุณต้องการ${cur.nounMore}เพิ่มขึ้นเพื่อรักษาคุณภาพชีวิตของคุณไว้`,
		[`inflation_${c}_intro_2`]: "แต่มันไม่จำเป็นต้องเป็นเช่นนี้",
		[`inflation_${c}_intro_highlight`]: "คนที่ออมเงินเป็น Bitcoin ในช่วง 4 ปีที่ผ่านมาเห็นค่าครองชีพถูกลง",
		[`inflation_${c}_proof_h2`]: "นี่คือหลักฐาน: เงินของคุณกำลังเสียมูลค่า",
		[`inflation_${c}_proof_p1`]: `${cur.nounPlural}ในบัญชีธนาคารของคุณซื้อของได้น้อยลงทุกปี เพราะไม่มีขีดจำกัดตายตัวว่าจะสามารถสร้าง${cur.nounPlural}ได้กี่หน่วย`,
		[`inflation_${c}_proof_p2`]: `อุปทานที่ไม่จำกัดนี้คือสาเหตุรากเหง้าของเงินเฟ้อ ในช่วงไม่กี่ปีที่ผ่านมา จำนวน${cur.nounPlural}ทั้งหมดที่มีอยู่ได้เพิ่มขึ้นอย่างมาก`,
		[`inflation_${c}_proof_p3`]: "เมื่อมีการสร้างเงินขึ้นมาจากความว่างเปล่ามากขึ้น ราคาของทุกสิ่งก็สูงขึ้น รวมถึงวัตถุดิบที่บริษัทซื้อมาเพื่อผลิตสินค้า ซึ่งหมายความว่าราคาที่คุณจ่ายสุดท้ายก็ต้องสูงขึ้นด้วย",
		[`inflation_${c}_proof_p4`]: "และเมื่อรัฐบาลยังคงเพิ่มหนี้ของตน ก็จะมีการพิมพ์เงินมากขึ้นเพราะมีคนยอมให้กู้ยืมน้อยลง",
		[`inflation_${c}_proof_p5_before`]: "หากคุณกู้ไม่ได้ คุณก็จะใช้จ่ายไม่ได้ แต่หากรัฐบาล",
		[`inflation_${c}_proof_p5_link`]: "กู้ไม่ได้",
		[`inflation_${c}_proof_p5_after`]: " พวกเขาก็จะพิมพ์เงินขึ้นมาเอง",
		[`inflation_${c}_proof_p6`]: "หนี้รัฐบาลที่มากขึ้นหมายถึงการพิมพ์เงินที่มากขึ้น การพิมพ์เงินที่มากขึ้นหมายถึงเงินเฟ้อที่มากขึ้น และยังไม่มีทีท่าว่าจะหยุด",
		[`inflation_${c}_btc_h2`]: "Bitcoin ไม่มีเงินเฟ้อ",
		[`inflation_${c}_btc_p1`]: "เงินเฟ้อหมายถึงเงินของคุณซื้อของได้น้อยลงเมื่อเวลาผ่านไป Bitcoin เป็นเงินที่ดีกว่าเพราะไม่มีเงินเฟ้อ",
		[`inflation_${c}_btc_p2_before`]: `${cur.nounPlural}มีอุปทานไม่จำกัด ซึ่งหมายความว่าสามารถพิมพ์เพิ่มได้ตลอดเวลา`,
		[`inflation_${c}_btc_p2_link`]: "Bitcoin มีจำกัด",
		[`inflation_${c}_btc_p2_after`]: " เพราะมีอุปทานสูงสุดที่ 21 ล้าน Bitcoin ไม่มีใครสามารถพิมพ์ Bitcoin เพิ่มได้",
		[`inflation_${c}_btc_p3`]: `ในอดีตที่ผ่านมา Bitcoin ได้รับกำลังซื้อเพิ่มขึ้นเมื่อเวลาผ่านไป ในขณะที่${cur.nounPlural}สูญเสียกำลังซื้อ หลายคนใช้ Bitcoin เป็นบัญชีออมทรัพย์ระยะยาว: เงินที่พวกเขาสามารถปล่อยทิ้งไว้และให้เติบโตเป็นเวลาหลายปี`,
		[`inflation_${c}_btc_p4`]: `คุณอยากจะออมเป็น${cur.nounPlural}ที่ซื้อของได้น้อยลงเมื่อเวลาผ่านไป หรืออยากออมเป็น Bitcoin ที่ในอดีตซื้อของได้มากขึ้นเมื่อเวลาผ่านไป?`,
		[`inflation_${c}_freedom_h2`]: "Bitcoin ยังเป็นเครื่องมือเพื่อเสรีภาพ",
		[`inflation_${c}_freedom_p1`]: "เครือข่าย Bitcoin ไม่มีเจ้าของ ไม่มีรัฐบาลหรือบริษัทใดควบคุม ถูกออกแบบมาเพื่อปกป้องเสรีภาพและเงินของคุณ",
		[`inflation_${c}_freedom_p2`]: "ผู้คนทั่วโลกใช้ Bitcoin เพื่อปกป้องเสรีภาพของตนเองอยู่แล้ว แม้ในยามที่รัฐบาลของพวกเขาเองปฏิเสธที่จะช่วยเหลือหรือพยายามขัดขวางก็ตาม",
	};
}

// Build all per-currency entries
const T = {};
for (const c of Object.keys(CURRENCY)) {
	Object.assign(T, currencyBlock(c));
}

// inflation_stat_* — labels + titles for stat blocks
Object.assign(T, {
	// Bitcoin stat block (shared across all currencies)
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 ล้าน",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "ตายตัวตลอดไป",
	inflation_stat_bitcoin_source: "ที่มา: Bitcoin Whitepaper →",
	inflation_stat_btc_detail_4yr: "กำลังซื้อที่ได้รับเพิ่มในช่วง 4 ปี",
	inflation_stat_btc_source_bpr: "ที่มา: Bitcoin Price Report →",
	inflation_stat_comparison_today: "วันนี้",
	inflation_stat_currency_counting: "และยังคงเพิ่มขึ้น...",
	inflation_stat_currency_detail_4yr_lost: "กำลังซื้อที่สูญเสียไปในช่วง 4 ปี",
	inflation_stat_currency_source_cpi: "ที่มา: FRED CPI →",
	inflation_stat_currency_source_debt: "ที่มา: FRED Government Debt →",
	inflation_stat_currency_source_m1: "ที่มา: FRED Narrow Money Supply →",
	inflation_stat_currency_source_m1_short: "ที่มา: FRED →",
	// Per-currency stat labels + titles
	inflation_stat_usd_label: "ดอลลาร์สหรัฐ",
	inflation_stat_usd_existence_title: "ดอลลาร์ที่มีอยู่ในระบบ",
	inflation_stat_usd_debt_title: "หนี้สาธารณะของรัฐบาลกลางสหรัฐ",
	inflation_stat_eur_label: "ยูโร",
	inflation_stat_eur_existence_title: "ยูโรที่มีอยู่ในระบบ",
	inflation_stat_eur_debt_title: "หนี้สาธารณะของยูโรโซน",
	inflation_stat_gbp_label: "ปอนด์อังกฤษ",
	inflation_stat_gbp_existence_title: "ปอนด์อังกฤษที่มีอยู่ในระบบ",
	inflation_stat_gbp_debt_title: "หนี้สาธารณะของสหราชอาณาจักร",
	inflation_stat_cad_label: "ดอลลาร์แคนาดา",
	inflation_stat_cad_existence_title: "ดอลลาร์แคนาดาที่มีอยู่ในระบบ",
	inflation_stat_cad_debt_title: "หนี้สาธารณะของรัฐบาลแคนาดา",
	inflation_stat_aud_label: "ดอลลาร์ออสเตรเลีย",
	inflation_stat_aud_existence_title: "ดอลลาร์ออสเตรเลียที่มีอยู่ในระบบ",
	inflation_stat_aud_debt_title: "หนี้สาธารณะของรัฐบาลออสเตรเลีย",
	inflation_stat_nzd_label: "ดอลลาร์นิวซีแลนด์",
	inflation_stat_nzd_existence_title: "ดอลลาร์นิวซีแลนด์ที่มีอยู่ในระบบ",
	inflation_stat_nzd_debt_title: "หนี้สาธารณะของรัฐบาลนิวซีแลนด์",
	inflation_stat_jpy_label: "เยนญี่ปุ่น",
	inflation_stat_jpy_existence_title: "เยนญี่ปุ่นที่มีอยู่ในระบบ",
	inflation_stat_jpy_debt_title: "หนี้สาธารณะของรัฐบาลญี่ปุ่น",
	inflation_stat_inr_label: "รูปีอินเดีย",
	inflation_stat_inr_existence_title: "รูปีอินเดียที่มีอยู่ในระบบ",
	inflation_stat_inr_debt_title: "หนี้สาธารณะของรัฐบาลอินเดีย",
	inflation_stat_mxn_label: "เปโซเม็กซิโก",
	inflation_stat_mxn_existence_title: "เปโซเม็กซิโกที่มีอยู่ในระบบ",
	inflation_stat_mxn_debt_title: "หนี้สาธารณะของรัฐบาลเม็กซิโก",
	inflation_stat_brl_label: "เรียลบราซิล",
	inflation_stat_brl_existence_title: "เรียลบราซิลที่มีอยู่ในระบบ",
	inflation_stat_brl_debt_title: "หนี้สาธารณะของรัฐบาลบราซิล",
	inflation_stat_php_label: "เปโซฟิลิปปินส์",
	inflation_stat_php_existence_title: "เปโซฟิลิปปินส์ที่มีอยู่ในระบบ",
	inflation_stat_php_debt_title: "หนี้สาธารณะของรัฐบาลฟิลิปปินส์",
	inflation_stat_thb_label: "บาทไทย",
	inflation_stat_thb_existence_title: "บาทไทยที่มีอยู่ในระบบ",
	inflation_stat_thb_debt_title: "หนี้สาธารณะของรัฐบาลไทย",
	inflation_stat_ils_label: "เชเกลอิสราเอล",
	inflation_stat_ils_existence_title: "เชเกลอิสราเอลที่มีอยู่ในระบบ",
	inflation_stat_ils_debt_title: "หนี้สาธารณะของรัฐบาลอิสราเอล",
});

// Freedom card block
Object.assign(T, {
	inflation_freedom_decentralized_title: "กระจายศูนย์",
	inflation_freedom_decentralized_desc: "ไม่มีหน่วยงานใดควบคุม Bitcoin ไม่มีรัฐบาล ไม่มีบริษัท",
	inflation_freedom_permissionless_title: "ไม่ต้องขออนุญาต",
	inflation_freedom_permissionless_desc: "ใครก็ได้ ที่ไหนก็ได้ สามารถเข้าร่วมเครือข่ายได้ ไม่มีใครสามารถหยุดคุณได้",
	inflation_freedom_scarce_title: "หายาก",
	inflation_freedom_scarce_desc: "Bitcoin จะมีเพียง 21 ล้านเหรียญตลอดกาล ไม่มีใครสามารถพิมพ์เพิ่มได้",
	inflation_freedom_sovereign_title: "อธิปไตย",
	inflation_freedom_sovereign_desc: "ระบบใหม่ที่เป็นอิสระจากนักการเมืองและคำสัญญาที่ผิดสัญญา",
	inflation_freedom_learn_more: "เรียนรู้เพิ่มเติม →",
});

// Story cards
Object.assign(T, {
	inflation_story_canada_title: "แคนาดา",
	inflation_story_canada_desc: "คนงานใช้ Bitcoin เพื่อเข้าถึงเงินหลังจากบัญชีธนาคารของพวกเขาถูกอายัด",
	inflation_story_nigeria_title: "ไนจีเรีย",
	inflation_story_nigeria_desc: "ผู้ประท้วงใช้ Bitcoin เพื่อระดมทุนสนับสนุนการเคลื่อนไหวหลังจากธนาคารตัดพวกเขาออก",
	inflation_story_pennsylvania_title: "เพนซิลเวเนีย",
	inflation_story_pennsylvania_desc: "การขุด Bitcoin ช่วยทำความสะอาดของเสียจากถ่านหินที่รัฐบาลปฏิเสธจะจัดการ",
	inflation_story_texas_title: "เท็กซัส",
	inflation_story_texas_desc: "การขุด Bitcoin ช่วยให้ไฟยังคงใช้งานได้ในช่วงพายุครั้งใหญ่",
});

// Misc page-level + sources
Object.assign(T, {
	inflation_choose: "เลือกสกุลเงินของคุณเพื่อดูหลักฐาน",
	inflation_choose_another: "← เลือกสกุลเงินอื่น",
	inflation_h1_orange: "Bitcoin ไม่มีเงินเฟ้อ แต่เงินของคุณมี",
	inflation_sticker_learn: "เรียนรู้ว่า Bitcoin ช่วยได้อย่างไร",
	inflation_sticker_lets_find_out: "มาดูกัน",
	sources_bitcoin_price_report_4yr: "Bitcoin Price Report — กราฟผลการดำเนินงาน 4 ปี (ทุกสกุลเงิน)",
	sources_bitcoin_source_code: "Bitcoin Source Code — ขีดจำกัดอุปทาน 21 ล้าน",
	sources_canadian_trucker: "การประท้วงคนขับรถบรรทุกแคนาดา — Bitcoin ใช้เพื่อหลีกเลี่ยงบัญชีธนาคารที่ถูกอายัด (YouTube)",
	sources_mempool_space: "Mempool.space — ข้อมูลอุปทานและการขุด Bitcoin",
	sources_nigeria_endsars: "Quartz Africa — Bitcoin ขับเคลื่อนการประท้วง EndSARS ของไนจีเรียอย่างไร",
	sources_pennsylvania_mining: "การขุด Bitcoin ในเพนซิลเวเนียช่วยกู้คืนก๊าซมีเทนของเสีย (YouTube)",
	sources_texas_mining: "การขุด Bitcoin ในเท็กซัสและโครงข่ายไฟฟ้า (YouTube)",
});

// Apply
const report = JSON.parse(fs.readFileSync(REPORT, "utf-8"));
let filled = 0;
let skipped = 0;
for (const e of report.entries) {
	if (e.namespace !== "inflation") continue;
	if (T[e.key] !== undefined) {
		e.targetTranslation = T[e.key];
		filled++;
	} else {
		skipped++;
	}
}
fs.writeFileSync(REPORT, JSON.stringify(report, null, "\t") + "\n");
console.log(`inflation: filled=${filled} unmapped=${skipped}`);

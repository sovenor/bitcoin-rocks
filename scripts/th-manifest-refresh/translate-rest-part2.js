#!/usr/bin/env node
/**
 * Thai (th) manifest refresh — part 2 of remaining content.
 *
 * Covers: bitcoin-vs-* (banks, bonds, cash, cbdc, crypto, fine-art, gold,
 * real-estate, stocks, visa) and business/* (accounting, faq, index, maps,
 * maps-success, sticker-files/english/index, sticker-language-success,
 * sticker-success, stickers, wallets, why).
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT = path.resolve(__dirname, "..", "i18n-audit", "reports", "th.json");

// hero_title pattern reused across all comparison pages.
function heroTitle(asset) {
	return `ความแตกต่างระหว่าง <span class="orange">Bitcoin</span> และ <span class="asset">${asset}</span>`;
}

const T = {
	// bitcoin-vs-banks (12)
	"bitcoin-vs-banks::point_1_summary_1": "ใครก็ตามที่มีอินเทอร์เน็ตสามารถใช้ Bitcoin ได้ — เป็นระบบ",
	"bitcoin-vs-banks::point_1_summary_2": "ไม่ต้องขออนุญาต",
	"bitcoin-vs-banks::point_1_summary_3": "ธนาคารสามารถปฏิเสธ อายัด หรือปิดบัญชีตามนโยบายหรือกฎของรัฐบาลได้",
	"bitcoin-vs-banks::point_2_summary_1": "เครือข่าย Bitcoin ทำงาน 24/7/365 ตลอดปี ไม่มีช่วงปิดบำรุงรักษาหรือวันหยุด ธนาคารมีเวลาทำการจำกัด ปิดวันหยุดสุดสัปดาห์ และมีช่วงปิดทำการ",
	"bitcoin-vs-banks::point_3_summary_1": "ธุรกรรม Bitcoin ทุกรายการอยู่บนบล็อกเชนสาธารณะที่ใครก็ตรวจสอบได้ ธนาคารใช้บัญชีแยกประเภทส่วนตัวที่ลูกค้าไม่สามารถยืนยันได้อย่างอิสระ",
	"bitcoin-vs-banks::point_4_summary_1": "ด้วย Bitcoin คุณถือกุญแจส่วนตัวของคุณเอง — ดูคู่มือ",
	"bitcoin-vs-banks::point_4_summary_2": "กระเป๋าเงิน Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3": "ของเรา ธนาคารถือเงินของคุณและสามารถอายัด จำกัด หรือควบคุมได้ตลอดเวลา",
	"bitcoin-vs-banks::point_5_summary_1": "ค่าธรรมเนียม Bitcoin โปร่งใสและคาดเดาได้ ธนาคารสะสมค่าธรรมเนียมแฝง เช่น ค่ารักษาบัญชี ค่าโอเวอร์ดราฟต์ ค่าโอนเงิน และค่า ATM ตลอดเวลา",
	"bitcoin-vs-banks::point_6_summary_1": "Bitcoin ให้คุณใช้ได้เพียงเท่าที่คุณเป็นเจ้าของจริง ธนาคารอนุญาตให้โอเวอร์ดราฟต์ แล้วเรียกเก็บค่าปรับซ้อนๆ เป็นการตอบแทน",
	"bitcoin-vs-banks::point_7_summary_1": "เมื่อกระจายแล้ว ธุรกรรม Bitcoin ไม่สามารถหยุดหรือย้อนกลับได้ ธนาคารสามารถบล็อก อายัด หรือย้อนกลับธุรกรรมได้ตามนโยบายหรือคำสั่งของรัฐบาล",
	"bitcoin-vs-banks::hero_title": heroTitle("ธนาคาร"),

	// bitcoin-vs-bonds (19)
	"bitcoin-vs-bonds::point_1_summary_1": "พันธบัตรเป็นการลงทุน 'ปลอดความเสี่ยง' เฉพาะในนามเท่านั้น เงินเฟ้อ การเปลี่ยนแปลงอัตราดอกเบี้ย และความเสี่ยงผิดนัดชำระล้วนกัดกินผลตอบแทนที่แท้จริง",
	"bitcoin-vs-bonds::point_1_summary_2": "Bitcoin มีความผันผวนที่โปร่งใสแต่ไม่มีความเสี่ยงคู่สัญญาที่ซ่อนอยู่",
	"bitcoin-vs-bonds::point_2_summary_1": "เมื่อ",
	"bitcoin-vs-bonds::point_2_summary_2": "เงินเฟ้อ",
	"bitcoin-vs-bonds::point_2_summary_3": "แซงผลตอบแทนพันธบัตร ผู้ถือพันธบัตรจะสูญเสียกำลังซื้อที่แท้จริงทุกปี ขีดจำกัด 21 ล้านของ Bitcoin ไม่สามารถถูกพิมพ์เพิ่มได้",
	"bitcoin-vs-bonds::point_3_summary_1": "ตลาดพันธบัตรอาจหยุดชะงักในช่วงวิกฤต — Silicon Valley Bank ล่มส่วนหนึ่งเพราะติดถือพันธบัตรที่เสียมูลค่า ดูว่า",
	"bitcoin-vs-bonds::point_3_summary_2": "การแห่ถอนเงินจากธนาคาร",
	"bitcoin-vs-bonds::point_3_summary_3": "เกิดขึ้นได้อย่างไรและทำไม Bitcoin จึงหลีกเลี่ยงได้ Bitcoin ซื้อขายตลอด 24/7 ทั่วโลกโดยไม่มีวิกฤตสภาพคล่อง",
	"bitcoin-vs-bonds::point_4_summary_1": "การประมูลพันธบัตรกระทรวงการคลังอาจล้มเหลวเมื่อมีผู้ซื้อไม่พอ — ดู",
	"bitcoin-vs-bonds::point_4_summary_2": "การประมูลที่อ่อนแอในปี 2022",
	"bitcoin-vs-bonds::point_4_summary_3": "ราคา Bitcoin ถูกค้นพบอย่างต่อเนื่องในตลาดเปิดโดยไม่มีการประมูลกลางที่อาจล้มเหลวได้",
	"bitcoin-vs-bonds::point_5_summary_1": "ผลตอบแทนพันธบัตรถูกกำหนดไว้ตอนซื้อ แม้เศรษฐกิจจะรุ่งเรืองหรือสกุลเงินจะล่ม ผลตอบแทนของคุณก็ยังคงเดิม",
	"bitcoin-vs-bonds::point_5_summary_2": "Bitcoin มีพื้นที่สำหรับการเพิ่มมูลค่าอย่างมีนัยสำคัญเมื่อการยอมรับเติบโตและอุปสงค์เผชิญกับอุปทานคงที่",
	"bitcoin-vs-bonds::point_6_summary_1": "พันธบัตรส่วนใหญ่ถือผ่านธนาคารหรือโบรกเกอร์ ซึ่งเพิ่มความเสี่ยงคู่สัญญา Bitcoin สามารถเก็บกุญแจเองด้วย",
	"bitcoin-vs-bonds::point_6_summary_2": "กระเป๋าเงิน",
	"bitcoin-vs-bonds::point_7_summary_1": "พันธบัตรขึ้นอยู่กับรัฐบาลที่จะชำระคืนทั้งหมด หากรัฐบาลผิดนัดชำระหรือทำเงินเฟ้อจนล้างหนี้ ผู้ถือพันธบัตรจะขาดทุน",
	"bitcoin-vs-bonds::point_7_summary_2": "Bitcoin ทำงานอย่างเป็นอิสระจากรัฐบาลหรืออำนาจทางการเมืองใดๆ",
	"bitcoin-vs-bonds::hero_title": heroTitle("พันธบัตร"),
	"bitcoin-vs-bonds::point_6_summary_3": " — กำจัดความเสี่ยงนั้นไปอย่างสิ้นเชิง",

	// bitcoin-vs-cash (12)
	"bitcoin-vs-cash::point_1_summary_1": "Bitcoin เคลื่อนย้ายผ่านอินเทอร์เน็ตไปทั่วโลกได้ในไม่กี่นาที เงินสดต้องการการมีอยู่จริงทางกายภาพหรือผู้ส่งที่เชื่อถือได้ — คุณส่งธนบัตร $20 ทางอีเมลไม่ได้",
	"bitcoin-vs-cash::point_2_summary_1": "Bitcoin ทำงานเหมือนกันทุกที่ เงินสดถูกจำกัดด้วยภูมิศาสตร์ อัตราแลกเปลี่ยน และการยอมรับในท้องถิ่น",
	"bitcoin-vs-cash::point_3_summary_1": "รัฐบาลสามารถยกเลิกเงินสดในชั่วข้ามคืนได้ — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">อินเดีย</a> ทำเช่นนั้นในปี 2016 แม้ไม่มีการยกเลิกธนบัตร เงินสดก็เสียมูลค่าจาก",
	"bitcoin-vs-cash::point_3_summary_2": "เงินเฟ้อ",
	"bitcoin-vs-cash::point_3_summary_3": "Bitcoin ไม่สามารถถูกยกเลิกโดยรัฐบาลหรืออำนาจใดๆ ได้",
	"bitcoin-vs-cash::point_4_summary_1": "เงินสดสามารถปลอมแปลงได้ บางครั้งก็แนบเนียน Bitcoin ใช้การเข้ารหัสที่ทำให้การปลอมแปลงเป็นไปไม่ได้ทางคณิตศาสตร์",
	"bitcoin-vs-cash::point_5_summary_1": "Bitcoin ไม่มีอำนาจกลาง เงินสดออกโดยรัฐบาลที่สามารถพิมพ์เพิ่ม เปลี่ยนการออกแบบ หรือยกเลิกธนบัตรได้ตามใจ",
	"bitcoin-vs-cash::point_6_summary_1": "เงินสดเสี่ยงต่อการขโมย ไฟไหม้ การสูญหาย และการยึด Bitcoin สามารถ",
	"bitcoin-vs-cash::point_6_summary_2": "เก็บกุญแจเอง",
	"bitcoin-vs-cash::point_6_summary_3": "อย่างปลอดภัยบนโทรศัพท์หรืออุปกรณ์ฮาร์ดแวร์",
	"bitcoin-vs-cash::point_7_summary_1": "Bitcoin แบ่งย่อยได้ถึง 100 ล้าน sats ทำให้สามารถจ่ายเงินขนาดเล็กได้ทุกขนาด เงินสดมีหน่วยขั้นต่ำ — คุณแบ่งครึ่งเหรียญไม่ได้",
	"bitcoin-vs-cash::hero_title": heroTitle("เงินสด"),

	// bitcoin-vs-cbdc (16)
	"bitcoin-vs-cbdc::point_10_summary_1": "Bitcoin เป็นเครือข่ายคอมพิวเตอร์ที่ปลอดภัยที่สุดเท่าที่เคยสร้างมาและไม่เคยถูกแฮกเลย CBDC พึ่งพาธนาคารและรัฐบาลที่ถูกแฮกมาแล้วนับครั้งไม่ถ้วน",
	"bitcoin-vs-cbdc::point_1_summary_1": "ไม่มีใครหยุดคุณจากการทำธุรกรรมด้วย Bitcoin ได้ CBDC ถูกออกแบบมาเพื่อให้รัฐบาลและธนาคารกลางควบคุมทุกการชำระเงิน จำกัดความเป็นส่วนตัวและเสรีภาพของคุณ",
	"bitcoin-vs-cbdc::point_2_summary_1": "Bitcoin ไม่มีวันหมดอายุและไม่มีค่าธรรมเนียมรายเดือน CBDC สามารถถูกตั้งโปรแกรมให้หมดอายุได้ ป้องกันไม่ให้คุณออมเงินเพื่ออนาคต",
	"bitcoin-vs-cbdc::point_3_summary_1": "Bitcoin มีขีดจำกัดตายตัวที่ 21 ล้าน BTC CBDC ไม่มีขีดจำกัดอุปทาน อนุญาตให้รัฐบาลขยายปริมาณเงินตามใจ — ซึ่งทำให้เกิด",
	"bitcoin-vs-cbdc::point_3_summary_2": "เงินเฟ้อ",
	"bitcoin-vs-cbdc::point_4_summary_1": "ที่อยู่ Bitcoin ไม่ผูกกับตัวตนจริงของคุณ CBDC เชื่อมโยงโดยตรงกับบัตรประชาชน เปิดทางให้มีการสอดส่องทางการเงินและเซ็นเซอร์ในวงกว้าง",
	"bitcoin-vs-cbdc::point_5_summary_1": "กฎของ Bitcoin ถูกตรวจสอบโดยโหนดอิสระหลายหมื่นโหนด CBDC รวมศูนย์อยู่ในมือของรัฐบาลและธนาคารกลางที่ควบคุมเครือข่ายอย่างเบ็ดเสร็จ",
	"bitcoin-vs-cbdc::point_6_summary_1": "ใครก็ตามรันโหนด Bitcoin เพื่อตรวจสอบกฎของเครือข่ายได้ CBDC ไม่อนุญาตให้ผู้ใช้รันโหนด — คุณต้องเชื่อใจอำนาจกลาง",
	"bitcoin-vs-cbdc::point_7_summary_1": "Bitcoin ที่เก็บกุญแจเองไม่สามารถถูกอายัดโดยใครได้ CBDC ถูกออกแบบมาเพื่อให้รัฐบาลและธนาคารกลางอายัดบัญชีได้ทันที",
	"bitcoin-vs-cbdc::point_8_summary_1": "Bitcoin ให้คุณควบคุมเงินของคุณอย่างเต็มที่เมื่อเก็บกุญแจเองด้วย",
	"bitcoin-vs-cbdc::point_8_summary_2": "กระเป๋าเงิน",
	"bitcoin-vs-cbdc::point_8_summary_3": "CBDC ต้องการให้เชื่อใจผู้ดูแล เช่น ธนาคารหรือรัฐบาล ให้ถือเงินไว้แทนคุณ",
	"bitcoin-vs-cbdc::point_9_summary_1": "นโยบายการเงินของ Bitcoin ถูกกำหนดในโค้ดและไม่สามารถเปลี่ยนแปลงได้ CBDC สามารถถูกตั้งโปรแกรมใหม่ตามใจนักการเมือง ทำให้เกิด",
	"bitcoin-vs-cbdc::point_9_summary_2": "เงินเฟ้อ",
	"bitcoin-vs-cbdc::hero_title": heroTitle("CBDCs"),
	"bitcoin-vs-cbdc::point_9_summary_3": " เมื่อพิมพ์เงินมากเกินไป",

	// bitcoin-vs-crypto (11)
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin เทียบกับคริปโต",
	"bitcoin-vs-crypto::crypto": "คริปโต",
	"bitcoin-vs-crypto::point_1_summary_1": "โปรโตคอลของ Bitcoin ยังคงเหมือนเดิมโดยพื้นฐานตั้งแต่ปี 2009 ให้กฎที่คาดเดาได้ โครงการคริปโตส่วนใหญ่เปลี่ยนโปรโตคอล โทเคโนมิกส์ หรือฟอร์กเป็นเวอร์ชันใหม่อยู่ตลอด",
	"bitcoin-vs-crypto::point_2_summary_1": "Bitcoin ทำงานบนโหนดอิสระหลายหมื่นโหนดทั่วโลก โครงการคริปโตส่วนใหญ่ถูกควบคุมโดยมูลนิธิ บริษัท หรือทีมพัฒนาขนาดเล็กที่สามารถเปลี่ยนแปลงโดยพลการได้",
	"bitcoin-vs-crypto::point_3_summary_1": "Bitcoin มีขีดจำกัดตายตัวที่ 21 ล้านเหรียญ — สินทรัพย์ดิจิทัลที่หายากที่สุด โครงการคริปโตส่วนใหญ่มีอุปทานไม่จำกัดหรือกลไกในการพิมพ์โทเคนใหม่ตามใจ ทำให้ผู้ถือถูกเจือจาง",
	"bitcoin-vs-crypto::point_4_summary_1": "Bitcoin มีจุดประสงค์เดียว: เงินดิจิทัลแบบเพียร์ทูเพียร์ ใครก็เข้าใจและใช้งานได้ คริปโตส่วนใหญ่เกี่ยวกับสัญญาอัจฉริยะที่ซับซ้อนหรือ DeFi ที่ต้องใช้ความเชี่ยวชาญทางเทคนิคเพื่อใช้อย่างปลอดภัย",
	"bitcoin-vs-crypto::point_5_summary_1": "Proof of Work ของ Bitcoin ทำงานโดยไม่มีการโจมตีสำเร็จบนเครือข่ายหลักมาแล้วกว่า 15 ปี โครงการคริปโตส่วนใหญ่ใช้ฉันทามติแบบทดลองที่ยังไม่ได้ผ่านการทดสอบจากสมรภูมิจริง",
	"bitcoin-vs-crypto::point_6_summary_1": "Bitcoin คือเงินดิจิทัล — ที่เก็บมูลค่าและตัวกลางในการแลกเปลี่ยน โทเคนคริปโตส่วนใหญ่เป็นโทเคนยูทิลิตี้หรือกอเวอร์แนนซ์เก็งกำไรที่มีมูลค่าในโลกจริงไม่ชัดเจน",
	"bitcoin-vs-crypto::point_7_summary_1": "Bitcoin แข็งแกร่งขึ้นภายใต้การโจมตี และอยู่รอดทุกวิกฤต การห้าม และการวิจารณ์ โครงการคริปโตส่วนใหญ่ล่มภายใต้แรงกดดันด้านกฎระเบียบ เทคนิค หรือตลาด",
	"bitcoin-vs-crypto::point_8_summary_1": "Bitcoin ไม่มี CEO ไม่มีบริษัท ไม่มีจุดล้มเดียว โครงการคริปโตส่วนใหญ่พึ่งพา VC ผู้นำเฉพาะคน หรือการอยู่รอดของบริษัทเดียว",
	"bitcoin-vs-crypto::hero_title": heroTitle("คริปโต"),

	// bitcoin-vs-fine-art (8)
	"bitcoin-vs-fine-art::point_1_summary_1": "Bitcoin ทุกเหรียญเหมือนกันและสับเปลี่ยนกันได้ งานศิลปะแต่ละชิ้นเป็นเอกลักษณ์ — การสร้างสรรค์ ประวัติ สภาพ และที่มาที่ต่างกันทำให้การเปรียบเทียบโดยตรงยากมาก",
	"bitcoin-vs-fine-art::point_2_summary_1": "Bitcoin ซื้อขายตลอด 24/7 บนตลาดทั่วโลกที่ใครก็เข้าถึงได้ งานศิลปะต้องใช้บ้านประมูลเฉพาะ พ่อค้าส่วนตัว หรือแกลเลอรี และอาจใช้เวลาหลายเดือนกว่าจะขายได้",
	"bitcoin-vs-fine-art::point_3_summary_1": "การซื้อหรือขาย Bitcoin มีค่าธรรมเนียมต่ำกว่า 1% มักจะน้อยกว่ามาก การขายงานศิลปะมีค่าใช้จ่าย 30-40% รวมค่าธรรมเนียมผู้ซื้อ ค่าคอมมิชชั่น ประกันภัย ขนส่ง และการตรวจสอบความแท้",
	"bitcoin-vs-fine-art::point_4_summary_1": "Bitcoin แบ่งย่อยได้ถึง 100 ล้าน sats ทำให้เหมาะสำหรับธุรกรรมทุกขนาด คุณไม่สามารถเป็นเจ้าของส่วนเศษของภาพวาดหรือมุมหนึ่งของประติมากรรมได้โดยไม่มีความเสี่ยงคู่สัญญา",
	"bitcoin-vs-fine-art::point_5_summary_1": "ความเป็นเจ้าของและความแท้ของ Bitcoin สามารถยืนยันได้ทางการเข้ารหัสโดยใครก็ได้บนเชน การตรวจสอบความแท้ของงานศิลปะนั้นแพง ช้า และยังคงถูกหลอกโดยผู้ปลอมแปลงเป็นประจำ ทำให้มูลค่าของงานศิลปะหายไปในชั่วข้ามคืน",
	"bitcoin-vs-fine-art::point_6_summary_1": "Bitcoin ที่สำรองไว้อย่างเหมาะสมจะรอดจากน้ำท่วม ไฟไหม้ แผ่นดินไหว และการขโมย งานศิลปะเปราะบางต่อการทำลายทางกายภาพทุกรูปแบบ และประกันภัยมักไม่ครอบคลุมทั้งหมด",
	"bitcoin-vs-fine-art::point_7_summary_1": "ใครก็ตามที่มีอินเทอร์เน็ตและเงินเล็กน้อยสามารถซื้อ Bitcoin ได้ การลงทุนงานศิลปะถูกจำกัดอยู่ในวงนักสะสมที่ร่ำรวยซึ่งเข้าถึงการประมูลและมีความรู้เฉพาะทาง",
	"bitcoin-vs-fine-art::hero_title": heroTitle("ศิลปะ"),

	// bitcoin-vs-gold (11)
	"bitcoin-vs-gold::bitcoin_vs_gold": "Bitcoin เทียบกับทองคำ",
	"bitcoin-vs-gold::point_1_summary_1": "Bitcoin สามารถส่งผ่านอินเทอร์เน็ตได้ทันทีด้วยค่าธรรมเนียมต่ำ ทองคำต้องขนส่งทางกายภาพเพื่อโอนความเป็นเจ้าของ",
	"bitcoin-vs-gold::point_2_summary_1": "Bitcoin เป็นสินทรัพย์ดิจิทัลโดยกำเนิดที่คุณสามารถโอนผ่านอินเทอร์เน็ตได้ ทองคำออนไลน์เป็น IOU ดิจิทัล — คุณเป็นเจ้าของเพียงคำสัญญาจากผู้ดูแล ไม่ใช่ตัวโลหะเอง",
	"bitcoin-vs-gold::point_3_summary_1": "Bitcoin มีขีดจำกัดตายตัวที่ 21 ล้าน BTC อุปทานทองคำเติบโตประมาณ <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6% ต่อปี</a> ทำให้ส่วนแบ่งของคุณเล็กลง — น้อยกว่าเงินเฟ้อของเงินกระดาษ",
	"bitcoin-vs-gold::point_3_summary_2": "เงินเฟ้อ",
	"bitcoin-vs-gold::point_3_summary_3": " — แต่ก็ยังเป็นเงินเฟ้อ",
	"bitcoin-vs-gold::point_4_summary_1": "เมื่อราคาทองคำสูงขึ้น มีการขุดทองคำมากขึ้น ดันราคาให้ลดลง อุปทาน Bitcoin ไม่ยืดหยุ่น — ไม่ว่าราคาจะสูงแค่ไหน ก็จะมีเพียง 21 ล้านเท่านั้น",
	"bitcoin-vs-gold::point_5_summary_1": "โหนดอิสระหลายหมื่นโหนดตรวจสอบเครือข่าย Bitcoin ทองคำกายภาพส่วนใหญ่เก็บอยู่ในห้องนิรภัยของผู้ดูแลรายใหญ่เพียงไม่กี่ราย",
	"bitcoin-vs-gold::point_6_summary_1": "ใครก็ตรวจสอบ Bitcoin จริงได้โดยรันโหนดเต็ม — เป็นเพียงแอป การตรวจสอบทองคำกายภาพต้องหลอม ภายในอาจเป็นทังสเตนก็ได้",
	"bitcoin-vs-gold::point_7_summary_1": "Bitcoin แบ่งย่อยได้ถึง 100 ล้าน sats ทำให้เหมาะสำหรับการซื้อทุกขนาด ทองคำไม่สามารถแบ่งย่อยได้ง่ายสำหรับธุรกรรมขนาดเล็ก",
	"bitcoin-vs-gold::hero_title": heroTitle("ทองคำ"),

	// bitcoin-vs-real-estate (10)
	"bitcoin-vs-real-estate::point_1_summary_1": "Bitcoin เคลื่อนย้ายไปทั่วโลกได้ทันที อสังหาริมทรัพย์ถูกตรึงอยู่กับที่ตั้งและเปิดรับความเสี่ยงทางเศรษฐกิจ การเมือง และภัยธรรมชาติในท้องถิ่น",
	"bitcoin-vs-real-estate::point_2_summary_1": "Bitcoin แบ่งย่อยได้ถึง 100 ล้าน sats อสังหาริมทรัพย์ไม่สามารถขายเป็นบางส่วนได้ — คุณขายเฉพาะห้องครัวหรือซื้อครึ่งห้องนอนไม่ได้",
	"bitcoin-vs-real-estate::point_3_summary_1": "Bitcoin ทำงานบนเครือข่ายกระจายศูนย์ที่รัฐบาลใดก็ควบคุมไม่ได้ อสังหาริมทรัพย์ถูกควบคุมอย่างหนัก — กฎหมายผังเมือง การควบคุมค่าเช่า การเวนคืน และการยึดทรัพย์ ทั้งหมดมีผลบังคับใช้",
	"bitcoin-vs-real-estate::point_4_summary_1": "Bitcoin ไม่ต้องการการดูแลรักษา อสังหาริมทรัพย์ต้องการการซ่อมแซม ปรับปรุง ประกันภัย จัดการทรัพย์สิน และรับมือกับปัญหาผู้เช่า",
	"bitcoin-vs-real-estate::point_5_summary_1": "Bitcoin ไม่มีภาษีต่อเนื่อง — คุณจ่ายเฉพาะภาษีกำไรจากทุนตอนที่ขาย อสังหาริมทรัพย์ต้องเสียภาษีทรัพย์สินรายปีโดยไม่คำนึงถึงรายได้",
	"bitcoin-vs-real-estate::point_6_summary_1": "Bitcoin ที่สำรองไว้อย่างเหมาะสมจะรอดจากไฟไหม้ น้ำท่วม และแผ่นดินไหว อสังหาริมทรัพย์เปราะบางต่อภัยพิบัติทุกชนิด และประกันภัยมักไม่ครอบคลุมทั้งหมด",
	"bitcoin-vs-real-estate::point_7_summary_1": "Bitcoin ทุกเหรียญเหมือนกันและสับเปลี่ยนกันได้ ทรัพย์สินทุกแห่งเป็นเอกลักษณ์ ทำให้การกำหนดราคาและการเปรียบเทียบยาก",
	"bitcoin-vs-real-estate::point_8_summary_1": "Bitcoin ซื้อขายทั่วโลกตลอด 24/7 โดยใครก็ตามที่มีอินเทอร์เน็ต การขายอสังหาริมทรัพย์จำกัดอยู่ที่ผู้ซื้อในท้องถิ่นและอาจใช้เวลาหลายเดือนกว่าเอกสารจะเสร็จ",
	"bitcoin-vs-real-estate::point_9_summary_1": "Bitcoin เปิดทางให้แต่ละคนเป็นเจ้าของได้โดยตรง การซื้ออสังหาริมทรัพย์เพื่อการลงทุนนอกเหนือจากบ้านหลักของคุณดันราคาบ้านขึ้น ลดความสามารถในการซื้อบ้าน และซ้ำเติมวิกฤตที่อยู่อาศัย",
	"bitcoin-vs-real-estate::hero_title": heroTitle("อสังหาริมทรัพย์"),

	// bitcoin-vs-stocks (12)
	"bitcoin-vs-stocks::point_1_summary_1": "Bitcoin เป็นสินทรัพย์โดยตรงที่คุณเป็นเจ้าของอย่างสมบูรณ์ หุ้นเป็นส่วนของบริษัท — มูลค่าขึ้นอยู่กับการบริหาร ผลประกอบการ และการตัดสินใจที่คุณควบคุมไม่ได้",
	"bitcoin-vs-stocks::point_2_summary_1": "Bitcoin มีขีดจำกัดตายตัวที่ 21 ล้าน BTC บริษัทสามารถออกหุ้นใหม่ได้ตลอดเวลา ทำให้ผู้ถือหุ้นเดิมถูกเจือจาง — คล้ายกับที่",
	"bitcoin-vs-stocks::point_2_summary_2": "เงินเฟ้อ",
	"bitcoin-vs-stocks::point_2_summary_3": " เจือจางเงินสด ด้วย Bitcoin ส่วนแบ่งของคุณไม่หดตัวเลย",
	"bitcoin-vs-stocks::point_3_summary_1": "Bitcoin ไม่มี CEO และไม่มีจุดล้มเดียว หุ้นพึ่งพาผู้นำอย่างมาก — การตัดสินใจผิดพลาดครั้งเดียวหรือการลาออกอาจทำให้ราคาหุ้นดิ่งได้",
	"bitcoin-vs-stocks::point_4_summary_1": "ราคา Bitcoin มาจากตลาดเปิดทั่วโลก การประเมินมูลค่าหุ้นพึ่งพาอัตราส่วน เช่น P/E ที่อาจปกปิดหุ้นที่ราคาแพงเกินไป",
	"bitcoin-vs-stocks::point_5_summary_1": "Bitcoin ซื้อขายตลอด 24/7 ทั่วโลก ตลาดหุ้นเปิดเฉพาะในเวลาทำการในวันธรรมดา",
	"bitcoin-vs-stocks::point_6_summary_1": "คุณสามารถ",
	"bitcoin-vs-stocks::point_6_summary_2": "เก็บกุญแจเอง",
	"bitcoin-vs-stocks::point_6_summary_3": "Bitcoin ด้วยแอปง่ายๆ — ไม่ต้องใช้โบรกเกอร์ หุ้นอยู่กับโบรกเกอร์ ทำให้คุณเผชิญความเสี่ยงคู่สัญญาหากพวกเขาล้ม",
	"bitcoin-vs-stocks::point_7_summary_1": "อุปทานคงที่ของ Bitcoin ทำให้เป็นเครื่องป้องกันเงินเฟ้อที่เชื่อถือได้ หุ้นบางตัวชนะเงินเฟ้อ บางตัวไม่ — ไม่มีการรับประกัน",
	"bitcoin-vs-stocks::hero_title": heroTitle("หุ้น"),

	// bitcoin-vs-visa (12)
	"bitcoin-vs-visa::point_1_summary_1": "Bitcoin เป็นเครือข่ายเปิดที่ใครก็เข้าร่วมและใช้งานได้โดยไม่ต้องขออนุญาต Visa เป็นระบบปิดที่ควบคุมโดยสถาบันการเงินที่อาจปฏิเสธการเข้าถึง — โดยเฉพาะกับผู้ที่ไม่มีบัญชีธนาคารหรือเข้าถึงบริการธนาคารน้อย",
	"bitcoin-vs-visa::point_2_summary_1": "ธุรกรรม Bitcoin ไม่มีค่าธรรมเนียมร้านค้า Visa มักเรียกเก็บค่าธรรมเนียมจากร้านค้าประมาณ 3% ต่อธุรกรรม — ธุรกิจของคุณประหยัดเงินได้ด้วยการรับ",
	"bitcoin-vs-visa::point_2_summary_2": "การชำระเงิน Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": " แทน",
	"bitcoin-vs-visa::point_3_summary_1": "ทุกธุรกรรม Bitcoin อยู่บนบล็อกเชนสาธารณะที่ตรวจสอบได้ Visa ใช้ระบบปิดที่เป็นกรรมสิทธิ์ ที่ลูกค้าไม่สามารถยืนยันอะไรได้อย่างอิสระ",
	"bitcoin-vs-visa::point_4_summary_1": "Bitcoin ไม่สามารถถูกอายัดโดยอำนาจกลางใดได้ Visa สามารถอายัดบัญชี บล็อกธุรกรรม หรือปฏิเสธการให้บริการได้ตลอดเวลา",
	"bitcoin-vs-visa::point_5_summary_1": "Bitcoin เป็นการชำระขั้นสุดท้าย — คุณใช้ได้เฉพาะเท่าที่เป็นเจ้าของ บัตรเครดิตสร้างหนี้พร้อมอัตราดอกเบี้ยที่มักสูงกว่า 25% ต่อปี",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin ให้คุณ",
	"bitcoin-vs-visa::point_6_summary_2": "เก็บกุญแจเอง",
	"bitcoin-vs-visa::point_6_summary_3": "ได้โดยไม่ต้องมีธนาคารหรือผู้ประมวลการชำระเงิน บัตรเครดิตต้องการตัวกลางเสมอ",
	"bitcoin-vs-visa::point_7_summary_1": "Bitcoin ทำงาน 24/7 ทั่วโลก ไม่มีเวลาทำการ Visa มีเวลาทำการ ช่วงปิดบำรุง และข้อจำกัดทางภูมิศาสตร์ที่อาจบล็อกธุรกรรมได้",
	"bitcoin-vs-visa::hero_title": heroTitle("Visa"),

	// business/accounting (46)
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title": "บริการบัญชี Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description": "คู่มือเข้าใจง่ายสำหรับการรับ Bitcoin ในบัญชีของคุณ — กระเป๋าเงินไฮบริด ต้นทุนพื้นฐาน กำไรจากทุน และเมื่อใดควรเรียกใช้นักบัญชี",
	"business/accounting::accounting_s1_c1": "วิธีที่ง่ายที่สุดในการรับ Bitcoin คือใช้กระเป๋าเงินไฮบริดที่แปลง Bitcoin ที่คุณได้รับ 100% เป็นดอลลาร์ (หรือสกุลเงินท้องถิ่นของคุณ) โดยอัตโนมัติทันทีที่มีการชำระเงินเข้ามา",
	"business/accounting::accounting_s1_c2": "ด้วยการตั้งค่านี้ บัญชีของคุณจะดูเหมือนกับวันนี้ทุกประการ — ตัวเลขสุดท้ายเป็นดอลลาร์ทุกครั้ง ไม่มีต้นทุนพื้นฐาน ไม่มีกำไรจากทุน ไม่มีสเปรดชีตใหม่",
	"business/accounting::accounting_s2": "หากคุณเก็บ Bitcoin ไว้บางส่วน: การติดตามต้นทุนพื้นฐานของคุณ",
	"business/accounting::accounting_s2_c1": "ธุรกิจบางแห่งเลือกที่จะเก็บ Bitcoin ที่ได้รับบางส่วนแทนที่จะแปลงทั้งหมดอัตโนมัติ หากเป็นกรณีของคุณ ขั้นตอนเพิ่มเติมหลักคือการติดตามต้นทุนพื้นฐาน — มูลค่าเป็นดอลลาร์ของแต่ละการชำระเงิน Bitcoin ในวันที่คุณได้รับ",
	"business/accounting::accounting_s2_c2": "แม้ว่าคุณจะคิดถึงธุรกิจของคุณในรูปแบบ Bitcoin ทั้งหมด หน่วยงานภาษีส่วนใหญ่ก็ยังต้องการให้รายงานมูลค่าเป็นดอลลาร์ ข่าวดีคือ มีเพียงสองตัวเลขต่อธุรกรรม — จำนวน Bitcoin ที่ได้รับและมูลค่าเป็นดอลลาร์ในวันนั้น",
	"business/accounting::accounting_s2_c3": "ใช้เครื่องมือด้านล่างเพื่อทำให้การค้นหามูลค่าเป็นอัตโนมัติ คุณจะได้ไม่ต้องตรวจสอบราคาทุกวัน",
	"business/accounting::accounting_s3": "การใช้จ่ายหรือขาย Bitcoin ที่คุณเก็บไว้",
	"business/accounting::accounting_s3_c1": "หากคุณแปลงทุกการชำระเงินเป็นดอลลาร์อัตโนมัติ ข้ามส่วนนี้ไป — ไม่เกี่ยวข้องกับคุณ",
	"business/accounting::accounting_s3_c2": "หากคุณเก็บ Bitcoin บางส่วนไว้และตัดสินใจในภายหลังที่จะใช้จ่ายหรือขาย ให้เพิ่มราคาขายลงในสเปรดชีตต้นทุนพื้นฐานเดียวกัน ผลต่างระหว่างมูลค่าของ Bitcoin ตอนที่คุณได้รับและมูลค่าตอนที่คุณใช้จ่ายหรือขายคือกำไรหรือขาดทุนจากทุน",
	"business/accounting::accounting_s3_c3": "ตัวอย่างสั้นๆ สองตัวอย่าง:",
	"business/accounting::accounting_s4": "ต้องการมืออาชีพที่เข้าใจ Bitcoin?",
	"business/accounting::accounting_s4_c1": "หากคุณอยากให้คนอื่นทำแทน — หรือบัญชี Bitcoin ของคุณซับซ้อนกว่าที่กระเป๋าเงินไฮบริดจะรับมือไหว — เราขอแนะนำบริการบัญชี Satoshi Pacioli ซึ่งเป็นบริษัทที่เชี่ยวชาญด้านบัญชี Bitcoin สำหรับธุรกิจ",
	"business/accounting::bitcoin_business_accounting_guide": "บัญชี Bitcoin สำหรับธุรกิจของคุณ",
	"business/accounting::accounting_card_bpr_label": "ราคา BITCOIN",
	"business/accounting::accounting_card_bpr_title": "ค้นหาราคา Bitcoin ปัจจุบันหรือในอดีตเป็นดอลลาร์",
	"business/accounting::accounting_card_pacioli_label": "นักบัญชี BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label": "นำเข้า EXCEL",
	"business/accounting::accounting_card_spreadsheet_title": "ดึงราคา Bitcoin เข้า Excel โดยอัตโนมัติ",
	"business/accounting::accounting_card_wallets_label": "กระเป๋าเงินไฮบริด",
	"business/accounting::accounting_card_wallets_title": "ดูกระเป๋าเงินธุรกิจที่เราแนะนำ",
	"business/accounting::accounting_disclaimer": "คู่มือนี้มีไว้เพื่อให้ข้อมูลเท่านั้น และไม่ถือเป็นคำแนะนำด้านภาษี สำหรับคำแนะนำด้านภาษีเฉพาะกรณีของคุณ โปรดปรึกษานักบัญชีที่มีคุณสมบัติ",
	"business/accounting::accounting_disclaimer_label": "โปรดทราบ",
	"business/accounting::accounting_example_feb_1": "1 ก.พ.",
	"business/accounting::accounting_example_gain_badge": "กำไรจากทุน",
	"business/accounting::accounting_example_gain_explain": "คุณบันทึกกำไรจากทุน $10",
	"business/accounting::accounting_example_jan_1": "1 ม.ค.",
	"business/accounting::accounting_example_loss_badge": "ขาดทุนจากทุน",
	"business/accounting::accounting_example_loss_explain": "คุณบันทึกขาดทุนจากทุน $10",
	"business/accounting::accounting_example_received_label": "ได้รับ",
	"business/accounting::accounting_example_sold_label": "ขายหรือใช้จ่าย",
	"business/accounting::accounting_hero_subtitle": "การรับ Bitcoin ที่ธุรกิจของคุณไม่จำเป็นต้องทำให้บัญชีของคุณซับซ้อน นี่คือเวอร์ชันสั้น พร้อมเครื่องมือและมืออาชีพที่ทำให้ราบรื่น",
	"business/accounting::accounting_intro_c1": "หากคุณรับเงินสดหรือบัตรอยู่แล้ว การเพิ่ม Bitcoin ลงในบัญชีธุรกิจของคุณนั้นง่ายกว่าที่คิด คุณมีสองทาง: แปลงทุกการชำระเงิน Bitcoin เป็นดอลลาร์ทันทีที่มาถึง (ไม่ต้องการบัญชีใหม่) หรือเก็บบางส่วนเป็น Bitcoin (มีตัวเลขเพิ่มเติมสองสามตัวให้ติดตาม)",
	"business/accounting::accounting_intro_c2": "คู่มือนี้จะแนะนำคุณทั้งสองทาง — เพื่อให้คุณเลือกวิธีที่เหมาะกับธุรกิจและเริ่มรับ Bitcoin ได้อย่างมั่นใจ",
	"business/accounting::accounting_s1": "ทางง่าย: แปลงเป็นดอลลาร์อัตโนมัติ",
	"business/accounting::accounting_s3_c6": "เพียงเท่านั้น คณิตศาสตร์ที่อยู่เบื้องหลังเหมือนกันทุกประการกับการบัญชีของสินทรัพย์ที่เพิ่มมูลค่าหรือลดมูลค่าอื่นๆ",
	"business/accounting::sources_bitcoin_price_report": "Bitcoin Price Report — ราคา Bitcoin ปัจจุบันและในอดีตเป็นดอลลาร์",
	"business/accounting::sources_satoshi_pacioli": "บริการบัญชี Satoshi Pacioli — บัญชี Bitcoin สำหรับธุรกิจ",
	"business/accounting::sources_spreadsheet_guru": "The Spreadsheet Guru — นำเข้าราคาคริปโตเคอร์เรนซีลงใน Excel",

	// business/faq (2)
	"business/faq::faq_hero_subtitle": "คำตอบสั้นๆ ของคำถามที่ร้านค้ามักถามมากที่สุดก่อนที่จะเริ่มรับ Bitcoin — ค่าธรรมเนียม การชำระบัญชี กระเป๋าเงิน การขอคืนเงิน ค่าใช้จ่าย และอื่นๆ",
	"business/faq::faq_intro_c1": "แตะคำถามใดด้านล่างเพื่อขยายคำตอบ เมื่อคุณพร้อมที่จะเริ่มรับ Bitcoin แหล่งข้อมูลธุรกิจที่ด้านล่างของหน้าจะพาคุณผ่านแต่ละขั้นตอน",

	// business/index (12)
	"business/index::biz_label_accounting": "บัญชี",
	"business/index::biz_label_faq": "คำถามที่พบบ่อย",
	"business/index::biz_label_maps": "แผนที่ร้านค้า",
	"business/index::biz_label_rewards": "รางวัล",
	"business/index::biz_label_stickers": "สติกเกอร์",
	"business/index::biz_label_wallets": "กระเป๋าเงิน",
	"business/index::biz_meta_description": "รับ Bitcoin ที่ธุรกิจของคุณเพื่อค่าธรรมเนียมที่ต่ำลง การชำระบัญชีทันที ไม่มีการขอคืนเงิน และลูกค้ามากขึ้น",
	"business/index::business_hero_subtitle": "รับชำระเงินด้วยค่าธรรมเนียมที่ต่ำลง รับเงินทันที และเข้าถึงลูกค้าใหม่หลายล้านคน — โดยไม่มีสัญญาและไม่มีค่าใช้จ่ายแฝง",
	"business/index::business_intro_c1": "Bitcoin ให้ธุรกิจของคุณวิธีรับเงินที่เร็วกว่า ถูกกว่า และเป็นส่วนตัวกว่า ไม่มีคนกลาง ไม่มีการขอคืนเงิน ไม่มีสัญญา เงินที่ชำระบัญชีในไม่กี่วินาทีโดยตรงจากลูกค้าของคุณถึงคุณ",
	"business/index::business_intro_c2": "ด้านล่างคือเวอร์ชันสั้นของเหตุผลที่ Bitcoin ดีต่อธุรกิจ และด้านล่างคือแหล่งข้อมูลทุกอย่างที่คุณต้องใช้เพื่อเริ่มรับวันนี้",
	"business/index::business_resources_heading": "ทุกสิ่งที่คุณต้องใช้เพื่อรับ Bitcoin",
	"business/index::business_resources_intro": "ทำงานผ่านแหล่งข้อมูลเหล่านี้ตามจังหวะของคุณ แต่ละรายการเป็นคู่มือสั้นๆ ที่ใช้งานได้จริง",

	// business/maps (15)
	"business/maps::biz_maps_form_header": "บอกเราเกี่ยวกับธุรกิจของคุณ",
	"business/maps::biz_maps_form_intro": "เราต้องการรายละเอียดเพียงไม่กี่อย่างเพื่อให้คุณได้รับการลงรายการ ข้อมูลที่อยู่จะถูกเก็บเพียงนานพอที่จะส่งธุรกิจของคุณไปยังแผนที่",
	"business/maps::biz_maps_hero_subtitle": "ลงรายการธุรกิจของคุณฟรีบน BTC Map — สารบบเปิดทั่วโลกของร้านค้าที่รับ Bitcoin — เพื่อให้ Bitcoiner ใกล้เคียงค้นพบและใช้จ่าย Bitcoin ที่ธุรกิจของคุณได้",
	"business/maps::biz_maps_hero_title": "ลงรายการธุรกิจของคุณบนแผนที่ร้านค้า Bitcoin",
	"business/maps::biz_maps_intro_c1": "Bitcoiner กำลังหาที่ใช้จ่ายอย่างจริงจัง การลงธุรกิจของคุณบนแผนที่ทำให้คุณปรากฏต่อหน้าผู้ใช้ Bitcoin ทุกคนที่กำลังค้นหาที่กิน ที่ช้อป หรือที่พักใกล้เคียง — โดยไม่มีค่าใช้จ่ายสำหรับคุณ",
	"business/maps::biz_maps_intro_c2": "แค่กรอกแบบฟอร์มสั้นๆ ด้านล่าง แล้วเราจะส่งธุรกิจของคุณไปยัง BTC Map และแผนที่ร้านค้า Bitcoin อื่นๆ ให้คุณ",
	"business/maps::biz_maps_meta_description": "ลงรายการธุรกิจของคุณฟรีบน BTC Map และแผนที่ร้านค้า Bitcoin อื่นๆ เพื่อให้ Bitcoiner ใกล้เคียงค้นพบคุณได้",
	"business/maps::biz_maps_placeholder_address": "ที่อยู่",
	"business/maps::biz_maps_placeholder_category": "หมวดหมู่ (เช่น ร้านอาหาร คาเฟ่ โรงแรม)",
	"business/maps::biz_maps_placeholder_city": "เมือง",
	"business/maps::biz_maps_placeholder_country": "ประเทศ",
	"business/maps::biz_maps_placeholder_name": "ชื่อธุรกิจ",
	"business/maps::biz_maps_placeholder_region": "รัฐ / จังหวัด / ภูมิภาค",
	"business/maps::biz_maps_placeholder_website": "เว็บไซต์ (ไม่บังคับ)",
	"business/maps::biz_maps_view_map_cta": "ดู BTC Map",

	// business/maps-success (8)
	"business/maps-success::biz_maps_success_btn_view_map": "ดู BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle": "ขอบคุณที่ส่งธุรกิจของคุณ เราจะลงรายการคุณบนแผนที่ร้านค้า Bitcoin ในเร็วๆ นี้",
	"business/maps-success::biz_maps_success_hero_title": "ได้รับคำขอแล้ว 🎉",
	"business/maps-success::biz_maps_success_timeline_c1": "ธุรกิจของคุณจะได้รับการลงรายการบน BTC Map และสารบบร้านค้า Bitcoin อื่นๆ ภายใน 1 ถึง 2 สัปดาห์ เราตรวจสอบทุกการส่งด้วยมือเพื่อให้แผนที่ถูกต้อง",
	"business/maps-success::biz_maps_success_timeline_c2": "เมื่อรายการของคุณเปิดใช้งาน Bitcoiner ใกล้เคียงจะค้นพบธุรกิจของคุณและมาใช้จ่าย Bitcoin ที่นั่น",
	"business/maps-success::biz_maps_success_timeline_header": "อะไรจะเกิดขึ้นต่อไป",
	"business/maps-success::biz_maps_success_view_c1": "ระหว่างที่คุณรอ ลองดู BTC Map เพื่อเห็นเครือข่ายที่กำลังเติบโตของธุรกิจที่รับ Bitcoin ทั่วโลก",
	"business/maps-success::biz_maps_success_view_header": "ดูที่ที่คุณจะปรากฏ",

	// business/sticker-files/english/index (3)
	"business/sticker-files/english/index::english_biz_sticker_files_description": "ดาวน์โหลดไฟล์สติกเกอร์ภาษาอังกฤษเพื่อพิมพ์สติกเกอร์ 'Bitcoin Accepted Here' ของคุณเอง",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle": "พิมพ์สติกเกอร์ 'Bitcoin Accepted Here' ภาษาอังกฤษของคุณเองเพื่อแจ้งลูกค้าว่าคุณรับ Bitcoin",
	"business/sticker-files/english/index::biz_stickers_english_hero_title": "ดาวน์โหลดไฟล์สติกเกอร์ 'Bitcoin Accepted Here' ภาษาอังกฤษ",

	// business/sticker-language-success (5)
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle": "ขอบคุณที่ขอไฟล์สติกเกอร์ 'Bitcoin Accepted Here' ในภาษาของคุณ",
	"business/sticker-language-success::biz_sticker_language_success_hero_title": "ได้รับคำขอแล้ว 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1": "เราจะสร้างและเผยแพร่ไฟล์สติกเกอร์ของคุณภายใน 3 ถึง 4 สัปดาห์ เมื่อพร้อม คุณสามารถดาวน์โหลดและพิมพ์ฟรีจากหน้าไฟล์สติกเกอร์ของเรา",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2": "ไฟล์สติกเกอร์ออกเป็นชุดๆ ดังนั้นอาจใช้เวลาสองสามสัปดาห์กว่าภาษาของคุณจะใช้งานได้ ขอบคุณสำหรับความอดทน!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header": "อะไรจะเกิดขึ้นต่อไป",

	// business/sticker-success (11)
	"business/sticker-success::biz_sticker_success_btn_order_bulk": "สั่งจำนวนมาก",
	"business/sticker-success::biz_sticker_success_btn_request_more": "ขอแพ็กฟรีอีกแพ็ก",
	"business/sticker-success::biz_sticker_success_hero_subtitle": "คุณจะได้รับสติกเกอร์ 'Bitcoin Accepted Here' ฟรีภายใน 2 ถึง 4 สัปดาห์ ในซองสีขาวธรรมดาพร้อมสติกเกอร์ 3 แผ่น",
	"business/sticker-success::biz_sticker_success_hero_title": "สติกเกอร์ของคุณกำลังจัดส่ง 🎉",
	"business/sticker-success::biz_sticker_success_more_c1": "หาก 3 แผ่นไม่พอสำหรับธุรกิจของคุณ ขอแพ็กฟรีอีกแพ็กได้ — หรือสั่งจำนวนมากจากผู้พิมพ์รายเดียวกับที่เราใช้",
	"business/sticker-success::biz_sticker_success_more_header": "ต้องการสติกเกอร์เพิ่ม?",
	"business/sticker-success::biz_sticker_success_tip_1": "บนประตูหน้าหรือกระจกหน้าร้าน เพื่อให้ลูกค้าเห็นก่อนเดินเข้าร้าน",
	"business/sticker-success::biz_sticker_success_tip_2": "ใกล้เคาน์เตอร์ชำระเงิน เครื่อง POS หรือพื้นที่ชำระเงิน",
	"business/sticker-success::biz_sticker_success_tip_3": "บนเมนู รายการราคา หรือกระปุกทิป",
	"business/sticker-success::biz_sticker_success_tip_4": "ห้ามติดในที่ที่คุณไม่ได้เป็นเจ้าของหรือไม่ได้รับอนุญาต",
	"business/sticker-success::biz_sticker_success_tips_header": "จุดที่ดีในการติดสติกเกอร์ของคุณ",

	// business/stickers (15)
	"business/stickers::biz_stickers_hero_subtitle": "บอกลูกค้าว่าคุณรับ Bitcoin สั่งแพ็กสติกเกอร์ 'Bitcoin Accepted Here' ฟรีเพื่อติดที่ธุรกิจของคุณ",
	"business/stickers::biz_stickers_hero_title": "สติกเกอร์ 'Bitcoin Accepted Here' ฟรี",
	"business/stickers::biz_stickers_intro_c1": "การรับ Bitcoin เป็นแค่ครึ่งหนึ่งของงาน — ลูกค้าก็ต้องรู้ด้วยว่าคุณรับ สติกเกอร์ 'Bitcoin Accepted Here' ขนาดเล็กเหล่านี้ออกแบบมาเพื่อติดบนประตูหน้า เคาน์เตอร์ เมนู หรือที่ใดก็ตามที่ลูกค้าจะเห็นก่อนชำระเงิน",
	"business/stickers::biz_stickers_intro_c2": "เราจะส่งแพ็กฟรีไปยังที่ใดก็ได้ในสหรัฐอเมริกาหรือแคนาดา หรือคุณสามารถพิมพ์เองที่ไหนก็ได้ในโลก",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 แคนาดา — ส่งฟรีทางไปรษณีย์",
	"business/stickers::biz_stickers_option_print": "🌍 ทั่วโลก — พิมพ์เอง",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 สหรัฐอเมริกา — ส่งฟรีทางไปรษณีย์",
	"business/stickers::biz_stickers_placeholder_translation1": "คำแปลของ 'Bitcoin Accepted Here'",
	"business/stickers::biz_stickers_placeholder_translation2": "คำแปลของ 'Scan to learn why Bitcoin is good for business.'",
	"business/stickers::biz_stickers_print_c1": "คุณสามารถพิมพ์สติกเกอร์ 'Bitcoin Accepted Here' ของคุณเองได้ ไม่ว่าคุณอยู่ที่ไหน คลิกภาษาของคุณด้านล่างเพื่อดาวน์โหลดไฟล์สติกเกอร์และคำแนะนำการพิมพ์",
	"business/stickers::biz_stickers_print_header": "พิมพ์ไฟล์สติกเกอร์ของคุณเอง",
	"business/stickers::biz_stickers_request_c1": "กรอกแบบฟอร์มด้านล่างเพื่อขอไฟล์สติกเกอร์ 'Bitcoin Accepted Here' ในภาษาท้องถิ่นของคุณ เราจะแจ้งให้คุณทราบเมื่อพร้อม",
	"business/stickers::biz_stickers_request_header": "ไม่เห็นภาษาของคุณ?",
	"business/stickers::biz_stickers_step_description": "เราจะจัดส่งแพ็กฟรีไปยังที่อยู่ในสหรัฐอเมริกาและแคนาดา ที่อื่นๆ ในโลก คุณสามารถพิมพ์เองได้",
	"business/stickers::biz_stickers_step_header": "คุณอยากได้สติกเกอร์อย่างไร?",

	// business/wallets (17)
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description": "กระเป๋าเงิน Bitcoin ทุกตัวทำงานร่วมกันได้ — เลือกตัวที่เหมาะกับธุรกิจของคุณ ฟรี ชำระบัญชีทันที ไม่มีการขอคืนเงิน",
	"business/wallets::sources_breez_business": "Breez — กระเป๋าเงิน Lightning ที่รองรับ Bitcoin โดยเฉพาะ",
	"business/wallets::sources_ibex": "IBEX — โครงสร้างพื้นฐานการชำระเงิน Lightning",
	"business/wallets::sources_opennode": "OpenNode — โปรเซสเซอร์ชำระเงิน Bitcoin",
	"business/wallets::sources_square": "Square — รับชำระเงินด้วย Bitcoin",
	"business/wallets::sources_zaprite": "Zaprite — การออกใบแจ้งหนี้ Bitcoin สำหรับธุรกิจ",
	"business/wallets::wallets_hero_subtitle": "กระเป๋าเงิน Bitcoin ฟรี เลือกตัวที่เหมาะกับธุรกิจของคุณ — ในร้าน ออนไลน์ หรือใบแจ้งหนี้ — และเริ่มรับ Bitcoin ได้ในไม่กี่นาที",
	"business/wallets::wallets_section_invoice": "กระเป๋าเงินสำหรับธุรกิจที่ใช้ใบแจ้งหนี้",
	"business/wallets::wallets_section_invoice_intro": "หากคุณออกใบแจ้งหนี้ให้ลูกค้า (ที่ปรึกษา ฟรีแลนซ์ บริการ B2B) ใช้กระเป๋าเงินที่สร้างมาสำหรับการออกใบแจ้งหนี้ ลูกค้าของคุณชำระใบแจ้งหนี้ Bitcoin ในไม่กี่คลิก",
	"business/wallets::wallets_section_multiple": "กระเป๋าเงินสำหรับธุรกิจที่มีพนักงานหลายคน",
	"business/wallets::wallets_section_multiple_intro": "หากคุณมีทีมที่รับชำระเงินที่เคาน์เตอร์ เลือกกระเป๋าเงินที่รองรับการล็อกอินของพนักงานหลายคน — เพื่อให้พนักงานแต่ละคนมีรหัส PIN ของตัวเอง และคุณมีร่องรอยตรวจสอบที่ชัดเจนว่าใครรับชำระอะไร",
	"business/wallets::wallets_section_online": "กระเป๋าเงินสำหรับธุรกิจออนไลน์",
	"business/wallets::wallets_section_online_intro": "ขายบนเว็บไซต์? กระเป๋าเงินเหล่านี้เชื่อมต่อกับร้านค้าออนไลน์ของคุณและรับ Bitcoin จากลูกค้าทุกคน ทุกที่ในโลก — ไม่มีการขอคืนเงิน ไม่ต้องมีบัญชีร้านค้า",
	"business/wallets::wallets_section_sole": "กระเป๋าเงินสำหรับธุรกิจส่วนบุคคล",
	"business/wallets::wallets_section_sole_intro": "หากคุณดำเนินร้านค้า คาเฟ่ สตูดิโอ หรือบริการคนเดียว กระเป๋าเงินใดก็ทำงานได้ เลือกตามว่าคุณต้องการเก็บการชำระเงินเป็น Bitcoin หรือแปลงบางส่วนของการชำระแต่ละครั้งเป็นสกุลเงินท้องถิ่นโดยอัตโนมัติ",
	"business/wallets::wallets_strike_note": "Strike Business ให้คุณรับการชำระเงิน Bitcoin และ Lightning ด้วยค่าธรรมเนียมศูนย์และการชำระบัญชีทันที รองรับการชำระเงินในร้าน ออนไลน์ และตามใบแจ้งหนี้ พร้อมตัวเลือกแปลงเป็นสกุลเงินท้องถิ่นโดยอัตโนมัติ",

	// business/why (36)
	"business/why::learn_why_bitcoin_is_good_for_business": "ที่นี่รับ Bitcoin",
	"business/why::why_good_for_you": "ทำไม Bitcoin ดีต่อคุณด้วย",
	"business/why::why_learn_more_lowercase": "เรียนรู้เพิ่มเติม →",
	"business/why::why_s1_c1": "เงินเฟ้อเกิดขึ้นเมื่อมีการพิมพ์หรือสร้างเงินขึ้นมาจากความว่างเปล่ามากขึ้น สิ่งนี้ทำให้เงินในกระเป๋าของคุณมีค่าน้อยลงเมื่อเวลาผ่านไป — และเป็นเหตุผลที่ราคาขึ้นปีแล้วปีเล่า",
	"business/why::why_s1_c2": "Bitcoin มีอุปทานคงที่ที่ 21 ล้านเหรียญ ไม่มีรัฐบาล ธนาคาร หรือบริษัทใดสามารถพิมพ์เพิ่มได้ การออม Bitcoin ของคุณรักษามูลค่าเมื่อเวลาผ่านไป แทนที่จะค่อยๆ สูญเสียไปอย่างเงียบๆ",
	"business/why::why_s2_c1": "ธนาคารสหรัฐหลายแห่งล่มในช่วงไม่กี่ปีที่ผ่านมาเพราะการแห่ถอนเงิน เมื่อลูกค้าจำนวนมากพยายามถอนพร้อมกัน ธนาคารไม่มีเงินสดพอที่จะจ่ายให้ทุกคน",
	"business/why::why_s2_c2": "แทนที่จะเก็บเงินของคุณไว้เฉยๆ ธนาคารปล่อยกู้และลงทุนเงินส่วนใหญ่ หากการลงทุนเหล่านั้นเสียหาย — หรือผู้ฝากเงินสูญเสียความเชื่อมั่น — ธนาคารอาจล้มได้ และเงินฝากของคุณอาจถูกอายัดหรือสูญหายได้",
	"business/why::why_s2_c3": "ด้วย Bitcoin คุณสามารถถือเงินของคุณเองโดยตรงในกระเป๋าเงินของคุณเอง ไม่มีธนาคาร ไม่มีคนกลาง ไม่มีการแห่ถอนเงิน",
	"business/why::why_s3_c1": "ไม่เหมือนบัตรเครดิต PayPal หรือบัญชีธนาคารทั่วไป Bitcoin ไม่ต้องการการอนุญาตจากใครเพื่อใช้งาน",
	"business/why::why_s3_c2": "ไม่มีใครสามารถอายัดบัญชีของคุณ บล็อกการชำระเงิน หรือตัดคุณจากเครือข่ายได้ มันคือระบบการเงินระบบแรกในประวัติศาสตร์ที่คุณใช้ได้อย่างเสรี โดยไม่ต้องกลัวการเซ็นเซอร์หรือการยึด",
	"business/why::why_s4_c1": "Bitcoin มักถูกเข้าใจผิด แต่กำลังทำสิ่งดีๆ ให้กับโลกอย่างเงียบๆ มากมาย",
	"business/why::why_s4_c2": "ช่วยนักเคลื่อนไหวด้านสิทธิมนุษยชนต่อสู้เพื่อเสรีภาพ ลดการปล่อยก๊าซมีเทนทั่วโลกจากหลุมฝังกลบและบ่อน้ำมัน ทำให้โครงข่ายไฟฟ้ามีเสถียรภาพ และระดมทุนสาธารณะ เช่น อุทยานแห่งชาติ",
	"business/why::why_biz_s1": "ค่าธรรมเนียมที่ต่ำลง ธุรกิจได้มากขึ้น",
	"business/why::why_biz_s1_c1": "การชำระเงิน Bitcoin ข้ามธนาคารและบริษัทบัตรเครดิตที่หัก 2-3% จากทุกการขาย ธุรกิจเก็บไว้ได้มากกว่าที่คุณจ่าย — ซึ่งมักหมายถึงราคาที่ดีกว่าและบริการที่ดีกว่าสำหรับคุณ",
	"business/why::why_biz_s2": "ชำระบัญชีทันที ไม่มีการขอคืนเงิน",
	"business/why::why_biz_s2_c1": "การชำระเงิน Bitcoin ชำระบัญชีในไม่กี่วินาที โดยตรงจากกระเป๋าเงินของคุณไปยังธุรกิจ ไม่ต้องรอหลายวันให้ธนาคารปล่อยเงิน และไม่มีข้อพิพาทการขอคืนเงินที่แพง — ดังนั้นธุรกิจสามารถมุ่งเน้นการให้บริการลูกค้า แทนที่จะต่อสู้กับการฉ้อโกง",
	"business/why::why_biz_s3": "รับฟรี เปิดให้ทุกคน",
	"business/why::why_biz_s3_c1": "ไม่มีสัญญา ค่าธรรมเนียมรายเดือน หรือค่าตั้งค่าสำหรับธุรกิจที่จะรับ Bitcoin และผู้ใช้ Bitcoin หลายล้านคนทั่วโลกกำลังหาร้านค้าที่รับ Bitcoin อย่างจริงจัง — ทำให้ธุรกิจนี้ได้รับการเปิดเผยฟรีต่อลูกค้าใหม่",
	"business/why::why_business_cta_intro": "ทำธุรกิจและอยากเริ่มรับ Bitcoin?",
	"business/why::why_business_cta_link": "ดูว่ามันทำงานอย่างไร →",
	"business/why::why_for_business": "ทำไม Bitcoin ดีต่อธุรกิจนี้",
	"business/why::why_for_business_intro": "การรับ Bitcoin ทำให้ธุรกิจเก็บได้มากขึ้นจากทุกการขาย ได้รับเงินทันทีโดยไม่มีการขอคืนเงิน และเข้าถึงผู้ใช้ Bitcoin ทั่วโลก — ทั้งหมดโดยไม่มีสัญญาและไม่มีค่าธรรมเนียมรายเดือน",
	"business/why::why_good_for_you_intro": "Bitcoin ไม่ได้มีประโยชน์เฉพาะที่เครื่องคิดเงินเท่านั้น มันเป็นเงินที่ดีกว่าซึ่งปกป้องการออม ความเป็นส่วนตัว และเสรีภาพในการทำธุรกรรมของคุณ นี่คือภาพรวมแบบเร็ว",
	"business/why::why_hero_subtitle": "คุณเพิ่งสแกนสติกเกอร์ Bitcoin Accepted Here นี่คือเหตุผลที่นั่นเป็นข่าวดี — สำหรับธุรกิจนี้และสำหรับคุณ",
	"business/why::why_intro_c1": "ธุรกิจที่คุณอยู่รับ Bitcoin — เครือข่ายการชำระเงินสมัยใหม่ที่เปิดและโอเพนซอร์ส ที่ใครก็ใช้ได้ ทุกที่ในโลก โดยไม่มีธนาคารหรือคนกลางมาหักส่วนแบ่ง",
	"business/why::why_intro_c2": "ด้านล่างคือเวอร์ชันสั้นของเหตุผลที่การรับ Bitcoin ดีต่อธุรกิจนี้ และเหตุผลที่การใช้ Bitcoin ดีต่อคุณในฐานะลูกค้า",
	"business/why::why_next_business_label": "รับ BITCOIN",
	"business/why::why_next_business_title": "รับ Bitcoin ที่ธุรกิจของคุณ",
	"business/why::why_next_buy_label": "ซื้อ BITCOIN",
	"business/why::why_next_buy_title": "ซื้อ Bitcoin ครั้งแรกของคุณ",
	"business/why::why_next_learn_label": "เรียนรู้เพิ่มเติม",
	"business/why::why_next_learn_title": "เรียนรู้เพิ่มเติมเกี่ยวกับ Bitcoin",
	"business/why::why_next_wallet_label": "รับกระเป๋าเงิน",
	"business/why::why_next_wallet_title": "รับกระเป๋าเงิน Bitcoin ของคุณเอง",
	"business/why::why_whats_next_heading": "ไปต่อที่ไหนดี?",
	"business/why::why_whats_next_intro": "หากนี่เป็นการสแกนสติกเกอร์ Bitcoin ครั้งแรกของคุณ นี่คือสถานที่ที่มีประโยชน์ที่สุดที่จะไปต่อ",
};

// Apply
const report = JSON.parse(fs.readFileSync(REPORT, "utf-8"));
let filled = 0;
let alreadyFilled = 0;
let skipped = 0;
const unmappedSamples = [];
for (const e of report.entries) {
	if (e.targetTranslation !== null) {
		alreadyFilled++;
		continue;
	}
	const k = `${e.namespace}::${e.key}`;
	if (T[k] !== undefined) {
		e.targetTranslation = T[k];
		filled++;
	} else {
		skipped++;
		if (unmappedSamples.length < 10) {
			unmappedSamples.push(k);
		}
	}
}
fs.writeFileSync(REPORT, JSON.stringify(report, null, "\t") + "\n");
console.log(`part2: filled=${filled} already=${alreadyFilled} unmapped=${skipped}`);
if (unmappedSamples.length > 0) {
	console.log("unmapped samples:", unmappedSamples);
}

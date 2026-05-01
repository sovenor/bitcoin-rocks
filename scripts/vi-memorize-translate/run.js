#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..', '..');
const today = '2026-04-30';

function updateJson(relPath, additions) {
	const abs = path.join(repoRoot, relPath);
	const raw = fs.readFileSync(abs, 'utf8');
	const obj = JSON.parse(raw);

	if (obj['@metadata']) {
		obj['@metadata']['last-updated'] = today;
	}

	for (const [k, v] of Object.entries(additions)) {
		obj[k] = v;
	}

	fs.writeFileSync(abs, JSON.stringify(obj, null, '\t') + '\n', 'utf8');
	console.log(`Updated ${relPath} (+${Object.keys(additions).length} keys)`);
}

// index_vi.json — 2 new keys (label + link title for self_custody_4)
updateJson('i18n/vi/index_vi.json', {
	home_card_label_self_custody_4: 'Bản sao lưu cuối cùng',
	home_link_title_self_custody_4: 'Cách lưu trữ Bitcoin trong não của bạn',
});

// memorize-your-seed-phrase_vi.json — translate the brain wallet research source line
// (proper-noun authors + paper title kept; descriptive wording localized)
updateJson('i18n/vi/memorize-your-seed-phrase_vi.json', {
	sources_brain_wallet_research: 'Vasek, Bonneau, Castellucci, Keith & Moore — Bitcoin Brain Drain: Nghiên cứu việc sử dụng và lạm dụng ví não Bitcoin (Financial Cryptography 2016)',
});

// wallets_vi.json — 3 new keys (a/b/c link-target split)
// EN: "For one more layer of resilience, you can also" + "memorize your seed phrase" + "as an invisible backup that travels with you."
// VI: "Để có thêm một lớp khả năng phục hồi, bạn cũng có thể" + "ghi nhớ cụm từ khôi phục" + "như một bản sao lưu vô hình đi cùng bạn."
updateJson('i18n/vi/wallets_vi.json', {
	wallets_s6_c4b_a: 'Để có thêm một lớp khả năng phục hồi, bạn cũng có thể',
	wallets_s6_c4b_b: 'ghi nhớ cụm từ khôi phục',
	wallets_s6_c4b_c: 'như một bản sao lưu vô hình đi cùng bạn.',
});

console.log('Done.');

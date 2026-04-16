/**
 * Update inflation_en.json with new keys for the inflation page revamp.
 * Adds new copy, updates existing keys, preserves all old keys for other currencies.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'i18n', 'en', 'inflation_en.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Update metadata
data['@metadata']['last-updated'] = '2026-04-16';

// === NEW/UPDATED KEYS FOR USD REVAMP ===

// Hero H1 (sentence case, split into orange + white parts)
data['inflation_h1_orange'] = "Bitcoin doesn't have inflation,";
data['inflation_h1_white'] = "but your money does.";

// Choose different money
data['inflation_choose_different'] = "Choose a different money";

// USD Intro paragraphs
data['inflation_usd_intro_1'] = "If you save in US Dollars, you've probably noticed that they buy you less each year. It takes more dollars to buy the same amount of food. You need more dollars to maintain your quality of life.";
data['inflation_usd_intro_2'] = "But it doesn't have to be this way.";
data['inflation_usd_intro_highlight'] = "People who saved in Bitcoin over the last 4 years saw life get cheaper.";

// Section: "Here's the proof"
data['inflation_usd_proof_h2'] = "Here's the proof: your money is losing value";
data['inflation_usd_proof_p1'] = "The dollars in your bank account buy you less every year. That's because there is no fixed limit on how many dollars can be created.";
data['inflation_usd_proof_p2'] = "This unlimited supply is the root cause of inflation. Over recent years, the total amount of dollars in existence has increased dramatically.";
data['inflation_usd_proof_p3'] = "When more money is created from nothing, the price of everything goes up. This includes the raw materials that companies buy to make their products — which means higher prices for you.";
data['inflation_usd_proof_p4'] = "And when the government continues to increase their debt, even more money is printed because less people want to lend them money.";
data['inflation_usd_proof_p5_before'] = "If you can't get a loan, you can't spend money. But if the government";
data['inflation_usd_proof_p5_link'] = "can't get a loan";
data['inflation_usd_proof_p5_after'] = ", they just print the money.";
data['inflation_usd_proof_p6'] = "More government debt means more money printing. More money printing means more inflation. And there's no sign of it stopping.";

// Section: "Bitcoin doesn't have inflation"
data['inflation_usd_btc_h2'] = "Bitcoin doesn't have inflation";
data['inflation_usd_btc_p1'] = "Inflation means your money buys you less over time. Bitcoin is better money because it doesn't have inflation.";
data['inflation_usd_btc_p2_before'] = "Dollars have an unlimited supply, which means more can be printed at any time.";
data['inflation_usd_btc_p2_link'] = "Bitcoin is scarce";
data['inflation_usd_btc_p2_after'] = "because it has a maximum supply of 21 million Bitcoin. No one can print more Bitcoin.";
data['inflation_usd_btc_p3'] = "Historically, Bitcoin has gained purchasing power over time while the dollar has lost it. Many people use Bitcoin as their long-term savings account: money that they can leave alone and let grow for several years.";
data['inflation_usd_btc_p4'] = "Would you rather save in dollars that buy you less over time? Or save in Bitcoin that has historically bought you more over time?";

// Section: "Bitcoin is also a tool for freedom"
data['inflation_usd_freedom_h2'] = "Bitcoin is also a tool for freedom";
data['inflation_usd_freedom_p1'] = "The Bitcoin network isn't owned by anyone. It isn't controlled by any government or corporation. It's designed to uphold your freedom and protect your money.";
data['inflation_usd_freedom_p2'] = "People around the world are already using Bitcoin to protect their freedom — even when their own governments refused to help or tried to stop them.";

// Property cards
data['inflation_freedom_decentralized_title'] = "Decentralized";
data['inflation_freedom_decentralized_desc'] = "No single entity — no government, no corporation — controls Bitcoin.";
data['inflation_freedom_permissionless_title'] = "Permissionless";
data['inflation_freedom_permissionless_desc'] = "Anyone, anywhere can join the network. No one can stop you.";
data['inflation_freedom_sovereign_title'] = "Sovereign";
data['inflation_freedom_sovereign_desc'] = "A new system, independent from politicians and their broken promises.";
data['inflation_freedom_scarce_title'] = "Scarce";
data['inflation_freedom_scarce_desc'] = "There will only ever be 21 million Bitcoin. No one can print more.";
data['inflation_freedom_learn_more'] = "Learn more →";

// Story cards
data['inflation_story_canada_title'] = "Canada";
data['inflation_story_canada_desc'] = "Workers used Bitcoin to access money after their bank accounts were frozen.";
data['inflation_story_nigeria_title'] = "Nigeria";
data['inflation_story_nigeria_desc'] = "Protesters used Bitcoin to fund their movement after banks cut them off.";
data['inflation_story_texas_title'] = "Texas";
data['inflation_story_texas_desc'] = "Bitcoin mining helped keep the lights on during a massive storm.";
data['inflation_story_pennsylvania_title'] = "Pennsylvania";
data['inflation_story_pennsylvania_desc'] = "Bitcoin mining cleaned up coal waste the government refused to handle.";

// Nav bar
data['inflation_nav_learn'] = "Learn";
data['inflation_nav_get_involved'] = "Get Involved";
data['inflation_nav_about'] = "About";

fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
console.log('✅ Updated inflation_en.json with revamp keys');

# Contributing to bitcoin.rocks
Thank you for considering contributing to bitcoin.rocks! Please review this document before suggesting new content or submitting a pull request.

## Non-technical contributions
If you are not technical, you can still contribute! You can [suggest new content](https://github.com/sovenor/bitcoin-rocks/discussions/new?category=ideas) like a new homepage section, adding a new link to an existing section, or an entirely new page.

You can also help by:
- sharing [bitcoin.rocks](https://bitcoin.rocks) when someone asks you about bitcoin
- putting our free [bitcoin stickers](https://bitcoin.rocks/stickers) in public
- reporting a bug, typo, or other issue [here](https://github.com/sovenor/bitcoin-rocks/issues/new)

## Coding new features
Before you spend your time working on a significant new feature, please first create [a feature request.](https://github.com/sovenor/bitcoin-rocks/discussions/new?category=ideas)

This will protect you from having a pull request declined after investing a lot of time and effort into a new feature.

If you wish to work on a translation, please follow our Translations guide below.

## Translations
All contributions are welcome, but we currently have a strong focus on translations. Here's a simple guide to get started on your translation:

### 0. Check to see if your language is already in process
Check the [branches tracker](https://github.com/sovenor/bitcoin-rocks/branches) to see if someone is already translating content in your language. If so, you can proceed to step 3 working within the existing branch. If not, proceed to step 1.

### 1. Fork and create a branch
Fork the [main branch of the repo](https://github.com/sovenor/bitcoin-rocks/) and create a branch with the name of the language you wish to translate.

### 2. Duplicate the entire "en" folder
The default language on bitcoin.rocks is English, so all of the master content lives within the "en" folder.

Duplicate this folder and rename it with the [2 letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) that corresponds to your language.

### 3. Translate the content within the .html files
Now you can begin to translate the content from English to your preferred language. Simply swap the English content within the .html files with the content in your preferred language.

Please do not change any of the actual HTML content, classes, IDs, or CSS styling. Only replace the English text with your translated text. Links do not need to be changed. The server will automatically redirect links to the user's browser language.

In order to have your translation approved and merged into the main branch, the minimum required pages listed below must be translated.

Remember, you don't have to translate all of these pages yourself. You can translate whatever amount you wish and invite other people to translate the pages in your GitHub branch. When all of the minimum required pages have been translated, submit a pull request to launch the new language.

#### Minimum required pages
/404.html  
/bank-runs.html  
/bitcoin-vs-cbdc.html  
/bitcoin-vs-gold.html  
/compound-inflation-calculator.html (including the output text from the calculator)
/get-involved.html  
/index.html (homepage)  
/inflation.html (You only need to translate the currency sections that a user who speaks your language would be interested in.)  
/lightning.html  
/stickers.html  
/sticker-files/index.html  
/sticker-files/[your-language]/index.html  
/wallets.html  

#### Additional pages for complete translation
These pages are not required to launch a new language, but all of them would add value to users. Translate all of these for a complete translation, or just tackle one section at a time.

##### Business pages
/business/accounting.html  
/business/faq.html  
/business/guide.html  
/business/index.html  
/business/kit-success.html  
/business/kit.html  
/business/maps-success.html  
/business/maps.html  
/business/sticker-language-success.html  
/business/sticker-success.html  
/business/stickers.html  
/business/wallets.html  
/business/why.html  

##### Nostr pages
/nostr/index.html  
/nostr/what-is-nostr.html  

##### Other pages
/postcards.html

##### Success pages
/postcard-success.html  
/sticker-language-success.html  
/sticker-success.html  

### 4. Submit a pull request
After you've finished your translation and pushed your changes to your branch (or submitted them to the language branch created by someone else), it's time to submit a pull request.

Currently, all pull requests are reviewed by [sovenor.](https://github.com/sovenor) If your pull request is approved, the content will go live on the website.

## Questions
If you have questions, please submit them [here.](https://github.com/sovenor/bitcoin-rocks/discussions/new?category=q-a)

Thank you for your interest in contributing to bitcoin.rocks! Together, we can improve this global, educational website and help spread bitcoin.

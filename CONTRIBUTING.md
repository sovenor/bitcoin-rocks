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
Before starting work on a translation, check the [open translation discussions](https://github.com/sovenor/bitcoin-rocks/discussions/categories/translations) to see if other people are already translating content into your language. If a discussion for your language already exists, join that discussion and let them know you'd like to help translate.

If a discussion doesn't exist for your language, [make a new one.](https://github.com/sovenor/bitcoin-rocks/discussions/new?category=translations)

### To translate, you will need...
- A laptop or desktop computer
- the [GitHub Desktop app](https://desktop.github.com/)
- [Atom text editor](https://atom-editor.cc/) (or any other text editor)

Let's get started!

1. Go to https://github.com/sovenor/bitcoin-rocks
2. Click the "Fork" button at the top of the page.
![Fork button image](https://bitcoin.rocks/img/contributing/translation-fork-button.png)
3. Follow the steps and click the green button to create your fork.
4. Open the [GitHub Desktop app](https://desktop.github.com/)
5. Go to File > Clone Repository...
6. Choose bitcoin-rocks from the list and click the blue "Clone" button. Make note of where the local repository files will be stored and change that location if necessary.

The files are now on your computer and can be edited.

1. Go to your local files and open bitcoin-rocks > i18n
2. Duplicate the "en" folder.
3. Rename the duplicated folder to the [2 letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) that corresponds to your language. For example, if you are translating into French you can rename it to "fr".

Now you can begin translating the website content from English to your language.

1. Open the files in [Atom text editor](https://atom-editor.cc/) (or any other text editor)
2. Go to bitcoin-rocks > i18n > "your language code" and choose the page you want to translate.
3. At the top of the file, change the "last-updated" date to today's date in YYYY-MM-DD format. Change the "locale" to to the [2 letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) that corresponds to your language. You can also optionally add your name in the list of authors.
4. Replace the content on the right side of the files with the translated text
![Translation editing image](https://bitcoin.rocks/img/contributing/translation-editing.png)
Do not change the content on the left side of the files. Do not delete any quotation marks or commas.
5. When a file has been translated, rename it so it matches the [2 letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) that corresponds to your language. For example, if the file was previously "404_en.json" and you are translating it into French, it should be renamed to "404_fr.json"
6. IMPORTANT: If you see a dynamic variable like "$1" within the text, please use it in your translation. For example, "inflation_usd_s1_c3" in the inflation file uses the dynamic variable "$1" to calculate the years since 2020.

Once you've completed at least one page of translations, you can submit it for approval.

1. Open the GitHub Desktop app.
2. In the bottom left, enter a short title (summary) and a description of what you did. For example, your title could be "Translated 404_fr.json"
3. Click "Commit to main"
4. Click "Push to origin"

Your changes are now saved on GitHub in your forked repo. Now it's time to submit a pull request so your changes can be applied to the live website!

1. Go back to https://github.com/sovenor/bitcoin-rocks
2. In the yellow banner above the list of files, click the green "Compare & pull request" button.
3. Follow the steps to create your pull request and make sure "Allow edits from maintainers" is enabled.
4. When you're ready, click "Create Pull Request" to submit it for review.

One of the maintainers will review your translations and make edits if necessary. If approved, your translations will be accessible on the live website! You will be notified in GitHub when your translations are approved.

Thank you for helping to spread Bitcoin adoption by translating our content into more languages!

## Questions
If you have questions, please submit them [here.](https://github.com/sovenor/bitcoin-rocks/discussions/new?category=q-a)

Thank you for your interest in contributing to bitcoin.rocks! Together, we can improve this global, educational website and help spread bitcoin.

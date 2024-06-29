# bitcoin.rocks
## Mission
The mission of bitcoin.rocks is to accelerate bitcoin adoption through education.

We accomplish this with several free resources:

- [An educational website](https://bitcoin.rocks) designed for people who are new to bitcoin.
- [Bitcoin Stickers](https://bitcoin.rocks/stickers) that enable you to leave an orange pill in public.
- [Bitcoin Postcards](https://bitcoin.rocks/postcards) that enable you to orange pill someone you know via snail mail.
- [Bitcoin Business Kits](https://bitcoin.rocks/business/kit) that enable you to get a local business to accept bitcoin payments.

## Website Overview
bitcoin.rocks is an educational website designed for people who are new to bitcoin. The website was founded in 2022 as a "first link" to send to people who ask you about bitcoin.

The main focus of the website is [the homepage](https://bitcoin.rocks) which links out to a variety of internal and external sources depending on the user's interests.

You can view the website here: https://bitcoin.rocks

## Website Architecture
The website is written in raw HTML / CSS / JS. This eliminates the burden of a CMS.

All text content is localized using jquery.i18n translation strings. You can see which translations are in progress in the [Translations forum.](https://github.com/sovenor/bitcoin-rocks/discussions/categories/translations) The website will dynamically serve the proper content depending on the user's browser language.

The Apache server handles redirects and removing ".html" from the end of links in a simple .htaccess file. The latest merged code is uploaded on https://bitcoin.rocks

## License
This project is licensed under the MIT License. You are free to take any of the content within and use it for your own purposes. The goal is to make the project more public and open over time.

## Contribute
You can contribute to bitcoin.rocks even if you aren't a programmer! We currently have a strong focus on translations, but there are many ways you can help accelerate bitcoin adoption.

Please read our [Contributor Guide](https://github.com/sovenor/bitcoin-rocks/blob/main/CONTRIBUTING.md) to learn more.


# new32 Cosmetic and Family Dentistry

Production site for [new32dental.com](https://new32dental.com/) — multi-page v5 app at domain-root URLs.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

Open the app at `http://localhost:5173/`.

Build output lands in `docs/` (`npm run build`). Deploy the built files **and** `api/` to DreamHost; Apache `.htaccess` handles SPA deep links and legacy WordPress redirects.

## Contact form

The contact form posts to a DreamHost PHP endpoint and emails the office inbox via Gmail SMTP (OAuth2). Full setup (Google Cloud, refresh token, DreamHost `config.php`, testing): see [CONTACT_FORM.md](CONTACT_FORM.md).

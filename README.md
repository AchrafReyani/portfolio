# Portfolio

This is a multilingual portfolio web app built with Next.js, TypeScript, Tailwind CSS, and Next-Intl for internationalization. It features a contact form with email sending, project showcase, downloadable resume, and language switching.

## Features

- Multilingual support (English, Japanese, Dutch by default)
- Responsive design with Tailwind CSS
- Contact form with file attachment and email sending (via SMTP)
- Downloadable resume per language
- Easy language switching
- Project portfolio section

## Getting Started

### 1. Clone the repository and Install Dependencies

clone the github repository
```sh
git clone https://github.com/AchrafReyani/portfolio.git
```

move into the project directory
```sh
cd portfolio
```

install dependencies
```sh
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your own SMTP and contact details:

```sh
cp .env.example .env
```

Edit `.env`:

```
SMTP_HOST=your-smtp-host
SMTP_PORT=your-smtp-port
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password

NEXT_PUBLIC_MY_EMAIL=your@email.com
NEXT_PUBLIC_MY_GITHUB=https://github.com/your-github
```

### 3. Run the Development Server

```sh
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Personalization

### Update Your Information

- **Contact Info:**  
  Edit your email and GitHub in the `.env` file.
- **Address:**  
  Change the `"my_address"` field in each language file in [`messages/`](messages/) (e.g., [`messages/en.json`](messages/en.json)).
- **Resume:**  
  Place your PDF resume(s) in `public/docs/` as `resume-en.pdf`, `resume-ja.pdf`, etc., matching your language codes.

### Add or Remove Languages

1. **Add a Language:**
   - Add a new JSON file in [`messages/`](messages/) (e.g., `fr.json` for French).
   - Translate all fields in the new file.
   - Add the language code to the `locales` array in [`src/i18n/routing.ts`](src/i18n/routing.ts):

     ```ts
     export const routing = defineRouting({
       locales: ['en', 'ja', 'nl', 'fr'], // add your code here
       defaultLocale: 'en'
     });
     ```

2. **Remove a Language:**
   - Remove the language code from the `locales` array in [`src/i18n/routing.ts`](src/i18n/routing.ts).
   - Optionally, delete the corresponding JSON file in [`messages/`](messages/).

### Customize Projects

Edit the project list in [`src/components/Portfolio.tsx`](src/components/Portfolio.tsx) and update translations in the `Portfolio` section of each language file.

## Testing

Run all tests:

```sh
npm test
```

## Build for Production

```sh
npm run build
npm start
```

---

Feel free to fork and adapt this portfolio for your own use!
# Customization Guide

This document covers the key customization points for this portfolio template.

## 1. Adding or Removing Languages

### Supported Languages
Currently supported locales: **English (en)**, **Japanese (ja)**, **Dutch (nl)**, **Arabic (ar)**

### Adding a New Language

1. **Create a translation file** in `messages/` named `{locale}.json` (e.g., `messages/fr.json` for French)
   - Copy the structure from `messages/en.json`
   - Translate all text values

2. **Update the routing** in `src/i18n/routing.ts`:
   ```typescript
   export const routing = defineRouting({
     locales: ['en', 'ja', 'nl', 'ar', 'fr'], // Add your locale
     defaultLocale: 'en'
   });
   ```

3. **Test the language switcher** - your new language should appear automatically

### Removing a Language
Simply remove the locale from the `locales` array in `src/i18n/routing.ts`

---

## 2. Resume Files

### About Resume Files
Resumes are stored in `public/resumes/` with the naming pattern: `resume-{locale}.pdf`

**Current resumes:**
- `resume-en.pdf` - English
- `resume-ja.pdf` - Japanese
- `resume-nl.pdf` - Dutch

### Managing Resume Availability

Edit `src/lib/availableResumes.ts` to specify which locales have resume files:

```typescript
export const AVAILABLE_RESUME_LOCALES = ['en', 'ja', 'nl'] as const;
```

**Important:** The download button only appears for locales listed in `AVAILABLE_RESUME_LOCALES`. If you add a new language translation but don't have a resume, the button will automatically hide for that language.

### Adding a Resume for a New Language

1. Create the PDF file: `public/resumes/resume-{locale}.pdf`
2. Update `AVAILABLE_RESUME_LOCALES` in `src/lib/availableResumes.ts`:
   ```typescript
   export const AVAILABLE_RESUME_LOCALES = ['en', 'ja', 'nl', 'ar'] as const;
   ```

---

## 3. Language-Specific Favicons

### About Favicons
Favicons (the icon displayed in the browser tab) can be customized per language using the `FaviconThemeSwitcher` component in `src/components/common/FaviconThemeSwitcher.tsx`.

### Customizing Favicons

The favicons should be placed in `public/` with a naming convention. Edit `FaviconThemeSwitcher.tsx` to map locales to favicon paths:

```typescript
const faviconMap: Record<string, string> = {
  'en': '/favicon-en.ico',
  'ja': '/favicon-ja.ico',
  'nl': '/favicon-nl.ico',
  'ar': '/favicon-ar.ico',
};
```

Replace `/path/to/favicon` with your actual favicon paths relative to `public/`.

---

## 4. Styling & Theme

### Button Styling
All primary button styles are defined in a single file to ensure consistency:

**File:** `src/styles/componentStyles.ts`

Contains:
- `buttonPrimaryBase` - Base styling for all primary buttons
- `buttonPrimaryLarge` - Large action buttons (Download, View Source)
- `buttonPrimaryCircular` - Circular scroll buttons
- `buttonPrimary404` - 404 page button

To update button styling globally, edit these constants.

### Navigation Styling
Navigation item styles are defined in `src/components/sections/Header/sections.ts`:

- `navItemBaseClass` - Inactive nav items
- `navItemActiveClass` - Active/selected nav items

---

## 5. Contact Form

### SMTP Configuration
The contact form sends emails via SMTP. Configure in `.env`:

```
SMTP_HOST=your-smtp-host
SMTP_PORT=your-smtp-port
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
```

### Contact Information
Contact details are configured in `src/components/sections/Contact/ContactInfo.tsx`:
- Email: Uses `NEXT_PUBLIC_MY_EMAIL`
- GitHub: Uses `NEXT_PUBLIC_MY_GITHUB`
- Address: Hardcoded in ContactContainer (currently "Tokyo, Japan")

---

## 6. Project Portfolio

### Adding Projects
Projects are defined in `src/components/sections/Portfolio/Portfolio.tsx`. The current example uses a single hardcoded project.

To add multiple projects, consider:
1. Creating a `projects.ts` file with project data
2. Looping through projects in the Portfolio component
3. Or fetching from an API/CMS

---

## Need Help?
Refer to the main [README.md](../README.md) for setup instructions and general information.

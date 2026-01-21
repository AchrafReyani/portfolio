# Quick Setup Guide

## Prerequisites
- Node.js 18+
- npm or yarn

## Installation Steps

### 1. Clone & Install
```bash
git clone https://github.com/AchrafReyani/portfolio.git
cd portfolio
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Fill in your details:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

NEXT_PUBLIC_MY_EMAIL=your-email@gmail.com
NEXT_PUBLIC_MY_GITHUB=https://github.com/your-username
```

### 3. Add Your Resume Files
Place your resume files in `public/resumes/`:
- `resume-en.pdf` (English)
- `resume-ja.pdf` (Japanese)
- `resume-nl.pdf` (Dutch)

Then update `src/lib/availableResumes.ts` with your supported languages.

### 4. Customize Content
- **Messages/Translations:** Edit files in `messages/` folder
- **About Section:** Update `src/components/sections/About/AboutContent.tsx`
- **Contact Info:** Update `src/components/sections/Contact/ContactInfo.tsx`
- **Portfolio Project:** Edit `src/components/sections/Portfolio/Portfolio.tsx`

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## For More Details
See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed customization instructions.

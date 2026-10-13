# Sujal Singhal — Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. It is a static site: no backend, database, or API keys.

## 1. Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run typecheck  # TypeScript only
```

## 2. Add your resume

The Resume button on the hero is rendered **only if** the file exists at build time, so there is never a broken download link.

1. Copy your PDF to `public/Sujal_Singhal_Resume.pdf` (exact name).
2. Restart `npm run dev` (or rebuild). The button appears automatically.

## 3. Project structure

```
src/
  data/            <- all content lives here
    profile.ts       name, links, about text, education, certifications
    skills.ts        skill categories
    experience.ts    internships
    projects.ts      projects (edit this to add demos/screenshots)
  components/      <- presentation only
    Navbar, Hero, About, Skills, Experience, Projects,
    Education, Certifications, Contact, Footer, ProjectCard
    ui/              Section, ExternalLink, PipelineFlow, icons
  types.ts
public/            favicon + your resume PDF
```

## 4. Update projects later

Edit `src/data/projects.ts`:

- **Live demo:** add `liveUrl: 'https://your-demo.example'`. A "Live demo" button appears automatically; with no `liveUrl`, no button is shown.
- **Screenshots:** put images in `public/screenshots/` and add
  `screenshots: [{ src: '/screenshots/home.png', alt: 'Home page' }]`.
- **Repository link:** change `repoUrl` (and `repoLabel` if you like).
- **New project:** copy an existing object in the array.

Only list technologies you have confirmed in the repository.

## 5. Push to GitHub

1. On github.com, click **New repository**, name it (e.g. `portfolio`), leave it empty (no README), and create it.
2. In this folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/sujalsinghal25/portfolio.git
git push -u origin main
```

Make sure `public/Sujal_Singhal_Resume.pdf` is committed if you want the resume button on the deployed site.

## 6. Deploy on Vercel

1. Sign in at vercel.com with your GitHub account.
2. **Add New → Project**, then import the `portfolio` repository.
3. Vercel detects Vite automatically. Confirm: Build command `npm run build`, Output directory `dist`.
4. Click **Deploy**. When it finishes, Vercel shows your public URL (for example `https://portfolio-xxxx.vercel.app`). Every push to `main` redeploys automatically.
5. Optional: rename the project or add a custom domain under **Settings → Domains**.

## 7. Add the portfolio URL to your resume

Once the site is live, copy the URL from Vercel and add it to the contact line of your resume (next to LinkedIn and GitHub), then re-export the PDF and replace `public/Sujal_Singhal_Resume.pdf` so the site and the resume stay in sync.

## Notes

- GitHub and LinkedIn icons are inline SVGs so the build does not depend on brand icons in `lucide-react`.
- Animations are minimal and disabled under `prefers-reduced-motion`.
- SEO metadata and JSON-LD are in `index.html`. After deployment you can add an `og:url` tag with your live URL.

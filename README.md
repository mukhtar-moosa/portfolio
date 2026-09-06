# Developer Portfolio

A modern, minimal, dark-themed developer/AI portfolio built with Next.js (App
Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

This is a **content-free foundation** — no personal info, projects, or bio
are included. Every editable value lives in `src/data/*.ts` as a
`[bracketed placeholder]` for you to fill in.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — scroll reveals, hero entrance, mobile menu transitions
- **lucide-react** — icons

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Other commands:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Where to add your content

Everything you need to customize lives in one place — you should not need to
touch component code just to add your own info.

| File                        | What it controls                                    |
| ---------------------------- | ---------------------------------------------------- |
| `src/data/site.ts`           | Name, title, tagline, email, resume/profile paths, SEO |
| `src/data/navigation.ts`     | Navbar / mobile menu links                            |
| `src/data/social.ts`         | Social icons + URLs (GitHub, LinkedIn, etc.)          |
| `src/data/skills.ts`         | Skill categories + individual skills                  |
| `src/data/projects.ts`       | Project cards (title, description, tags, links)       |
| `src/data/experience.ts`     | Work + education timeline                             |
| `src/data/learning.ts`       | "Currently learning" cards                            |

### Assets

| Path                             | Purpose                                   |
| --------------------------------- | ------------------------------------------ |
| `public/resume/resume.pdf`        | Replace with your real resume              |
| `public/images/profile/`          | Add your profile photo                     |
| `public/images/projects/`         | Add project screenshots/covers             |
| `public/images/og-image.png`      | Add a 1200×630 social share image          |

Placeholder images currently render as bordered boxes with an icon and the
expected file path — once you add real files, swap those `<div>` placeholders
for Next.js `<Image />` in `About.tsx` and `ProjectCard.tsx`.

## Folder structure

```
src/
  app/
    layout.tsx        # Root layout: fonts, metadata, Navbar/Footer
    page.tsx           # Composes all sections in order
    globals.css         # Design tokens (CSS vars) + base styles
    sitemap.ts          # Auto-generated sitemap.xml
    robots.ts           # Auto-generated robots.txt
    not-found.tsx        # Themed 404 page
  components/
    layout/
      Navbar.tsx
      MobileNav.tsx
      Footer.tsx
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      ProjectCard.tsx
      Experience.tsx
      CurrentlyLearning.tsx
      Contact.tsx
    ui/
      Button.tsx
      Badge.tsx
      Card.tsx
      Container.tsx
      SectionHeading.tsx
      AnimatedSection.tsx
      AnimatedItem.tsx
  data/                  # <-- your editable content lives here
    site.ts
    navigation.ts
    social.ts
    skills.ts
    projects.ts
    experience.ts
    learning.ts
  lib/
    utils.ts             # cn() className helper
  types/
    index.ts             # Shared TypeScript interfaces
public/
  resume/
  images/
    profile/
    projects/
```

## Design system

Colors, fonts, and a few keyframes are defined as design tokens:

- **Colors** — CSS variables in `src/app/globals.css` (`--background`,
  `--surface`, `--border`, `--foreground`, `--muted`, `--accent`,
  `--accent-secondary`), wired into Tailwind in `tailwind.config.ts`. Change
  the variable values to retheme the entire site.
- **Fonts** — loaded via `next/font/google` in `src/app/layout.tsx`:
  Space Grotesk (display/headings), Inter (body), JetBrains Mono
  (labels, code-flavored accents).
- **Motion** — section reveals via `AnimatedSection` / `AnimatedItem`
  (Framer Motion `whileInView`), respecting `prefers-reduced-motion`.

## Notes

- No backend/database — this is a static marketing/portfolio site.
- The contact section links to `mailto:` and your resume/social URLs; wire up
  a form or service later if you want a real contact form.
- All placeholder copy is wrapped in `[brackets]` — search the `src/data`
  folder for `[` to find everything left to fill in.

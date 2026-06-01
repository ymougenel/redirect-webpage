# CLAUDE.md

## Project

Personal portfolio/redirect page for Yann Mougenel. Angular 20 SPA displaying a responsive grid of projects with links to live sites and GitHub repos.

The Angular app lives in `redirect-app/`. All commands below run from that directory.

## Commands

```bash
npm start          # dev server → http://localhost:4200
npm run build      # production build → dist/
npm run watch      # watch mode (dev config)
npm test           # Karma + Jasmine unit tests
npm audit          # check dependency vulnerabilities
```

## Project structure

```
redirect-app/src/app/
├── app.ts / app.html          # root component — header + project grid (*ngFor)
├── app-module.ts              # NgModule (declares App, Header, ProjectCard)
├── project.model.ts           # Project interface (data shape)
├── projects.data.ts           # static array of projects (the only data source)
├── header/                    # nav bar component
└── project-card/              # card component — @Input() project: Project
```

## Stack

- **Angular 20** — module-based (non-standalone), decorator syntax, zoneless change detection, signal-based reactivity
- **Tailwind CSS 4.2** — utility classes; custom colors: primary `#57a14c`, secondary `#34383a`
- **TypeScript 5.9** — strict mode, ES2022 target
- **Karma + Jasmine** — unit tests
- **PostCSS + autoprefixer** — CSS pipeline

Component selector prefix: `my-`

## Code style

- **Prettier**: printWidth 100, singleQuote, angular parser for HTML files
- **TypeScript**: strict, noImplicitOverride, noImplicitReturns, noFallthroughCasesInSwitch
- **Angular templates**: strictTemplates, strictInjectionParameters enabled

## Known dependency state

`redirect-app/package.json` has npm `overrides` forcing `vite ^7.3.5` and `picomatch ^4.0.4` to patch vulnerabilities that `@angular/build` pins to older exact versions.

7 remaining high-severity audit findings (Angular XSS [GHSA-g93w-mfhg-p222]) are blocked on Angular 20.3.18+ — run `npm update` once that release is published.

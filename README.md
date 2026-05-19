# react01

A small React learning app — a social-network-style UI with **Profile / Dialogs / News / Music / Settings** tabs.
The original 2019 codebase (CRA + React 16 + react-router v5) has been fully migrated to a modern stack.

## Stack

| Layer              | Technology                  |
| ------------------ | --------------------------- |
| Build / Dev-server | Vite 6                      |
| UI                 | React 19                    |
| Routing            | react-router-dom 7          |
| Styling            | CSS Modules                 |
| Lint               | ESLint 9 (flat config)      |
| Format             | Prettier 3                  |
| Tests              | Vitest 3 + Testing Library  |
| Test environment   | jsdom                       |

**Security:** `npm audit` → **0 vulnerabilities** (down from 224 in the original CRA stack, 19 of them critical).

## Requirements

- Node.js ≥ 20
- npm ≥ 10

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Command                | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Vite dev server with HMR on port 3000      |
| `npm run build`        | Production build into `dist/`              |
| `npm run preview`      | Preview the production build locally       |
| `npm run lint`         | Run ESLint                                 |
| `npm run lint:fix`     | Auto-fix ESLint issues                     |
| `npm run format`       | Format files with Prettier                 |
| `npm run format:check` | Check formatting (for CI)                  |
| `npm run test`         | Vitest in watch mode                       |
| `npm run test:run`     | Vitest single run (for CI)                 |
| `npm run test:ui`      | Vitest UI                                  |
| `npm run coverage`     | Coverage report                            |

## Project structure

```
react01/
├── index.html              # Vite entry point
├── public/                 # static assets (favicon, manifest, robots)
├── src/
│   ├── main.jsx            # bootstrap (createRoot)
│   ├── App.jsx             # router + layout
│   ├── index.css           # global styles
│   ├── App.css
│   ├── logo.svg
│   ├── components/
│   │   ├── Header/
│   │   ├── Nav/
│   │   ├── Profile/
│   │   │   └── MyPosts/
│   │   │       └── Post/
│   │   ├── Dialogs/
│   │   ├── News/
│   │   ├── Music/
│   │   └── Settings/
│   └── test/
│       └── setup.js        # Vitest + jest-dom matchers
├── eslint.config.js        # ESLint flat config
├── .prettierrc.json
├── vite.config.js          # Vite + test section
└── package.json
```

## Testing

Tests live next to components as `*.test.jsx`. The setup file [src/test/setup.js](src/test/setup.js) registers `@testing-library/jest-dom` matchers and calls `cleanup()` after each test.

```bash
npm run test          # watch mode
npm run test:run      # single run
```

Covered:

- `Post` — message rendering, like counter, image `alt` attribute
- `Navbar` — all five links render, active class on the current route

## What changed compared to the original

- `react-scripts` (CRA, deprecated) → **Vite**
- React 16 → 19, `ReactDOM.render` → `createRoot`
- `react-router-dom` 5 → 7 (`<Switch>` / `component={...}` → `<Routes>` / `element={...}`)
- Removed `serviceWorker.js` (legacy CRA pattern)
- Fixed folder typo: `componets/` → `components/`
- Fixed `class` → `className` in JSX, removed a leftover `debugger;`
- Replaced dead external image URLs (Instagram CDN, photostocky, etc.) with `picsum.photos`
- `NavLink activeClassName` → `className` as a function (RR v7 API)
- Added ESLint, Prettier, Vitest

## License

Learning project — no license.

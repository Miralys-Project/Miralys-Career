

# Miralys Careers

A professional careers website for the Miralys Project, built with Vite, React, TypeScript, Bulma, Font Awesome, and i18n (French/English).

## Features
- Job listings: Developer, System & Network Admin, Designer, GFX, Project Manager, Video Editor, Community Manager, Animator, Moderator, Staff Manager, Animator Manager
- French/English language support
- Modern, professional UI using Bulma and Font Awesome
- Responsive design

## Getting Started
1. Install dependencies:
  ```sh
  pnpm install
  ```
2. Start the development server:
  ```sh
  pnpm run dev
  ```

## Tech Stack
- Vite
- React
- TypeScript
- Bulma (CSS framework)
- Font Awesome (icons)
- i18next (internationalization)

## Customization
- Update job listings in `src/data/jobs.ts`
- Add translations in `src/locales/en.json` and `src/locales/fr.json`
- Style components using Bulma classes in your React components

---

© 2025 Miralys Project

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

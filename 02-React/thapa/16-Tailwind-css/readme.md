

#### Installation
```bash
npm install -D tailwindcss postcss autoprefixer
```
```bash
npx tailwindcss init -p

or 

bun tailwindcss init -p

```

#### tailwind.config.js
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### src/index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
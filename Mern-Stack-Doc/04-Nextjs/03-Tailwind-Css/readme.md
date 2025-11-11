

```bash
npm install tailwindcss/postcss postcss
```

#### Create Folder in root directory (postcss.config.mjs)
```bash
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

#### Goto globalcss file and Use
```bash
@import "tailwindcss";
```





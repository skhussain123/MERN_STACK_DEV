


## What is React JS
* React is a JavaScript library used to build user interfaces (UI), especially for single-page applications (SPAs).
Developed and maintained by Meta (Facebook).

1. React is javascript library
2. A javascript library for building user interfaces
3. so this is used to single application (Spa)
4. It follows a component-based architecture.


* Latest version: 19.1 
* 18.react.dev
* 17.react.dev
* 16.react.dev
* 15.react.dev

* if you want to upate or switch react version you can do that

package-lock.json
```bash
"dependencies": {
        "react": "^19.1.0",
        "react-dom": "^19.1.0"
      },
```

update version and delete node_module folder me then run this command

```bash
npm install      
```



### React History
| Year          | Event                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **2011**      | React was created internally at Facebook by **Jordan Walke**, a software engineer.                      |
| **2013**      | React was open-sourced at **JSConf US**.                                                                |
| **2015**      | **React Native** was introduced (for mobile apps).                                                      |
| **2016**      | React fiber (complete rewrite) was announced.                                                           |
| **2017**      | React Fiber became the core algorithm.                                                                  |
| **2020**      | React introduced **Concurrent Mode (experimental)** and **React Server Components**.                    |
| **2022**      | **React 18** was released with features like automatic batching, transitions, and concurrent rendering. |
| **2024–2025** | Focus on **React Server Components**, **bundler support**, and **better developer experience**.         |


### Why React is Popular

* Reusable components.
* Rich ecosystem (Next.js, Redux, React Router).
* Strong community and support.
* fast beause if virtual DOM
* Works well with APIs and modern backend stacks (like Node.js, Django, Laravel).
* Maintained by a big tech company (Meta).


### Project Need Software
* Vs code
* Node js (if you install node npm and npx automatic intsall)

### React Project Create Method
* Vite
* Create React App (CRA)

### Create React App (CRA)
```bash
npx create-react-app@latest my-app
```

### Create Project

* Using Vite
```bash
npm create vite  or npm create vite@latest my-app --template react

-->react-project
-->React
-->Javascript
```

```bash
cd react-project
npm install
npm run dev
```
*  Local:   http://localhost:5173/


### Why Vite for React Setup
1. Fast Development Server – Server instantly start hota hai.
2. Hot Module Replacement (HMR) – Component save karte hi turant update hota hai.
3. Fast Production Build – Rollup ki wajah se optimized and fast build hoti hai.
4. Minimal Configuration – Simple vite.config.js file se easy setup.
5. Built-in TypeScript Support – TypeScript bina config ke support karta hai.
6. Modern ES Modules Support – Latest browser features ka use karta hai.
7. Better Developer Experience (DX) – Error messages browser mein achhe se dikhte hain.
8. Lightweight Template – Bloat-free, clean aur simple starter code milta hai.
9. Easy Integration with Tools – Tailwind CSS, React Router, Redux, ESLint waqera easily integrate ho jate hain.
10. Environment Variables Support – .env files ka support built-in hai.
11. CSS Modules Support – CSS modules bina kisi extra config ke kaam karte hain.
12. Faster Rebuilds – Sirf changed files rebuild hoti hain, pura project nahi.
13. Open-source & Actively Maintained – Large community aur regular updates.


### React + Vite: First File Execution Flow
#### 1. index.html (Public Entry Point)

1. Ye file Vite ka starting point hoti hai.
2. Located at project root (not in public/ folder like CRA).
3. Is file me <div id="root"></div> hota hai jahan React app mount hota hai.
4. Isme type="module" ke sath ek JS file import hoti hai:

```bash
<!-- index.html -->
<script type="module" src="/src/main.jsx"></script>
```

#### 2. main.jsx or main.tsx
* Ye file pehla JavaScript entry point hai.
* Is file me React app render hota hai:
```bash
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### 3. App.jsx
* Ye React component hota hai jo initial UI define karta hai.
* Iske andar aur bhi components import ho sakte hain.
```bash
// src/App.jsx
function App() {
  return (
    <div>
      <h1>Hello Vite + React!</h1>
    </div>
  );
}

export default App;
```

#### 4. Other Components
* App.jsx ke andar chhote components hote hain (e.g. Navbar, Footer, Pages).
* In sabka structure src/ ke andar hota hai.

```bash
index.html
   ↓
main.jsx (entry point for JS)
   ↓
App.jsx (root component)
   ↓
Other components
```


### package.json

Ye wo file hoti hai jahan project me mojood libraries ki versions ki information hoti hai.  
Is file me project ka **name**, **version**, aur **scripts** bhi defined hote hain.  
React + Vite project me ye file batati hai ke kon kon se tools aur packages use ho rahe hain.


### package-lock.json 
package-lock.json wo file hoti hai jo aapke project ke exact dependencies (aur unki sub-dependencies) ko lock kar deti hai — taake har developer ke system par same version install ho.
package-lock.json library ki details rakhti ha


### eslint.config.js
eslint.config.js file ESLint ki configuration file hoti hai — jo batati hai ke aapke React (ya kisi JS) project me code kis rule ke mutabiq likhna chahiye.

| 🔢 No. | 🔍 Purpose                                                                  |
| ------ | --------------------------------------------------------------------------- |
| 1️⃣    | Code me **errors aur bugs** dhoondhna (like unused variables, wrong syntax) |
| 2️⃣    | **Code style maintain** karna (e.g., semicolons, spacing, quotes)           |
| 3️⃣    | JavaScript / React / JSX / TypeScript rules define karna                    |
| 4️⃣    | Team ke sab developers ke code ko **consistent** rakhna                     |
| 5️⃣    | Tools jaise VS Code ke sath milke **live linting** provide karna            |


### vite.config.js – Vite Ka Configuration File
vite.config.js wo file hoti hai jo Vite bundler ko batati hai ke project ko kaise build, serve, aur configure karna hai.
Ye file custom settings, plugins, aliases, environment variables, waghera ke liye use hoti hai.

```bash
| 🔢 No. | 📌 Purpose                                                |
| ------ | --------------------------------------------------------- |
| 1️⃣    | Vite ko customize karna (build, server, plugins, etc.)    |
| 2️⃣    | React, Vue, Svelte jaise frameworks ke liye plugin lagana |
| 3️⃣    | Alias set karna (e.g., `@/components`)                    |
| 4️⃣    | Environment variables ka support dena                     |
| 5️⃣    | CSS preprocessors (Sass, PostCSS) ka config dena          |
```

### node_modules Folder ?
node_modules wo folder hota hai jahan npm aapke project ke saare installed packages/libraries ko download karta hai.

| 🔢 No. | 📌 Kaam                                                                                                               |
| ------ | --------------------------------------------------------------------------------------------------------------------- |
| 1️⃣    | Aapke project me jo bhi packages (`react`, `vite`, etc.) `package.json` me listed hain, unko yahan download karta hai |
| 2️⃣    | Saare **dependencies aur unki nested dependencies** ko manage karta hai                                               |
| 3️⃣    | Aapke code ko chalane ke liye **required code & tools** is folder me hote hain                                        |
| 4️⃣    | Build tools (like Vite), frameworks (like React), aur libraries (like Axios, Tailwind) yahin se kaam karte hain       |



---
## Folder Structure

```bash
npm create vite@latest react-project
--> Framework: React
-->Variant: JavaScript
```

```bash
cd react-project
npm install
npm run dev
```

```bash
react-project/
│
├── node_modules/              # Installed dependencies (auto)
├── public/                    # Static files (e.g., favicon, images)
│   └── vite.svg               # Vite logo example
│
├── src/                       # Your source code
│   ├── assets/                # Static assets like images, icons, etc.
│   │   └── react.svg
│   ├── App.css                # App component styles
│   ├── App.jsx                # Main App component (JSX)
│   ├── index.css              # Global CSS
│   └── main.jsx               # Entry point for React (rendering App)
│
├── .gitignore                 # Git ignored files
├── index.html                 # Root HTML file where React mounts
├── package.json               # NPM dependencies and scripts
├── vite.config.js             # Vite configuration
├── README.md                  # Project README
└── jsconfig.json              # JS path settings (optional, for IDE support)
```

### index.html then--> main.jsx Entry Point
```bash
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### run App.jsx Component
```bash
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <p className="read-the-docs">
        Hello Vite + React!
      </p>
    </>
  )
}

export default App

```


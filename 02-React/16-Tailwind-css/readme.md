

#### Installation
```javascript
npm install tailwindcss @tailwindcss/vite
```
```javascript
npx tailwindcss init -p

or 

bun tailwindcss init -p

```

#### vite.config.ts
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
   tailwindcss(),
  ],
})
```

#### App.css
```javascript
@import "tailwindcss";
```

#### App.jsx
```javascript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p class="text-3xl font-bold underline">
        Hello world!
      </p>
    </>
  )
}
export default App
```
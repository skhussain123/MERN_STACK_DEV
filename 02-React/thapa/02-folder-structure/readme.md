# React JS Project Structure Explanation

Yeh ek typical React JS project ki directory structure hai (jaise Create React App ya Vite se banaya gaya). Main yahan har folder aur file ka maqsad briefly explain karunga, step-by-step. Yeh structure mostly standard hoti hai, lekin tool (jaise Vite) ke mutabiq thora sa change ho sakta hai.

## Folders

- **node_modules**:  
  Yeh folder automatically create hota hai jab aap dependencies install karte hain (npm install ya yarn install se). Is mein saari external libraries aur packages store hote hain jo aapka project use karta hai, jaise React khud. Isay manually edit mat karna, aur Git mein ignore kiya jata hai kyunke yeh bohat bara hota hai.

- **public**:  
  Yeh static files ke liye hota hai jo build hone ke baad directly serve ki jati hain. Jaise images, fonts, ya index.html. Is folder ki cheezain minify nahi hoti, aur production mein as-it-is use hoti hain. Example: favicon.ico ya manifest.json yahan rakhe jaate hain.

- **src**:  
  Yeh main source code folder hai jahan aap apna React code likhte hain. Is mein components (jaise App.js), styles (CSS/SCSS), images (jo code mein import karte ho), aur entry files jaise index.js hote hain. Yeh woh jagah hai jahan development ka zyada kaam hota hai.

## Files

- **.gitignore**:  
  Yeh Git version control ke liye hai. Is file mein aap specify karte ho ke kon se files/folders ko Git mein upload na kiya jaye (jaise node_modules ya build folder). Yeh project ko clean rakhta hai.

- **eslint.config.js**:  
  Yeh ESLint tool ki configuration file hai, jo code quality check karta hai (jaise syntax errors, style rules). Yeh warnings ya errors show karta hai taake code consistent rahe. Agar aap VS Code use karte ho, toh yeh auto-linting enable karta hai.

- **index.html**:  
  Yeh main HTML template hai jo browser mein load hota hai. React app is file ke andar render hota hai (usually <div id="root"></div> ke through). Public folder mein hota hai, aur build hone ke baad yeh entry point banta hai.

- **package.json**:  
  Yeh project ka "manifest" file hai. Is mein project name, version, scripts (jaise "npm start", "npm build"), dependencies (jaise "react": "^18.0.0"), aur devDependencies list hoti hain. Yeh npm/yarn commands ke liye zaroori hai.

- **package-lock.json**:  
  Yeh dependencies ke exact versions ko lock karta hai taake har machine pe same versions install hon. Yeh package.json ke saath mil ke reproducible builds ensure karta hai. Manually edit mat karna; npm/yarn khud update karta hai.

- **README.md**:  
  Yeh project ki documentation file hai (Markdown format mein). Is mein instructions likhe jaate hain jaise kaise project run karna, contribute karna, etc. New users ke liye helpful hota hai.

- **vite.config.js**:  
  Yeh Vite build tool ki configuration file hai (agar project Vite se bana hai, jo React ke liye fast alternative hai Create React App ka). Is mein plugins, base URL, proxy settings, etc., customize kiye jaate hain. Agar Create React App use kiya toh yeh nahi hota; uski jagah react-scripts hote hain.

---


### Dependencies:
* Maqsad: Yeh woh packages hain jo aapke application ko run karne ke liye zaroori hote hain. Matlab, production environment mein (jaise live server pe) app chalane ke liye inki zaroorat hoti hai.
* Installation: Jab koi npm install ya yarn install karta hai, toh yeh automatically install ho jati hain.
* Examples: React, Axios, Lodash – yeh runtime libraries hain jo app ke code mein directly use hoti hain.
* Command to Install: npm install package-name (ya --save agar old version hai), jo package.json mein "dependencies" section mein add ho jata hai.
* Production mein: Yeh hamesha include hote hain, even agar --production flag use kiya jaye.

### devDependencies:
* Maqsad: Yeh packages sirf development aur testing ke liye hote hain. Production mein inki zaroorat nahi hoti, kyunke yeh build, test, ya code quality ke tools hote hain.
* Installation: Yeh bhi npm install se install hoti hain, lekin production mein skip ki ja sakti hain (jaise npm install --production se).
* Examples: ESLint (linting ke liye), Babel (transpiling), Jest (testing), Webpack/Vite (bundling) – yeh developer tools hain.
* Command to Install: npm install package-name --save-dev (ya -D shorthand), jo "devDependencies" section mein add hota hai.
* Production mein: Yeh ignore ho jate hain taake app lightweight rahe aur unnecessary code na load ho.

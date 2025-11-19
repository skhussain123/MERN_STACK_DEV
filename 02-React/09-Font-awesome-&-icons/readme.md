

## First Install
```javascript
npm i --save @fortawesome/fontawesome-svg-core

npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
npm install --save @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/react-fontawesome@latest

```


## App.jsx
```javascript
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


library.add(faWhatsapp)

function App() {
  return (
    <>
      <h2>Font Awesome Example</h2>
      <FontAwesomeIcon icon={faWhatsapp} />
     
    </>
  )
}

export default App
```

**agr hum library.add(faWhatsapp) nh use kry to hi icon a jayega screen pr lekin console me error ayega ye icon kaha sy a raha ha.**

React me jab aap likhte ho to React ko samajhna padta hai ke "faWhatsapp" kaun sa icon hai, kis library se aaya hai (solid, regular, brands?), aur uska actual SVG data kahan hai.

* Lekin by default, React Font Awesome ke paas ye information nahi hoti.
Usko manually batana padta hai —
* “Ye icons available hain, inhe use kar lo.”

---

## Icons Library
### React icon

https://www.npmjs.com/package/react-icons

```javascript
npm i react-icons
```


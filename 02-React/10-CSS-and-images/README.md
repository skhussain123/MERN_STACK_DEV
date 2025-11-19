
* how many type of style we have in React
* inline Css
* External
* Css Module
* Styled Components
* External Css library/Framework



### 1. inline Css
Inline CSS means applying styles directly to an element using the style prop in React.
```bash
<div style={{ color: 'red', fontSize: '20px' }}>
  Hello World
</div>
```


### 2. External Css
External CSS means writing your styles in a separate .css file and linking that file to your React component.

### 3. Css Module
CSS Modules let you write CSS in separate files (like external CSS), but with local scoping by default — so class names don’t conflict globally. It solves the class name collision problem of traditional external CSS.

##### App.module.css
```javascript
.container {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

.title {
  color: teal;
  font-size: 32px;
}

```
##### App Component
```javascript
import React from 'react';
import styles from './App.module.css'; // ✅ import styles as object

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS Modules in React</h1>
    </div>
  );
}

export default App;
```

### 4. Styled Components
Styled Components is a popular library for styling React apps using CSS-in-JS — meaning you write actual CSS in your JavaScript files.It allows you to create components with styles attached directly, without needing separate CSS files.

* npm install styled-components
```javascript
import styled from 'styled-components';

const Button = styled.button`
  background: purple;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background: darkviolet;
  }
`;

function App() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}
```

## Utility Lirary 
* Material Ui
* React Boostrap
* Talwind Css

---

# 1. inline Css
```javascript
import { useEffect, useState } from "react"
function App() {

  //use line object css
  const Styeobject =
    { backgroundColor: "black", color: "white" }

  return (
    <div>
      {/* .. inline css */}
      <h4 style={{ fontSize: "12px" }}>Welcome to hussain</h4>
      <div style={Styeobject}>
        <p>App Component</p>
      </div>
    </div>
  )
}
export default App
```
#### Dynamic and Conditional inline Style
```javascript
import { useEffect, useState } from "react"
function App() {


  const [backgroundColor, Setbgcolor] = useState(

    { backgroundColor: "black", color: "white" }
  )

  const updateTheme = (bgcolor, textcolor) => {
    Setbgcolor({
      backgroundColor: bgcolor,
      color: textcolor
    });
  };


  return (
    <div>
      <h4 style={{ fontSize: "12px" }}>Welcome to hussain</h4>
      <div style={backgroundColor}>
        <p>App Component</p>

        <button onClick={() => { updateTheme('gray', 'red') }}>Gray Theme</button>
      </div>
    </div>
  )
}
export default App
```

# 2. External Css
External CSS means writing your styles in a separate .css file and linking that file to your React component.

##### 1. App.css 
External css file here

##### 2. App Component
```javascript
import './App.css';

```

# 2. Inernal Css
```javascript
normal way
```

---

## React Uses Images 
```javascript
import React from 'react'
import weblogo from './images/weblogo.png'

function App() {
  return (
    <>

      {/* // live image */}
      <img src="https://images.unsplash.com/photo-1759520054142-c723a30f7716?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


      {/* // local image  */}
      <img src={weblogo} alt="" />

    </>
  )
}

export default App
```






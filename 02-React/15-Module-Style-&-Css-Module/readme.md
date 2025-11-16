

## Css Module

![alt text](image3.PNG)

<br>

![alt text](image4.PNG)


## Module Style For a Component
#### src/Button.module.css
```bash
import React from 'react'
import BtnNodule from "./Button.module.css"

function App() {
  return (
    <>
      <p>Hello <span className={BtnNodule.success}>World</span></p>
    </>
  )
}
export default App
```

#### App.jsx
```bash
import React from 'react'
import BtnNodule from "./Button.module.css"

function App() {
  return (
    <>
      <p>Hello <span className={BtnNodule.success}>World</span></p>
    </>
  )
}

export default App
```

## Styled Components in React JS

![alt text](image5.PNG)

```bash
import './App.css'
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;

function App() {
  return (
    <>
      <Button>Click Me</Button>;
    </>
  )
}

export default App
```

```bash
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#6200ea',
    secondary: '#03dac5'
  }
};

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 10px;
  border: none;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Themed Button</Button>
    </ThemeProvider>
  );
}
```
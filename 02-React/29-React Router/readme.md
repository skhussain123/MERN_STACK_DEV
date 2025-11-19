
## React Router 
React Router ek popular library hai jo React apps ke andar multiple pages / screens banane ki facility deti hai – bina page reload ke.
JavaScript apps normally single-page applications (SPA) hoti hain.
SPA me jab user dashboard se profile pe jaata hai, to browser reload nahi hota, bas component change hota hai.

#### Installations
```javascript
npm i react-router-dom
```

#### App.jsx
```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

const App = () =>{

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    }
  ]);

  return <RouterProvider router={router}/>

}

export default App
```
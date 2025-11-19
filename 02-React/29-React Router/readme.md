
## React Router 
React Router ek popular library hai jo React apps ke andar multiple pages / screens banane ki facility deti hai – bina page reload ke.
JavaScript apps normally single-page applications (SPA) hoti hain.
SPA me jab user dashboard se profile pe jaata hai, to browser reload nahi hota, bas component change hota hai.

#### Installations
```javascript
npm i react-router-dom
```

#### App.jsx (New way and reqement for using routing)
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
---

## createRoutesFromElements Helper Function (Old Way for using Routing)
```javascript
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

const App = () => {

const router = createBrowserRouter(
createRoutesFromElements( <Route>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} /> </Route>
)
);

return <RouterProvider router={router} />
}

export default App;
```

---

## React Router App Layout & Outlet Component
##### folder sturcture
* component/layout/applayout.jsx
* component/Header.jsx
* component/Footer.jsx
* component/Home.jsx
* component/About.jsx
* component/Contact.jsx

#### App.jsx
```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Applayout from "./Component/layout/Applayout";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />

}

export default App
```

#### applayout
```javascript
import Home from "../Home";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Applayout = () => {

    return (
        <>

            <Header />

            <Outlet/>

            <Footer />

        </>
    )
}

export default Applayout;
```
#### <Outlet /> 
React Router ka ek special component hai jo nested routes (child routes) ko show karne ke liye use hota hai.
Jab ek route ke andar children routes bane hote hain, to <Outlet /> batata hai:
“Child pages yahan render hongi.”

---

## Fully Functional Header Footer (header footer alway same on all page. but same center component)
##### folder sturcture
* component/layout/applayout.jsx
* component/Header.jsx
* component/Footer.jsx
* component/Home.jsx
* component/About.jsx
* component/Contact.jsx
* component/Header.css
* component/Footer.css

#### applayout
```javascript
import Home from "../Home";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Applayout = () => {

    return (
        <>

            <Header />

            <Outlet />

            <Footer />

        </>
    )
}

export default Applayout;
```

#### component/layout/applayout.jsx
```javascript
import Home from "../Home";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Applayout = () => {

    return (
        <>

            <Header />

            <Outlet />

            <Footer />

        </>
    )
}

export default Applayout;
```

#### App.jsx
```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Applayout from "./Component/layout/Applayout";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />

}


export default App
```

#### Header.jsx
```javascript
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {


    return (
        <>
            <header>
                <div class="logo">MyWebsite</div>

                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
```








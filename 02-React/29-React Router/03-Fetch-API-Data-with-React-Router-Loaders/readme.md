## Fetch API Data with React Router Loaders
React Router v6.4+ ne ek powerful feature introduce kiya hai jise Loaders kehte hain. Loaders se aap route ke render hone se pehle data fetch kar sakte ho. Ye SPA me data fetching ko simple aur organized banata hai.

### App.jsx
```javascript
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Applayout from "./Component/layout/Applayout";
import { getmoviedata } from "./Component/api/GetApiData";

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
          loader:getmoviedata // Api Data Available on About page
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

### Api/GetApiData
```javascript
export const getmoviedata = async () => {
  try {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=83399c3b');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
```
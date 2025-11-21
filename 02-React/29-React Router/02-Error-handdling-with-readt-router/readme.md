
## Error Handdling With useRouteError
### App.jsx
```javascript
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      errorElement: <ErrorPage/>, // Error page Link here
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
  ```

  ### ErrorPage.jsx
  ```javascript
  function ErrorPage() {

    return (
        <>
            <h2>Error page</h2>
        </>
    )
}

export default ErrorPage
```

#### you can check more details for Error
```javascript
import { useRouteError } from "react-router-dom"

function ErrorPage() {

    const error = useRouteError()
    console.log(error)
    return (
        <>
        
        </>
    )
}
export default ErrorPage
```

---

## useNavigate Hook in React Router
useNavigate React Router ka hook hai jo programmatically navigation karne ke liye use hota hai – yani button click, form submit, API response ke baad user ko kisi aur page par redirect karna.

useNavigate() ek function deta hai jisse hum JavaScript code se routing change kar sakte hain.

```javascript
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    // login successful
    navigate("/dashboard");
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
}

export default Login;
```

### Go Back / Forward
useNavigate se browser history me piche ya aage bhi ja sakte ho:
```javascript
navigate(-1); // one step back
navigate(1);  // one step forward

<button onClick={() => navigate(-1)}>Go Back</button>
```

### Navigate with Replace
```javascript
navigate("/dashboard", { replace: true });
```











### Summary
| Feature             | Explanation               |
| ------------------- | ------------------------- |
| `useNavigate()`     | Programmatic routing      |
| `navigate("/page")` | Page redirect             |
| `navigate(-1)`      | History back              |
| `{ replace: true }` | Previous page remove      |
| `state`             | Data send with navigation |




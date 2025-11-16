

## Fetch API Data 
```bash
import { useState, useEffect } from "react";

function Counter() {
  const [apiData, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/pos')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      })
      .then((error) => {
        console.log(error)
        setLoading(false)
      }
      );


  }, [])


  if (Loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  if (error) {
    return (
      <>
        <p>{error.message}</p>
      </>
    )
  }

  return (
    <>
      {
        apiData.map((curData) => {
          return <li key={curData.id}>{curData.title}</li>
        })

      }
    </>
  );
}

export default Counter;
```

---

## Using Async Await & Try Catch to Fetch 
```bash
import { useState, useEffect } from "react";

function Counter() {
  const [apiData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // useEffect to call API
  useEffect(() => {
    fetchApiData();

    // optional cleanup
    return () => {
      console.log("Cleanup: Component unmounted or re-rendered");
    };
  }, []);

  // Loading UI
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Error UI
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {apiData.map((curData) => {
        return <li key={curData.id}>{curData.title}</li>;
      })}
    </>
  );
}

export default Counter;

```




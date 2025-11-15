

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

```




## 1. If Else Condition
```bash
import React from 'react'
import { useState } from 'react'

function App() {

  let [data, setData] = useState(false)

  let template = ""

  if (data) {

    template = <>
      <button onClick={() => setData(!data)}>Hide</button>
      <h1>Hello World</h1>
    </>
  }
  else {
    template = <>
      <button onClick={() => setData(!data)}>Show</button>
      <h1>No data</h1>
    </>
  }

  return (
    <>
      {template}
    </>
  )
}

export default App
```

## 2. If, Else With component
```bash
import React from 'react'
import { useState } from 'react'

function App() {

  let [data, setData] = useState(false)

  let template = ""

  if (data) {

    template = <>
    <button onClick={() => setData(!data)}>Hide</button>
      <DataComponent />
    </>
  }
  else {
    template = <>
    <button onClick={() => setData(!data)}>Show</button>
      <h1>No Component Available</h1>
    </>
  }

  return (
    <>
      {template}
    </>
  )
}

function DataComponent(){

  return(
    <>
    <p>Data Component Here</p>
    </>
  )
}

export default App

```

---

## Ternary Operaator in React js
### Example 1
```bash
import React from 'react'
import { useState } from 'react'

function App() {

  let [data, setData] = useState(false)

  return (
    <>
        <button onClick={() => setData(!data)}>{data ? 'Hide' : 'Show'}</button>
      {
        (data) ? <h1>Hello World</h1> : <h1>No Data</h1>
      }

    </>
  )
}

export default App
```


### Example 2
```bash
import React from 'react'
import { useState } from 'react'

function App() {

  let [data, setData] = useState(false)

  return (
    <>
      {
        (data)
          ?
            <>
              <h1>Hello World</h1>
              <button onClick={() => setData(false)}>Hide</button>
            </>

          :
            <>
              <h1>No Data</h1>
              <button onClick={() => setData(true)}>Show</button>
            </>
        

      }

    </>
  )
}

export default App
```